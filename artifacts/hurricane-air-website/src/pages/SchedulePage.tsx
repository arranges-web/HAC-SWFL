import { motion } from "framer-motion";
import { Phone, ShieldCheck, Star, Clock, ChevronRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function SchedulePage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero strip */}
        <section className="relative bg-primary text-white overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/[0.08] rounded-full blur-[180px]" />
            <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[140px]" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none">
              <svg viewBox="0 0 600 600" fill="none" className="animate-spin-slower w-full h-full">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <circle
                    key={i}
                    cx="300"
                    cy="300"
                    r={50 + i * 45}
                    stroke="hsl(126 80% 55%)"
                    strokeWidth="1.5"
                    strokeDasharray={`${8 + i * 2} ${(8 + i * 2) * 2}`}
                    fill="none"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">Schedule</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-secondary">
                  Live · Booking the next 7 days
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.04] tracking-[-0.015em] mb-5">
                Schedule your service{" "}
                <span className="text-secondary">in 60 seconds.</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
                Pick a time that works for you. A licensed Hurricane Air dispatcher will confirm by phone before arrival — same-day in most cases.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/70 text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="font-semibold">
                    <span className="text-white font-extrabold tabular-nums">4.9</span>
                    <span className="text-white/50"> · 749 Google reviews</span>
                  </span>
                </div>
                <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
                <div className="hidden sm:flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  <span>Licensed · CAC1813319</span>
                </div>
                <span className="hidden md:inline-block h-3 w-px bg-white/20" />
                <div className="hidden md:flex items-center gap-1.5 font-semibold">
                  <Clock className="h-3.5 w-3.5 text-secondary" />
                  <span>24/7 Emergency Dispatch</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block">
              <path
                d="M0 56 C 360 0, 720 40, 1080 10 S 1350 40, 1440 56 L 1440 56 L 0 56 Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Body: scheduler + sidebar */}
        <section className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
            {/* Scheduler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden bg-card border border-card-border shadow-xl"
            >
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-card-border bg-gradient-to-r from-secondary/[0.08] via-transparent to-transparent">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-widest font-extrabold text-secondary">
                      Hurricane Air Booking
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      Real-time availability — confirm in seconds
                    </div>
                  </div>
                </div>
                <a
                  href="tel:2397481815"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Or call (239) 748-1815
                </a>
              </div>
              <div className="bg-white">
                <iframe
                  src="https://go.servicetitan.com/webscheduler?tenantid=993943591&campaignid=1636"
                  title="Schedule Hurricane Air Service"
                  loading="eager"
                  className="w-full block border-0 h-[640px] sm:h-[720px] lg:h-[780px]"
                />
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="space-y-4 lg:sticky lg:top-32">
              <div className="rounded-3xl bg-primary text-white p-6 noise overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/[0.12] rounded-full blur-[80px] pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary mb-2">
                    Need help right now?
                  </div>
                  <a
                    href="tel:2397481815"
                    className="block text-3xl font-extrabold tracking-tight tabular-nums hover:text-secondary transition-colors mb-1"
                  >
                    (239) 748-1815
                  </a>
                  <p className="text-white/60 text-xs leading-relaxed">
                    24/7 dispatch · A real human picks up
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-card border border-card-border p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-muted-foreground mb-3">
                  What to expect
                </div>
                <ol className="space-y-3">
                  {[
                    { n: "1", t: "Pick your time", d: "Choose any open slot — same-day usually available." },
                    { n: "2", t: "We confirm by phone", d: "A dispatcher calls within 15 min during business hours." },
                    { n: "3", t: "Tech arrives", d: "Same-day before sunset · arrival window in writing." },
                    { n: "4", t: "Flat-rate quote", d: "Approve a written all-in price before any work." },
                  ].map((s) => (
                    <li key={s.n} className="flex gap-3">
                      <div className="h-7 w-7 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 text-[11px] font-extrabold text-secondary tabular-nums">
                        {s.n}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground leading-tight">{s.t}</div>
                        <div className="text-xs text-muted-foreground leading-snug mt-0.5">{s.d}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl bg-card border border-card-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-muted-foreground">
                    Service area
                  </div>
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  Lee, Collier & Charlotte counties — Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, Punta Gorda and more.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-card-border hover:border-secondary/40 hover:text-secondary font-bold"
                >
                  <Link href="/service-area">View full service map</Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom reassurance strip */}
        <section className="relative bg-primary text-white overflow-hidden noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/[0.08] rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 py-14 sm:py-18">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-10 text-center sm:text-left">
              {[
                { stat: "20+", label: "Years serving SWFL" },
                { stat: "4.9★", label: "749 Google reviews" },
                { stat: "Same-day", label: "Arrival before sunset (Mon–Sat)" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-4xl sm:text-5xl font-extrabold text-secondary tabular-nums leading-none">
                    {item.stat}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/60 font-semibold mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-white/40 text-xs text-center">
              License #CAC1813319 · Serving Lee, Collier & Charlotte Counties
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
