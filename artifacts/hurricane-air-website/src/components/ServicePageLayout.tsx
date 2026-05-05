import { useState } from "react";
import { Link } from "wouter";
import { Phone, ChevronRight, Calendar, ChevronDown, Star, Send, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export interface ServiceFAQItem {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor?: "green" | "orange" | "blue";
  faqs?: ServiceFAQItem[];
  children: React.ReactNode;
}

const DEFAULT_FAQS: ServiceFAQItem[] = [
  {
    q: "Do I really need a professional, or can I troubleshoot this myself?",
    a: "Some basics — replacing a clogged air filter, clearing debris off the outdoor condenser, checking thermostat batteries — are safe DIY tasks. Anything involving refrigerant, electrical components, or sealed system parts requires an EPA-certified technician by law. If your system is short-cycling, blowing warm air, leaking, or making unusual noises, call us before the issue escalates into a full system failure.",
  },
  {
    q: "How much does an A/C repair cost in Southwest Florida?",
    a: "Most repairs in our service area range from $150 to $1,200 depending on the part — capacitors and contactors at the low end, compressors and evaporator coils at the higher end. We charge a flat $125 diagnostic that's waived when you proceed with repairs, and you'll get a written, all-in quote before any work starts. No hourly billing, no surprise add-ons.",
  },
  {
    q: "When is it smarter to replace my system instead of repairing it?",
    a: "We use the industry-standard \"$5,000 rule\" — multiply the repair cost by your system's age. If the result is over $5,000, replacement usually makes more financial sense. Systems older than 10–12 years that need a major component (compressor, coil) are often candidates for replacement, especially given the efficiency gains in newer SEER2-rated units. We'll always give you the math and let you decide.",
  },
  {
    q: "How often should I service my A/C?",
    a: "In Southwest Florida's heat and humidity, we recommend professional maintenance twice a year — once before the cooling season (spring) and once mid-summer. Annual maintenance catches small failures before they become $2,000 emergency calls and keeps your manufacturer warranty intact. Our $189/yr Membership Plan covers both visits plus member-only repair pricing.",
  },
  {
    q: "How long will the service appointment take?",
    a: "A standard diagnostic takes 30–60 minutes. Most common repairs (capacitors, contactors, drain line flushes, refrigerant top-offs) are completed on the first visit in 1–2 hours total — our trucks are stocked with the parts that fail most often in Florida. Larger jobs like coil replacements or full system installs are typically scheduled for a follow-up day.",
  },
  {
    q: "What if my system is out of warranty?",
    a: "Out-of-warranty doesn't mean out of options. We back qualifying repairs with our own 5-year parts warranty, and on new installations you get a 10-year limited manufacturer warranty plus our 1-year labor guarantee. We'll always check what coverage you have before quoting — sometimes we find warranty coverage homeowners didn't know was active.",
  },
];

const accentClasses = {
  green: {
    pill: "bg-secondary/10 border-secondary/20 text-secondary",
    dot: "bg-secondary",
    glow: "bg-secondary/10",
    glowLarge: "bg-secondary/5",
    border: "border-secondary/20",
    text: "text-secondary",
  },
  orange: {
    pill: "bg-accent/10 border-accent/20 text-accent",
    dot: "bg-accent",
    glow: "bg-accent/10",
    glowLarge: "bg-accent/5",
    border: "border-accent/20",
    text: "text-accent",
  },
  blue: {
    pill: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    dot: "bg-blue-400",
    glow: "bg-blue-500/10",
    glowLarge: "bg-blue-500/5",
    border: "border-blue-500/20",
    text: "text-blue-400",
  },
};

export function ServicePageLayout({
  category,
  title,
  subtitle,
  icon,
  accentColor = "green",
  faqs,
  children,
}: ServicePageLayoutProps) {
  const ac = accentClasses[accentColor];

  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero strip */}
        <section className="relative bg-primary text-white overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 noise">
          {/* Background layers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.06] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
            {/* Subtle swirl */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 600 600" fill="none" className="animate-spin-slower w-full h-full">
                {[0, 1, 2, 3, 4].map((i) => (
                  <circle
                    key={i}
                    cx="300"
                    cy="300"
                    r={60 + i * 50}
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/60">{category}</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">{title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category pill */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${ac.pill} mb-5`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${ac.dot}`} />
                  <span className="text-xs font-bold tracking-widest uppercase">{category}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-[-0.015em] mb-5">
                  {title}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
                  {subtitle}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-6 glow-green"
                  >
                    <a href="#book">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Online
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-12 px-6 backdrop-blur-sm"
                  >
                    <a href="tel:2397481815">
                      <Phone className="mr-2 h-4 w-4" />
                      (239) 748-1815
                    </a>
                  </Button>
                </div>

                {/* Hero trust strip */}
                <div className="mt-7 flex items-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm">
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
                </div>
              </motion.div>

              {/* Icon / visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className={`w-48 h-48 rounded-full ${ac.glow} border ${ac.border} flex items-center justify-center`}>
                  <div className={`w-32 h-32 rounded-full ${ac.glow} flex items-center justify-center`}>
                    {icon}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Wave at bottom */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block">
              <path
                d="M0 56 C 360 0, 720 40, 1080 10 S 1350 40, 1440 56 L 1440 56 L 0 56 Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Page body */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          {children}

          <ServiceProcess />
          <ServiceFAQ items={faqs ?? DEFAULT_FAQS} />
          <MembershipPromo />
          <ServiceBookingScheduler serviceTitle={title} />
        </div>

        {/* Bottom CTA strip */}
        <section className="relative bg-primary text-white overflow-hidden noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/[0.08] rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-14 sm:py-18 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Ready to Schedule?</span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Same-day service across SWFL.
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Call before noon Monday–Saturday and we'll be at your door before sunset — guaranteed in writing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-13 px-8 text-base glow-green"
              >
                <a href="#book">Book Online</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-13 px-8 text-base backdrop-blur-sm"
              >
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

export function ServiceSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14 sm:mb-18"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-6">{title}</h2>
      {children}
    </motion.div>
  );
}

export function PricingCallout({
  price,
  label,
  items,
  note,
}: {
  price: string;
  label: string;
  items: string[];
  note?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-7 sm:p-9 mb-14 noise">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slower w-full h-full">
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx="200" cy="200" r={50 + i * 40} stroke="hsl(126 80% 55%)" strokeWidth="1.5" strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`} fill="none" />
          ))}
        </svg>
      </div>
      <div className="relative grid sm:grid-cols-2 gap-8 items-start">
        <div>
          <div className="text-5xl sm:text-6xl font-extrabold text-secondary tabular-nums">{price}</div>
          <div className="text-white/70 mt-1 text-sm font-semibold">{label}</div>
          {note && <p className="mt-4 text-white/60 text-sm leading-relaxed">{note}</p>}
        </div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function IncludedList({ items }: { items: { icon?: string; title: string; desc: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mb-14">
      {items.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 p-5 rounded-2xl bg-card border border-card-border"
        >
          {item.icon && (
            <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
          )}
          <div>
            <div className="font-bold text-foreground mb-1">{item.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function TrustBar() {
  const items = [
    { stat: "20+", label: "Years in business" },
    { stat: "24/7", label: "Emergency available" },
    { stat: "4.9★", label: "749 Google reviews" },
    { stat: "5-yr", label: "Parts warranty" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
      {items.map((item) => (
        <div key={item.label} className="text-center p-5 rounded-2xl bg-card border border-card-border">
          <div className="text-3xl font-extrabold text-secondary tabular-nums">{item.stat}</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ServiceFAQ({ items }: { items: ServiceFAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ServiceSection title="Frequently Asked Questions">
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
                <span className="font-bold text-foreground text-base sm:text-lg leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
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
    </ServiceSection>
  );
}

export function MembershipPromo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-7 sm:p-10 mb-14 sm:mb-18 noise"
    >
      <div className="absolute -right-24 -top-24 w-80 h-80 bg-secondary/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-secondary uppercase">
              Membership Plan
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Skip the diagnostic fee — join for{" "}
            <span className="text-secondary tabular-nums">$189/yr</span>.
          </h3>
          <p className="text-white/70 leading-relaxed mb-5">
            Two annual tune-ups, priority scheduling, member-only repair discounts, and a discounted{" "}
            <span className="font-bold text-white">$89</span> service-call fee — saves the average homeowner about{" "}
            <span className="font-bold text-white">$230 a year</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-6 glow-green"
            >
              <Link href="/membership">Learn More</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-12 px-6"
            >
              <a href="tel:2397481815">
                <Phone className="mr-2 h-4 w-4" />
                (239) 748-1815
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center gap-1 text-center">
          <div className="text-7xl font-extrabold text-secondary tabular-nums leading-none">$189</div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60 mt-2">
            per year
          </div>
          <div className="flex items-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">
            Loved by 1,800+ homes
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServiceBookingScheduler({ serviceTitle }: { serviceTitle: string }) {
  return (
    <motion.div
      id="book"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-card border border-card-border p-5 sm:p-7 lg:p-9 mb-2 shadow-xl"
    >
      <div className="absolute -top-32 -right-20 w-[400px] h-[400px] bg-secondary/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
        <div className="lg:pt-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-secondary uppercase">
              Book Online
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3 leading-tight">
            Schedule your{" "}
            <span className="text-secondary">{serviceTitle.toLowerCase()}</span>{" "}
            in 60 seconds.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Pick a time that works for you — our dispatcher will confirm by phone before arrival.
            Need help right now?{" "}
            <a href="tel:2397481815" className="text-secondary font-bold hover:underline">
              Call (239) 748-1815
            </a>
            .
          </p>
          <ul className="space-y-3 text-sm text-foreground/80">
            {[
              "Same-day arrival before sunset (Mon–Sat)",
              "Flat-rate pricing — confirmed before any work",
              "Licensed & insured · CAC1813319",
              "4.9★ across 749 Google reviews",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <span className="mt-[3px] h-4 w-4 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-card-border bg-white shadow-inner">
          <iframe
            src="https://go.servicetitan.com/webscheduler?tenantid=993943591&campaignid=1636"
            title={`Schedule ${serviceTitle}`}
            loading="lazy"
            className="w-full h-[700px] block border-0"
          />
        </div>
      </div>
    </motion.div>
  );
}

const PROCESS_STEPS = [
  {
    icon: Phone,
    title: "Call or Book Online",
    desc: "Tell us what's going on. We'll have a licensed tech dispatched the same day in most cases.",
  },
  {
    icon: ShieldCheck,
    title: "Diagnose, Not Guess",
    desc: "Your tech runs a full system diagnostic and shows you exactly what's wrong — no shortcuts, no scare tactics.",
  },
  {
    icon: Send,
    title: "Approve a Flat Quote",
    desc: "You get an upfront, written, all-in price. Approve it and we get to work — usually same-visit.",
  },
  {
    icon: Star,
    title: "Cool, Comfortable, Done",
    desc: "Your system runs like new before we leave. Backed by our 5-year parts warranty and arrival guarantee.",
  },
];

export function ServiceProcess() {
  return (
    <ServiceSection title="How it works">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-2xl bg-card border border-card-border hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/[0.06] rounded-full blur-2xl group-hover:bg-secondary/[0.12] transition-colors" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-4xl font-black text-foreground/[0.06] tabular-nums leading-none">
                    0{idx + 1}
                  </span>
                </div>
                <div className="font-extrabold text-foreground mb-1.5 tracking-tight">{step.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </ServiceSection>
  );
}

