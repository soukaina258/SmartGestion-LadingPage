"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/provider";

/* ── brand social icons with original colors ─────────────── */
/* Icon components — avoids JSX-in-array key warnings */
const IgIcon  = () => <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>;
const FbIcon  = () => <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
const WaIcon  = () => <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>;
const TkIcon  = () => <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" /></svg>;

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/smar.tgestion/",                                          iconCls: "hover:border-[#e1306c]/40 hover:bg-[#e1306c]/10 hover:text-[#e1306c]",                                                               Icon: IgIcon },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61591082665957",                            iconCls: "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:text-[#1877F2]",                                                               Icon: FbIcon },
  { label: "WhatsApp",  href: "https://wa.me/212660145157",                                                         iconCls: "hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366]",                                                               Icon: WaIcon },
  { label: "TikTok",    href: "https://www.tiktok.com/@smartgestion1?is_from_webapp=1&sender_device=pc",            iconCls: "hover:border-black/30 hover:bg-black/8 hover:text-black dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white",    Icon: TkIcon },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] bg-white dark:border-white/10 dark:bg-dark-900">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── main grid ─────────────────────────────────── */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">

          {/* brand block — logo + tagline only */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo3.png"
                alt="SmartGestion"
                width={460}
                height={149}
                className="h-14 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-white/50">
              {t.footer.tagline}
            </p>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.footer.colProduct}
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: t.footer.linkAbout,    href: "#about" },
                { label: t.footer.linkFeatures, href: "#features" },
                { label: t.footer.linkPricing,  href: "#pricing" },
                { label: t.footer.linkContact,  href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 transition-colors hover:text-[#1D6FD6] dark:text-white/55 dark:hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.footer.colCompany}
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: t.footer.linkSolutions,    href: "#industries" },
                { label: t.footer.linkTestimonials, href: "#testimonials" },
                { label: t.footer.linkFaq,          href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 transition-colors hover:text-[#1D6FD6] dark:text-white/55 dark:hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.footer.colLegal}
            </h4>
            <ul className="mt-4 space-y-3">
                {[
                  { label: t.footer.linkTerms,   href: "/legal/terms" },
                  { label: t.footer.linkPrivacy, href: "/legal/privacy" },
                ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 transition-colors hover:text-[#1D6FD6] dark:text-white/55 dark:hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.footer.colSocial}
            </h4>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map(({ label, href, iconCls, Icon }) => (
                <li key={label} className="flex items-center gap-2.5">
                  {/* icon — independent hover with brand color */}
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-200 dark:border-white/10 dark:bg-white/5 dark:text-white/50 ${iconCls}`}
                  >
                    <Icon />
                  </a>
                  {/* label — independent hover */}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 transition-colors hover:text-[#1D6FD6] dark:text-white/55 dark:hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── bottom bar ────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 py-6 text-xs text-slate-400 dark:border-white/10 dark:text-white/35 sm:flex-row">
          <p>© {year} SmartGestion. {t.footer.rights}</p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
