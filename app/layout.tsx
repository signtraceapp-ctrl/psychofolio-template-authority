import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import { getContent } from "@/lib/content";
import { Monogram, telHref } from "@/components/identity";
import { SiteHeader } from "./site-header";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export function generateMetadata(): Metadata {
  const c = getContent();
  return {
    title: { default: `${c.site.name} - ${c.site.title}`, template: `%s | ${c.site.name}` },
    description: c.home.description,
    robots: { index: false, follow: false },
  };
}

const footerLinks = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/yaklasim", label: "Yaklaşım" },
  { href: "/sss", label: "Sık sorulan sorular" },
  { href: "/iletisim", label: "İletişim" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = getContent();
  const hours = c.contact.workingHours;

  return (
    <html lang="tr" className={plex.variable} suppressHydrationWarning>
      <head>
        <script
          // Belirme animasyonu yalnızca JS çalışıyorsa devreye girer
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-bg text-fg antialiased">
        {/* Bilgi şeridi */}
        <div className="hidden bg-primary text-[13px] text-white/85 sm:block">
          <div className="mx-auto flex h-10 max-w-6xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
            <p className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {hours.weekdays}
              <span className="text-white/40" aria-hidden="true">·</span>
              {hours.saturday}
            </p>
            <div className="flex items-center gap-6">
              <a href={telHref(c.site.phone)} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {c.site.phone}
              </a>
              <a
                href={`mailto:${c.site.email}`}
                className="hidden items-center gap-2 hover:text-white md:flex"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {c.site.email}
              </a>
            </div>
          </div>
        </div>

        <SiteHeader name={c.site.name} title={c.site.title} cta="Randevu Al" />

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <Monogram name={c.site.name} size="sm" />
                <div className="leading-tight">
                  <p className="text-[15px] font-semibold text-fg">{c.site.name}</p>
                  <p className="text-xs text-fg-muted">{c.site.title}</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-fg-muted">
                {c.home.description}
              </p>
            </div>

            <nav className="md:col-span-3" aria-label="Alt menü">
              <p className="text-[13px] font-semibold text-fg">Sayfalar</p>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14px] text-fg-muted hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-4">
              <p className="text-[13px] font-semibold text-fg">İletişim</p>
              <address className="mt-4 space-y-2.5 text-[14px] not-italic leading-relaxed text-fg-muted">
                <p className="whitespace-pre-line">{c.contact.clinicAddress}</p>
                <p>
                  <a href={telHref(c.site.phone)} className="hover:text-primary">
                    {c.site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${c.site.email}`} className="hover:text-primary">
                    {c.site.email}
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-border">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-[12px] text-fg-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>
                &copy; {new Date().getFullYear()} {c.site.name}. {c.site.copyright}
              </p>
              <p>Acil durumlarda 112&apos;yi arayın. Bu site acil destek kanalı değildir.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
