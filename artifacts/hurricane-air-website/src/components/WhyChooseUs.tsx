import { motion } from "framer-motion";
import { DollarSign, Award, Shield, Calendar, Handshake, BadgeCheck, ClipboardList, Search } from "lucide-react";

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
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative diagonal background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">The Hurricane Difference</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              Why SWFL Homeowners Choose Us
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just fix air conditioners. We restore comfort, provide transparent solutions, and build long-term relationships based on trust.
            </p>
            <div className="p-6 bg-primary rounded-2xl text-primary-foreground">
              <p className="font-semibold text-lg italic">"Trust. Transparency. Teamwork."</p>
              <p className="text-sm text-primary-foreground/70 mt-2">— Our Core Values</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md hover:border-secondary/30 transition-all group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h4 className="font-bold text-sm text-foreground mb-2">{pillar.title}</h4>
                <p className="text-xs text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
