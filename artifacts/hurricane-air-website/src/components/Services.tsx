import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Wrench, Wind, Fan, ArrowUpRight, Shield, Zap } from "lucide-react";

const services = [
  {
    title: "A/C Repair",
    description: "Fast, accurate diagnostics and repairs for every brand. Most problems fixed in a single visit.",
    icon: Wrench,
    accent: "text-accent",
    accentBg: "from-accent/15 to-accent/0",
    chipBg: "bg-accent/10",
  },
  {
    title: "Installation & Replacement",
    description: "Premium high-efficiency systems sized correctly the first time, with a five-year parts warranty.",
    icon: Wind,
    accent: "text-secondary",
    accentBg: "from-secondary/15 to-secondary/0",
    chipBg: "bg-secondary/10",
  },
  {
    title: "Routine Maintenance",
    description: "Annual tune-ups that extend system life, lower bills, and prevent peak-summer breakdowns.",
    icon: Fan,
    accent: "text-blue-500",
    accentBg: "from-blue-500/15 to-blue-500/0",
    chipBg: "bg-blue-500/10",
  },
];

function MagneticTilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateZ(0)`;
  }

  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      className={className}
    >
      {children}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Soft brand glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-secondary" />
            <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Our Services</h2>
            <span className="h-px w-8 bg-secondary" />
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            Comprehensive cooling for the <span className="text-secondary">SWFL heat.</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From emergency repairs to full system replacements, our certified technicians deliver reliable comfort when you need it most.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:gap-6 lg:h-[640px]">
          {/* Featured: Hurricane Promise */}
          <MagneticTilt className="lg:row-span-2 group">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-10 flex flex-col shadow-xl noise"
            >
              {/* Hurricane swirl overlay */}
              <div className="absolute -right-24 -bottom-24 w-[500px] h-[500px] opacity-20 pointer-events-none">
                <svg viewBox="0 0 600 600" fill="none" className="animate-spin-slower w-full h-full">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <circle
                      key={i}
                      cx="300"
                      cy="300"
                      r={50 + i * 45}
                      stroke="hsl(126 80% 55%)"
                      strokeWidth="1.5"
                      strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`}
                      fill="none"
                    />
                  ))}
                </svg>
              </div>

              <div className="absolute -top-32 -left-20 w-72 h-72 bg-secondary/30 rounded-full blur-[100px] animate-glow-pulse" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass-tile">
                  <Zap className="h-3.5 w-3.5 text-secondary fill-secondary" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/95">The Promise</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6 leading-[1.05] tracking-tight">
                  Same-day service or <span className="text-secondary">your visit is free.</span>
                </h3>

                <p className="text-white/75 mt-5 text-base leading-relaxed max-w-md">
                  Call before noon Monday through Saturday and we'll be at your door before sunset — guaranteed in writing. Anything less and we waive the dispatch fee.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-auto pt-8">
                  {[
                    { stat: "47", label: "min avg" },
                    { stat: "24/7", label: "emergency" },
                    { stat: "5★", label: "rated" },
                  ].map((s) => (
                    <div key={s.label} className="glass-tile rounded-2xl p-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">{s.stat}</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-secondary font-bold text-sm group/link"
                >
                  Read the full promise
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </MagneticTilt>

          {/* Standard service cards */}
          {services.map((service, index) => (
            <MagneticTilt key={service.title} className="group">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full overflow-hidden rounded-3xl bg-card border border-card-border p-7 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-500`}
              >
                {/* Gradient sheen on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${service.chipBg} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                    <service.icon className={`w-6 h-6 ${service.accent}`} />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold mb-2 text-card-foreground tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${service.accent} group/link self-start`}
                  >
                    Get a quote
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] ${
                    service.accent === "text-accent"
                      ? "bg-gradient-to-r from-accent via-accent to-secondary"
                      : service.accent === "text-secondary"
                      ? "bg-gradient-to-r from-secondary via-secondary to-accent"
                      : "bg-gradient-to-r from-blue-500 via-blue-500 to-secondary"
                  } scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            </MagneticTilt>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-card border border-card-border text-foreground font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 press"
          >
            <Shield className="h-4 w-4 text-secondary" />
            View All A/C Services
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
