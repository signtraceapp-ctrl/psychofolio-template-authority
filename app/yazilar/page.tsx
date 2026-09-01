import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Yazılar" };

export default function ArticlesPage() {
  const c = getContent();
  return (
    <div className="bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-4xl font-bold text-center tracking-tight">Yazılar</h1>
            <div className="space-y-4">
              {c.articles.map((a, i) => (
                <div
                  key={i}
                  className="group rounded-[12px] border border-border bg-bg-secondary p-6 flex items-center justify-between gap-4 hover:border-primary/40 transition-colors duration-200 cursor-pointer"
                >
                  <div className="space-y-2 min-w-0">
                    <h2 className="text-base font-semibold text-fg group-hover:text-primary transition-colors truncate">{a.title}</h2>
                    <div className="flex items-center gap-3 text-xs text-fg-muted">
                      <span>{a.date}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] tracking-[0.15em] uppercase font-semibold text-primary bg-primary/10 rounded-[8px] px-3 py-1.5">
                    {a.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
