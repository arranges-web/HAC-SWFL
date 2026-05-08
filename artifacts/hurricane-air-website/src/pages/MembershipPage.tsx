import { Check, Shield, Star, Zap, Clock } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { motion } from "framer-motion";
import { PmaSignupWizard } from "@/components/PmaSignupWizard";

const included = [
  "2 in-person maintenance visits per year",
  "Full system inspection — coils, drain lines, fan motors, compressor",
  "Detailed written report after each visit",
  "Priority scheduling access",
  "Free estimates on IAQ products, new A/C equipment, and ductwork upgrades",
  "Complimentary duct inspection",
  "Discounted rates on repairs and additional services",
  "Discounted service call fee: $89 (saves $36 from standard rate)",
  "Services available for any A/C brand",
  "Membership transfers if you relocate",
];

const benefits = [
  { icon: Zap, title: "Lower Utility Bills", desc: "A maintained system runs at peak efficiency, costing less to cool your home every month." },
  { icon: Shield, title: "Extended Equipment Life", desc: "Annual maintenance is the single best way to add years to your HVAC system's lifespan." },
  { icon: Star, title: "Better Cooling Performance", desc: "Clean coils, clear drain lines, and calibrated controls mean consistent, even cooling throughout your home." },
  { icon: Clock, title: "Priority Scheduling", desc: "Members jump to the front of the line — especially important during the peak summer heat when we're busiest." },
];

export default function MembershipPage() {
  return (
    <PageLayout
      title="A/C Membership Plan"
      subtitle="$189/year for two annual tune-ups, priority scheduling, and member discounts — the smartest investment you can make in your HVAC system."
      breadcrumb="A/C Membership"
    >
      {/* Pricing hero + interactive sign-up */}
      <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-10 mb-14 items-start">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-7 sm:p-9 noise">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.07] pointer-events-none">
            <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slower w-full h-full">
              {[0, 1, 2, 3].map((i) => (
                <circle key={i} cx="200" cy="200" r={50 + i * 40} stroke="hsl(126 80% 55%)" strokeWidth="1.5" strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`} fill="none" />
              ))}
            </svg>
          </div>
          <div className="relative">
            <div className="text-xs font-extrabold uppercase tracking-widest text-secondary mb-3">Comfort Club · Annual PMA</div>
            <div className="flex items-baseline gap-2">
              <div className="text-6xl sm:text-7xl font-extrabold text-secondary tabular-nums leading-none">$189</div>
              <div className="text-white/60 text-sm font-bold">/year</div>
            </div>
            <div className="text-white/60 mt-1 text-sm">~$15.75 per month · cancel anytime</div>
            <p className="text-white/70 mt-4 leading-relaxed">
              Two annual maintenance visits, priority scheduling, member-only repair pricing, and a discounted $89 service-call fee. Backed by your locally owned, family-run Hurricane Air team.
            </p>
            <ul className="mt-6 space-y-2.5">
              {included.slice(0, 6).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span className="mt-[3px] h-4 w-4 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5 text-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50 mt-4">
              Plus {included.length - 6} more — see the full benefit list below.
            </p>
          </div>
        </div>

        {/* Interactive PMA Signup */}
        <div id="enroll" className="lg:sticky lg:top-28">
          <PmaSignupWizard />
        </div>
      </div>

      {/* Benefits */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Why Members Love the Plan</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4 p-6 rounded-2xl bg-card border border-card-border"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
              <b.icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Terms */}
      <div className="rounded-2xl bg-card border border-card-border p-7 sm:p-9">
        <h2 className="text-xl font-extrabold text-foreground mb-4">Important Membership Terms</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm text-muted-foreground">
          <div className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Valid during business hours (Mon–Sat, 8am–5pm)</span></div>
          <div className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Includes limited 30-day drain line warranty</span></div>
          <div className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Emergency services cover no cooling, heating issues, or flooding</span></div>
          <div className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Membership transfers if you relocate to a new home</span></div>
          <div className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Labor warranties may void if third parties service the system</span></div>
          <div className="flex gap-2"><Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Valid for any A/C brand — we service all major brands</span></div>
        </div>
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Questions about the membership? <Link href="/contact" className="text-secondary hover:underline font-semibold">Contact us</Link> or call <a href="tel:2397481815" className="text-secondary hover:underline font-semibold">(239) 748-1815</a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
