"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "@/components/identity";

const navLinks = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/yaklasim", label: "Yaklaşım" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader({
  name,
  title,
  cta,
}: {
  name: string;
  title: string;
  cta: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Ana sayfa">
          <Monogram name={name} size="sm" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[15px] font-semibold text-fg">{name}</span>
            <span className="block truncate text-xs text-fg-muted">{title}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative rounded-md px-3.5 py-2 text-[14px] font-medium transition-colors ${
                isActive(l.href) ? "text-primary" : "text-fg-muted hover:text-fg"
              }`}
            >
              {l.label}
              {isActive(l.href) ? (
                <span
                  className="absolute inset-x-3.5 -bottom-[17px] h-0.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/iletisim"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-fg transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            {cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobil-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobil-menu"
          className="border-t border-border bg-bg lg:hidden"
          aria-label="Mobil menü"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`border-b border-border py-3.5 text-[15px] font-medium last:border-0 ${
                  isActive(l.href) ? "text-primary" : "text-fg"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="my-3 inline-flex justify-center rounded-lg bg-primary px-5 py-3 text-[15px] font-medium text-primary-fg sm:hidden"
            >
              {cta}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
