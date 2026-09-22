"use client";

import type { SiteContent } from "@/lib/content";
import {
  Assurances,
  Container,
  CtaBand,
  PageHeader,
  ProcessSteps,
  Reveal,
  SectionHeading,
} from "@/components/clinic-ui";

export function ApproachClient({ content: c }: { content: SiteContent }) {
  const intro =
    c.approach.intro ||
    "Terapide kullanılan her yöntem, etkinliği bilimsel araştırmalarla gösterilmiş protokollere dayanır. Süreç şeffaftır: hedefler baştan konuşulur, ilerleme düzenli olarak birlikte değerlendirilir.";

  return (
    <div>
      <PageHeader crumb="Yaklaşım" title={c.approach.title} intro={intro} />

      {c.approach.principles.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionHeading index="01" eyebrow="İlkeler" title="Çalışma ilkeleri" />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {c.approach.principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="h-full rounded-xl border border-border bg-bg p-7">
                    <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {c.approach.methods.length > 0 ? (
        <section
          className={`py-16 sm:py-20 ${c.approach.principles.length > 0 ? "border-t border-border" : ""}`}
        >
          <Container>
            <Reveal>
              <SectionHeading
                index={c.approach.principles.length > 0 ? "02" : "01"}
                eyebrow="Yöntemler"
                title="Uygulanan klinik yöntemler"
              />
            </Reveal>
            <div className="mt-12 space-y-5">
              {c.approach.methods.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.05}>
                  <article className="grid gap-6 rounded-xl border border-border bg-bg p-7 sm:p-9 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-4">
                      <span className="inline-flex rounded-md bg-accent px-3 py-1.5 text-[13px] font-semibold tracking-[0.06em] text-accent-fg">
                        {m.title}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold leading-snug text-fg">{m.full}</h3>
                    </div>
                    <p className="text-[16px] leading-relaxed text-fg-muted md:col-span-8 md:pt-1">
                      {m.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-y border-border bg-bg-secondary py-20">
        <Container>
          <Reveal>
            <SectionHeading
              index={String(
                1 +
                  (c.approach.principles.length > 0 ? 1 : 0) +
                  (c.approach.methods.length > 0 ? 1 : 0),
              ).padStart(2, "0")}
              eyebrow="Süreç"
              title="Terapi nasıl ilerler?"
              intro="Her aşamada ne yapıldığını ve neden yapıldığını bilirsiniz."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Assurances />
          </Reveal>
          <Reveal className="mt-14">
            <CtaBand
              title="Size uygun yöntemi birlikte belirleyelim"
              text="Ön değerlendirme görüşmesinde ihtiyaçlarınızı dinler, hangi yöntemin neden önerildiğini açıkça paylaşırım."
              cta={c.home.cta}
              phone={c.site.phone}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
