import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Heating", href: "#services" },
    { name: "Cooling", href: "#services" },
    { name: "Air Quality", href: "#services" },
    { name: "Offers", href: "#membership" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          <span className="hidden sm:inline">Serving Lee, Collier, Charlotte & Sarasota Counties</span>
          <span className="sm:hidden">SWFL Service Area</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-secondary">24/7 Emergency Service</span>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-background py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-10">
            <img src="/logo.webp" alt="Hurricane Air Logo" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:2397481815" className="flex items-center gap-2 group cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="h-5 w-5 text-secondary animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-medium">Call Us Now</span>
                <span className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors">
                  (239) 748-1815
                </span>
              </div>
            </a>
            <a href="#contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-6 shadow-[0_0_15px_rgba(49,232,67,0.3)] hover:shadow-[0_0_25px_rgba(49,232,67,0.5)] transition-all">
                Schedule Now
              </Button>
            </a>
          </div>

          {/* Mobile CTA + Nav Toggle (always visible) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:2397481815"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/10 border border-secondary/30"
              aria-label="Call (239) 748-1815"
            >
              <Phone className="h-5 w-5 text-secondary" />
            </a>
            <a href="#contact">
              <Button
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-10 px-4 text-sm shadow-[0_0_15px_rgba(49,232,67,0.3)]"
              >
                Schedule
              </Button>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border/10 w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-12">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-bold text-foreground hover:text-secondary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border">
                    <a href="tel:2397481815" className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <span className="text-lg font-bold">(239) 748-1815</span>
                    </a>
                    <a href="#contact" className="block">
                      <Button className="bg-secondary text-secondary-foreground font-bold w-full h-12 text-lg">
                        Schedule Now
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
