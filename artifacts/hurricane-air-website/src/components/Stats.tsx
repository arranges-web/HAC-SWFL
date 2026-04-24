import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ target, duration = 2, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}{suffix}</>;
}

export function Stats() {
  return (
    <section className="bg-primary py-16 text-primary-foreground relative">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">
              <Counter target={20} suffix="+" />
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/80">Years Experience</div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">
              <Counter target={4} />
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/80">Counties Served</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">
              <Counter target={10} suffix="k+" />
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/80">Homes Serviced</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2 flex items-center justify-center">
              5.0<span className="text-2xl ml-1">★</span>
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/80">Star Rating</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
