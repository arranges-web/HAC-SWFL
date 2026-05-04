import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setCount(target);
      return;
    }
    const duration = 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out-cubic
      setCount(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 20, suffix: "+", label: "Years in SWFL", dot: "bg-secondary", note: "Family owned since 2003" },
  { value: 3, suffix: "", label: "Counties served", dot: "bg-accent", note: "Lee · Collier · Charlotte" },
  { value: 10, suffix: "k+", label: "Homes serviced", dot: "bg-blue-400", note: "Across all three counties" },
  { value: 5, suffix: ".0★", label: "Average rating", dot: "bg-secondary", note: "1,200+ verified reviews" },
];

export function Stats() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-primary text-primary-foreground overflow-hidden noise">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-[0.04] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-secondary/15 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full" />

        {/* Faint hurricane swirl */}
        <svg
          viewBox="0 0 600 600"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1400px] opacity-[0.07] animate-spin-slower"
          fill="none"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx="300"
              cy="300"
              r={60 + i * 45}
              stroke="white"
              strokeWidth="1"
              strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary/60" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">By the Numbers</span>
            <span className="h-px w-8 bg-secondary/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Built on two decades of <span className="text-secondary">SWFL trust.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-tile rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col group hover:bg-white/[0.08] transition-colors duration-500"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  {s.label}
                </span>
              </div>

              <div className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-none tracking-tight">
                <Counter target={s.value} suffix={s.suffix} />
              </div>

              <p className="text-xs sm:text-sm text-white/60 mt-4 leading-snug">{s.note}</p>

              {/* Animated bottom rule */}
              <div className="mt-5 h-[2px] rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full ${s.dot} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}
                  style={{ width: "100%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
