import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Yaklaşım" };

export default function ApproachPage() {
  const c = getContent();
  return (
    <div className="bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
            <h1 className="text-4xl font-bold text-center tracking-tight">{c.approach.title}</h1>
            <p className="text-center text-lg text-fg-muted leading-relaxed">
              {c.approach.intro}
            </p>
            <div className="grid grid-cols-1 gap-6">
              {c.approach.principles.map((p, i) => (
                <div key={i} className="rounded-[12px] border border-border bg-bg-secondary p-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed pl-5">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
