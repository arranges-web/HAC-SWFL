import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ac-install.png"
                alt="Hurricane Air technician installing a high-efficiency system"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
            </div>

            {/* Floating BBB badge */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white p-5 rounded-3xl shadow-2xl border border-zinc-100 hidden md:flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center">
                <span className="text-xl font-extrabold text-secondary">A+</span>
              </div>
              <div>
                <p className="font-extrabold text-foreground text-sm tracking-tight">BBB Accredited</p>
                <p className="text-xs text-muted-foreground">Top-rated SWFL business</p>
              </div>
            </div>

            {/* Floating stars badge */}
            <div className="absolute -top-5 -left-5 bg-primary text-white px-5 py-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-xs font-bold tracking-wide">1,200+ reviews</span>
            </div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-7"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-secondary" />
              <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">About Us</h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight">
              Family owned. Locally operated. <span className="text-secondary">Fiercely dedicated.</span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For more than two decades, Hurricane Air Conditioning of SWFL has been the team homeowners call when the Florida heat won't quit. We aren't a faceless corporate franchise — we're your neighbors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple: treat every home like it's our own, quote with transparent flat-rate pricing, and deliver workmanship that lasts. When the storm hits, or your AC dies at 4pm on a Sunday, we show up.
            </p>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-border">
              {[
                { value: "20+", label: "Years in SWFL" },
                { value: "10k+", label: "Homes served" },
                { value: "1,200+", label: "5-star reviews" },
              ].map((s) => (
                <div key={s.label} className="pt-5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-6 group"
              >
                <a href="#contact">
                  Read Our Full Story
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="font-bold h-12 px-6">
                <a href="#testimonials">See Reviews</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
