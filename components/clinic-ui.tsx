"use client";

import Link from "next/link";
import { ArrowRight, LifeBuoy, Phone, Scale, ShieldCheck } from "lucide-react";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export { initials, telHref, Monogram } from "./identity";
import { telHref } from "./identity";

/* ── Hareket: sakin, tek seferlik belirme ────────────────────
   İçerik sunucu çıktısında her zaman görünürdür. Gizleme yalnızca JS
   çalıştığında (<html class="js">) CSS ile uygulanır; böylece LCP ve
   arama motorları etkilenmez. Hareket azaltma tercihine saygı duyar. */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/* ── Düzen parçaları ─────────────────────────────────────────── */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  crumb,
  title,
  intro,
}: {
  crumb: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-bg-secondary">
      <Container className="py-14 sm:py-16">
        <nav aria-label="Konum" className="text-[13px] text-fg-muted">
          <Link href="/" className="transition-colors hover:text-primary">
            Ana sayfa
          </Link>
          <span className="mx-2 text-border-strong" aria-hidden="true">
            /
          </span>
          <span className="text-fg">{crumb}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] text-fg sm:text-[44px]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-fg-muted">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  action,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="flex items-center gap-3 text-[13px] font-medium text-primary">
          <span className="tabular-nums">{index}</span>
          <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-fg sm:text-[34px]">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 text-base leading-relaxed text-fg-muted">{intro}</p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary"
        >
          {action.label}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}

/* ── Butonlar ────────────────────────────────────────────────── */

export function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-[15px] font-medium text-primary-fg shadow-[0_1px_2px_rgba(10,71,81,0.25)] transition-colors hover:bg-primary-hover ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-bg px-6 py-3.5 text-[15px] font-medium text-fg transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      {children}
    </Link>
  );
}

/* ── Ortak bloklar ───────────────────────────────────────────── */

export const processSteps = [
  {
    title: "Başvuru",
    desc: "Form, telefon ya da e-posta ile başvurunuzu iletirsiniz; size uygun görüşme zamanı birlikte belirlenir.",
  },
  {
    title: "Ön değerlendirme",
    desc: "İlk görüşmede başvuru nedeniniz, geçmişiniz ve beklentileriniz ayrıntılı olarak ele alınır.",
  },
  {
    title: "Tedavi planı",
    desc: "Değerlendirmeye göre uygulanacak yöntem, seans sıklığı ve ölçülebilir hedefler netleştirilir.",
  },
  {
    title: "Seans ve izlem",
    desc: "Düzenli seanslarda ilerleme birlikte takip edilir; plan gerektiğinde yeniden düzenlenir.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
      <span
        className="absolute left-0 right-0 top-5 hidden h-px bg-border-strong md:block"
        aria-hidden="true"
      />
      {processSteps.map((s, i) => (
        <li key={s.title} className="relative">
          <Reveal delay={i * 0.06}>
            <span className="relative z-[1] flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-bg text-sm font-semibold tabular-nums text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-fg">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{s.desc}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

const assurances = [
  {
    icon: ShieldCheck,
    title: "Gizlilik",
    desc: "Görüşmelerde paylaşılanlar yasal ve etik sınırlar içinde gizli tutulur; kişisel verileriniz KVKK'ya uygun şekilde işlenir.",
  },
  {
    icon: Scale,
    title: "Etik çerçeve",
    desc: "Değerlendirme ve seans süreçleri, meslek örgütlerinin etik yönetmeliklerine uygun olarak yürütülür.",
  },
  {
    icon: LifeBuoy,
    title: "Acil durumlar",
    desc: "Bu site acil destek kanalı değildir. Acil bir durumda 112'yi arayın ya da en yakın acil servise başvurun.",
  },
];

export function Assurances() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
      {assurances.map((a) => (
        <div key={a.title} className="bg-bg p-7">
          <a.icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
          <h3 className="mt-4 text-base font-semibold text-fg">{a.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  text,
  cta,
  phone,
}: {
  title: string;
  text: string;
  cta: string;
  phone?: string;
}) {
  return (
    <div className="grid gap-8 rounded-2xl bg-primary px-8 py-12 text-primary-fg sm:px-12 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-8">
        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/80">{text}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-medium text-primary transition-colors hover:bg-accent"
        >
          {cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        {phone ? (
          <a
            href={telHref(phone)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phone}
          </a>
        ) : null}
      </div>
    </div>
  );
}
