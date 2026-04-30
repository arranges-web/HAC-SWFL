import { Zap } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function EmergencyAC() {
  return (
    <ServicePageLayout
      category="Cooling"
      title="24/7 Emergency A/C Service"
      subtitle="When your AC fails in the Florida heat, every minute matters. We're available around the clock with no overtime fees for members — ever."
      icon={<Zap className="w-16 h-16 text-accent" />}
      accentColor="orange"
    >
      <TrustBar />

      {/* Emergency callout */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-[#d4780f] to-accent text-white p-7 sm:p-9 mb-14 noise">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slower w-full h-full">
            {[0, 1, 2, 3].map((i) => (
              <circle key={i} cx="200" cy="200" r={50 + i * 40} stroke="white" strokeWidth="1.5" strokeDasharray={`${6 + i * 2} ${(6 + i * 2) * 2}`} fill="none" />
            ))}
          </svg>
        </div>
        <div className="relative">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 text-white/80">Emergency Line</div>
          <a href="tel:2397481815" className="text-4xl sm:text-5xl font-extrabold tracking-tight hover:text-white/90 transition-colors">
            (239) 748-1815
          </a>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-xl">
            Call now and a live technician will answer. No answering services, no waiting for a call back. We dispatch immediately.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25">No overtime fees for members</span>
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25">Priority dispatch</span>
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25">All brands serviced</span>
          </div>
        </div>
      </div>

      <ServiceSection title="What to Expect During an Emergency Call">
        <IncludedList
          items={[
            {
              icon: "📞",
              title: "Live Answer — 24/7",
              desc: "A real person answers every emergency call. We'll gather details about your system and dispatch the closest available technician.",
            },
            {
              icon: "🚐",
              title: "Fully Stocked Trucks",
              desc: "Our trucks carry the most common repair parts for all major brands. Most emergency repairs are completed on the first visit.",
            },
            {
              icon: "💰",
              title: "Upfront Pricing Before Work Begins",
              desc: "Even in an emergency, you'll receive a written estimate before we start any repair. No surprise bills.",
            },
            {
              icon: "🔧",
              title: "All Brands Serviced",
              desc: "Whether you have a Carrier, Trane, Lennox, Goodman, Rheem, or Comfortmaker — our technicians are trained on every major brand.",
            },
            {
              icon: "🏠",
              title: "Temporary Solutions If Needed",
              desc: "If a part needs to be ordered, we'll discuss temporary measures to keep your home safe and provide the fastest possible resolution.",
            },
            {
              icon: "📋",
              title: "Full Written Report",
              desc: "After every emergency visit, you receive a detailed report of what failed, what was repaired, and what to watch for.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="No Overtime Fees — Ever (For Members)">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Hurricane Air Comfort Club members never pay overtime fees — not at night, not on weekends, not on holidays. Emergency calls are dispatched with the same priority as any other service call.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Non-members are welcome to call as well. Our emergency rates are straightforward and disclosed upfront before any work begins.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Common SWFL Emergency A/C Failures">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Failed capacitor or contactor — system won't start or runs poorly",
              "Refrigerant leak — system runs but won't cool",
              "Frozen evaporator coil — no airflow or extremely warm air",
              "Tripped breaker or electrical failure",
              "Clogged drain line causing system shutdown",
              "Blower motor failure — fan won't run",
              "Compressor failure — most serious and expensive",
              "Thermostat malfunction — system won't respond to controls",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[5px] h-3 w-3 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ServiceSection>
    </ServicePageLayout>
  );
}
