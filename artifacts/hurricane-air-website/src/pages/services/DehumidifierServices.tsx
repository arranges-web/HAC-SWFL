import { Droplets } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function DehumidifierServices() {
  return (
    <ServicePageLayout
      category="Air Quality"
      title="Dehumidifier Services"
      subtitle="Professional dehumidifier installation, maintenance, and repair across Southwest Florida — take control of your indoor humidity and air quality."
      icon={<Droplets className="w-16 h-16 text-blue-400" />}
      accentColor="blue"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="Dehumidifier Assessment — Peace of Mind Guarantee"
        note="Diagnostic fee waived if services are completed by Hurricane Air. No service or dispatch fees Monday–Friday for new customers."
        items={[
          "In-home humidity assessment and diagnosis",
          "Comprehensive problem report",
          "Personalized dehumidifier recommendations",
          "Sizing consultation for your space",
          "100% satisfaction guarantee",
          "Installation, maintenance, and repair services",
        ]}
      />

      <ServiceSection title="Why Invest in a Dehumidifier in Southwest Florida?">
        <IncludedList
          items={[
            {
              icon: "❤️",
              title: "Health & Comfort",
              desc: "Excess humidity creates a breeding ground for mold, mildew, and dust mites. Optimal humidity levels (45–55%) dramatically improve indoor comfort and respiratory health.",
            },
            {
              icon: "🍄",
              title: "Mold Prevention",
              desc: "SWFL's climate creates ideal conditions for mold growth. A whole-home dehumidifier actively prevents mold and mildew from taking hold in walls, ceilings, and crawlspaces.",
            },
            {
              icon: "🤧",
              title: "Allergy Relief",
              desc: "Lower indoor humidity reduces dust mite populations and mold spore counts — two of the most common indoor allergen triggers.",
            },
            {
              icon: "🏠",
              title: "Home Protection",
              desc: "Excessive moisture warps wood, damages electronics, and degrades building materials. Proper humidity levels protect your home's structure and your belongings.",
            },
            {
              icon: "🌬️",
              title: "Improved Air Quality",
              desc: "Dehumidifiers reduce airborne impurities and odors caused by humidity, leaving your home smelling cleaner and feeling fresher.",
            },
            {
              icon: "⚡",
              title: "Energy Efficiency",
              desc: "At proper humidity levels, your air conditioner doesn't have to work as hard to make you feel comfortable — saving energy and reducing wear on the system.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Whole-Home vs. Portable Dehumidifiers">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Portable dehumidifiers handle a single room but require constant emptying and can't keep up with SWFL's humidity levels in larger homes. A <strong className="text-foreground">whole-home dehumidifier</strong> integrates directly with your HVAC system to manage humidity throughout the entire house automatically.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            During your assessment, our technician will measure your home's humidity levels, evaluate your current HVAC setup, and recommend the right solution for your specific situation and budget.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Our Dehumidifier Services">
        <IncludedList
          items={[
            { icon: "🔧", title: "New Installation", desc: "We size, source, and install whole-home and standalone dehumidifiers matched to your home's specific needs." },
            { icon: "🔍", title: "Maintenance & Tune-Up", desc: "Annual dehumidifier maintenance keeps your system running at peak efficiency and extends equipment life." },
            { icon: "🛠️", title: "Repair Service", desc: "Dehumidifier not keeping up? We diagnose and repair all major brands quickly and affordably." },
            { icon: "📋", title: "Humidity Assessment", desc: "Not sure if you need a dehumidifier? Our assessment gives you objective data and honest advice." },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
