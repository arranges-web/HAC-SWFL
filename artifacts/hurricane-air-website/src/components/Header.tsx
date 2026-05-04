import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Menu, Phone, MapPin, Wrench, Wind, Fan, Shield, Zap, ChevronDown, X, Flame, Thermometer, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const coolingServices = [
  { icon: Wrench, label: "A/C Repair", desc: "Same-day diagnostics & fix", href: "/services/ac-repair" },
  { icon: Wind, label: "A/C Installation", desc: "High-efficiency new systems", href: "/services/ac-installation" },
  { icon: Fan, label: "A/C Maintenance", desc: "Annual tune-ups & plans", href: "/services/ac-maintenance" },
  { icon: Zap, label: "Emergency A/C", desc: "24/7 priority dispatch", href: "/services/emergency-ac" },
  { icon: Wind, label: "Ductless Mini Split", desc: "Zone cooling without ducts", href: "/services/ductless-mini-split" },
];

const heatingServices = [
  { icon: Wrench, label: "Heating Repair", desc: "Heat pump & air handler repairs", href: "/services/heating-repair" },
  { icon: Wind, label: "Heat Pump Install", desc: "Inverter systems & replacement", href: "/services/heat-pump-installation" },
  { icon: Fan, label: "Heating Maintenance", desc: "Pre-season safety tune-up", href: "/services/heating-maintenance" },
  { icon: Flame, label: "Furnace Repair", desc: "Diagnosis & same-day repair", href: "/services/furnace-repair" },
  { icon: Thermometer, label: "Thermostat Install", desc: "Smart thermostat upgrade", href: "/services/thermostat-install" },
];

const airQualityServices = [
  { icon: Shield, label: "Indoor Air Quality", desc: "Filtration, UV & humidity control", href: "/services/indoor-air-quality" },
  { icon: Wind, label: "Air Duct Repair", desc: "Sealing & duct restoration", href: "/services/air-duct-repair" },
  { icon: Fan, label: "Air Duct Cleaning", desc: "Remove dust & allergens", href: "/services/air-duct-cleaning" },
  { icon: Droplets, label: "Dehumidifier Services", desc: "Whole-home humidity control", href: "/services/dehumidifier" },
  { icon: Droplets, label: "Humidifier Services", desc: "Dry air relief & protection", href: "/services/humidifier" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Offers", href: "/offers" },
  { label: "A/C Membership", href: "/membership" },
  { label: "Financing", href: "/financing" },
  { label: "Labor Warranty", href: "/labor-warranty" },
  { label: "Service Area", href: "/service-area" },
  { label: "Careers", href: "/careers" },
  { label: "Reviews", href: "/reviews" },
  { label: "Customer Service", href: "/customer-service" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
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
    { name: "Services", href: "#", hasMenu: "services" },
    { name: "Company", href: "#", hasMenu: "company" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-primary text-primary-foreground py-1.5 sm:py-2 px-4 text-[11px] sm:text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary shrink-0" />
            <span className="hidden sm:inline">Serving Lee, Collier & Charlotte Counties</span>
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
                {link.href === "#" ? (
                  <button className="relative px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
                    {link.name}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </Link>
                )}

                {/* Services Mega Menu */}
                {link.hasMenu === "services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                    <div className="w-[680px] bg-background/98 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-2xl p-5">
                      <div className="grid grid-cols-3 gap-4">
                        {/* Cooling column */}
                        <div>
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-secondary mb-3 px-1">Cooling</div>
                          <div className="space-y-0.5">
                            {coolingServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-muted/60 transition-colors group/item"
                              >
                                <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-secondary/20 transition-colors mt-0.5">
                                  <item.icon className="w-3.5 h-3.5 text-secondary" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-bold text-foreground leading-snug">{item.label}</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Heating column */}
                        <div>
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-accent mb-3 px-1">Heating</div>
                          <div className="space-y-0.5">
                            {heatingServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-muted/60 transition-colors group/item"
                              >
                                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors mt-0.5">
                                  <item.icon className="w-3.5 h-3.5 text-accent" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-bold text-foreground leading-snug">{item.label}</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Air Quality column */}
                        <div>
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-blue-400 mb-3 px-1">Air Quality</div>
                          <div className="space-y-0.5">
                            {airQualityServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-muted/60 transition-colors group/item"
                              >
                                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/20 transition-colors mt-0.5">
                                  <item.icon className="w-3.5 h-3.5 text-blue-400" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-bold text-foreground leading-snug">{item.label}</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Emergency CTA */}
                          <div className="mt-4 p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                            <div className="text-[10px] font-extrabold uppercase tracking-widest text-secondary mb-1">Emergency?</div>
                            <a href="tel:2397481815" className="text-sm font-extrabold text-foreground hover:text-secondary transition-colors">
                              (239) 748-1815
                            </a>
                            <div className="text-[10px] text-muted-foreground mt-0.5">Available 24/7</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Company Dropdown */}
                {link.hasMenu === "company" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                    <div className="w-52 bg-background/98 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-2xl p-2">
                      {companyLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center px-3 py-2 rounded-xl hover:bg-muted/60 transition-colors text-sm font-semibold text-foreground/80 hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
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
              <a href="/#contact">Schedule Now</a>
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
              <a href="/#contact">Schedule</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border/10 w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col gap-6 mt-12">
                  <nav className="flex flex-col gap-1">
                    {/* Services expandable */}
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between text-lg font-bold text-foreground hover:text-secondary transition-colors p-3 rounded-xl hover:bg-muted/60"
                      >
                        Services
                        {mobileServicesOpen ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-3 mt-1 space-y-1 border-l-2 border-secondary/20 pl-3">
                          <div className="text-[10px] font-extrabold uppercase tracking-widest text-secondary pt-2 pb-1 px-2">Cooling</div>
                          {coolingServices.map((s) => (
                            <Link key={s.href} href={s.href} className="block text-sm font-semibold text-foreground/80 hover:text-secondary transition-colors py-1.5 px-2 rounded-lg hover:bg-muted/60">
                              {s.label}
                            </Link>
                          ))}
                          <div className="text-[10px] font-extrabold uppercase tracking-widest text-accent pt-3 pb-1 px-2">Heating</div>
                          {heatingServices.map((s) => (
                            <Link key={s.href} href={s.href} className="block text-sm font-semibold text-foreground/80 hover:text-accent transition-colors py-1.5 px-2 rounded-lg hover:bg-muted/60">
                              {s.label}
                            </Link>
                          ))}
                          <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 pt-3 pb-1 px-2">Air Quality</div>
                          {airQualityServices.map((s) => (
                            <Link key={s.href} href={s.href} className="block text-sm font-semibold text-foreground/80 hover:text-blue-400 transition-colors py-1.5 px-2 rounded-lg hover:bg-muted/60">
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Company expandable */}
                    <div>
                      <button
                        onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                        className="w-full flex items-center justify-between text-lg font-bold text-foreground hover:text-secondary transition-colors p-3 rounded-xl hover:bg-muted/60"
                      >
                        Company
                        {mobileCompanyOpen ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {mobileCompanyOpen && (
                        <div className="ml-3 mt-1 space-y-1 border-l-2 border-secondary/20 pl-3">
                          {companyLinks.map((item) => (
                            <Link key={item.href} href={item.href} className="block text-sm font-semibold text-foreground/80 hover:text-secondary transition-colors py-1.5 px-2 rounded-lg hover:bg-muted/60">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link href="/reviews" className="text-lg font-bold text-foreground hover:text-secondary transition-colors p-3 rounded-xl hover:bg-muted/60 block">
                      Reviews
                    </Link>
                    <Link href="/contact" className="text-lg font-bold text-foreground hover:text-secondary transition-colors p-3 rounded-xl hover:bg-muted/60 block">
                      Contact
                    </Link>
                  </nav>

                  <div className="flex flex-col gap-4 pt-6 border-t border-border">
                    <a href="tel:2397481815" className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <span className="text-lg font-bold">(239) 748-1815</span>
                    </a>
                    <Button
                      asChild
                      className="bg-secondary text-secondary-foreground font-bold w-full h-12 text-lg glow-green"
                    >
                      <a href="/#contact">Schedule Now</a>
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
