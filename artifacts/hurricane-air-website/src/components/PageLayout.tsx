import { Link } from "wouter";
import { ChevronRight, Phone, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children: React.ReactNode;
  showBottomCta?: boolean;
}

export function PageLayout({
  title,
  subtitle,
  breadcrumb,
  children,
  showBottomCta = true,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero strip */}
        <section className="relative bg-primary text-white overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.06] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">{breadcrumb ?? title}</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-[-0.015em] mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block">
              <path d="M0 56 C 360 0, 720 40, 1080 10 S 1350 40, 1440 56 L 1440 56 L 0 56 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          {children}
        </div>

        {showBottomCta && (
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
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Same-day service across SWFL.</h2>
              <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
                Call before noon Monday–Saturday and we'll be at your door before sunset — guaranteed in writing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-13 px-8 text-base glow-green">
                  <a href="/schedule">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Online
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-13 px-8 text-base backdrop-blur-sm">
                  <a href="tel:2397481815">
                    <Phone className="mr-2 h-5 w-5" />
                    (239) 748-1815
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-white/40 text-xs">License #CAC1813319 · Serving Lee, Collier & Charlotte Counties</p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
