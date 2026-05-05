import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Truck, ArrowRight } from "lucide-react";
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

function CountyMap({ active, setActive }: { active: CountyKey | null; setActive: (k: CountyKey | null) => void }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      viewBox="0 0 460 640"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto max-h-[300px] sm:max-h-[460px] lg:max-h-none"
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

      {/* Ocean background + dot grid */}
      <rect width="460" height="640" fill="url(#oceanGrad)" rx="28" />
      <rect width="460" height="640" fill="url(#dotgrid)" rx="28" />

      {/* Coastline accent */}
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

      {/* Compass */}
      <g transform="translate(412, 32)">
        <circle r="16" fill="white" stroke="hsl(228 30% 78%)" strokeWidth="1.2" />
        <path d="M0 -11 L3.5 0 L0 11 L-3.5 0 Z" fill="hsl(33 90% 54%)" />
        <text y="3" fontSize="7" fontWeight="800" fill="hsl(228 50% 25%)" textAnchor="middle">N</text>
      </g>

      {/* Counties */}
      {counties.map((c) => {
        const isActive = active === c.key;
        return (
          <g
            key={c.key}
            onMouseEnter={() => setActive(c.key)}
            onFocus={() => setActive(c.key)}
            tabIndex={0}
            className="cursor-pointer outline-none"
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

      {/* Dispatch routes from HQ */}
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
            className="transition-opacity duration-400"
          >
            {!reduceMotion && (
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="1.8s" repeatCount="indefinite" />
            )}
          </line>
        );
      })}

      {/* City pins */}
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

      {/* HQ pin (Fort Myers) */}
      <g>
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

export function ServiceArea() {
  const [active, setActive] = useState<CountyKey | null>("lee");
  const activeCounty = counties.find((c) => c.key === active);

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-blue-500/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-secondary/[0.06] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy + counties list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-secondary" />
              <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Service Area</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-5 sm:mb-6">
              Proudly serving all of <span className="text-secondary">Southwest Florida.</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Headquartered in Fort Myers, our fully-stocked service vans dispatch across three counties — covering every neighborhood from the Gulf to Lehigh Acres.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {counties.map((county) => {
                const isActive = active === county.key;
                return (
                  <button
                    key={county.key}
                    type="button"
                    onMouseEnter={() => setActive(county.key)}
                    onFocus={() => setActive(county.key)}
                    className={`text-left rounded-2xl p-5 border transition-all duration-400 press ${
                      isActive
                        ? "bg-secondary/10 border-secondary/40 shadow-md"
                        : "bg-card border-card-border hover:border-secondary/30 hover:bg-secondary/5"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className={`w-4 h-4 ${isActive ? "text-secondary" : "text-primary"}`} />
                      <h4 className="font-extrabold text-base tracking-tight text-foreground">{county.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {county.cities.slice(0, 3).join(" · ")}
                      {county.cities.length > 3 && ` · +${county.cities.length - 3}`}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 border border-blue-100/80 flex items-center justify-center">
              <CountyMap active={active} setActive={setActive} />
            </div>

            {/* Floating glass legend */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-[280px] glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="h-4 w-4 text-accent" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-extrabold text-foreground">
                  {activeCounty ? activeCounty.name : "Service Coverage"}
                </span>
              </div>
              {activeCounty ? (
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
              ) : (
                <p className="text-xs text-muted-foreground">Hover any county to see the cities we cover.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
