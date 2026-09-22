"use client";

import Link from "next/link";
import { ArrowRight, CircleCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { SiteContent } from "@/lib/content";
import {
  Assurances,
  Container,
  CtaBand,
  Monogram,
  PrimaryLink,
  ProcessSteps,
  Reveal,
  SecondaryLink,
  SectionHeading,
  telHref,
} from "@/components/clinic-ui";

export function HomeClient({ content: c }: { content: SiteContent }) {
  const hours = c.contact.workingHours;
  const credentials = c.home.credentials.map((x) => x.label).filter(Boolean);

  return (
    <div>
      {/* ── Karşılama ─────────────────────────────────────────── */}
      <section className="border-b border-border">
        <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-7 lg:pt-4">
            {c.home.badge ? (
              <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-secondary px-3.5 py-1.5 text-[12px] font-medium tracking-[0.06em] text-fg-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {c.home.badge}
              </p>
            ) : null}

            <h1 className="mt-7 text-[40px] font-semibold leading-[1.05] text-fg sm:text-5xl lg:text-[58px]">
              {c.home.headline}
              <br />
              <span className="text-primary">{c.home.headlineAccent}</span>
              {c.home.headlineSuffix ? ` ${c.home.headlineSuffix}` : null}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
              {c.home.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/iletisim">
                {c.home.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </PrimaryLink>
              <SecondaryLink href="/hakkimda">{c.home.ctaSecondary}</SecondaryLink>
            </div>

            {credentials.length > 0 ? (
              <ul className="mt-12 grid gap-x-8 gap-y-3 border-t border-border pt-8 sm:grid-cols-2">
                {credentials.map((cr) => (
                  <li key={cr} className="flex items-center gap-2.5 text-[14px] text-fg">
                    <CircleCheck className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                    {cr}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Klinik bilgi kartı */}
          <div className="lg:col-span-5">
            <aside
              className="overflow-hidden rounded-2xl border border-border bg-bg shadow-[0_1px_2px_rgba(22,35,43,0.04),0_24px_48px_-24px_rgba(22,35,43,0.18)]"
              aria-label="Klinik bilgileri"
            >
              <div className="flex items-center gap-4 border-b border-border bg-bg-secondary px-7 py-6">
                <Monogram name={c.site.name} size="lg" />
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold text-fg">{c.site.name}</p>
                  <p className="truncate text-[14px] text-fg-muted">{c.site.title}</p>
                </div>
              </div>

              <dl className="divide-y divide-border px-7">
                <div className="flex gap-4 py-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-fg-muted">
                      Çalışma saatleri
                    </dt>
                    <dd className="mt-1.5 space-y-0.5 text-[15px] text-fg">
                      <p>{hours.weekdays}</p>
                      <p>{hours.saturday}</p>
                      <p className="text-fg-muted">{hours.sunday}</p>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-fg-muted">
                      Klinik adresi
                    </dt>
                    <dd className="mt-1.5 whitespace-pre-line text-[15px] text-fg">
                      {c.contact.clinicAddress}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-fg-muted">
                      Telefon
                    </dt>
                    <dd className="mt-1.5 text-[15px]">
                      <a href={telHref(c.site.phone)} className="text-fg hover:text-primary">
                        {c.site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 py-5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-fg-muted">
                      E-posta
                    </dt>
                    <dd className="mt-1.5 truncate text-[15px]">
                      <a href={`mailto:${c.site.email}`} className="text-fg hover:text-primary">
                        {c.site.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="px-7 pb-7 pt-2">
                <PrimaryLink href="/iletisim" className="w-full">
                  Randevu talebi oluştur
                </PrimaryLink>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Göstergeler ───────────────────────────────────────── */}
      {c.metrics.length > 0 ? (
        <section className="border-b border-border bg-bg-secondary" aria-label="Klinik göstergeler">
          <Container>
            <dl className="grid grid-cols-2 md:grid-cols-4">
              {c.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex flex-col-reverse py-9 md:pr-8 ${
                    i % 2 === 0 ? "pr-5" : "border-l border-border pl-5"
                  } ${i === 0 ? "md:pl-0" : "md:border-l md:border-border md:pl-8"} ${
                    i > 1 ? "border-t border-border md:border-t-0" : ""
                  }`}
                >
                  <dt className="mt-1.5 text-[14px] text-fg-muted">{m.label}</dt>
                  <dd className="text-3xl font-semibold tabular-nums text-fg sm:text-[34px]">
                    {m.val}
                    {m.unit ? (
                      /^[+%]$/.test(m.unit.trim()) ? (
                        m.unit.trim()
                      ) : (
                        <span className="ml-1.5 text-base font-medium text-fg-muted">{m.unit}</span>
                      )
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}

      {/* ── Hizmetler ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Hizmetler"
              title="Klinik hizmetler"
              intro="Her çalışma, ön değerlendirme görüşmesiyle başlar ve ihtiyaçlarınıza göre yapılandırılır."
              action={{ href: "/hizmetler", label: "Tüm hizmetler" }}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-bg p-7 transition-colors hover:border-primary/40">
                  <p className="text-[13px] font-medium tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-fg">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">{s.desc}</p>
                  <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-5 text-[13px]">
                    <div>
                      <dt className="text-fg-muted">Seans süresi</dt>
                      <dd className="mt-1 font-medium text-fg">{s.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-fg-muted">Yöntem</dt>
                      <dd className="mt-1 font-medium text-fg">{s.method}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Süreç ─────────────────────────────────────────────── */}
      <section className="border-y border-border bg-bg-secondary py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Süreç"
              title="Başvurudan düzenli seanslara"
              intro="Terapi süreci belirsizlik içermez: her adımda ne yapılacağını ve neden yapıldığını bilirsiniz."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* ── Yöntemler ─────────────────────────────────────────── */}
      {c.approach.methods.length > 0 ? (
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal>
              <SectionHeading
                index="03"
                eyebrow="Yöntemler"
                title="Kanıta dayalı klinik yöntemler"
                action={{ href: "/yaklasim", label: "Yaklaşımı inceleyin" }}
              />
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {c.approach.methods.map((m) => (
                <div key={m.title} className="bg-bg p-7">
                  <span className="inline-flex rounded-md bg-accent px-2.5 py-1 text-[12px] font-semibold tracking-[0.06em] text-accent-fg">
                    {m.title}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-fg">{m.full}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{m.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* ── Güvence + çağrı ───────────────────────────────────── */}
      <section className="border-t border-border pb-24 pt-20">
        <Container>
          <Reveal>
            <Assurances />
          </Reveal>
          <Reveal className="mt-16">
            <CtaBand
              title="İlk görüşmeyi planlayalım"
              text="Başvuru nedeninizi kısaca paylaşın; size uygun görüşme zamanını birlikte belirleyelim."
              cta={c.home.cta}
              phone={c.site.phone}
            />
          </Reveal>
          <p className="mt-6 text-center text-[13px] text-fg-muted">
            Sorularınız mı var?{" "}
            <Link href="/sss" className="font-medium text-primary hover:underline">
              Sık sorulan sorulara göz atın
            </Link>
          </p>
        </Container>
      </section>
    </div>
  );
}
