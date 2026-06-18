import type { FieldErrors } from "@/lib/validation/contact";

/**
 * The shape returned to the client and consumed by `useActionState`.
 * `status` drives the UI (idle / success / error).
 *
 * NOTE: This lives in a NON-"use server" file because a "use server" module
 * may only export async functions — types and plain values must live elsewhere.
 */
export type ContactActionState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; errors?: FieldErrors };

export const initialContactState: ContactActionState = { status: "idle" };
