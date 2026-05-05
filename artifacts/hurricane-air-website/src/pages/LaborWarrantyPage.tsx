import { Shield, Check, Clock, DollarSign, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  { icon: "🔒", title: "One-Time Purchase", desc: "Pay once at the time of installation and you're covered for up to 10 years — no annual renewal required." },
  { icon: "💰", title: "No Deductible", desc: "When you need a covered repair, you pay nothing out of pocket for labor. Zero deductible, zero surprises." },
  { icon: "🏠", title: "Fully Transferrable", desc: "If you sell your home, the coolCARE protection transfers to the new owner — adding real value to your property." },
  { icon: "🏆", title: "A.M. Best Rated Insurer", desc: "The plan is backed by an A.M. Best-rated insurance provider, so you know the coverage is solid." },
  { icon: "🔧", title: "Hurricane Air Technicians", desc: "All warranty repairs are performed by the same licensed Hurricane Air technicians who installed your system." },
  { icon: "📋", title: "Fills the Manufacturer Gap", desc: "Manufacturer warranties cover parts — not labor. coolCARE fills that gap so a covered repair never costs you extra." },
];

const covered = [
  "Compressor replacement",
  "Air handler repair and replacement",
  "Evaporator coil replacement",
  "Thermostat replacement",
  "Electrical components",
  "All covered mechanical failures",
];

export default function LaborWarrantyPage() {
  return (
    <PageLayout
      title="Labor Warranty"
      subtitle="The coolCARE Protection Plan gives you up to 10 years of labor coverage on newly installed HVAC equipment — no deductible, fully transferrable."
      breadcrumb="Labor Warranty"
    >
      {/* Hero callout */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-12 mb-14 noise">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slower w-full h-full">
            {[0, 1, 2, 3].map((i) => (
              <circle key={i} cx="200" cy="200" r={50 + i * 40} stroke="hsl(126 80% 55%)" strokeWidth="1.5" strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`} fill="none" />
            ))}
          </svg>
        </div>
        <div className="relative grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">coolCARE Protection Plan</span>
            </div>
            <div className="text-6xl font-extrabold text-secondary tabular-nums mb-2">10 yr</div>
            <div className="text-white/60 text-sm mb-4">Maximum labor warranty coverage</div>
            <p className="text-white/70 leading-relaxed mb-6">
              When your manufacturer warranty runs out, parts are still covered — but labor isn't. A single repair call can cost $300–$800 in labor alone. coolCARE protects you from that expense for up to a decade.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
              <a href="/schedule">
                Ask About coolCARE <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="space-y-3">
            {[
              "No deductible — ever",
              "One-time purchase at installation",
              "Fully transferrable to new homeowner",
              "Backed by A.M. Best rated insurer",
              "All repairs by Hurricane Air technicians",
              "Covers the labor gap manufacturer warranties leave",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                <span className="mt-[3px] h-4 w-4 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Plan Features</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex gap-4 p-5 rounded-2xl bg-card border border-card-border"
          >
            <div className="h-9 w-9 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-extrabold tabular-nums text-secondary">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="font-bold text-foreground mb-1">{f.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What's covered */}
      <div className="grid lg:grid-cols-2 gap-10 mb-14">
        <div className="rounded-2xl bg-card border border-card-border p-7">
          <h3 className="text-lg font-extrabold text-foreground mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-secondary" /> What's Covered
          </h3>
          <ul className="space-y-3">
            {covered.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-card border border-card-border p-7">
          <h3 className="text-lg font-extrabold text-foreground mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-accent" /> The Math
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A single HVAC labor call averages $300–$800. A compressor replacement can run $800–$1,500 in labor alone. One covered repair pays for the plan many times over.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The coolCARE plan is available exclusively at the time of a new system installation. Ask your technician for pricing — it varies based on system type and size.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-4 h-4 text-secondary" />
            Available only at time of installation
          </div>
        </div>
      </div>

      {/* How to claim */}
      <div className="rounded-2xl bg-card border border-card-border p-7">
        <h2 className="text-xl font-extrabold text-foreground mb-3">How to Use Your Warranty</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          If you experience a covered mechanical failure, simply call us at <a href="tel:2397481815" className="text-secondary font-semibold hover:underline">(239) 748-1815</a> or email <a href="mailto:office@hacswfl.net" className="text-secondary font-semibold hover:underline">office@hacswfl.net</a>. Let our team know you have a coolCARE plan and we'll schedule your service — no deductible, no hassle.
        </p>
        <p className="text-xs text-muted-foreground">License #CAC1813319. Coverage subject to plan terms and conditions.</p>
      </div>
    </PageLayout>
  );
}
