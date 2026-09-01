"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";
import type { SiteContent } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutClient({ content: c }: { content: SiteContent }) {
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
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[90px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="border-b border-white/10 pb-6 mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-fg uppercase tracking-widest">
              {c.about.title}
            </h1>
          </div>

          <div data-reveal className="grid gap-16 lg:grid-cols-12">
            {/* Main narrative */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-xl font-extrabold text-primary uppercase tracking-wider">
                {c.site.name}
              </h2>
              <div className="text-sm text-fg-muted space-y-6 leading-relaxed font-light">
                {c.about.intro.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Glassmorphic callout */}
              <div className="p-6 rounded-xl border border-white/15 bg-white/[0.02] backdrop-blur-md">
                <h4 className="text-xs font-bold text-fg uppercase tracking-wider mb-2">
                  {c.about.calloutTitle}
                </h4>
                <p className="text-xs text-fg-muted font-light leading-relaxed">
                  {c.about.calloutText}
                </p>
              </div>
            </div>

            {/* Sidebar - structured tables */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary border-b border-white/10 pb-3 mb-4">
                  Eğitim Geçmişi
                </h3>
                <div className="space-y-4">
                  {c.about.credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="py-1 border-b border-white/5 last:border-0 last:pb-0"
                    >
                      <p className="text-xs font-bold text-fg">{cred.title}</p>
                      <p className="text-[10px] text-fg-muted mt-1">
                        {cred.year} &middot; {cred.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-reveal
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary border-b border-white/10 pb-3 mb-4">
                  Mesleki Kuruluşlar
                </h3>
                <div className="space-y-3">
                  {c.about.organizations.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-1 text-xs font-medium text-fg"
                    >
                      <Award className="h-4 w-4 text-primary shrink-0" /> {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
