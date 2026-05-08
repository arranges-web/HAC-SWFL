import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, Truck, ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Link } from "wouter";

type CountyKey = "charlotte" | "lee" | "collier";

interface County {
  key: CountyKey;
  name: string;
  cities: string[];
  cx: number;
  cy: number;
  path: string;
}

const HQ = { x: 235, y: 310 };

const counties: County[] = [
  {
    key: "charlotte",
    name: "Charlotte County",
    cities: ["Punta Gorda", "Port Charlotte", "Englewood"],
    cx: 195,
    cy: 125,
    path: "M70 30 L350 25 L360 215 L80 225 Z",
  },
  {
    key: "lee",
    name: "Lee County",
    cities: ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres"],
    cx: 200,
    cy: 310,
    path: "M80 225 L360 215 L365 400 L85 410 Z",
  },
  {
    key: "collier",
    name: "Collier County",
    cities: ["Naples", "Marco Island", "Golden Gate"],
    cx: 205,
    cy: 495,
    path: "M85 410 L365 400 L380 585 L100 590 Z",
  },
];

function CountyMap({
  active,
  onSelect,
}: {
  active: CountyKey | null;
  onSelect: (k: CountyKey) => void;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      viewBox="0 0 460 640"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
      role="img"
      aria-label="Map of Hurricane Air Conditioning's Southwest Florida service area"
    >
      <defs>
        <linearGradient id="countyDefault" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(228 60% 96%)" />
          <stop offset="100%" stopColor="hsl(228 35% 88%)" />
        </linearGradient>
        <linearGradient id="countyActive" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(126 80% 60%)" />
          <stop offset="100%" stopColor="hsl(126 80% 42%)" />
        </linearGradient>
        <linearGradient id="oceanGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(200 88% 95%)" />
          <stop offset="100%" stopColor="hsl(200 70% 86%)" />
        </linearGradient>
        <radialGradient id="hqHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(126 80% 55%)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(126 80% 55%)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dotgrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="hsl(228 50% 70%)" opacity="0.18" />
        </pattern>
        <filter id="countyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="hsl(228 60% 28%)" floodOpacity="0.18" />
        </filter>
      </defs>

      <rect width="460" height="640" fill="url(#oceanGrad)" rx="28" />
      <rect width="460" height="640" fill="url(#dotgrid)" rx="28" />

      <path
        d="M40 0 Q 55 80 45 160 Q 35 240 50 320 Q 65 400 40 480 Q 30 560 50 640"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="4 6"
        opacity="0.65"
      />
      <text x="20" y="22" fill="hsl(200 60% 50%)" fontSize="10" fontWeight="800" letterSpacing="3" className="uppercase">
        GULF
      </text>

      <g transform="translate(412, 32)">
        <circle r="16" fill="white" stroke="hsl(228 30% 78%)" strokeWidth="1.2" />
        <path d="M0 -11 L3.5 0 L0 11 L-3.5 0 Z" fill="hsl(33 90% 54%)" />
        <text y="3" fontSize="7" fontWeight="800" fill="hsl(228 50% 25%)" textAnchor="middle">N</text>
      </g>

      {counties.map((c) => {
        const isActive = active === c.key;
        return (
          <g
            key={c.key}
            onClick={() => onSelect(c.key)}
            onMouseEnter={() => onSelect(c.key)}
            onFocus={() => onSelect(c.key)}
            tabIndex={0}
            role="button"
            aria-label={`Select ${c.name}`}
            aria-pressed={isActive}
            className="cursor-pointer outline-none focus-visible:[&>path]:stroke-secondary"
          >
            <path
              d={c.path}
              fill={isActive ? "url(#countyActive)" : "url(#countyDefault)"}
              stroke={isActive ? "hsl(126 80% 28%)" : "hsl(228 30% 72%)"}
              strokeWidth="1.8"
              filter="url(#countyShadow)"
              className="transition-all duration-400"
            />
            <text
              x={c.cx}
              y={c.cy}
              textAnchor="middle"
              fontSize="14"
              fontWeight="900"
              fill={isActive ? "white" : "hsl(228 55% 20%)"}
              className="transition-all duration-400 select-none uppercase tracking-wider pointer-events-none"
              style={{ letterSpacing: "0.05em" }}
            >
              {c.name.replace(" County", "")}
            </text>
            <text
              x={c.cx}
              y={c.cy + 16}
              textAnchor="middle"
              fontSize="9"
              fill={isActive ? "white" : "hsl(228 30% 50%)"}
              fontWeight="700"
              className="transition-all duration-400 select-none uppercase tracking-widest pointer-events-none"
            >
              County
            </text>
          </g>
        );
      })}

      {counties.map((c) => {
        if (c.key === "lee") return null;
        return (
          <line
            key={`route-${c.key}`}
            x1={HQ.x}
            y1={HQ.y}
            x2={c.cx}
            y2={c.cy}
            stroke="hsl(33 90% 54%)"
            strokeWidth="2.2"
            strokeDasharray="5 7"
            strokeLinecap="round"
            opacity={active === c.key ? "1" : "0.55"}
            className="transition-opacity duration-400 pointer-events-none"
          >
            {!reduceMotion && (
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="1.8s" repeatCount="indefinite" />
            )}
          </line>
        );
      })}

      {counties.flatMap((c, ci) =>
        c.cities.slice(0, 3).map((city, i) => {
          const angle = (i / 3) * Math.PI * 2 + ci * 0.6;
          const r = 38;
          const x = c.cx + Math.cos(angle) * r;
          const y = c.cy + Math.sin(angle) * r * 0.55;
          const isActive = active === c.key;
          return (
            <g key={`${c.key}-${city}`} className="pointer-events-none">
              <circle
                cx={x}
                cy={y}
                r={isActive ? "3.5" : "2.5"}
                fill={isActive ? "hsl(126 80% 30%)" : "hsl(228 50% 30%)"}
                stroke="white"
                strokeWidth="1.5"
                className="transition-all duration-400"
              />
            </g>
          );
        }),
      )}

      <g className="pointer-events-none">
        <circle cx={HQ.x} cy={HQ.y} r="34" fill="url(#hqHalo)">
          {!reduceMotion && (
            <animate attributeName="r" values="26;38;26" dur="3s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx={HQ.x} cy={HQ.y} r="13" fill="white" stroke="hsl(33 90% 54%)" strokeWidth="3.5" />
        <circle cx={HQ.x} cy={HQ.y} r="5" fill="hsl(33 90% 54%)" />
        <g transform={`translate(${HQ.x + 18}, ${HQ.y - 14})`}>
          <rect x="0" y="0" width="100" height="34" rx="8" fill="white" stroke="hsl(33 90% 54%)" strokeWidth="1.5" />
          <text x="50" y="13" fontSize="8" fontWeight="900" fill="hsl(33 90% 40%)" textAnchor="middle" className="uppercase tracking-widest">
            Hurricane Air HQ
          </text>
          <text x="50" y="26" fontSize="9" fontWeight="700" fill="hsl(228 50% 22%)" textAnchor="middle">
            Fort Myers, FL
          </text>
        </g>
      </g>
    </svg>
  );
}

function CountyCard({
  county,
  isActive,
  onSelect,
}: {
  county: County;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      aria-expanded={isActive}
      className={`w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
        isActive
          ? "bg-secondary/10 border-secondary/50 shadow-md"
          : "bg-card border-card-border hover:border-secondary/30 hover:bg-secondary/5"
      }`}
    >
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <div
          className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isActive ? "bg-secondary/20 border border-secondary/40" : "bg-secondary/5 border border-secondary/15"
          }`}
        >
          <MapPin className={`w-5 h-5 ${isActive ? "text-secondary" : "text-primary"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-extrabold text-base tracking-tight text-foreground leading-tight">
            {county.name}
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {county.cities.length} cities · tap for details
          </p>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-secondary mb-2">
                Cities we serve
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {county.cities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-background border border-card-border text-xs font-bold text-foreground/85"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="/schedule"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xs font-extrabold uppercase tracking-widest transition-colors"
                >
                  Schedule Service
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <a
                  href="tel:2397481815"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-background border border-card-border hover:border-secondary/40 hover:text-secondary text-xs font-extrabold uppercase tracking-widest transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export function ServiceArea() {
  const [active, setActive] = useState<CountyKey>("lee");
  const activeCounty = counties.find((c) => c.key === active);

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-blue-500/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-secondary/[0.06] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary" />
            <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Service Area</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-4 sm:mb-5">
            Proudly serving all of <span className="text-secondary">Southwest Florida.</span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Headquartered in Fort Myers, our fully-stocked vans dispatch across three counties — covering every neighborhood from the Gulf to Lehigh Acres.
          </p>
        </motion.div>

        {/* Mobile: coverage hero + cards. Desktop: cards on left, full map on right. */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* County cards column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 order-2 lg:order-1"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary mb-1">
              Tap a county for city list
            </div>
            {counties.map((county) => (
              <CountyCard
                key={county.key}
                county={county}
                isActive={active === county.key}
                onSelect={() => setActive(county.key)}
              />
            ))}

            {/* Coverage stat strip */}
            <div className="mt-4 grid grid-cols-3 gap-3 p-4 rounded-2xl bg-card border border-card-border">
              <div className="text-center">
                <div className="text-2xl font-black text-secondary tabular-nums leading-none">3</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">
                  Counties
                </div>
              </div>
              <div className="text-center border-x border-card-border">
                <div className="text-2xl font-black text-secondary tabular-nums leading-none">
                  {counties.reduce((acc, c) => acc + c.cities.length, 0)}+
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">
                  Cities
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-secondary tabular-nums leading-none">24/7</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">
                  Dispatch
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            {/* Mobile coverage hero (replaces the SVG map on phones) */}
            <div className="lg:hidden relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-6 sm:p-8 shadow-xl noise">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/[0.18] rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-56 h-56 bg-accent/[0.10] rounded-full blur-[100px] pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Truck className="h-4 w-4 text-secondary" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">
                    Headquartered in Fort Myers
                  </span>
                </div>

                {/* Stylized coverage band — three stacked county strips */}
                <div className="space-y-2 mb-5">
                  {counties.map((c) => {
                    const isActive = active === c.key;
                    return (
                      <button
                        type="button"
                        key={c.key}
                        onClick={() => setActive(c.key)}
                        className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 ${
                          isActive
                            ? "bg-secondary/20 border-secondary/40 shadow-lg shadow-secondary/10"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                        aria-pressed={isActive}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`h-2 w-2 rounded-full transition-colors ${
                              isActive ? "bg-secondary" : "bg-white/40"
                            }`}
                          />
                          <span className="text-sm font-extrabold tracking-tight">
                            {c.name.replace(" County", "")}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                            isActive ? "text-secondary" : "text-white/45"
                          }`}
                        >
                          {c.cities.length} cities
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-white/50">
                      Currently viewing
                    </div>
                    <div className="text-sm font-extrabold tracking-tight truncate">
                      {activeCounty?.name ?? "All Counties"}
                    </div>
                  </div>
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-[10px] font-extrabold uppercase tracking-widest hover:bg-secondary/90 transition-colors shrink-0"
                  >
                    Schedule
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop SVG map */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 border border-blue-100/80">
                <div className="flex items-center justify-center">
                  <CountyMap active={active} onSelect={setActive} />
                </div>
              </div>

              {/* Floating glass legend */}
              <div className="absolute bottom-6 right-6 max-w-[280px] glass rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Truck className="h-4 w-4 text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-extrabold text-foreground">
                    {activeCounty?.name ?? "Service Coverage"}
                  </span>
                </div>
                {activeCounty && (
                  <>
                    <div className="text-xs font-bold text-foreground mb-1.5 uppercase tracking-wider">
                      Cities we serve
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {activeCounty.cities.join(" · ")}
                    </div>
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-secondary hover:text-secondary/80 transition-colors uppercase tracking-widest"
                    >
                      Schedule Service
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
