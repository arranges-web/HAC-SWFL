import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, MapPin, ShieldCheck, Star } from "lucide-react";

export function Footer() {
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
          {/* Top: brand */}
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-14 pb-8 sm:pb-10 border-b border-white/10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <img src="/logo.webp" alt="Hurricane Air Logo" className="h-16 sm:h-20 w-auto" loading="lazy" decoding="async" />
              <p className="text-white/70 max-w-xl text-base sm:text-lg leading-relaxed">
                A privately owned, family-run HVAC company — born and raised in Southwest Florida since 2003. No franchise fees, no out-of-state owners. Just your neighbors fixing your air conditioner.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Trust column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <div className="text-2xl font-extrabold tabular-nums leading-none">4.9</div>
                <div className="text-[10px] uppercase tracking-widest text-white/55 font-bold mt-1.5">
                  749 Google reviews
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
                <ShieldCheck className="h-4 w-4 text-secondary mb-1.5" />
                <div className="text-2xl font-extrabold leading-none">Licensed</div>
                <div className="text-[10px] uppercase tracking-widest text-white/55 font-bold mt-1.5">
                  CAC1813319 · Insured
                </div>
              </div>
            </div>
          </div>

          {/* Middle: columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-[0.2em] text-secondary mb-5">Services</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="text-[10px] uppercase tracking-widest text-secondary/70 font-bold pt-1">Cooling</li>
                {[
                  ["A/C Repair", "/services/ac-repair"],
                  ["A/C Installation", "/services/ac-installation"],
                  ["A/C Maintenance", "/services/ac-maintenance"],
                  ["Emergency A/C", "/services/emergency-ac"],
                  ["Ductless Mini Split", "/services/ductless-mini-split"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-white/70 hover:text-secondary transition-colors press inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="text-[10px] uppercase tracking-widest text-accent/70 font-bold pt-2">Heating</li>
                {[
                  ["Heating Repair", "/services/heating-repair"],
                  ["Heat Pump Install", "/services/heat-pump-installation"],
                  ["Heating Maintenance", "/services/heating-maintenance"],
                  ["Furnace Repair", "/services/furnace-repair"],
                  ["Thermostat Install", "/services/thermostat-install"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-white/70 hover:text-accent transition-colors press inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="text-[10px] uppercase tracking-widest text-blue-400/70 font-bold pt-2">Air Quality</li>
                {[
                  ["Indoor Air Quality", "/services/indoor-air-quality"],
                  ["Air Duct Repair", "/services/air-duct-repair"],
                  ["Air Duct Cleaning", "/services/air-duct-cleaning"],
                  ["Dehumidifier", "/services/dehumidifier"],
                  ["Humidifier", "/services/humidifier"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-white/70 hover:text-blue-400 transition-colors press inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-[0.2em] text-secondary mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["About Us", "/about"],
                  ["Blog", "/blog"],
                  ["Offers", "/offers"],
                  ["A/C Membership", "/membership"],
                  ["Financing", "/financing"],
                  ["Labor Warranty", "/labor-warranty"],
                  ["Service Area", "/service-area"],
                  ["Careers", "/careers"],
                  ["Reviews", "/reviews"],
                  ["Customer Service", "/customer-service"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-white/70 hover:text-secondary transition-colors press inline-block">
                      {label}
                    </Link>
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
                      12940 Express Ct, Ste 8<br />
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

    </footer>
  );
}
