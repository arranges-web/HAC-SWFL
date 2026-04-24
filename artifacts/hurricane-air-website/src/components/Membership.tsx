import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Priority service scheduling",
  "No overtime or emergency fees",
  "Two comprehensive annual tune-ups",
  "15% discount on all repairs",
  "Extended lifespan of your A/C unit",
  "Peace of mind during storm season"
];

export function Membership() {
  return (
    <section id="membership" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Abstract background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Premium Protection</h2>
              <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Stay Cool All Year Long.
              </h3>
              <p className="text-xl text-zinc-400">
                Join the Hurricane Home Comfort Club and never worry about your A/C breaking down when you need it most.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg text-zinc-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-800 border border-zinc-700 p-8 sm:p-10 rounded-3xl max-w-md w-full shadow-2xl relative"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F4951F] text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg">
                BEST VALUE
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h4 className="text-2xl font-bold mb-2">Annual Membership</h4>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl font-bold text-secondary">$</span>
                  <span className="text-6xl font-extrabold text-white">189</span>
                  <span className="text-zinc-400 font-medium">/year</span>
                </div>
              </div>

              <a href="#contact" className="block">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 text-lg shadow-[0_0_20px_rgba(49,232,67,0.3)] hover:shadow-[0_0_30px_rgba(49,232,67,0.5)] transition-all">
                  Become a Member
                </Button>
              </a>
              
              <p className="text-center text-xs text-zinc-500 mt-4">
                Renews automatically. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
