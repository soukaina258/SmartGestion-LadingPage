"use server";

import { sendNewsletterNotification } from "@/lib/email";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type NewsletterState =
  | { status: "idle" }
  | { status: "success"; code: "subscribed" | "already" }
  | { status: "error"; code: "invalid_email" | "server_error" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = (formData.get("email") as string | null)?.trim() ?? "";

  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", code: "invalid_email" };
  }

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    if (error) {
      // 23505 = unique_violation — already subscribed
      if (error.code === "23505") {
        return { status: "success", code: "already" };
      }
      console.error("[newsletter] insert error:", error.message);
      return { status: "error", code: "server_error" };
    }

    // Notify the business inbox of the new subscriber. Never let an email
    // failure break the subscription — the row is already persisted.
    try {
      const emailResult = await sendNewsletterNotification({ email });
      if (!emailResult.ok) {
        console.error(
          "[newsletter] notification email failed:",
          emailResult.error,
        );
      }
    } catch (emailErr) {
      console.error("[newsletter] notification email threw:", emailErr);
    }

    return { status: "success", code: "subscribed" };
  } catch (err) {
    console.error("[newsletter] unexpected error:", err);
    return { status: "error", code: "server_error" };
  }
}
