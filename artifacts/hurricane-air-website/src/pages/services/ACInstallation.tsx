import { Wind } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function ACInstallation() {
  return (
    <ServicePageLayout
      category="Cooling"
      title="A/C Installation & Replacement"
      subtitle="High-efficiency system sizing, installation, and replacement backed by a 5-year parts warranty and our Comfortmaker Elite Dealer guarantee."
      icon={<Wind className="w-16 h-16 text-secondary" />}
      accentColor="green"
    >
      <TrustBar />

      <PricingCallout
        price="Free"
        label="In-Home System Sizing Assessment"
        note="We calculate the correct system size using Manual J load calculations — not guesswork. An improperly sized system costs you more every month and fails sooner."
        items={[
          "Manual J load calculation — proper sizing every time",
          "Multiple efficiency options with honest recommendations",
          "Comfortmaker Elite Dealer — top manufacturer pricing",
          "5-year parts warranty on all new installations",
          "Professional permit-pulled installation",
          "Financing available — 0% APR for qualified buyers",
        ]}
      />

      <ServiceSection title="Our Technicians at Work">
        <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/team/install-condenser.jpeg"
            alt="Hurricane Air technician installing a new high-efficiency AC condenser at a Southwest Florida home"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        </div>
      </ServiceSection>

      <ServiceSection title="What's Included in Our A/C Installation">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          A new air conditioning system is one of the most important investments you'll make in your home. Hurricane Air ensures the job is done right the first time — from proper sizing to professional commissioning.
        </p>
        <IncludedList
          items={[
            {
              icon: "📐",
              title: "Manual J Load Calculation",
              desc: "We calculate exactly how much cooling your home needs based on square footage, insulation, windows, and sun exposure — not the old system's size.",
            },
            {
              icon: "⭐",
              title: "Comfortmaker Elite Dealer",
              desc: "As a Comfortmaker Elite Dealer, we offer top-of-the-line systems with industry-leading efficiency ratings and manufacturer-backed warranties.",
            },
            {
              icon: "🔌",
              title: "Complete Electrical Work",
              desc: "We handle all electrical connections, disconnect boxes, and breaker sizing — everything needed for a code-compliant installation.",
            },
            {
              icon: "🌬️",
              title: "Ductwork Inspection",
              desc: "A new system connected to leaky or undersized ducts won't perform. We inspect and assess your ductwork before every installation.",
            },
            {
              icon: "📋",
              title: "Permit-Pulled Installation",
              desc: "We pull all required permits so your installation is code-compliant and your home insurance remains valid.",
            },
            {
              icon: "🌡️",
              title: "Thermostat Programming",
              desc: "We install and program your new thermostat — smart thermostat upgrades available — and walk you through operation.",
            },
            {
              icon: "🧪",
              title: "System Commissioning",
              desc: "After installation, we commission the system, verify refrigerant charge, airflow, and all controls before we leave.",
            },
            {
              icon: "📞",
              title: "Post-Install Check-In",
              desc: "We follow up after installation to make sure your system is performing to your expectations.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Top Brands & Efficiency Options">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            We install and service all major brands, but as a <strong className="text-secondary">Comfortmaker Elite Dealer</strong>, we can offer exclusive pricing and extended warranties on Comfortmaker systems. We'll present you with honest options at multiple price and efficiency points.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { tier: "Good", label: "14–16 SEER2", desc: "Reliable comfort at an entry-level price point" },
              { tier: "Better", label: "17–19 SEER2", desc: "Higher efficiency, lower monthly bills, quieter operation" },
              { tier: "Best", label: "20+ SEER2", desc: "Variable-speed inverter systems, whisper-quiet, maximum efficiency" },
            ].map((t) => (
              <div key={t.tier} className="p-5 rounded-2xl bg-muted/40 border border-card-border">
                <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{t.tier}</div>
                <div className="text-xl font-extrabold text-foreground mb-2">{t.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="Financing Available">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            A new system shouldn't break the bank. We offer <strong className="text-secondary">flexible financing from 12 to 120 months</strong>, including 0% APR options for qualified buyers. Apply in minutes and know your options before we start.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Average monthly payments on a new system start as low as $89/month. Ask us about current manufacturer rebates and utility incentives that can reduce your out-of-pocket cost.
          </p>
        </div>
      </ServiceSection>
    </ServicePageLayout>
  );
}
