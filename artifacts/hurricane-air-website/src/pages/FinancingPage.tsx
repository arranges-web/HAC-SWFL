import { DollarSign, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    id: "Plan 2521",
    highlight: "Most Popular",
    desc: "Low monthly payments for qualified buyers. Great for planned system replacements or major upgrades.",
  },
  {
    id: "Plan 9998",
    highlight: "0% Interest Option",
    desc: "Interest-free financing for qualifying purchases. Subject to credit approval and promotional period terms.",
  },
  {
    id: "Plan 2832",
    highlight: "Flexible Terms",
    desc: "Extended payment periods for larger projects. Ideal for full system installations or ductwork upgrades.",
  },
  {
    id: "Plan 2740",
    highlight: "Emergency Ready",
    desc: "Fast approval for urgent HVAC needs. Get your system fixed now and pay over time.",
  },
];

export default function FinancingPage() {
  return (
    <PageLayout
      title="Financing Options"
      subtitle="Unexpected HVAC issues shouldn't break the bank. We offer flexible financing plans through GreenSky to keep your family comfortable."
      breadcrumb="Financing"
    >
      {/* Partner callout */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-12 mb-14 noise">
        <div className="relative grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-secondary mb-3">Our Financing Partner</div>
            <h2 className="text-3xl font-extrabold mb-4">GreenSky by Goldman Sachs</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Hurricane Air partners with GreenSky, a Goldman Sachs company, to provide consumer loan programs with competitive rates and flexible terms. Apply takes minutes — most customers receive a decision the same day.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
              <a href="/#contact">
                <Phone className="mr-2 h-4 w-4" />
                Ask About Financing
              </a>
            </Button>
          </div>
          <div className="space-y-3">
            {[
              "Fast application — minutes to apply",
              "Same-day decisions for most applicants",
              "Multiple plans to fit your budget",
              "Available for emergency services too",
              "No prepayment penalties",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Available Financing Plans</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-card border border-card-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-extrabold text-foreground">{plan.id}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-full">{plan.highlight}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{plan.desc}</p>
            <Button asChild variant="outline" size="sm" className="border-secondary/30 text-secondary hover:bg-secondary/10">
              <a href="/#contact">
                Apply Now <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* How it works */}
      <h2 className="text-2xl font-extrabold text-foreground tracking-tight mb-6">How It Works</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {[
          { step: "1", title: "Request Service", desc: "Call us or schedule online. Tell us you're interested in financing — we'll walk you through the options." },
          { step: "2", title: "Apply Through GreenSky", desc: "Apply in minutes via GreenSky's secure platform. Most decisions are made the same day." },
          { step: "3", title: "Get Your System Fixed", desc: "Once approved, we complete your service. You pay over time according to your plan's terms." },
        ].map((s) => (
          <div key={s.step} className="p-6 rounded-2xl bg-card border border-card-border text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-extrabold text-secondary">{s.step}</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Disclosures */}
      <div className="rounded-2xl bg-card border border-card-border p-6 text-xs text-muted-foreground leading-relaxed space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="w-4 h-4 text-secondary" />
          <span className="font-bold text-foreground text-sm">Important Disclosures</span>
        </div>
        <p>GreenSky® is a registered trademark of GreenSky, LLC, a subsidiary of Goldman Sachs Bank USA. NMLS #1416362.</p>
        <p>Loans originated by Goldman Sachs Bank USA, Salt Lake City Branch. NMLS #208156. Equal Opportunity Lender.</p>
        <p>Administrative or finance fees may apply. Subject to credit approval. See loan agreement for full terms and conditions.</p>
        <p>Access regulatory information at <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noreferrer" className="text-secondary hover:underline">www.nmlsconsumeraccess.org</a>.</p>
      </div>
    </PageLayout>
  );
}
