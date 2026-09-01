"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesClient({ content: c }: { content: SiteContent }) {
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="py-28 md:py-36 bg-bg text-fg relative overflow-hidden"
    >
      <div className="authority-grid absolute inset-0 pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-14">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-fg uppercase tracking-widest shrink-0">
              Klinik Hizmet Katalogu
            </h1>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div
            data-reveal
            className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-white/[0.01] shadow-2xl ring-1 ring-inset ring-white/[0.04]"
          >
            {/* Header row - hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 bg-white/5 text-[9px] font-bold uppercase tracking-[0.2em] text-fg-muted border-b border-white/10">
              <div className="col-span-1 p-5 border-r border-white/10 text-center">
                #
              </div>
              <div className="col-span-3 p-5 border-r border-white/10">
                Terapi Türü
              </div>
              <div className="col-span-5 p-5 border-r border-white/10">
                Protokol & Açıklama
              </div>
              <div className="col-span-2 p-5 border-r border-white/10 text-center">
                Süre
              </div>
              <div className="col-span-1 p-5 text-center">Metot</div>
            </div>

            {c.services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-5 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors duration-300 md:grid md:grid-cols-12 md:gap-0 md:items-center"
              >
                <div className="hidden md:flex col-span-1 border-r border-white/5 justify-center font-bold text-primary text-xs">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-3 md:px-5 md:border-r md:border-white/5 font-extrabold text-fg text-sm">
                  {s.title}
                </div>
                <div className="md:col-span-5 md:px-5 md:border-r md:border-white/5 text-xs text-fg-muted leading-relaxed font-light">
                  {s.desc}
                </div>
                <div className="md:col-span-2 md:px-5 md:border-r md:border-white/5 md:text-center text-xs font-semibold text-fg">
                  {s.duration}
                </div>
                <div className="md:col-span-1 md:px-5 md:text-center text-[10px] font-bold tracking-wider text-primary uppercase">
                  {s.method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
