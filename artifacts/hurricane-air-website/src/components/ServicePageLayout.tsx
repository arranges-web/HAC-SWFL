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
    q: "How quickly can a technician arrive?",
    a: "Call before noon Monday through Saturday and we guarantee a same-day arrival before sunset — in writing. After-hours and weekend dispatch is available 24/7 for emergencies.",
  },
  {
    q: "Do you charge for diagnostics?",
    a: "Our flat $125 diagnostic fee is waived when you proceed with the repair. You'll see the full price before any work starts — no hourly billing, no surprise charges.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. Hurricane Air operates under Florida HVAC license #CAC1813319, and every technician is background-checked, fully insured, and trained on every major brand.",
  },
  {
    q: "What brands do you service?",
    a: "All major residential and commercial brands — Trane, Carrier, Lennox, Goodman, Rheem, Comfortmaker, York, American Standard, Bryant, and more.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We partner with several Florida-licensed lenders to offer 0% APR options on qualifying systems. Pre-approval takes about 60 seconds and won't affect your credit.",
  },
  {
    q: "What's your warranty?",
    a: "5-year parts warranty on qualifying repairs and a 10-year limited warranty on new installations, plus our written same-day arrival guarantee.",
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
                    <a href="/#contact">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Service
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

          <ServiceFAQ items={faqs ?? DEFAULT_FAQS} />
          <MembershipPromo />
          <ServiceLeadForm serviceTitle={title} />
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
                <a href="/#contact">Book Online</a>
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

export function ServiceLeadForm({ serviceTitle }: { serviceTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.info("[ServiceLeadForm]", { service: serviceTitle, name, phone, email, zip, details });
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-card border border-card-border p-7 sm:p-10 mb-2"
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-secondary uppercase">
              Request Service
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Get on the schedule today.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Tell us a bit about what's going on and we'll call you back within 15 minutes during business hours.
            Or call{" "}
            <a href="tel:2397481815" className="text-secondary font-bold hover:underline">
              (239) 748-1815
            </a>{" "}
            for an immediate response.
          </p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              "Same-day arrival before sunset (Mon–Sat)",
              "Upfront flat-rate pricing — no surprises",
              "Licensed & insured · CAC1813319",
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

        {submitted ? (
          <div className="rounded-2xl bg-secondary/10 border border-secondary/30 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center mx-auto mb-3">
              <Send className="h-5 w-5 text-secondary" />
            </div>
            <h4 className="text-xl font-extrabold text-foreground mb-2">Request received</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Thanks {name.split(" ")[0] || "—"} — a Hurricane Air dispatcher will call {phone || "you"} within 15 minutes during business hours.
            </p>
            <p className="text-xs text-muted-foreground">
              Need help right now?{" "}
              <a href="tel:2397481815" className="font-bold text-secondary hover:underline">
                Call (239) 748-1815
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <FormField label="Full name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
              </FormField>
              <FormField label="Phone">
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="(239) 555-0100"
                  autoComplete="tel"
                />
              </FormField>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <FormField label="Email">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </FormField>
              <FormField label="ZIP code">
                <input
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="33901"
                  autoComplete="postal-code"
                />
              </FormField>
            </div>
            <FormField label="What's going on?">
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="form-input min-h-[88px] resize-y"
                placeholder={`Tell us briefly about your ${serviceTitle.toLowerCase()} needs...`}
                rows={3}
              />
            </FormField>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 glow-green"
            >
              <Send className="mr-2 h-4 w-4" />
              Request Service
            </Button>
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              By submitting, you agree to be contacted by Hurricane Air about your request. We never sell or share your info.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5 block">
        {label}
      </span>
      {children}
    </label>
  );
}
