/**
 * Minimal, hand-written database types for the `contact_leads` table.
 *
 * These mirror the SQL migration in `supabase/migrations/0001_contact_leads.sql`.
 * If you later add more tables, run the Supabase CLI to auto-generate this file:
 *   npx supabase gen types typescript --linked > src/lib/supabase/types.ts
 */

export type LeadStatus = "new" | "contacted" | "qualified" | "closed" | "spam";
export type SubscriberStatus = "active" | "unsubscribed";

export interface Database {
  public: {
    Tables: {
      contact_leads: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          message: string;
          status: LeadStatus;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          message: string;
          status?: LeadStatus;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          company?: string | null;
          message?: string;
          status?: LeadStatus;
        };
        Relationships: [];
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          status: SubscriberStatus;
        };
        Insert: {
          id?: string;
          created_at?: string;
          email: string;
          status?: SubscriberStatus;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          status?: SubscriberStatus;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
