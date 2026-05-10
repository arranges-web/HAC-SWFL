import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const galleryPhotos = [
  { src: "/team/chris-ro.jpeg",        alt: "Chris and Ro — Hurricane Air technicians heading out on a job", tall: true },
  { src: "/team/van-green.jpeg",        alt: "Hurricane Air branded green service van at a SWFL job site" },
  { src: "/team/tech-sunglasses.jpeg",  alt: "Hurricane Air technician inspecting an outdoor AC unit" },
  { src: "/team/ro-maintenance-1.jpeg", alt: "Ro running diagnostics during a scheduled AC maintenance visit" },
  { src: "/team/brian-truck.jpeg",      alt: "Brian loading a fully stocked Hurricane Air service van" },
  { src: "/team/joey-condenser.jpeg",   alt: "Joey working on an AC condenser unit", tall: true },
  { src: "/team/austin-truck.png",      alt: "Austin with a Hurricane Air service van ready for the day" },
  { src: "/team/van-blue.jpeg",         alt: "Hurricane Air branded blue service van — Just Another Quality Job!" },
  { src: "/team/tech-gauges.jpeg",      alt: "Hurricane Air technician checking refrigerant pressure with gauges" },
  { src: "/team/duct-cleaning.jpeg",    alt: "Hurricane Air technician cleaning ceiling ductwork at a customer's home" },
  { src: "/team/install-condenser.jpeg",alt: "Team installing a new high-efficiency AC condenser at a SWFL property" },
  { src: "/team/ro-maintenance-2.jpeg", alt: "Ro performing an AC maintenance check at an outdoor unit" },
];

export function TeamCollage() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] bg-secondary/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.05] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary/60" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">Real People. Real Work.</span>
            <span className="h-px w-8 bg-secondary/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Your neighbors — out in the field,{" "}
            <span className="text-secondary">every day.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            These aren't stock photos. This is our actual team, on actual jobs, across Lee, Collier, and Charlotte Counties.
          </p>
        </motion.div>

        {/* Masonry photo grid — all 12 real team photos */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          style={{ gridAutoRows: "200px" }}
        >
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg group ${
                photo.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-card-border">
            <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-secondary" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-foreground">Privately Owned Since 2003</div>
              <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                Independent, family-operated — not a franchise.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-card-border">
            <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-foreground">100% Local, W-2 Team</div>
              <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                Trained in-house · never subcontracted · always accountable.
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-6 glow-green"
          >
            <Link href="/about">Meet the Team</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-card-border hover:border-secondary/40 hover:text-secondary font-bold h-12 px-6"
          >
            <Link href="/careers">We're Hiring</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
