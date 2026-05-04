import { Thermometer } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function ThermostatInstall() {
  return (
    <ServicePageLayout
      category="Heating"
      title="Thermostat Installation"
      subtitle="Professional smart thermostat installation in Southwest Florida — save energy, gain control, and upgrade your comfort."
      icon={<Thermometer className="w-16 h-16 text-accent" />}
      accentColor="orange"
    >
      <TrustBar />

      <PricingCallout
        price="$280"
        label="Smart Thermostat Installation — Peace of Mind Guarantee"
        note="Includes in-home assessment, installation, system testing, and walkthrough. No service or dispatch fees Monday–Friday for new customers."
        items={[
          "In-home assessment of thermostat needs",
          "Personalized installation recommendations",
          "Full installation and wiring",
          "System testing and configuration",
          "Post-install usage walkthrough",
          "100% satisfaction guarantee",
        ]}
      />

      <ServiceSection title="9 Reasons to Upgrade Your Thermostat">
        <IncludedList
          items={[
            { icon: "⚡", title: "Energy Efficiency", desc: "Smart thermostats optimize heating and cooling schedules automatically, reducing energy waste and lowering utility bills." },
            { icon: "🌡️", title: "Improved Comfort", desc: "Precise temperature control means your home stays at the exact temperature you want, exactly when you want it." },
            { icon: "🔗", title: "System Compatibility", desc: "Modern thermostats work seamlessly with upgraded HVAC systems, heat pumps, and multi-stage equipment." },
            { icon: "📱", title: "Modern Features", desc: "Wi-Fi connectivity, smartphone apps, voice control, and smart home integration make managing your comfort effortless." },
            { icon: "🏠", title: "Remote Control", desc: "Adjust your home's temperature from anywhere — whether you're leaving work early or stuck in traffic." },
            { icon: "💰", title: "Energy Savings", desc: "Get detailed usage insights and automatic scheduling to cut energy costs year-round." },
            { icon: "📅", title: "Programmable Schedules", desc: "Set different temperatures for mornings, evenings, weekdays, and weekends automatically." },
            { icon: "🔔", title: "Maintenance Alerts", desc: "Receive reminders for filter changes and service appointments before small issues become big ones." },
            { icon: "🏡", title: "Smart Home Integration", desc: "Connects with Alexa, Google Home, Apple HomeKit, and other smart home ecosystems." },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Smart vs. Programmable: Which Is Right for You?">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            During your in-home assessment, our technician will walk you through the options that are compatible with your existing HVAC system and match your lifestyle. Not every home needs the most expensive smart thermostat — and we'll tell you that honestly.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We install and configure all major brands including Ecobee, Nest, Honeywell, and ComfortMaker-compatible models. Installation typically takes under two hours and we'll have you fully up and running before we leave.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Why Choose Hurricane Air for Thermostat Installation?">
        <IncludedList
          items={[
            { icon: "💰", title: "Flat-Rate Pricing", desc: "The price we quote is the price you pay. No hidden charges, no overtime fees." },
            { icon: "🏆", title: "20+ Years in SWFL", desc: "We've installed thermostats in thousands of homes across Lee, Collier, and Charlotte Counties." },
            { icon: "📋", title: "Licensed & Insured", desc: "CAC1813319. Every installation is performed by a background-checked, licensed technician." },
            { icon: "🤝", title: "Brand-Neutral Advice", desc: "We recommend what's best for your home, not what has the highest profit margin." },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
