import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck } from "lucide-react";

type CountyKey = "sarasota" | "charlotte" | "lee" | "collier";

interface County {
  key: CountyKey;
  name: string;
  cities: string[];
  responseTime: string;
  // approximate centroid in viewBox coords for dispatch line + label
  cx: number;
  cy: number;
  // SVG path of county shape (stylized, not geographically perfect)
  path: string;
}

const HQ = { x: 235, y: 365 }; // Fort Myers HQ in Lee County

const counties: County[] = [
  {
    key: "sarasota",
    name: "Sarasota County",
    cities: ["Sarasota", "Venice", "North Port"],
    responseTime: "~75 min",
    cx: 195,
    cy: 90,
    path: "M70 30 L350 25 L355 165 L75 175 Z",
  },
  {
    key: "charlotte",
    name: "Charlotte County",
    cities: ["Punta Gorda", "Port Charlotte", "Englewood"],
    responseTime: "~55 min",
    cx: 195,
    cy: 220,
    path: "M75 175 L355 165 L360 270 L80 280 Z",
  },
  {
    key: "lee",
    name: "Lee County",
    cities: ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres"],
    responseTime: "30–60 min",
    cx: 200,
    cy: 340,
    path: "M80 280 L360 270 L365 405 L85 415 Z",
  },
  {
    key: "collier",
    name: "Collier County",
    cities: ["Naples", "Marco Island", "Golden Gate"],
    responseTime: "~70 min",
    cx: 205,
    cy: 500,
    path: "M85 415 L365 405 L380 580 L100 590 Z",
  },
];

function CountyMap({ active, setActive }: { active: CountyKey | null; setActive: (k: CountyKey | null) => void }) {
  return (
    <svg
      viewBox="0 0 460 640"
      className="w-full h-full"
      role="img"
      aria-label="Map of Southwest Florida service area showing four counties"
    >
      <defs>
        <linearGradient id="countyDefault" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(228 60% 95%)" />
          <stop offset="100%" stopColor="hsl(228 30% 88%)" />
        </linearGradient>
        <linearGradient id="countyActive" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(126 80% 65%)" />
          <stop offset="100%" stopColor="hsl(126 80% 50%)" />
        </linearGradient>
        <linearGradient id="oceanGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(200 80% 92%)" />
          <stop offset="100%" stopColor="hsl(200 70% 85%)" />
        </linearGradient>
        <filter id="countyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="hsl(228 60% 30%)" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ocean / Gulf background */}
      <rect width="460" height="640" fill="url(#oceanGrad)" rx="24" />

      {/* Coastline accent — wavy line on the left */}
      <path
        d="M40 0 Q 55 80 45 160 Q 35 240 50 320 Q 65 400 40 480 Q 30 560 50 640"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="4 6"
        opacity="0.6"
      />
      <text x="20" y="20" fill="hsl(200 60% 55%)" fontSize="10" fontWeight="700" letterSpacing="2" className="uppercase">GULF</text>

      {/* Counties */}
      {counties.map((c) => {
        const isActive = active === c.key;
        return (
          <g key={c.key} onMouseEnter={() => setActive(c.key)} onMouseLeave={() => setActive(null)} className="cursor-pointer">
            <path
              d={c.path}
              fill={isActive ? "url(#countyActive)" : "url(#countyDefault)"}
              stroke={isActive ? "hsl(126 80% 30%)" : "hsl(228 30% 75%)"}
              strokeWidth="1.8"
              filter="url(#countyShadow)"
              className="transition-all duration-400"
            />
            <text
              x={c.cx}
              y={c.cy}
              textAnchor="middle"
              fontSize="13"
              fontWeight="800"
              fill={isActive ? "white" : "hsl(228 50% 25%)"}
              className="transition-all duration-400 select-none uppercase tracking-wider pointer-events-none"
            >
              {c.name.replace(" County", "")}
            </text>
            <text
              x={c.cx}
              y={c.cy + 16}
              textAnchor="middle"
              fontSize="9"
              fill={isActive ? "white" : "hsl(228 30% 50%)"}
              fontWeight="600"
              className="transition-all duration-400 select-none pointer-events-none"
            >
              {c.responseTime}
            </text>
          </g>
        );
      })}

      {/* Dispatch lines from HQ to each county centroid */}
      {counties.map((c, i) => {
        if (c.key === "lee") return null; // HQ is in Lee, no need
        return (
          <line
            key={`line-${c.key}`}
            x1={HQ.x}
            y1={HQ.y}
            x2={c.cx}
            y2={c.cy}
            stroke="hsl(33 90% 54%)"
            strokeWidth="2"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity={active === c.key ? "1" : "0.45"}
            className="transition-opacity duration-400"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="1.5s" repeatCount="indefinite" />
          </line>
        );
      })}

      {/* HQ pin */}
      <g>
        <circle cx={HQ.x} cy={HQ.y} r="22" fill="hsl(33 90% 54%)" opacity="0.25">
          <animate attributeName="r" values="18;30;18" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={HQ.x} cy={HQ.y} r="11" fill="white" stroke="hsl(33 90% 54%)" strokeWidth="3" />
        <circle cx={HQ.x} cy={HQ.y} r="4" fill="hsl(33 90% 54%)" />
        <text x={HQ.x + 18} y={HQ.y - 8} fontSize="11" fontWeight="800" fill="hsl(33 90% 40%)" className="uppercase tracking-wider">HQ</text>
        <text x={HQ.x + 18} y={HQ.y + 6} fontSize="9" fontWeight="600" fill="hsl(228 50% 25%)">Fort Myers</text>
      </g>

      {/* Compass */}
      <g transform="translate(410, 30)">
        <circle r="15" fill="white" stroke="hsl(228 30% 75%)" strokeWidth="1" />
        <path d="M0 -10 L3 0 L0 10 L-3 0 Z" fill="hsl(33 90% 54%)" />
        <text y="3" fontSize="7" fontWeight="800" fill="hsl(228 50% 25%)" textAnchor="middle">N</text>
      </g>
    </svg>
  );
}

export function ServiceArea() {
  const [active, setActive] = useState<CountyKey | null>("lee");
  const activeCounty = counties.find((c) => c.key === active);

  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-blue-500/8 blur-[140px] rounded-full" />
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
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
              Proudly serving all of <span className="text-secondary">Southwest Florida.</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Based in Fort Myers, our fully-stocked service vans dispatch across four counties to restore your comfort fast — usually within an hour.
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
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary">
                      <Clock className="h-3 w-3" />
                      {county.responseTime}
                    </div>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 border border-blue-100">
              <CountyMap active={active} setActive={setActive} />
            </div>

            {/* Floating glass legend */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-[260px] glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="h-4 w-4 text-accent" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-foreground">
                  {activeCounty ? activeCounty.name : "Service Coverage"}
                </span>
              </div>
              {activeCounty ? (
                <>
                  <div className="text-3xl font-extrabold text-foreground leading-none tabular-nums">
                    {activeCounty.responseTime}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mt-1">
                    Average response time
                  </div>
                  <div className="mt-3 pt-3 border-t border-zinc-200/70 text-xs text-foreground leading-snug">
                    <span className="font-bold">Cities:</span>{" "}
                    <span className="text-muted-foreground">{activeCounty.cities.join(", ")}</span>
                  </div>
                </>
              ) : (
                <p className="text-xs text-muted-foreground">Hover any county to see local response times.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
