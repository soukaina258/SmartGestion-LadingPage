/**
 * Validation + normalization for the public contact form.
 *
 * Lightweight & dependency-free so it can be imported on both the server
 * (Server Action) and, if needed, the client. The Server Action treats this as
 * the source of truth — never trust the client.
 */

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  /** Honeypot field — must be empty for a legitimate human submission. */
  website?: string;
}

export interface CleanContact {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
}

/** Per-field error map; keys map to form field names. */
export type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "company" | "message" | "form", string>
>;

export type ValidationResult =
  | { success: true; data: CleanContact }
  | { success: false; errors: FieldErrors; isSpam?: boolean };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: { min: 1, max: 200 },
  email: { max: 320 },
  phone: { max: 40 },
  company: { max: 200 },
  message: { min: 1, max: 5000 },
} as const;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validate and normalize raw input (e.g. from FormData).
 * Returns either clean, DB-ready data or a per-field error map.
 */
export function validateContact(raw: ContactInput): ValidationResult {
  const errors: FieldErrors = {};

  const name = asString(raw.name);
  const email = asString(raw.email).toLowerCase();
  const phone = asString(raw.phone);
  const company = asString(raw.company);
  const message = asString(raw.message);
  const honeypot = asString(raw.website);

  // Bot caught the honeypot — flag as spam, do not surface a real error.
  if (honeypot.length > 0) {
    return { success: false, errors: { form: "Invalid submission." }, isSpam: true };
  }

  if (name.length < LIMITS.name.min) {
    errors.name = "Name is required.";
  } else if (name.length > LIMITS.name.max) {
    errors.name = `Name must be at most ${LIMITS.name.max} characters.`;
  }

  if (email.length === 0) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else if (email.length > LIMITS.email.max) {
    errors.email = "Email is too long.";
  }

  if (phone.length > LIMITS.phone.max) {
    errors.phone = `Phone must be at most ${LIMITS.phone.max} characters.`;
  }

  if (company.length > LIMITS.company.max) {
    errors.company = `Company must be at most ${LIMITS.company.max} characters.`;
  }

  if (message.length < LIMITS.message.min) {
    errors.message = "Message is required.";
  } else if (message.length > LIMITS.message.max) {
    errors.message = `Message must be at most ${LIMITS.message.max} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
    },
  };
}

/** Helper to pull a ContactInput out of a FormData object. */
export function contactInputFromFormData(formData: FormData): ContactInput {
  return {
    name: (formData.get("name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    phone: (formData.get("phone") as string) ?? "",
    company: (formData.get("company") as string) ?? "",
    message: (formData.get("message") as string) ?? "",
    website: (formData.get("website") as string) ?? "",
  };
}
