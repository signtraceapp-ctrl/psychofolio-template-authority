"use client";

import type { SiteContent } from "@/lib/content";
import {
  Container,
  CtaBand,
  Monogram,
  PageHeader,
  PrimaryLink,
  Reveal,
} from "@/components/clinic-ui";

export function AboutClient({ content: c }: { content: SiteContent }) {
  const paragraphs = c.about.intro.split(/\n\s*\n/).filter((p) => p.trim());

  return (
    <div>
      <PageHeader crumb="Hakkımda" title={c.about.title} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Profil kartı */}
          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-border bg-bg lg:sticky lg:top-28">
              <div className="flex flex-col items-start gap-5 border-b border-border p-7">
                <Monogram name={c.site.name} size="lg" />
                <div>
                  <p className="text-xl font-semibold text-fg">{c.site.name}</p>
                  <p className="mt-1 text-[15px] text-fg-muted">{c.site.title}</p>
                </div>
              </div>

              {c.about.organizations.length > 0 ? (
                <div className="border-b border-border p-7">
                  <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-fg-muted">
                    Üyelikler
                  </p>
                  <ul className="mt-4 space-y-3">
                    {c.about.organizations.map((o) => (
                      <li key={o} className="flex gap-3 text-[15px] leading-snug text-fg">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="p-7">
                <PrimaryLink href="/iletisim" className="w-full">
                  Randevu talebi
                </PrimaryLink>
              </div>
            </div>
          </aside>

          {/* Metin + eğitim */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="space-y-5 text-[17px] leading-[1.75] text-fg">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {c.about.calloutText ? (
              <Reveal className="mt-10">
                <div className="rounded-r-xl border-l-4 border-primary bg-accent px-7 py-6">
                  {c.about.calloutTitle ? (
                    <p className="text-[15px] font-semibold text-accent-fg">{c.about.calloutTitle}</p>
                  ) : null}
                  <p className="mt-2 text-[15px] leading-relaxed text-fg">{c.about.calloutText}</p>
                </div>
              </Reveal>
            ) : null}

            {c.about.credentials.length > 0 ? (
              <Reveal className="mt-14">
                <h2 className="text-2xl font-semibold text-fg">Eğitim ve sertifikalar</h2>
                <dl className="mt-6 border-t border-border">
                  {c.about.credentials.map((cr) => (
                    <div
                      key={`${cr.year}-${cr.title}`}
                      className="grid gap-1 border-b border-border py-5 sm:grid-cols-[96px_1fr] sm:gap-6"
                    >
                      <dt className="text-[15px] font-medium tabular-nums text-primary">{cr.year}</dt>
                      <dd>
                        <p className="text-[16px] font-medium text-fg">{cr.title}</p>
                        {cr.detail ? (
                          <p className="mt-1 text-[15px] text-fg-muted">{cr.detail}</p>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <CtaBand
            title="Tanışma görüşmesi planlayın"
            text="İlk görüşmede başvuru nedeninizi ve beklentilerinizi birlikte değerlendirir, size uygun çalışma planını belirleriz."
            cta={c.home.cta}
            phone={c.site.phone}
          />
        </Container>
      </section>
    </div>
  );
}
