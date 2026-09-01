import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hakkımda" };

export default function AboutPage() {
  const c = getContent();
  return (
    <div className="bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
            <h1 className="text-4xl font-bold text-center tracking-tight">{c.about.title}</h1>
            <p className="text-center text-lg text-fg-muted leading-relaxed">
              {c.about.intro}
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 gap-4">
              {c.about.credentials.map((cred, i) => (
                <div key={i} className="rounded-[12px] border border-border bg-bg-secondary p-6 flex items-start gap-6">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-[8px] bg-primary/10 text-primary text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-fg">{cred.title}</h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
