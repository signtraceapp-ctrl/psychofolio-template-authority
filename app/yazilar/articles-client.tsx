"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ArticlesClient({ content: c }: { content: SiteContent }) {
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
      className="py-24 bg-bg text-fg relative overflow-hidden"
    >
      <div className="authority-grid absolute inset-0 pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-fg uppercase tracking-widest shrink-0">
              Yayınlar & Klinik Literatür
            </h1>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div
            data-reveal
            className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-white/[0.01] shadow-2xl ring-1 ring-inset ring-white/[0.04]"
          >
            {c.articles.map((a, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-7 border-b border-white/10 last:border-0 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded">
                      {a.category}
                    </span>
                    <span className="text-[10px] text-fg-muted">
                      {a.date} &middot; {a.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-fg tracking-wide">
                    {a.title}
                  </h3>
                </div>
                <button
                  type="button"
                  disabled
                  className="rounded-none text-[9px] font-bold uppercase tracking-widest shrink-0 border border-white/20 bg-transparent text-fg px-4 py-2.5 opacity-60 cursor-not-allowed"
                >
                  PDF İndir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
