import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <img 
                src="/ac-install.png" 
                alt="Hurricane Air AC Installation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">A+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">BBB Accredited</p>
                  <p className="text-sm text-muted-foreground">Top Rated Business</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">About Us</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight">
              Family Owned. Locally Operated. Fiercely Dedicated.
            </h3>
            <p className="text-lg text-muted-foreground">
              For over two decades, Hurricane Air Conditioning of SWFL has been the go-to team for homeowners facing the harsh Florida heat. We aren't a faceless corporate franchise — we're your neighbors.
            </p>
            <p className="text-lg text-muted-foreground">
              Our philosophy is simple: Treat every home like it's our own, offer transparent pricing with no surprises, and deliver workmanship that lasts. When the storm hits, or when your AC dies at 4pm on a Sunday, we show up.
            </p>
            
            <div className="pt-6">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8">
                Read Our Full Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
