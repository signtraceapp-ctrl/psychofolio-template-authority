import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getContent } from "@/lib/content";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
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

const navLinks = [
  { href: "/hakkimda", label: "Hakkimda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/yaklasim", label: "Yaklasim" },
  { href: "/yazilar", label: "Yazilar" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "Iletisim" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = getContent();

  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-bg text-fg antialiased">
        {/* Header - authority dark glassmorphic style */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-sm font-extrabold uppercase tracking-[0.15em] text-fg hover:text-primary transition-colors"
            >
              {c.site.name}
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-fg-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer - authority style */}
        <footer className="border-t border-white/10 bg-bg py-8">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fg-muted">
              {c.site.name} - {c.site.title}
            </p>
            <p className="mt-2 text-[10px] text-fg-muted/60">
              &copy; {new Date().getFullYear()} - {c.site.copyright}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
