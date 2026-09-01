import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "SSS" };

export default function FaqPage() {
  const c = getContent();
  return (
    <div className="bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-4xl font-bold text-center tracking-tight">Sık Sorulan Sorular</h1>
            <div className="space-y-4">
              {c.faq.map((item, i) => (
                <div key={i} className="rounded-[12px] border border-border bg-bg-secondary p-6 space-y-4">
                  <h2 className="text-base font-semibold text-fg">{item.q}</h2>
                  <div className="h-px bg-border" />
                  <p className="text-sm text-fg-muted leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
