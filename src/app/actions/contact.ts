"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendLeadNotification } from "@/lib/email";
import {
  contactInputFromFormData,
  validateContact,
} from "@/lib/validation/contact";
import type { ContactActionState } from "@/app/actions/contact-types";

/**
 * Server Action for the public contact / demo-request form.
 *
 * Flow (security & "no lead lost" guarantees):
 *   1. Validate + normalize input on the server (never trust the client).
 *   2. Silently swallow honeypot spam (pretend success, store nothing).
 *   3. Persist the lead to Supabase FIRST. If this fails -> hard error so the
 *      user can retry (we never claim success without a stored row).
 *   4. Send the notification email. If THIS fails, the lead is already safe in
 *      the DB, so we log it and still report success to the user.
 */
export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  // 1. Validate ------------------------------------------------------------
  const input = contactInputFromFormData(formData);
  const result = validateContact(input);

  if (!result.success) {
    // 2. Honeypot tripped: act like success, do nothing.
    if (result.isSpam) {
      return { status: "success", message: "Thanks! We'll be in touch soon." };
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: result.errors,
    };
  }

  const lead = result.data;

  // We generate the id + timestamp on the server so we don't need to read the
  // row back after inserting. Reading back would require SELECT permission,
  // which RLS deliberately denies to anon (insert-only policy).
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  // 3. Persist to Supabase -------------------------------------------------
  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("contact_leads").insert({
      id,
      created_at: createdAt,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company,
      message: lead.message,
    });

    if (error) {
      // Log the real reason server-side; show a generic message to the user.
      console.error("[contact] Supabase insert failed:", error.message);
      return {
        status: "error",
        message:
          "We couldn't save your request right now. Please try again in a moment.",
      };
    }
  } catch (err) {
    console.error("[contact] Unexpected DB error:", err);
    return {
      status: "error",
      message:
        "Something went wrong on our side. Please try again in a moment.",
    };
  }

  // 4. Notify by email (non-fatal) ----------------------------------------
  try {
    const emailResult = await sendLeadNotification({ ...lead, id, createdAt });
    if (emailResult.skipped) {
      console.warn(
        `[contact] Lead ${id} saved. Email NOT sent: RESEND_API_KEY is not configured.`,
      );
    } else if (!emailResult.ok) {
      // Lead is already persisted — log so it can be followed up manually.
      console.error(
        `[contact] Lead ${id} saved but email failed:`,
        emailResult.error,
      );
    }
  } catch (err) {
    console.error(`[contact] Lead ${id} saved but email threw:`, err);
  }

  return {
    status: "success",
    message: "Thanks! Your request has been received. We'll be in touch soon.",
  };
}
