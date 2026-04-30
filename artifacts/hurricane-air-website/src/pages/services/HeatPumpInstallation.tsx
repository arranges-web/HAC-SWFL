import { Wind } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function HeatPumpInstallation() {
  return (
    <ServicePageLayout
      category="Heating"
      categoryHref="/services/heat-pump-installation"
      title="Heat Pump Installation"
      subtitle="Inverter-driven heat pump systems that keep you warm in winter and cool in summer — with industry-leading efficiency and a 5-year parts warranty."
      icon={<Wind className="w-16 h-16 text-accent" />}
      accentColor="orange"
    >
      <TrustBar />

      <PricingCallout
        price="Free"
        label="In-Home Heat Pump Assessment & Quote"
        note="We assess your home's heating and cooling loads, present multiple equipment options, and provide financing estimates so you can make the right decision."
        items={[
          "Manual J load calculation for proper sizing",
          "Inverter and single-stage options compared",
          "Comfortmaker Elite Dealer pricing advantage",
          "5-year parts warranty on all installations",
          "0% APR financing for qualified buyers",
          "Permit-pulled, code-compliant installation",
        ]}
      />

      <ServiceSection title="Why Heat Pumps Are Ideal for SWFL">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Southwest Florida's mild winters make heat pumps the most efficient heating solution available. Instead of generating heat, heat pumps <em>move</em> heat — from outside air to inside — using up to 3x less energy than electric resistance heating.
        </p>
        <IncludedList
          items={[
            {
              icon: "⚡",
              title: "Dual-Function Efficiency",
              desc: "One system handles both heating and cooling, eliminating the need for separate HVAC equipment and reducing maintenance costs.",
            },
            {
              icon: "🌿",
              title: "Up to 300% Efficient",
              desc: "Modern inverter heat pumps move 3 BTUs of heat for every 1 BTU of electricity consumed — far more efficient than electric heat strips.",
            },
            {
              icon: "🔇",
              title: "Whisper-Quiet Operation",
              desc: "Variable-speed inverter compressors run at the exact speed needed for quiet, consistent comfort rather than the loud on-off cycling of older systems.",
            },
            {
              icon: "📉",
              title: "Lower Energy Bills",
              desc: "High-efficiency heat pumps can cut heating and cooling costs by 25–40% compared to older systems.",
            },
            {
              icon: "🌡️",
              title: "Effective in Florida Climate",
              desc: "Heat pumps are most efficient above 40°F — perfectly matched to SWFL winters that rarely dip below that threshold.",
            },
            {
              icon: "💰",
              title: "Federal & Utility Rebates",
              desc: "Heat pump installations may qualify for federal tax credits and utility rebates. Ask us about current incentives.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Installation Process">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <ol className="space-y-5">
            {[
              { step: "01", title: "Free Home Assessment", desc: "We visit, calculate your heating and cooling loads, and discuss your comfort goals and budget." },
              { step: "02", title: "Equipment Selection", desc: "We present multiple options at different efficiency and price points — with honest recommendations." },
              { step: "03", title: "Permit & Scheduling", desc: "We pull all required permits and schedule installation at your convenience, typically within 1–3 days." },
              { step: "04", title: "Professional Installation", desc: "Our trained technicians complete the installation, typically in one day, including all electrical and refrigerant work." },
              { step: "05", title: "Commissioning & Walkthrough", desc: "We commission the system, verify performance, and walk you through operation and thermostat programming." },
            ].map((s) => (
              <li key={s.step} className="flex gap-5">
                <div className="text-3xl font-extrabold text-secondary/30 tabular-nums shrink-0 w-10">{s.step}</div>
                <div>
                  <div className="font-bold text-foreground mb-1">{s.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </ServiceSection>
    </ServicePageLayout>
  );
}
