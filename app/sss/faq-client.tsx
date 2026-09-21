"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck } from "lucide-react";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FaqClient({ content: c }: { content: SiteContent }) {
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
              Klinik Politikalar & SSS
            </h1>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {c.faq.map((item, i) => (
              <div
                key={i}
                data-reveal
                className="p-6 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md space-y-4 hover:border-primary/40 transition-[border-color] duration-300"
              >
                <h3 className="text-sm font-extrabold text-fg uppercase tracking-wide flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  {item.q}
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed pl-7 font-light border-l border-white/5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
