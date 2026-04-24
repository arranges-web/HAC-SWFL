import { motion } from "framer-motion";
import { DollarSign, Award, Shield, Calendar, Handshake, BadgeCheck, ClipboardList, Search, Zap } from "lucide-react";

const pillars = [
  { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees, ever." },
  { icon: Award, title: "20+ Years In Business", desc: "Deep roots in SWFL." },
  { icon: Shield, title: "5-Year Parts Warranty", desc: "Guaranteed peace of mind." },
  { icon: Calendar, title: "Same Day Service", desc: "We arrive when we say we will." },
  { icon: Handshake, title: "Friendly Professionals", desc: "Respectful of your home." },
  { icon: BadgeCheck, title: "Fully Licensed & Insured", desc: "State-certified experts." },
  { icon: ClipboardList, title: "Annual Service Plans", desc: "Keep your system running." },
  { icon: Search, title: "Free Second Opinion", desc: "Honest advice you can trust." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-zinc-50 overflow-hidden">
      {/* Diagonal section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-background"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />
      {/* Soft glows */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sticky intro panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-secondary" />
              <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">The Hurricane Difference</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.05]">
              Why SWFL homeowners pick us — and stay.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just fix air conditioners. We restore comfort, give honest answers, and build long-term relationships rooted in trust.
            </p>

            {/* Vow card */}
            <div className="relative overflow-hidden p-7 bg-primary text-primary-foreground rounded-3xl shadow-xl">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/30 blur-[60px] rounded-full" />
              <div className="relative">
                <Zap className="h-6 w-6 text-secondary fill-secondary mb-4" />
                <p className="font-extrabold text-2xl tracking-tight leading-tight">
                  Trust. Transparency. Teamwork.
                </p>
                <p className="text-sm text-primary-foreground/70 mt-3">— Our Core Values, since 2003</p>
              </div>
            </div>
          </div>

          {/* Pillars grid — chip style */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-2xl border border-zinc-100 p-5 flex items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-secondary/40 transition-all duration-400 overflow-hidden press"
              >
                {/* Hover gradient sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative w-11 h-11 rounded-xl bg-zinc-50 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 group-hover:scale-110 group-hover:rotate-[-6deg] transition-all duration-400">
                  <pillar.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                </div>

                <div className="relative min-w-0 flex-1">
                  <h4 className="font-extrabold text-base text-foreground mb-1 tracking-tight">{pillar.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
