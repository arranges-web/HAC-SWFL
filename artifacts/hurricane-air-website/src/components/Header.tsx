import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Menu, Phone, MapPin, Wrench, Wind, Fan, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let queued = false;

    const apply = () => {
      queued = false;
      const y = window.scrollY;
      setIsScrolled(y > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${pct})`;
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "#services", hasMenu: true },
    { name: "Why Us", href: "#about" },
    { name: "Membership", href: "#membership" },
    { name: "Financing", href: "#financing" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceMenu = [
    { icon: Wrench, label: "A/C Repair", desc: "Same-day diagnostics & fix" },
    { icon: Wind, label: "Installation", desc: "High-efficiency systems" },
    { icon: Fan, label: "Maintenance", desc: "Tune-ups & service plans" },
    { icon: Shield, label: "Indoor Air", desc: "Filtration & purification" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-primary text-primary-foreground py-1.5 sm:py-2 px-4 text-[11px] sm:text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary shrink-0" />
            <span className="hidden sm:inline">Serving Lee, Collier, Charlotte & Sarasota Counties</span>
            <span className="sm:hidden truncate">SWFL Service Area</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="font-semibold text-secondary">
              <span className="sm:hidden">24/7 Emergency</span>
              <span className="hidden sm:inline">24/7 Emergency Service</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`relative w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-background/75 backdrop-blur-2xl border-b border-border/60 shadow-sm py-2 sm:py-3"
            : "bg-background/40 backdrop-blur-md py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-10 group">
            <img
              src="/logo.webp"
              alt="Hurricane Air Logo"
              className="h-9 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_hsl(126_80%_55%/0.5)]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors block"
                >
                  {link.name}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>

                {/* Mega menu for Services */}
                {link.hasMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                    <div className="w-[420px] bg-background/95 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-xl p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {serviceMenu.map((item) => (
                          <a
                            key={item.label}
                            href="#services"
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors group/item"
                          >
                            <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-secondary/20 transition-colors">
                              <item.icon className="w-4 h-4 text-secondary" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-foreground">{item.label}</div>
                              <div className="text-xs text-muted-foreground leading-snug">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:2397481815" className="flex items-center gap-2 group cursor-pointer press">
              <div className="h-10 w-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-105 transition-all duration-300">
                <Phone className="h-5 w-5 text-secondary animate-pulse" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Call now</span>
                <span className="text-sm font-extrabold text-foreground group-hover:text-secondary transition-colors">
                  (239) 748-1815
                </span>
              </div>
            </a>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-6 glow-green hover:translate-y-[-1px]"
            >
              <a href="#contact">Schedule Now</a>
            </Button>
          </div>

          {/* Mobile CTA + Nav Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:2397481815"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/10 border border-secondary/30 press"
              aria-label="Call (239) 748-1815"
            >
              <Phone className="h-5 w-5 text-secondary" />
            </a>
            <Button
              asChild
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-10 px-4 text-sm glow-green"
            >
              <a href="#contact">Schedule</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border/10 w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-12">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-bold text-foreground hover:text-secondary transition-colors p-3 rounded-xl hover:bg-muted/60"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-border">
                    <a href="tel:2397481815" className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <span className="text-lg font-bold">(239) 748-1815</span>
                    </a>
                    <Button
                      asChild
                      className="bg-secondary text-secondary-foreground font-bold w-full h-12 text-lg glow-green"
                    >
                      <a href="#contact">Schedule Now</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden" aria-hidden>
          <div
            ref={progressRef}
            className="h-full origin-left bg-gradient-to-r from-secondary via-accent to-secondary"
            style={{ transform: "scaleX(0)", willChange: "transform" }}
          />
        </div>
      </div>
    </header>
  );
}
