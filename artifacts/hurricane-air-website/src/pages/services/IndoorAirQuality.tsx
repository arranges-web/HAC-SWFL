import { Shield } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function IndoorAirQuality() {
  return (
    <ServicePageLayout
      category="Air Quality"
      title="Indoor Air Quality"
      subtitle="Breathe cleaner, healthier air inside your Southwest Florida home with whole-home filtration, UV purification, and humidity control solutions."
      icon={<Shield className="w-16 h-16 text-blue-400" />}
      accentColor="blue"
    >
      <TrustBar />

      <PricingCallout
        price="Free"
        label="Indoor Air Quality Assessment"
        note="We assess your home's current air quality, identify problem areas, and recommend solutions that fit your budget — from simple filter upgrades to whole-home purification systems."
        items={[
          "Complete air quality assessment included",
          "Media filtration up to MERV 16",
          "UV-C germicidal purifiers",
          "Whole-home dehumidification systems",
          "Duct sanitization and sealing",
          "All solutions installed by licensed technicians",
        ]}
      />

      <ServiceSection title="Our Air Quality Solutions">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Southwest Florida's heat and humidity create ideal conditions for mold, allergens, and airborne pathogens. The EPA reports that indoor air can be 2–5x more polluted than outdoor air. We offer a full range of solutions to address your specific concerns.
        </p>
        <IncludedList
          items={[
            {
              icon: "🔬",
              title: "High-MERV Media Filtration",
              desc: "Upgrade from standard 1-inch filters to 4–5 inch media filters (MERV 11–16) that capture dust, pollen, pet dander, and mold spores without restricting airflow.",
            },
            {
              icon: "☀️",
              title: "UV-C Germicidal Purifiers",
              desc: "UV-C light installed in your air handler destroys mold, bacteria, and viruses on the evaporator coil and in the airstream — the same technology hospitals use.",
            },
            {
              icon: "💧",
              title: "Whole-Home Dehumidification",
              desc: "In SWFL's climate, controlling humidity is as important as controlling temperature. Standalone dehumidifiers integrate with your existing system to maintain ideal 45–55% relative humidity.",
            },
            {
              icon: "🌬️",
              title: "Energy Recovery Ventilators (ERV)",
              desc: "Bring in fresh outside air without bringing in the heat and humidity. ERVs exchange stale indoor air for fresh outdoor air while retaining conditioned temperature.",
            },
            {
              icon: "🧹",
              title: "Duct Cleaning & Sanitization",
              desc: "Dirty ductwork recirculates dust, mold spores, and allergens throughout your home. We clean and sanitize ducts to restore healthy airflow.",
            },
            {
              icon: "🔒",
              title: "Duct Sealing",
              desc: "Leaky ducts in attic spaces pull in hot, humid, and potentially moldy air. We seal and insulate ducts to improve both air quality and efficiency.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Why Air Quality Matters More in Florida">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Florida's year-round heat means homes are closed up most of the time — making indoor air quality more critical here than almost anywhere in the country.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Humidity & Mold", desc: "High humidity creates ideal conditions for mold growth in ductwork and on evaporator coils. Proper humidity control is essential." },
              { title: "Allergens", desc: "Pollen, dust mites, and pet dander concentrate in tightly sealed homes. High-efficiency filtration dramatically reduces allergen load." },
              { title: "VOCs & Odors", desc: "Off-gassing from furniture, flooring, and building materials accumulates in sealed homes. Ventilation and purification help." },
              { title: "Biological Contaminants", desc: "Bacteria and viruses spread easily in recirculated air. UV-C purifiers are proven to reduce biological load by up to 99.9%." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-muted/40 border border-card-border">
                <div className="font-bold text-foreground mb-1.5">{item.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="Included in Our Comfort Club Membership">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Every annual tune-up for Comfort Club members includes an <strong className="text-foreground">Indoor Air Quality inspection</strong> — we check filter condition, coil cleanliness, drain pan for mold, and visible duct condition. Members receive recommendations and exclusive pricing on any IAQ upgrades.
          </p>
        </div>
      </ServiceSection>
    </ServicePageLayout>
  );
}
