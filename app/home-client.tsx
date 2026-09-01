"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/lib/content";

export function HomeClient({ content: c }: { content: SiteContent }) {
  return (
    <div className="selection:bg-primary/20 bg-bg text-fg">
      {/* Hero - full-width dark with gradient, text-only */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        {/* Subtle geometric gradient accents */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg via-bg-secondary/60 to-bg" />
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 -z-10 h-[400px] w-[400px] bg-accent/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-[12px] border border-border bg-bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase"
            >
              {c.home.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              {c.home.headline}
              <br />
              <span className="text-primary">{c.home.headlineAccent}</span>{" "}
              {c.home.headlineSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base leading-relaxed text-fg-muted"
            >
              {c.home.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-[12px] px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] bg-primary text-primary-fg hover:bg-primary-hover"
              >
                {c.home.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Strip - replaces quote section */}
      <section className="border-y border-border bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border"
          >
            {c.home.credentials.map((cred, i) => (
              <div key={i} className="py-8 sm:py-10 px-6 text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-fg-muted mb-2">{cred.label}</p>
                <p className="text-lg font-semibold text-primary">{cred.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services - numbered grid cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Hizmetler</h2>
              <p className="text-sm text-fg-muted">Seans bilgisi için iletişime geçin.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-[12px] border border-border bg-bg-secondary p-8 space-y-4 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold text-border group-hover:text-primary/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-fg-muted bg-bg rounded-[8px] px-3 py-1.5 border border-border">
                      {s.duration} - {s.method}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-fg">{s.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
