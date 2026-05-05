import { motion } from "framer-motion";
import { ShieldCheck, Award, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function TeamCollage() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] bg-secondary/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.05] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-card-border bg-primary">
              <img
                src="/team-collage.jpg"
                alt="The Hurricane Air technicians and team in Fort Myers, Florida"
                className="w-full h-auto block"
                loading="lazy"
              />
              {/* Subtle gradient overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-3 sm:-right-6 bg-card border border-card-border rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center gap-3"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center shrink-0">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div className="leading-tight">
                <div className="text-xl sm:text-2xl font-extrabold text-foreground tabular-nums">20+ years</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  Serving SWFL
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-secondary" />
              <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">The Team</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-5 sm:mb-6">
              Real techs.{" "}
              <span className="text-secondary">Real care.</span>{" "}
              Real results.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Every Hurricane Air technician is licensed, background-checked, and trained in-house — never subcontracted.
              When we show up at your door, you're getting someone we'd send to our own grandmother's house.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-card-border">
                <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-secondary" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-extrabold text-foreground">100% W-2 Employees</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Never subcontracted. Background-checked.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-card-border">
                <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-extrabold text-foreground">In-House Training</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Continuous certification across every brand.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
