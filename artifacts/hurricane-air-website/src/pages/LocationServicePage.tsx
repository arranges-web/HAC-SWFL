import { useState } from "react";
import { Link, useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  ChevronRight,
  ChevronDown,
  Star,
  ShieldCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ServiceBookingScheduler,
  MembershipPromo,
} from "@/components/ServicePageLayout";
import NotFound from "@/pages/not-found";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  buildJsonLd,
  findLocationPage,
  type LocationPage,
  type ContentSection,
} from "@/data/locationPages";

function GoogleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

const accentClasses = {
  green: { pill: "bg-secondary/10 border-secondary/20 text-secondary", dot: "bg-secondary" },
  orange: { pill: "bg-accent/10 border-accent/20 text-accent", dot: "bg-accent" },
  blue: { pill: "bg-blue-500/10 border-blue-500/20 text-blue-400", dot: "bg-blue-400" },
};

export default function LocationServicePage() {
  const [, params] = useRoute<{ location: string; service: string }>(
    "/:location/:service",
  );
  const page = params ? findLocationPage(params.location, params.service) : undefined;

  if (!page) return <NotFound />;

  return <LocationPageBody page={page} />;
}

function LocationPageBody({ page }: { page: LocationPage }) {
  const ac = accentClasses[page.accentColor];
  const origin = typeof window !== "undefined" ? window.location.origin : "https://hurricaneairconditioning.com";

  usePageMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    canonical: `${origin}${page.url}`,
    jsonLd: buildJsonLd(page, origin),
  });

  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.06] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/service-area" className="hover:text-white/80 transition-colors">Service Area</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/60">{page.location}</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">{page.pageTitle.split(" – ")[0]}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${ac.pill}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${ac.dot}`} />
                  <span className="text-xs font-bold tracking-widest uppercase">{page.category}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/85">
                  <MapPin className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-xs font-bold tracking-widest uppercase">{page.location}, FL</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground shadow-md shadow-secondary/30">
                  <span className="text-xs font-extrabold tracking-widest uppercase">From</span>
                  <span className="text-base font-black tabular-nums leading-none">{page.price}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-[-0.015em] mb-5">
                {page.pageTitle}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
                {page.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-6 glow-green">
                  <a href="#book">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Online
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-12 px-6 backdrop-blur-sm">
                  <a href="tel:2397481815">
                    <Phone className="mr-2 h-4 w-4" />
                    (239) 748-1815
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/search?q=Hurricane+Air+Conditioning+SWFL+reviews"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white text-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <GoogleGlyph className="h-6 w-6 shrink-0" />
                  <div className="text-xs leading-tight">
                    <div className="flex items-center gap-1">
                      <span className="text-base font-black tabular-nums">4.9</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-semibold">
                      <span className="font-extrabold text-foreground tabular-nums">749</span> Google reviews
                    </div>
                  </div>
                </a>
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white/80">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  <span>Licensed · CAC1813319</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Wave at bottom */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block">
              <path d="M0 56 C 360 0, 720 40, 1080 10 S 1350 40, 1440 56 L 1440 56 L 0 56 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
            <article>
              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
              >
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {page.intro}
                </p>
              </motion.div>

              {page.sections.map((section) => (
                <SectionBlock key={section.heading} section={section} />
              ))}

              {/* FAQ */}
              <FAQAccordion items={page.faqs} location={page.location} />
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-2xl bg-primary text-white p-6 noise overflow-hidden relative">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary mb-2">
                    Schedule in {page.location}
                  </div>
                  <a href="tel:2397481815" className="block text-2xl font-extrabold tracking-tight tabular-nums hover:text-secondary transition-colors mb-1">
                    (239) 748-1815
                  </a>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    24/7 dispatch · a real human picks up
                  </p>
                  <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
                    <a href="#book">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Online
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-card-border p-5">
                <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-muted-foreground mb-3">
                  Other {page.location} Services
                </div>
                <ul className="space-y-1.5">
                  {page.related
                    .filter((r) => r.href !== page.url)
                    .map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-sm font-bold text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors group"
                        >
                          {r.label}
                          <ArrowRight className="h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-secondary/10 border border-secondary/30 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">
                    Licensed & Insured
                  </div>
                </div>
                <p className="text-xs text-foreground/85 leading-relaxed">
                  Florida HVAC License <span className="font-bold">CAC1813319</span>. Every technician is background-checked and trained in-house. Never subcontracted.
                </p>
              </div>
            </aside>
          </div>

          {/* Booking scheduler */}
          <div className="mt-12 sm:mt-16">
            <ServiceBookingScheduler serviceTitle={page.pageTitle} />
          </div>

          {/* Membership cross-sell */}
          <div className="mt-12 sm:mt-16">
            <MembershipPromo />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <section className="relative bg-primary text-white overflow-hidden noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/[0.08] rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-14 sm:py-18 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Serving {page.location}</span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Same-day service across SWFL.
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Call before noon Monday–Saturday and we'll be at your door before sunset — guaranteed in writing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-13 px-8 text-base glow-green">
                <a href="#book">Book Online</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-13 px-8 text-base backdrop-blur-sm">
                <a href="tel:2397481815">
                  <Phone className="mr-2 h-5 w-5" />
                  (239) 748-1815
                </a>
              </Button>
            </div>
            <p className="mt-6 text-white/40 text-xs">
              License #CAC1813319 · Serving Lee, Collier & Charlotte Counties
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionBlock({ section }: { section: ContentSection }) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 sm:mb-14"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-5">
        {section.heading}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0">
          {p}
        </p>
      ))}

      {section.bullets && (
        <ul className="mt-5 space-y-2.5">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-foreground/85">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-secondary shrink-0" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {section.steps && (
        <ol className="mt-5 grid sm:grid-cols-2 gap-4">
          {section.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative p-5 rounded-2xl bg-card border border-card-border hover:border-secondary/30 transition-colors overflow-hidden group"
            >
              <div className="absolute top-3 right-4 text-4xl font-black text-foreground/[0.06] tabular-nums leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <div className="font-extrabold text-foreground mb-1.5 tracking-tight">{step.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </motion.section>
  );
}

function FAQAccordion({ items, location }: { items: { q: string; a: string }[]; location: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-4 mb-2">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-6">
        FAQs about {location} service
      </h2>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border bg-card transition-colors ${
                isOpen ? "border-secondary/40" : "border-card-border"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-foreground text-base sm:text-lg leading-snug">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
