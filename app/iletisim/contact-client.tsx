"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactClient({ content: c }: { content: SiteContent }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

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

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-bg text-fg relative overflow-hidden"
    >
      <div className="authority-grid absolute inset-0 pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-fg uppercase tracking-widest shrink-0">
              {c.contact.title}
            </h1>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div
            data-reveal
            className="grid gap-0 lg:grid-cols-12 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-white/[0.01]"
          >
            {/* Sidebar info */}
            <div className="lg:col-span-4 bg-white/[0.01] p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                  Klinik Adresi
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed font-light whitespace-pre-line">
                  {c.contact.clinicAddress}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                  Çalışma Saatleri
                </h3>
                <div className="text-xs font-semibold text-fg space-y-1.5">
                  <p>{c.contact.workingHours.weekdays}</p>
                  <p>{c.contact.workingHours.saturday}</p>
                  <p className="text-fg-muted font-normal">{c.contact.workingHours.sunday}</p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                  İletişim
                </h3>
                <p className="text-xs font-bold text-fg">{c.site.phone}</p>
                <p className="text-xs text-fg-muted mt-1">{c.site.email}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 bg-white/[0.02] p-8 space-y-6">
              <h3 className="text-sm font-bold text-fg uppercase tracking-widest border-b border-white/5 pb-3">
                {c.contact.formTitle}
              </h3>

              {sent ? (
                <div className="text-center space-y-4 py-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-2">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-fg">Mesajiniz Hazirlandi</h3>
                  <p className="text-xs text-fg-muted font-light">
                    E-posta uygulamaniz acildi. Gonderdikten sonra en kisa surede donus yapilacaktir.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="inline-flex items-center justify-center rounded-none px-10 py-3 text-xs font-bold uppercase tracking-widest bg-primary text-primary-fg hover:opacity-90 transition-opacity"
                  >
                    Yeni Mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      id="ad"
                      name="ad"
                      type="text"
                      required
                      placeholder={c.contact.formName}
                      className="w-full rounded-md border border-white/10 bg-black/35 px-4 py-3.5 text-xs text-fg placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                    <input
                      id="eposta"
                      name="eposta"
                      type="email"
                      required
                      placeholder={c.contact.formEmail}
                      className="w-full rounded-md border border-white/10 bg-black/35 px-4 py-3.5 text-xs text-fg placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <input
                    id="konu"
                    name="konu"
                    type="text"
                    placeholder={c.contact.formReason}
                    className="w-full rounded-md border border-white/10 bg-black/35 px-4 py-3.5 text-xs text-fg placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                  />

                  <textarea
                    id="mesaj"
                    name="mesaj"
                    required
                    placeholder={c.contact.formMessage}
                    rows={4}
                    className="w-full rounded-md border border-white/10 bg-black/35 px-4 py-3.5 text-xs text-fg placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none transition-all duration-300"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-none text-xs font-bold uppercase tracking-widest py-4 bg-primary text-primary-fg hover:opacity-90 transition-opacity"
                  >
                    {c.contact.formSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
