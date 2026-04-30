import { Fan } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function ACMaintenance() {
  return (
    <ServicePageLayout
      category="Cooling"
      categoryHref="/services/ac-maintenance"
      title="A/C Maintenance & Tune-Up"
      subtitle="Annual tune-ups that extend your system's life, lower your energy bills, and prevent the peak-summer breakdowns you can't afford."
      icon={<Fan className="w-16 h-16 text-secondary" />}
      accentColor="green"
    >
      <TrustBar />

      <PricingCallout
        price="$189"
        label="Annual A/C Membership — Best Value in SWFL"
        note="Our Comfort Club membership includes two annual tune-ups, priority scheduling, no overtime fees, and exclusive member discounts. Cancel anytime."
        items={[
          "Two complete tune-ups per year (fall & spring)",
          "Priority scheduling — skip the wait during peak season",
          "No overtime fees — ever",
          "15% discount on all repairs",
          "Peace of Mind Guarantee on every visit",
          "Includes Indoor Air Quality inspection",
        ]}
      />

      <ServiceSection title="What's Included in Every Tune-Up">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Our 20-point precision tune-up covers every component of your air conditioning system. A well-maintained system lasts 3–5 years longer and uses up to 25% less energy than a neglected one.
        </p>
        <IncludedList
          items={[
            {
              icon: "🧹",
              title: "Coil Cleaning",
              desc: "We clean both the evaporator and condenser coils to restore heat transfer efficiency — dirty coils are the #1 cause of high energy bills.",
            },
            {
              icon: "🧊",
              title: "Refrigerant Level Check",
              desc: "We verify refrigerant charge to manufacturer specs. Low refrigerant strains the compressor and leads to premature failure.",
            },
            {
              icon: "💧",
              title: "Drain Line Flush",
              desc: "We flush the condensate drain line and test the float switch to prevent water damage and system shutdowns.",
            },
            {
              icon: "⚡",
              title: "Electrical Safety Check",
              desc: "We inspect and tighten all electrical connections, test capacitors, contactors, and check for signs of arcing or heat damage.",
            },
            {
              icon: "🌬️",
              title: "Airflow Measurement",
              desc: "We measure airflow at key points in your system to verify the blower is performing to spec and ducts aren't leaking.",
            },
            {
              icon: "🌡️",
              title: "Thermostat Calibration",
              desc: "We verify your thermostat is reading accurately and test all modes — heating, cooling, fan, and emergency heat.",
            },
            {
              icon: "🔧",
              title: "Lubrication",
              desc: "All moving parts — motors, bearings, and belts — are inspected and lubricated to reduce friction and wear.",
            },
            {
              icon: "📋",
              title: "Written Report",
              desc: "You receive a written summary of everything we inspected, any concerns found, and recommended next steps — no pressure.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Why Regular Maintenance Matters in SWFL">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Southwest Florida's heat, humidity, and salt air put extreme demands on HVAC systems. Our climate means your AC runs <strong className="text-foreground">3–4x more hours per year</strong> than systems in northern states.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Systems without annual maintenance fail 3x more often during peak summer heat",
              "Dirty coils can increase energy bills by up to 25%",
              "Clogged drain lines are the #1 cause of preventable water damage",
              "Catching a failing capacitor early costs $150 — ignoring it can cost $2,000+",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[5px] h-3 w-3 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                  <span className="h-1 w-1 rounded-full bg-secondary" />
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
