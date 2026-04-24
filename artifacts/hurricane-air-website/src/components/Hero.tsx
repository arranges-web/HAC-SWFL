import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ThermometerSnowflake, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-primary">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="HVAC Technician working"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      {/* Subtle Hurricane Swirl Animation */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[120vw] h-[120vw] max-w-[1500px] max-h-[1500px] rounded-full border-[40px] border-secondary/20 border-dashed"
          style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
              Southwest Florida's Trusted Choice
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            When the Storm Hits, <span className="text-secondary block">We Show Up.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-lg font-medium leading-relaxed">
            Trust. Transparency. Teamwork. Fast, reliable air conditioning repair and installation when you need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 px-8 text-lg shadow-[0_0_20px_rgba(49,232,67,0.4)] hover:shadow-[0_0_30px_rgba(49,232,67,0.6)] transition-all group">
              Instant A/C Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 h-14 px-8 font-bold text-lg backdrop-blur-sm">
              Free Second Opinion
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <ThermometerSnowflake className="h-6 w-6 text-secondary" />
              <span className="text-sm font-semibold text-white/90">Same-Day Service</span>
            </div>
            <div className="flex flex-col gap-2">
              <Zap className="h-6 w-6 text-[#F4951F]" />
              <span className="text-sm font-semibold text-white/90">24/7 Emergency</span>
            </div>
            <div className="flex flex-col gap-2 hidden sm:flex">
              <ShieldCheck className="h-6 w-6 text-secondary" />
              <span className="text-sm font-semibold text-white/90">5-Year Warranty</span>
            </div>
          </div>
        </motion.div>

        {/* Right side could be a subtle form or empty for image focus */}
        <div className="hidden lg:block relative">
          {/* Decorative elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
