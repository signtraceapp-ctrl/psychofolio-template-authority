import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hizmetler" };

export default function ServicesPage() {
  const c = getContent();
  return (
    <div className="bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            <h1 className="text-4xl font-bold text-center tracking-tight">Hizmetler</h1>
            <p className="text-center text-sm text-fg-muted">
              Seans bilgisi için iletişime geçin.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {c.services.map((s, i) => (
                <div key={i} className="rounded-[12px] border border-border bg-bg-secondary p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-border">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="text-xl font-semibold text-fg">{s.title}</h2>
                    </div>
                    <span className="shrink-0 text-[10px] tracking-[0.15em] uppercase text-fg-muted bg-bg rounded-[8px] px-3 py-1.5 border border-border">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed">{s.desc}</p>
                  <p className="text-xs text-fg-muted/70">{s.method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
