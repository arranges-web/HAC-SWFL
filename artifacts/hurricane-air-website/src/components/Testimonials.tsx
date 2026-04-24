import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

const featured = [
  {
    name: "Jennifer M.",
    location: "Cape Coral, FL",
    service: "Emergency Repair",
    avatar: "JM",
    color: "from-secondary to-emerald-400",
    text: "AC died at 4pm on a Sunday in July. Hurricane Air was here by 6pm. The tech was polite, explained exactly what was wrong, and had it running in under an hour. Absolute lifesavers — I'm using them for everything from now on.",
    rating: 5,
  },
  {
    name: "Robert T.",
    location: "Naples, FL",
    service: "New System Install",
    avatar: "RT",
    color: "from-accent to-amber-300",
    text: "I got three quotes for a new system. Hurricane wasn't the absolute cheapest, but they were the only ones who actually measured the house and explained the SEER ratings clearly. Installation was spotless — they even cleaned up better than they found it.",
    rating: 5,
  },
  {
    name: "Maria S.",
    location: "Punta Gorda, FL",
    service: "Annual Maintenance",
    avatar: "MS",
    color: "from-blue-400 to-cyan-300",
    text: "Been using their annual maintenance plan for 4 years now. My system runs like new and my electric bills dropped about 18%. They always show up on time, wear shoe covers, and treat my home with respect.",
    rating: 5,
  },
];

const shortQuotes = [
  { who: "David K.", where: "Fort Myers", text: "Best AC company in SWFL — period." },
  { who: "Amelia R.", where: "Estero", text: "Quoted exactly what they charged. No surprises." },
  { who: "Carlos V.", where: "Sarasota", text: "Saved my Airbnb during peak season." },
  { who: "Linda H.", where: "Bonita Springs", text: "Finally an HVAC company that calls back." },
  { who: "Tom B.", where: "Marco Island", text: "Five stars wasn't enough — make it ten." },
  { who: "Priya N.", where: "Venice", text: "Polite, fast, fair. Exactly what you want." },
  { who: "Greg D.", where: "North Port", text: "From quote to install in 48 hours flat." },
  { who: "Sarah L.", where: "Lehigh Acres", text: "They're the only ones I'll call now." },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = featured[active];

  function next() {
    setActive((i) => (i + 1) % featured.length);
  }
  function prev() {
    setActive((i) => (i - 1 + featured.length) % featured.length);
  }

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-zinc-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Real Reviews</h2>
            <span className="h-px w-8 bg-secondary" />
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05] mb-5">
            Loved by your <span className="text-secondary">SWFL neighbors.</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            1,200+ verified Google reviews. Here's what people say about the Hurricane difference.
          </p>
        </div>

        {/* Featured pull-quote */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-xl border border-zinc-100 p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Big ghosted quote glyph */}
          <Quote className="absolute -top-6 -left-4 w-44 h-44 text-zinc-100" strokeWidth={1.2} />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
                <span className="ml-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-wider">
                  <BadgeCheck className="h-3 w-3" />
                  Verified Google review
                </span>
              </div>

              <p className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-foreground leading-[1.25] tracking-tight">
                "{current.text}"
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}
                >
                  {current.avatar}
                </div>
                <div>
                  <div className="font-extrabold text-foreground tracking-tight">{current.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {current.location} · <span className="text-secondary font-semibold">{current.service}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pager */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3 items-center lg:items-end justify-between lg:justify-center">
              <div className="flex items-center gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      i === active ? "w-10 bg-secondary" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-xl bg-zinc-100 hover:bg-secondary hover:text-white text-foreground flex items-center justify-center transition-all press shadow-sm"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-xl bg-zinc-100 hover:bg-secondary hover:text-white text-foreground flex items-center justify-center transition-all press shadow-sm"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary scrolling marquee of short quotes */}
        <div className="relative mt-12 overflow-hidden">
          <div className="marquee" style={{ ["--marquee-duration" as string]: "60s" }}>
            {[...shortQuotes, ...shortQuotes].map((q, i) => (
              <div
                key={i}
                className="shrink-0 w-[300px] sm:w-[340px] mx-3 bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">"{q.text}"</p>
                <div className="text-xs text-muted-foreground mt-2">
                  <span className="font-bold text-foreground">{q.who}</span> · {q.where}
                </div>
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-zinc-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-zinc-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
