import { useState } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Send, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3500);
  }

  return (
    <footer className="relative bg-primary text-white overflow-hidden noise">
      {/* Wave divider */}
      <div className="absolute -top-[1px] left-0 right-0 leading-none pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-12 sm:h-20 block">
          <path
            d="M0 60 C 240 0, 480 100, 720 60 S 1200 20, 1440 60 L 1440 0 L 0 0 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>

      {/* Ghost wordmark */}
      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-extrabold tracking-tighter text-transparent text-[28vw] sm:text-[22vw] lg:text-[18rem] leading-[0.8]"
          style={{
            WebkitTextStroke: "1.5px hsl(0 0% 100% / 0.06)",
          }}
        >
          HURRICANE
        </span>
      </div>

      {/* Soft glows */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-secondary/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top: brand + newsletter */}
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-14 pb-8 sm:pb-10 border-b border-white/10">
            <div className="lg:col-span-6 space-y-5">
              <img src="/logo.webp" alt="Hurricane Air Logo" className="h-12 w-auto brightness-0 invert" />
              <p className="text-white/70 max-w-md text-base leading-relaxed">
                Southwest Florida's most trusted air conditioning and heating experts since 2003. Trust. Transparency. Teamwork.
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 press"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 press"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-6">
              <div className="glass-tile rounded-3xl p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-secondary fill-secondary" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">SWFL Comfort Tips</span>
                </div>
                <h4 className="text-2xl font-extrabold tracking-tight mb-1">Get our SWFL HVAC newsletter</h4>
                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  Storm-season prep, energy-saving tips, and member-only specials. One email a month — no spam.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:bg-white/15 transition-all duration-300"
                    aria-label="Email address"
                  />
                  <Button
                    type="submit"
                    className={`relative overflow-hidden font-bold h-12 px-6 transition-all duration-500 ${
                      submitted
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-green"
                    }`}
                  >
                    {submitted ? (
                      <>
                        <Check className="h-4 w-4" /> Subscribed
                      </>
                    ) : (
                      <>
                        Subscribe <Send className="h-4 w-4" />
                      </>
                    )}
                    {/* Lightning sweep on success */}
                    {submitted && (
                      <span
                        className="absolute inset-0 -translate-x-full animate-[shimmer_1s_ease-out] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        style={{ animation: "shimmer 1s ease-out forwards" }}
                      />
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Middle: columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-[0.2em] text-secondary mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["A/C Repair", "#services"],
                  ["A/C Installation", "#services"],
                  ["Routine Maintenance", "#services"],
                  ["Indoor Air Quality", "#services"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-white/70 hover:text-secondary transition-colors press inline-block">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-[0.2em] text-secondary mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["About Us", "#about"],
                  ["Membership", "#membership"],
                  ["Financing", "#financing"],
                  ["Reviews", "#testimonials"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-white/70 hover:text-secondary transition-colors press inline-block">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-[0.2em] text-secondary mb-5">Service Area</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Lee County</li>
                <li>Collier County</li>
                <li>Charlotte County</li>
                <li>Sarasota County</li>
              </ul>
            </div>

            {/* Contact glass card */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-extrabold text-sm uppercase tracking-[0.2em] text-secondary mb-5">Reach Us</h4>
              <div className="glass-tile rounded-2xl p-5 space-y-4">
                <a href="tel:2397481815" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">24/7 Phone</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-secondary transition-colors">
                      (239) 748-1815
                    </div>
                  </div>
                </a>
                <a href="mailto:info@hurricaneair.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-secondary transition-colors break-all">
                      info@hurricaneair.com
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">HQ</div>
                    <div className="text-xs text-white/80 leading-snug">
                      12960 Commerce Lakes Dr A-20<br />
                      Fort Myers, FL 33913
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Hurricane Air Conditioning of SWFL, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">License #CAC1817454</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}
