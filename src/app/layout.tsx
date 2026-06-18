import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsletterBanner } from "@/components/newsletter-banner";
import { WhatsAppFAB } from "@/components/whatsapp-fab";
import { ScrollToTop } from "@/components/scroll-to-top";
import { I18nProvider } from "@/i18n/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartGestion",
  applicationName: "SmartGestion",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
  description:
    "SmartGestion conçoit des solutions ERP intelligentes pour de nombreux secteurs : commerce, pharmacie, restauration, distribution. Gérez ventes, stock, achats et finances depuis une seule plateforme.",
  keywords: [
    "SmartGestion",
    "ERP",
    "gestion",
    "facturation",
    "stock",
    "comptabilité",
    "pharmacie",
    "commerce",
    "Maroc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);var l=localStorage.getItem('locale')||'fr';document.documentElement.lang=l;document.documentElement.dir=(l==='ar')?'rtl':'ltr';}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans text-dark-900 transition-colors duration-300 dark:bg-dark-900 dark:text-white">
        <I18nProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <NewsletterBanner />
          <Footer />
          <WhatsAppFAB />
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
