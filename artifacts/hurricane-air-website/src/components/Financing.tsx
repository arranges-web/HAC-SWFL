import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calculator, CreditCard, Percent, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Percent, title: "0% APR Options", desc: "Qualified buyers can finance new system installs with zero interest." },
  { icon: Zap, title: "Instant Decisions", desc: "Most applicants are approved in minutes, not days." },
  { icon: Calculator, title: "Flexible Terms", desc: "Pick a monthly payment that fits your budget — 12 to 120 months." },
];

function PaymentSlider() {
  const [months, setMonths] = useState(60);
  const total = 7800;
  const monthly = Math.max(75, Math.round(total / months));
  const reduceMotion = useReducedMotion();

  // build a sparkline-like dot path showing payment shrinking as months grow
  const sparklinePoints = Array.from({ length: 12 }, (_, i) => {
    const m = 12 + i * 9; // 12 to 111
    const v = Math.round(total / m);
    return { x: (i / 11) * 100, y: 100 - Math.min(95, (v / 700) * 100) };
  });
  const path = sparklinePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");

  return (
    <div className="rounded-3xl p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/80">Estimate</span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">Sample · $7,800 system</span>
      </div>

      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-5xl font-extrabold tabular-nums">${monthly}</span>
        <span className="text-sm text-white/80 font-medium">/mo</span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-semibold text-white/80 mb-2">
          <span>Term</span>
          <span className="tabular-nums">{months} months</span>
        </div>

        <input
          type="range"
          min={12}
          max={120}
          step={12}
          value={months}
          onChange={(e) => setMonths(parseInt(e.target.value, 10))}
          className="w-full h-2 rounded-full appearance-none bg-white/20 accent-white cursor-pointer"
          style={{
            background: `linear-gradient(to right, white 0%, white ${
              ((months - 12) / 108) * 100
            }%, rgba(255,255,255,0.2) ${((months - 12) / 108) * 100}%, rgba(255,255,255,0.2) 100%)`,
          }}
        />

        <div className="flex justify-between text-[10px] text-white/60 font-semibold tracking-wider uppercase mt-1.5">
          <span>12 mo</span>
          <span>60 mo</span>
          <span>120 mo</span>
        </div>
      </div>

      {/* Sparkline */}
      <div className="mt-5">
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-10 overflow-visible">
          <defs>
            <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${path} L 100 30 L 0 30 Z`}
            fill="url(#spark-grad)"
            transform="scale(1, 0.3)"
          />
          <path d={path} stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" transform="scale(1, 0.3)" />
        </svg>
        <p className="text-[10px] text-white/60 mt-1">
          Lower payments with longer terms · {reduceMotion ? "interactive" : "drag the slider above"}
        </p>
      </div>
    </div>
  );
}

export function Financing() {
  return (
    <section
      id="financing"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-[#F4951F] via-[#F4951F] to-[#E07F0A] text-white overflow-hidden noise"
    >
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-white/10 blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white text-[#F4951F]">
                <CreditCard className="h-3 w-3" />
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase">Financing Available</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight">
              Cool comfort,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-primary bg-white px-3 inline-block rounded-md">low monthly</span>
              </span>{" "}
              payments.
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-lg leading-relaxed">
              Don't let an unexpected breakdown wreck your budget. We partner with trusted lenders to make a brand-new,
              high-efficiency A/C system affordable from day one.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#F4951F] hover:bg-white/90 font-extrabold h-14 px-8 text-lg shadow-xl hover:translate-y-[-2px]"
              >
                <a href="#contact">Apply for Financing</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:text-white font-bold h-14 px-8 text-lg"
              >
                <a href="tel:2397481815">Talk to a Specialist</a>
              </Button>
            </div>

            <p className="text-xs text-white/70 max-w-md leading-relaxed">
              Subject to credit approval. Programs and rates may change without notice. Ask your Hurricane Air comfort
              advisor for current promotions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4"
          >
            {/* Payment slider — feature card */}
            <PaymentSlider />

            {/* Perk pills */}
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/15 hover:translate-x-1 transition-all duration-400"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white text-[#F4951F] flex items-center justify-center shadow-md">
                  <perk.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-extrabold tracking-tight mb-0.5">{perk.title}</h3>
                  <p className="text-sm text-white/85 leading-snug">{perk.desc}</p>
                </div>
                {idx === 0 && (
                  <span className="self-start text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-white to-white/80 text-[#F4951F] px-2 py-0.5 rounded-full">
                    0% APR
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
