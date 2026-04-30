import { Wrench } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function ACRepair() {
  return (
    <ServicePageLayout
      category="Cooling"
      title="A/C Repair & Diagnostics"
      subtitle="Fast, accurate diagnosis and same-day repairs for every brand of air conditioning system in Southwest Florida."
      icon={<Wrench className="w-16 h-16 text-secondary" />}
      accentColor="green"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="A/C Repair Diagnostic — Peace of Mind Guarantee"
        note="If we can't identify the problem, you don't pay. Our technicians arrive with fully stocked trucks so most repairs are completed on the first visit."
        items={[
          "Full system diagnostics on all major brands",
          "Written estimate before any work begins",
          "Same-day repair in most cases",
          "Peace of Mind Guarantee — if we can't find it, it's free",
          "Licensed & insured technicians (CAC1813319)",
          "5-year parts warranty on qualifying repairs",
        ]}
      />

      <ServiceSection title="What's Included in Our A/C Repair Service">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Hurricane Air technicians have the skills, knowledge, and tools to fix most general A/C problems on the spot — including repairing cold furnaces, maintaining new and old air conditioning units, ductless mini splits, and more.
        </p>
        <IncludedList
          items={[
            {
              icon: "🔍",
              title: "Full System Diagnosis",
              desc: "We inspect every component — compressor, refrigerant levels, coils, electrical connections, and controls — to find the root cause, not just mask the symptom.",
            },
            {
              icon: "🧊",
              title: "Refrigerant Leak Detection & Recharge",
              desc: "Using calibrated leak detectors, we find refrigerant leaks and recharge your system to manufacturer specifications.",
            },
            {
              icon: "⚡",
              title: "Electrical & Capacitor Repair",
              desc: "Faulty capacitors, contactors, and wiring are among the most common AC failures in Florida's heat. We stock the most common parts on every truck.",
            },
            {
              icon: "🌬️",
              title: "Airflow & Blower Motor Issues",
              desc: "Weak airflow, short cycling, or rooms that won't cool? We diagnose and repair blower motors, belts, and airflow obstructions.",
            },
            {
              icon: "🧹",
              title: "Evaporator & Condenser Coil Cleaning",
              desc: "Dirty coils drastically reduce efficiency. We clean both coils to restore cooling capacity and reduce energy bills.",
            },
            {
              icon: "🌡️",
              title: "Thermostat & Control Board",
              desc: "From smart thermostats to control boards, we diagnose and replace faulty controls that cause erratic system behavior.",
            },
            {
              icon: "💧",
              title: "Drain Line Flush & Float Switch",
              desc: "Clogged drain lines cause water damage and system shutdowns. We flush lines and verify float switches are working correctly.",
            },
            {
              icon: "🔧",
              title: "All Brands Serviced",
              desc: "Trane, Carrier, Lennox, Goodman, Rheem, Comfortmaker, York, and more — our technicians are trained on all major brands.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Our Same-Day Service Promise">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Call <strong className="text-secondary">before noon Monday through Saturday</strong> and we'll have a technician at your door before sunset — guaranteed in writing. If we don't make it, we waive the dispatch fee, no questions asked.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We understand that in Southwest Florida's extreme heat, a broken AC isn't just uncomfortable — it's a health issue. That's why same-day response isn't just a promise for us; it's the foundation of everything we do.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Why Choose Hurricane Air for A/C Repair?">
        <IncludedList
          items={[
            {
              icon: "💰",
              title: "Upfront Flat-Rate Pricing",
              desc: "You'll know the full price before we start. No surprise charges, no hourly billing games.",
            },
            {
              icon: "🏆",
              title: "20+ Years in Business",
              desc: "Trusted by Southwest Florida homeowners since 2003. We've serviced thousands of systems across Lee, Collier, Charlotte, and Sarasota counties.",
            },
            {
              icon: "📋",
              title: "Fully Licensed & Insured",
              desc: "CAC1813319. Every technician is background-checked, licensed, and insured for your peace of mind.",
            },
            {
              icon: "🤝",
              title: "Free Second Opinion",
              desc: "Got a quote from another company that doesn't feel right? We'll give you an honest second opinion at no charge.",
            },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
