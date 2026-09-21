"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ApproachClient({ content: c }: { content: SiteContent }) {
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
              {c.approach.title}
            </h1>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div data-reveal className="grid gap-6 sm:grid-cols-3">
            {c.approach.methods.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/[0.02] border border-white/10 hover:border-primary/45 rounded-xl p-8 space-y-5 backdrop-blur-sm shadow-xl ring-1 ring-inset ring-white/[0.04] transition-[border-color] duration-300"
              >
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-extrabold text-primary">
                    {m.title}
                  </p>
                  <Zap className="h-5 w-5 text-accent/60" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fg-muted">
                  {m.full}
                </p>
                <p className="text-xs text-fg-muted leading-relaxed font-light">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
