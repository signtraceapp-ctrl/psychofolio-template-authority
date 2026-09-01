"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, ShieldCheck } from "lucide-react";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeClient({ content: c }: { content: SiteContent }) {
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
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="selection:bg-primary/20 bg-bg text-fg min-h-screen relative overflow-hidden"
    >
      {/* Techno Grid pattern background overlay */}
      <div className="authority-grid absolute inset-0 pointer-events-none -z-20" />

      {/* Neon ambient glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] pointer-events-none -z-10" />

      {/* Hero - Cyber-neural split */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                <Zap className="h-3.5 w-3.5" /> {c.home.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-fg uppercase leading-[1.0]">
                {c.home.headline}
                <br />
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {c.home.headlineAccent}
                </span>
                {c.home.headlineSuffix ? ` ${c.home.headlineSuffix}` : ""}
              </h1>

              <p className="text-base text-fg-muted max-w-xl leading-relaxed font-light">
                {c.home.description}
              </p>

              <div className="flex gap-4">
                <a
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-none px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-primary text-primary-fg hover:bg-primary-hover shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  {c.home.cta}
                </a>
                <a
                  href="/yazilar"
                  className="inline-flex items-center gap-2 rounded-none px-8 py-3.5 text-xs font-bold uppercase tracking-wider border border-white/20 hover:border-primary/50 text-fg hover:bg-white/5 transition-all duration-300"
                >
                  {c.home.ctaSecondary}
                </a>
              </div>
            </motion.div>

            {/* Neural Brain 3D Render Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[380px]">
                {/* Tech glowing border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent opacity-30 rounded-[16px] blur-sm -z-10" />
                <div className="overflow-hidden rounded-[14px] border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-[0_0_40px_rgba(var(--color-primary),0.15)]">
                  <Image
                    src="/authority_hero.png"
                    alt="Neural Network Brain"
                    width={380}
                    height={380}
                    className="aspect-square w-full rounded-[8px] object-cover filter saturate-[1.1] contrast-[1.05]"
                    priority
                  />
                  <div className="mt-4 p-1 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-fg">COGNITIVE MODEL</p>
                      <p className="text-[10px] text-fg-muted mt-0.5">Active Synaptic Architecture</p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Counter bar */}
      <section
        data-reveal
        className="py-12 bg-white/[0.02] border-y border-white/5 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 divide-x divide-white/5">
            {c.metrics.map((m, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-3xl font-extrabold text-primary">{m.val}</p>
                <p className="mt-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-fg-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section data-reveal className="py-24 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-lg font-extrabold text-fg uppercase tracking-widest">
                Klinik Hizmet Katalogu
              </h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Glowing Table container */}
            <div className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-white/[0.01] shadow-2xl">
              {/* Header row */}
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

      {/* Credentials and organizations badges */}
      <section
        data-reveal
        className="py-14 border-t border-white/5 bg-white/[0.01]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {c.home.credentials.map((cred, i) => (
              <div key={i} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-fg-muted">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
