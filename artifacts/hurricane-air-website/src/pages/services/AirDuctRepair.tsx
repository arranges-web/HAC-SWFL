import { Wind } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function AirDuctRepair() {
  return (
    <ServicePageLayout
      category="Air Quality"
      title="Air Duct & Vent Repair"
      subtitle="Professional air duct inspection, sealing, and repair across Southwest Florida — improving airflow, efficiency, and indoor air quality."
      icon={<Wind className="w-16 h-16 text-blue-400" />}
      accentColor="blue"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="Air Duct Repair Diagnostic — Peace of Mind Guarantee"
        note="Diagnostic fee waived if repairs are completed by Hurricane Air. No service or dispatch fees Monday–Friday for new customers."
        items={[
          "In-home inspection and diagnosis of air duct issues",
          "Comprehensive problem report with findings",
          "Thermal imaging and airflow measurement tools",
          "Personalized repair solutions",
          "Diagnostic fee waived with completed repair",
          "100% satisfaction guarantee",
        ]}
      />

      <ServiceSection title="Our Air Duct Repair Process">
        <IncludedList
          items={[
            { icon: "🔍", title: "Thorough Inspection", desc: "We inspect the full ductwork system to locate leaks, gaps, disconnections, and damaged sections using professional diagnostic tools." },
            { icon: "🌡️", title: "Thermal Imaging", desc: "Infrared cameras reveal temperature differentials that pinpoint hidden leaks invisible to the naked eye." },
            { icon: "💨", title: "Airflow Measurement", desc: "We measure airflow at every register to identify rooms with delivery problems and trace the cause back through the duct system." },
            { icon: "🧹", title: "Debris Removal", desc: "Accumulated dust and debris inside ducts is removed before sealing to ensure maximum efficiency after repair." },
            { icon: "🔧", title: "Sealing & Patching", desc: "Gaps, cracks, and disconnected sections are professionally sealed and patched using industry-standard materials." },
            { icon: "🪟", title: "Vent & Register Repair", desc: "Loose vent covers, damaged registers, and disconnected grilles are repaired or replaced as needed." },
            { icon: "✅", title: "System Testing", desc: "After repair, we verify the full system is performing correctly before we consider the job complete." },
            { icon: "📋", title: "Maintenance Recommendations", desc: "We leave you with a written report and recommendations to keep your duct system performing optimally going forward." },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Signs Your Ducts Need Repair">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Leaky or damaged ductwork can waste 20–30% of your conditioned air before it ever reaches the living space. Common warning signs include rooms that never reach the set temperature, unusually high energy bills, visible dust buildup around vents, and strange odors when the system runs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We recommend having your ductwork inspected every 2–5 years. If your system is over 10 years old and you haven't had a duct inspection, it's likely overdue.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Benefits of Professional Duct Repair">
        <IncludedList
          items={[
            { icon: "🌬️", title: "Better Indoor Air Quality", desc: "Sealed ducts prevent dust, allergens, and contaminants from entering your airstream." },
            { icon: "💰", title: "Lower Energy Bills", desc: "Conditioned air reaches every room instead of leaking into unconditioned spaces like attics and crawlspaces." },
            { icon: "🔧", title: "Extended Equipment Life", desc: "When your system doesn't have to work overtime to compensate for duct losses, it lasts longer." },
            { icon: "❄️", title: "Consistent Comfort", desc: "Every room in your home reaches the set temperature evenly and efficiently." },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
