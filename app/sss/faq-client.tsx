"use client";

import { useId, useState } from "react";
import { Mail, Minus, Phone, Plus } from "lucide-react";
import type { SiteContent } from "@/lib/content";
import {
  Container,
  PageHeader,
  PrimaryLink,
  Reveal,
  telHref,
} from "@/components/clinic-ui";

export function FaqClient({ content: c }: { content: SiteContent }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div>
      <PageHeader
        crumb="Sık sorulan sorular"
        title="Sık sorulan sorular"
        intro="Terapi süreci, randevu ve gizlilik hakkında en çok merak edilenler."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sorular */}
          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {c.faq.map((item, i) => {
                const isOpen = open === i;
                const panelId = `${baseId}-panel-${i}`;
                const buttonId = `${baseId}-button-${i}`;
                return (
                  <Reveal key={item.q} delay={i * 0.03}>
                    <div className="border-b border-border">
                      <h2>
                        <button
                          id={buttonId}
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          className="flex w-full items-start justify-between gap-6 py-6 text-left"
                        >
                          <span
                            className={`text-[17px] font-medium leading-snug transition-colors ${
                              isOpen ? "text-primary" : "text-fg"
                            }`}
                          >
                            {item.q}
                          </span>
                          <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                              isOpen
                                ? "border-primary bg-primary text-primary-fg"
                                : "border-border-strong text-fg-muted"
                            }`}
                            aria-hidden="true"
                          >
                            {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                          </span>
                        </button>
                      </h2>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-6 pr-12 text-[16px] leading-relaxed text-fg-muted">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Yardım kartı */}
          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-border bg-bg-secondary p-7 lg:sticky lg:top-28">
              <h2 className="text-lg font-semibold text-fg">Sorunuz burada yok mu?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                Aklınızdaki soruyu doğrudan iletebilirsiniz; size en kısa sürede dönüş yapılır.
              </p>
              <ul className="mt-6 space-y-3 text-[15px]">
                <li>
                  <a
                    href={telHref(c.site.phone)}
                    className="flex items-center gap-3 text-fg hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                    {c.site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${c.site.email}`}
                    className="flex items-center gap-3 break-all text-fg hover:text-primary"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {c.site.email}
                  </a>
                </li>
              </ul>
              <PrimaryLink href="/iletisim" className="mt-7 w-full">
                Soru sor / randevu al
              </PrimaryLink>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
