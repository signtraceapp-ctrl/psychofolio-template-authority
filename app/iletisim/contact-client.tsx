"use client";

import { useState } from "react";
import { CircleCheck, Clock, ExternalLink, LifeBuoy, Mail, MapPin, Phone } from "lucide-react";
import type { SiteContent } from "@/lib/content";
import { Container, PageHeader, Reveal, telHref } from "@/components/clinic-ui";

const inputClass =
  "w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-[15px] text-fg placeholder:text-fg-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

export function ContactClient({ content: c }: { content: SiteContent }) {
  const [sent, setSent] = useState(false);
  const hours = c.contact.workingHours;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    c.contact.clinicAddress.replace(/\n/g, ", "),
  )}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const ad = (form.elements.namedItem("ad") as HTMLInputElement)?.value ?? "";
    const eposta = (form.elements.namedItem("eposta") as HTMLInputElement)?.value ?? "";
    const konu = (form.elements.namedItem("konu") as HTMLInputElement)?.value ?? "";
    const mesaj = (form.elements.namedItem("mesaj") as HTMLTextAreaElement)?.value ?? "";
    const subject = encodeURIComponent(konu || "İletişim Formu");
    const body = encodeURIComponent(`Ad: ${ad}\nE-posta: ${eposta}\nKonu: ${konu}\n\n${mesaj}`);
    window.location.href = `mailto:${c.site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <PageHeader crumb="İletişim" title={c.contact.title} intro={c.contact.intro} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-bg p-7 shadow-[0_1px_2px_rgba(22,35,43,0.04)] sm:p-9">
              <h2 className="text-xl font-semibold text-fg">{c.contact.formTitle}</h2>

              {sent ? (
                <div className="mt-8 flex gap-4 rounded-lg bg-accent p-6" role="status">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-fg">E-posta uygulamanız açıldı</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-fg-muted">
                      Mesajınız hazır; göndermek için e-posta uygulamanızda &ldquo;Gönder&rdquo;e basmanız yeterli.
                      Uygulama açılmadıysa doğrudan{" "}
                      <a href={`mailto:${c.site.email}`} className="font-medium text-primary underline">
                        {c.site.email}
                      </a>{" "}
                      adresine yazabilirsiniz.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-4 text-[14px] font-medium text-primary hover:underline"
                    >
                      Formu yeniden doldur
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ad" className="mb-2 block text-[14px] font-medium text-fg">
                        {c.contact.formName}
                      </label>
                      <input id="ad" name="ad" type="text" required autoComplete="name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="eposta" className="mb-2 block text-[14px] font-medium text-fg">
                        {c.contact.formEmail}
                      </label>
                      <input
                        id="eposta"
                        name="eposta"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="konu" className="mb-2 block text-[14px] font-medium text-fg">
                      {c.contact.formReason}
                    </label>
                    <input id="konu" name="konu" type="text" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="mesaj" className="mb-2 block text-[14px] font-medium text-fg">
                      Mesajınız
                    </label>
                    <textarea
                      id="mesaj"
                      name="mesaj"
                      rows={5}
                      placeholder={c.contact.formMessage}
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                  <label className="flex items-start gap-3 text-[14px] leading-relaxed text-fg-muted">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-border-strong accent-[#0e5a66]"
                    />
                    Paylaştığım bilgilerin yalnızca randevu planlaması amacıyla kullanılmasını kabul ediyorum.
                  </label>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-[15px] font-medium text-primary-fg transition-colors hover:bg-primary-hover sm:w-auto"
                  >
                    {c.contact.formSubmit}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Bilgiler */}
          <Reveal delay={0.08} className="space-y-5 lg:col-span-5">
            <div className="rounded-xl border border-border bg-bg p-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-fg-muted">Klinik adresi</p>
                  <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-fg">
                    {c.contact.clinicAddress}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-primary hover:underline"
                  >
                    Haritada görüntüle
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-bg p-7">
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-fg-muted">
                    Çalışma saatleri
                  </p>
                  <div className="mt-2 space-y-1 text-[15px] text-fg">
                    <p>{hours.weekdays}</p>
                    <p>{hours.saturday}</p>
                    <p className="text-fg-muted">{hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-bg p-7">
              <ul className="space-y-4 text-[15px]">
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={telHref(c.site.phone)} className="text-fg hover:text-primary">
                    {c.site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`mailto:${c.site.email}`} className="break-all text-fg hover:text-primary">
                    {c.site.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 rounded-xl bg-accent p-6">
              <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-[14px] leading-relaxed text-fg">
                <span className="font-semibold">Acil durumlar:</span> Bu form acil destek kanalı değildir.
                Kendinizi ya da bir başkasını tehlikede hissediyorsanız 112&apos;yi arayın.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
