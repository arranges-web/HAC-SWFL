import { Fan } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function HeatingMaintenance() {
  return (
    <ServicePageLayout
      category="Heating"
      categoryHref="/services/heating-maintenance"
      title="Heating Maintenance"
      subtitle="Pre-season heating tune-ups to ensure your heat pump is ready before Florida's brief but real cold snaps arrive."
      icon={<Fan className="w-16 h-16 text-accent" />}
      accentColor="orange"
    >
      <TrustBar />

      <PricingCallout
        price="$189"
        label="Annual Comfort Club — Covers Both Heating & Cooling Tune-Ups"
        note="Our membership includes two complete tune-ups per year — a cooling tune-up in spring and a heating tune-up in fall. Both are included in one low annual fee."
        items={[
          "Complete heating mode inspection and test",
          "Reversing valve function verification",
          "Heat strip safety check and amperage test",
          "Defrost board and sensor inspection",
          "Priority scheduling during cold snaps",
          "No overtime fees for emergency heating calls",
        ]}
      />

      <ServiceSection title="Fall Heating Tune-Up Checklist">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Florida's cold snaps can arrive quickly. Don't wait until the first 45-degree night to discover your heat pump isn't working. Our fall tune-up ensures your system is ready before you need it.
        </p>
        <IncludedList
          items={[
            {
              icon: "🌡️",
              title: "Heating Mode Test",
              desc: "We switch your system to heating mode and verify it's producing the correct supply air temperature at the registers.",
            },
            {
              icon: "🔄",
              title: "Reversing Valve Inspection",
              desc: "The reversing valve switches between heating and cooling mode. We verify smooth, complete operation in both directions.",
            },
            {
              icon: "⚡",
              title: "Emergency Heat Strips",
              desc: "We energize the emergency heat strips and measure amperage to verify all elements are working. Failing elements are a safety concern.",
            },
            {
              icon: "❄️",
              title: "Defrost System",
              desc: "Heat pumps must defrost in cold weather. We test the defrost board, sensors, and verify proper defrost timing and temperature.",
            },
            {
              icon: "🧹",
              title: "Coil & Filter Service",
              desc: "We clean the outdoor coil (essential for heating mode efficiency) and replace or clean the air filter.",
            },
            {
              icon: "📋",
              title: "Safety & Controls",
              desc: "We verify all safety switches, limit controls, and thermostat operation in heating mode with a written report.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="When to Schedule Heating Maintenance">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            The best time to schedule your heating tune-up is <strong className="text-foreground">October or early November</strong> — before the first cold front and before our schedule fills with emergency calls.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Comfort Club members receive priority scheduling and are automatically contacted in the fall to schedule their heating tune-up. Members never wait during peak demand periods.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Not a member? Call us in September or October and we'll get you on the schedule before the rush.
          </p>
        </div>
      </ServiceSection>
    </ServicePageLayout>
  );
}
