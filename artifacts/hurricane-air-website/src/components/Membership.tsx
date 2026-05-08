import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Crown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const benefits = [
  "Priority service scheduling",
  "No overtime or emergency fees",
  "Two comprehensive annual tune-ups",
  "15% discount on all repairs",
  "Extended lifespan of your A/C unit",
  "Peace of mind during storm season",
];

export function Membership() {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  function onCardMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1100px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
  }
  function onCardLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <section id="membership" className="relative py-14 sm:py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden noise">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-secondary/15 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[140px]" />
        <svg
          viewBox="0 0 600 600"
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-[800px] opacity-[0.05] animate-spin-slower"
          fill="none"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx="300" cy="300" r={60 + i * 45} stroke="white" strokeWidth="1.2" strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`} />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-secondary" />
                <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Premium Protection</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5 sm:mb-6">
                Stay cool all year — <span className="text-secondary">on autopilot.</span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl">
                Join the Hurricane Home Comfort Club and never worry about your A/C breaking down when you need it most.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3 text-base text-zinc-200 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" strokeWidth={3} />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Savings comparison */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">Without membership</div>
                <div className="text-2xl font-extrabold text-zinc-300 tabular-nums">~$420<span className="text-xs font-normal text-zinc-500"> /yr</span></div>
                <div className="text-xs text-zinc-500 mt-1">Two diagnostic visits + repairs</div>
              </div>
              <div className="rounded-2xl border border-secondary/30 bg-secondary/[0.06] p-5 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-2">With membership</div>
                  <div className="text-2xl font-extrabold text-white tabular-nums">$189<span className="text-xs font-normal text-zinc-400"> /yr</span></div>
                  <div className="text-xs text-secondary mt-1 font-semibold">Save up to 55%</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Card */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-md w-full"
            >
              {/* Best Value Pill */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent to-[#F4951F] text-white font-extrabold text-[11px] tracking-widest uppercase shadow-lg">
                <Crown className="w-3.5 h-3.5" />
                Best Value
              </div>

              <div
                ref={cardRef}
                onMouseMove={onCardMove}
                onMouseLeave={onCardLeave}
                style={{ transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)" }}
                className="relative rounded-3xl p-8 sm:p-10 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-white/10 shadow-2xl"
              >
                {/* Inner glow */}
                <div className="absolute -top-32 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-secondary" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">Hurricane Comfort Club</span>
                  </div>

                  <h4 className="text-3xl font-extrabold tracking-tight mb-1">Annual Membership</h4>
                  <p className="text-sm text-zinc-400">All-in-one A/C protection</p>

                  <div className="flex items-baseline gap-1 mt-7">
                    <span className="text-2xl font-bold text-secondary">$</span>
                    <span className="text-6xl sm:text-7xl font-extrabold tracking-tight tabular-nums">189</span>
                    <span className="text-zinc-400 font-medium ml-1">/year</span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-zinc-400">
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-semibold">~$15.75/mo</span>
                    <span>· cancel any time</span>
                  </div>

                  <Button
                    asChild
                    className="w-full mt-7 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 text-lg glow-green hover:translate-y-[-1px]"
                  >
                    <Link href="/membership#enroll">Become a Member</Link>
                  </Button>

                  <p className="text-center text-[11px] text-zinc-500 mt-4">
                    Renews automatically. No long-term contracts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
