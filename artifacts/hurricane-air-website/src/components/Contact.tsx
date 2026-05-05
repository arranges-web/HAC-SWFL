import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { ContactWizard } from "@/components/ContactWizard";

export function Contact() {
  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-secondary/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-accent/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left column: info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-secondary" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Get In Touch</h2>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-5 sm:mb-6">
                Fast, reliable service is one call away.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Need immediate help? Call us directly. Prefer to schedule online? Fill out the form and we'll respond within one business hour.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:2397481815"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-card-border hover:border-secondary/40 hover:shadow-md transition-all duration-400 press"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-105 transition-all">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Call us 24/7</div>
                  <p className="text-2xl font-extrabold text-primary group-hover:text-secondary transition-colors tabular-nums tracking-tight">
                    (239) 748-1815
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-card-border">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-foreground mb-1 tracking-tight">Headquarters</h4>
                    <p className="text-xs text-muted-foreground leading-snug">12940 Express Ct, Ste 8<br />Fort Myers, FL 33913</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-card-border">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-foreground mb-1 tracking-tight">Hours</h4>
                    <p className="text-xs text-muted-foreground leading-snug">Mon–Sat 8am–5pm<br />Emergency 24/7/365</p>
                  </div>
                </div>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/[0.06] border border-secondary/20">
                <ShieldCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-xs text-foreground font-semibold leading-snug">
                  Licensed & insured · State-certified · CAC1817454
                </p>
              </div>
            </div>
          </div>

          {/* Right column: interactive wizard */}
          <div className="lg:col-span-3">
            <ContactWizard variant="card" />
          </div>
        </div>
      </div>
    </section>
  );
}
