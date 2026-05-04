import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Wrench, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "promo_diagnostic_dismissed";

export function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md pointer-events-auto rounded-3xl overflow-hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Special Promotion"
            >
              {/* Navy header band */}
              <div className="bg-primary px-7 pt-8 pb-6 text-center">
                {/* Close button */}
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close promotion"
                >
                  <X className="h-4 w-4 text-white" />
                </button>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-secondary/20 border border-secondary/30 rounded-full px-3 py-1 mb-4">
                  <Clock className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-secondary text-[11px] font-extrabold uppercase tracking-widest">Limited Time Offer</span>
                </div>

                {/* Price */}
                <div className="flex items-start justify-center gap-1 mb-2">
                  <span className="text-white/70 text-xl font-bold mt-2">$</span>
                  <span className="text-secondary text-7xl font-black leading-none tracking-tight" style={{ textShadow: "0 0 40px hsl(126 80% 55% / 0.4)" }}>
                    100
                  </span>
                </div>

                <h2 className="text-white text-xl font-extrabold leading-snug">
                  AC Repair Diagnostic
                </h2>
                <p className="text-white/60 text-sm mt-1.5 leading-relaxed">
                  Fast, accurate diagnosis of any AC problem — same-day service available across SWFL.
                </p>
              </div>

              {/* White body */}
              <div className="bg-card px-7 py-6">
                {/* What's included bullets */}
                <ul className="space-y-2 mb-6">
                  {[
                    "Full system inspection by a licensed tech",
                    "Root-cause diagnosis — not just a band-aid fix",
                    "Upfront repair quote before any work begins",
                    "No hidden fees, no upselling",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-[4px] h-4 w-4 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center shrink-0">
                        <Wrench className="h-2.5 w-2.5 text-secondary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Call Now CTA */}
                <a
                  href="tel:2397481815"
                  onClick={dismiss}
                  className="flex items-center justify-center gap-3 w-full bg-secondary hover:bg-secondary/90 text-primary font-extrabold text-lg rounded-2xl py-4 transition-all duration-200 hover:translate-y-[-1px] shadow-lg hover:shadow-secondary/30"
                  style={{ boxShadow: "0 4px 24px hsl(126 80% 55% / 0.25)" }}
                >
                  <Phone className="h-5 w-5" />
                  Call Now — (239) 748-1815
                </a>

                <p className="text-center text-[11px] text-muted-foreground mt-3">
                  Lic. #CAC1813319 · Lee, Collier & Charlotte Counties
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
