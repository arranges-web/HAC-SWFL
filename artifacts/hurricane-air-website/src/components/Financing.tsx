import { motion } from "framer-motion";
import { Calculator, CreditCard, Percent, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Percent, title: "0% APR Options", desc: "Qualified buyers can finance new system installs with zero interest." },
  { icon: Zap, title: "Instant Decisions", desc: "Most applicants are approved in minutes, not days." },
  { icon: Calculator, title: "Flexible Terms", desc: "Pick a monthly payment that fits your budget — 12 to 120 months." },
];

export function Financing() {
  return (
    <section
      id="financing"
      className="py-24 bg-gradient-to-br from-[#F4951F] via-[#F4951F] to-[#E07F0A] text-white relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
              <CreditCard className="h-4 w-4" />
              <span className="text-xs font-bold tracking-wider uppercase">Financing Available</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Cool comfort,
              <br />
              <span className="text-primary bg-white px-3 inline-block">low monthly</span> payments.
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-lg leading-relaxed">
              Don't let an unexpected breakdown wreck your budget. We partner with trusted lenders to make a brand new,
              high‑efficiency A/C system affordable from day one.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-white text-[#F4951F] hover:bg-white/90 font-bold h-14 px-8 text-lg shadow-xl"
                >
                  Apply for Financing
                </Button>
              </a>
              <a href="tel:2397481815">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:text-white font-bold h-14 px-8 text-lg"
                >
                  Talk to a Specialist
                </Button>
              </a>
            </div>

            <p className="text-xs text-white/70 max-w-md">
              Subject to credit approval. Programs and rates may change without notice. Ask your Hurricane Air comfort
              advisor for current promotions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-5"
          >
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/15 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white text-[#F4951F] flex items-center justify-center shadow-md">
                  <perk.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{perk.title}</h3>
                  <p className="text-white/85 leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-primary/90 border border-white/10 rounded-2xl p-6 text-center mt-2">
              <p className="text-sm uppercase tracking-widest font-bold text-secondary mb-2">Estimated Payment</p>
              <p className="text-4xl font-extrabold">
                from <span className="text-secondary">$129</span>
                <span className="text-lg font-medium text-white/80">/mo</span>
              </p>
              <p className="text-xs text-white/70 mt-2">on a complete new system install with approved credit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
