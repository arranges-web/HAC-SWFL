import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

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
  { who: "Carlos V.", where: "Fort Myers", text: "Saved my Airbnb during peak season." },
  { who: "Linda H.", where: "Bonita Springs", text: "Finally an HVAC company that calls back." },
  { who: "Tom B.", where: "Marco Island", text: "Five stars wasn't enough — make it ten." },
  { who: "Priya N.", where: "Cape Coral", text: "Polite, fast, fair. Exactly what you want." },
  { who: "Greg D.", where: "Port Charlotte", text: "From quote to install in 48 hours flat." },
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
    <section id="testimonials" className="relative py-14 sm:py-20 lg:py-28 bg-zinc-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Real Reviews</h2>
            <span className="h-px w-8 bg-secondary" />
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05] mb-4 sm:mb-5">
            Loved by your <span className="text-secondary">SWFL neighbors.</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Reviews you can trust — direct from Google.
          </p>

          {/* Google reviews badge */}
          <a
            href="https://www.google.com/search?q=Hurricane+Air+Conditioning+SWFL+reviews"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 rounded-2xl bg-white border border-zinc-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
            aria-label="View our Google reviews"
          >
            <GoogleLogo className="h-7 w-7 shrink-0" />
            <div className="text-left leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold text-foreground tabular-nums">4.9</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-semibold text-muted-foreground tracking-wide mt-0.5">
                Based on <span className="font-extrabold text-foreground">749</span> Google reviews
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 ml-2 text-[11px] font-bold uppercase tracking-widest text-secondary group-hover:translate-x-0.5 transition-transform">
              View all
              <ChevronRight className="h-3 w-3" />
            </span>
          </a>
        </div>

        {/* Featured pull-quote */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-xl border border-zinc-100 p-6 sm:p-10 lg:p-14 overflow-hidden"
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

              <p className="text-xl sm:text-2xl lg:text-[2.25rem] font-bold text-foreground leading-[1.25] tracking-tight">
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
        <div className="relative mt-8 sm:mt-12 overflow-hidden">
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
