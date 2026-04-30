import { Link } from "wouter";
import { Phone, ChevronRight, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServicePageLayoutProps {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor?: "green" | "orange" | "blue";
  children: React.ReactNode;
}

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
  categoryHref,
  title,
  subtitle,
  icon,
  accentColor = "green",
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
              <Link href={categoryHref} className="hover:text-white/80 transition-colors">{category}</Link>
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
              License #CAC1813319 · Serving Lee, Collier, Charlotte & Sarasota Counties
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
    { stat: "5★", label: "Google rated" },
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
