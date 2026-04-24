import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CreditCard, ShieldCheck, ThermometerSnowflake, Zap, Star, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const SWFL_CITIES = [
  "Fort Myers",
  "Cape Coral",
  "Naples",
  "Bonita Springs",
  "Estero",
  "Marco Island",
  "Punta Gorda",
  "Port Charlotte",
  "Sarasota",
  "Venice",
  "North Port",
  "Lehigh Acres",
];

function HurricaneSwirl({ className = "", strokeWidth = 1.2, opacity = 1 }: { className?: string; strokeWidth?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 600 600" fill="none" className={className} style={{ opacity }}>
      <defs>
        <linearGradient id="swirl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(126 80% 55%)" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(180 80% 55%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(228 98% 21%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(6)].map((_, i) => {
        const r = 60 + i * 40;
        const dash = 8 + i * 2;
        return (
          <circle
            key={i}
            cx="300"
            cy="300"
            r={r}
            stroke="url(#swirl-grad)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${dash * 2}`}
            strokeLinecap="round"
          />
        );
      })}
      {/* spiral arms */}
      {[0, 90, 180, 270].map((rot) => (
        <path
          key={rot}
          d="M300 300 Q 380 240 420 180 T 520 100"
          stroke="url(#swirl-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${rot} 300 300)`}
          opacity="0.5"
        />
      ))}
      {/* Eye */}
      <circle cx="300" cy="300" r="20" fill="hsl(126 80% 55%)" opacity="0.4" />
      <circle cx="300" cy="300" r="8" fill="hsl(126 80% 55%)" />
    </svg>
  );
}

function LightningStreak({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 100 200" className={className} fill="none">
      <path
        d="M55 5 L40 80 L62 78 L35 195 L52 110 L30 112 Z"
        fill="hsl(126 80% 55%)"
        className="animate-lightning"
        style={{ animationDelay: `${delay}s`, filter: "drop-shadow(0 0 12px hsl(126 80% 55% / 0.8))" }}
      />
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-primary noise">
      {/* Layered atmospheric background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center opacity-25"
        />
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[#011a8a]/80" />
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-secondary/20 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Hurricane swirls — multiple layers */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <HurricaneSwirl className="absolute w-[140vw] h-[140vw] max-w-[1800px] max-h-[1800px] animate-spin-slower" opacity={0.15} />
        <HurricaneSwirl className="absolute w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] animate-spin-reverse" opacity={0.25} />
      </div>

      {/* Lightning streaks */}
      <LightningStreak className="absolute top-10 left-[12%] w-12 h-32 z-0 pointer-events-none hidden sm:block" delay={0} />
      <LightningStreak className="absolute top-[30%] right-[8%] w-10 h-28 z-0 pointer-events-none hidden md:block" delay={3.5} />
      <LightningStreak className="absolute bottom-[20%] left-[8%] w-8 h-24 z-0 pointer-events-none hidden lg:block" delay={6} />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left column: copy */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-white space-y-7"
        >
          {/* Live status pill */}
          <div className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full glass-tile text-white/95">
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
              Live in SWFL · Dispatching now
            </span>
          </div>

          {/* Headline with staggered word reveal */}
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold leading-[1.02] tracking-tight">
            {["When", "the", "storm", "hits,"].map((word, i) => (
              <motion.span
                key={i}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <span className="block">
              {["we", "show", "up."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block mr-3 ${
                    word === "show" || word === "up." ? "text-secondary" : ""
                  }`}
                >
                  {word === "up." ? (
                    <span className="relative">
                      <span className="relative z-10">up.</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute -bottom-1 left-0 right-0 h-[10px] bg-secondary/40 origin-left rounded-full blur-[2px]"
                      />
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl text-white/80 max-w-xl font-medium leading-relaxed"
          >
            Trust. Transparency. Teamwork. Same-day air conditioning repair, replacement, and 24/7 emergency service across Lee, Collier, Charlotte and Sarasota counties.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-2"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 px-7 text-base sm:text-lg glow-green hover:translate-y-[-2px] group"
            >
              <a href="#contact">
                Instant A/C Quote
                <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/25 text-white hover:bg-white/15 hover:text-white h-14 px-7 font-bold text-base sm:text-lg backdrop-blur-md"
            >
              <a href="#contact">Free Second Opinion</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 font-bold h-14 px-7 text-base sm:text-lg glow-orange hover:translate-y-[-2px] group"
            >
              <a href="#financing">
                <CreditCard className="mr-1 h-5 w-5" />
                Apply for Financing
              </a>
            </Button>
          </motion.div>

          {/* Trust pill chips */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 pt-6"
          >
            {[
              { icon: ThermometerSnowflake, label: "Same-Day Service", color: "text-secondary" },
              { icon: Zap, label: "24/7 Emergency", color: "text-accent" },
              { icon: ShieldCheck, label: "5-Year Warranty", color: "text-secondary" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full glass-tile text-white/95 press"
              >
                <chip.icon className={`h-4 w-4 ${chip.color}`} />
                <span className="text-xs sm:text-sm font-semibold">{chip.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: floating glass cards */}
        <div className="lg:col-span-5 hidden lg:block relative h-[480px]">
          {/* Soft glow behind cards */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/25 rounded-full blur-[100px]" />

          {/* Card 1: Today's conditions */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-2 right-4 w-[280px] glass-tile rounded-3xl p-6 text-white animate-float"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Right now</span>
              <Sun className="h-5 w-5 text-accent" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tabular-nums">86°</span>
              <span className="text-sm text-white/70 pb-1">Fort Myers</span>
            </div>
            <div className="text-xs text-white/70 mt-1">Feels like 94° · Humidity 74%</div>
            <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <div className="text-[10px] text-white/50 mt-1.5 uppercase tracking-wider">Indoor demand · High</div>
          </motion.div>

          {/* Card 2: Dispatch */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 right-24 w-[260px] glass-tile rounded-3xl p-6 text-white animate-float-slow"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-extrabold leading-none tabular-nums">47<span className="text-base font-medium text-white/60"> min</span></div>
                <div className="text-[11px] uppercase tracking-widest text-white/60 font-semibold mt-1">Avg dispatch</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i < 4 ? "bg-secondary" : "bg-white/15"}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Card 3: Reviews */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-44 left-0 w-[240px] glass-tile rounded-3xl p-5 text-white animate-float"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
              <span className="ml-auto text-xs text-white/60 font-semibold">5.0</span>
            </div>
            <p className="text-sm text-white/85 leading-snug font-medium italic">
              "Fixed our AC on a Sunday in 90 minutes. Total lifesavers."
            </p>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-white/60">
              <span className="font-semibold text-white/80">Jennifer M.</span>
              <span>·</span>
              <span>Cape Coral</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SWFL city marquee at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 py-4 border-t border-white/10 bg-gradient-to-r from-primary/80 via-primary/40 to-primary/80 backdrop-blur-md"
        aria-hidden
      >
        <div className="marquee" style={{ ["--marquee-duration" as string]: "60s" }}>
          {[...SWFL_CITIES, ...SWFL_CITIES].map((city, i) => (
            <div key={i} className="flex items-center gap-3 px-6 shrink-0">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">{city}</span>
              <span className="h-1 w-1 rounded-full bg-secondary/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
