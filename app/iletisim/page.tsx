import { getContent } from "@/lib/content";
import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "İletişim" };

export default function ContactPage() {
  const c = getContent();
  return (
    <div className="bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
            <h1 className="text-4xl font-bold text-center tracking-tight">{c.contact.title}</h1>
            <p className="text-center text-fg-muted leading-relaxed">
              {c.contact.intro}
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 rounded-[12px] border border-border bg-bg-secondary px-5 py-3 text-sm text-fg-muted">
                <Mail className="h-4 w-4 text-primary" />
                <span>{c.site.email}</span>
              </div>
              <div className="flex items-center gap-3 rounded-[12px] border border-border bg-bg-secondary px-5 py-3 text-sm text-fg-muted">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{c.site.address}</span>
              </div>
            </div>

            {/* Contact Form - disabled in demo */}
            <div className="mx-auto max-w-md space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={c.contact.formName}
                  disabled
                  className="w-full rounded-[12px] border border-border bg-bg-secondary px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={c.contact.formEmail}
                  disabled
                  className="w-full rounded-[12px] border border-border bg-bg-secondary px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder={c.contact.formMessage}
                  disabled
                  className="w-full rounded-[12px] border border-border bg-bg-secondary px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center rounded-[12px] px-10 py-3 text-sm font-semibold bg-primary text-primary-fg opacity-50 cursor-not-allowed"
                >
                  {c.contact.formSubmit}
                </button>
              </div>
              <p className="text-center text-xs text-fg-muted/60">
                Örnek sitede form çalışmaz. Satın aldığınızda kendi e-posta adresinize bağlanır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
