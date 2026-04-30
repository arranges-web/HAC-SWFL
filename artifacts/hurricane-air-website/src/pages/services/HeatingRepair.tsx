import { Wrench } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function HeatingRepair() {
  return (
    <ServicePageLayout
      category="Heating"
      categoryHref="/services/heating-repair"
      title="Heating Repair"
      subtitle="Fast, accurate heat pump and furnace repairs for Southwest Florida homes — same-day service and written upfront pricing."
      icon={<Wrench className="w-16 h-16 text-accent" />}
      accentColor="orange"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="Heating Diagnostic — All Brands"
        note="While Florida winters are mild, a failing heat pump affects your AC efficiency year-round. Our diagnostics cover all heating system components."
        items={[
          "Full heat pump and air handler diagnostics",
          "Emergency heat strip inspection",
          "Written estimate before any work begins",
          "Same-day repair for most failures",
          "Licensed technicians (CAC1813319)",
          "5-year parts warranty on qualifying repairs",
        ]}
      />

      <ServiceSection title="What's Included in Our Heating Repair Service">
        <IncludedList
          items={[
            {
              icon: "🔍",
              title: "Full System Diagnosis",
              desc: "We diagnose all heating system components — reversing valve, heat strips, defrost board, compressor, and controls.",
            },
            {
              icon: "🌡️",
              title: "Heat Pump Reversing Valve",
              desc: "A faulty reversing valve is the most common heat pump heating failure. We stock this part on our service trucks.",
            },
            {
              icon: "⚡",
              title: "Electric Heat Strip Repair",
              desc: "Emergency heat strips provide backup heating when the heat pump can't keep up. We inspect, test, and replace failed elements.",
            },
            {
              icon: "🔧",
              title: "Defrost Board & Sensors",
              desc: "Heat pumps must defrost the outdoor coil in cold weather. We diagnose and repair defrost boards and temperature sensors.",
            },
            {
              icon: "💧",
              title: "Refrigerant Check for Heating Mode",
              desc: "Low refrigerant affects heating performance just as much as cooling. We verify charge in heating mode.",
            },
            {
              icon: "🌬️",
              title: "Airflow & Duct Inspection",
              desc: "Restricted airflow causes heat strips to overheat and trip safety limits. We inspect airflow and filter condition.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Heat Pump Heating in Southwest Florida">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Southwest Florida's mild winters mean most homes use <strong className="text-foreground">heat pumps</strong> for heating rather than gas furnaces. Heat pumps are highly efficient down to about 35°F, then rely on electric heat strips for emergency backup.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Because heat pumps do double duty — cooling in summer, heating in winter — keeping them maintained year-round is essential for both comfort and system longevity. Our technicians are trained specifically on Florida heat pump systems.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Common Heating Problems We Fix">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <ul className="space-y-3 text-muted-foreground">
            {[
              "System blows cold air in heating mode — reversing valve or refrigerant issue",
              "Heat pump runs but won't heat — low refrigerant or defrost board fault",
              "Emergency heat only — heat pump locked out, needs diagnosis",
              "System short-cycling — thermostat or control board issue",
              "Tripped high-limit or safety switch — restricted airflow or electrical fault",
              "System won't switch from cooling to heating — thermostat or reversing valve",
              "Loud noises in heating mode — compressor or blower issue",
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
