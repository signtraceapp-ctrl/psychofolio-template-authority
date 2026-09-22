"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/lib/content";
import {
  Container,
  CtaBand,
  PageHeader,
  ProcessSteps,
  Reveal,
  SectionHeading,
} from "@/components/clinic-ui";

export function ServicesClient({ content: c }: { content: SiteContent }) {
  return (
    <div>
      <PageHeader
        crumb="Hizmetler"
        title="Hizmetler"
        intro="Her çalışma bir ön değerlendirme görüşmesiyle başlar. Uygulanacak yöntem ve seans sıklığı, bu görüşmenin ardından birlikte belirlenir."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ul className="space-y-5">
            {c.services.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.04}>
                  <article className="grid gap-8 rounded-xl border border-border bg-bg p-7 transition-colors hover:border-primary/40 sm:p-9 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                      <p className="text-[13px] font-medium tabular-nums text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-fg">{s.title}</h2>
                      <p className="mt-3 text-[16px] leading-relaxed text-fg-muted">{s.desc}</p>
                      <Link
                        href="/iletisim"
                        className="group mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-primary"
                      >
                        Bu hizmet için randevu talebi
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <dl className="divide-y divide-border self-start overflow-hidden rounded-lg border border-border bg-bg-secondary text-[14px] lg:col-span-5">
                      <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <dt className="text-fg-muted">Seans süresi</dt>
                        <dd className="font-medium text-fg">{s.duration}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <dt className="text-fg-muted">Uygulanan yöntem</dt>
                        <dd className="text-right font-medium text-fg">{s.method}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <dt className="text-fg-muted">Başlangıç</dt>
                        <dd className="text-right font-medium text-fg">Ön değerlendirme görüşmesi</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-border bg-bg-secondary py-20">
        <Container>
          <Reveal>
            <SectionHeading index="01" eyebrow="Süreç" title="Sürecin genel hatları" />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <CtaBand
            title="Hangi hizmetin size uygun olduğundan emin değil misiniz?"
            text="İlk görüşmede ihtiyaçlarınızı birlikte değerlendirir, en uygun çalışma biçimini önerebilirim."
            cta={c.home.cta}
            phone={c.site.phone}
          />
        </Container>
      </section>
    </div>
  );
}
