import { Flame } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function FurnaceRepair() {
  return (
    <ServicePageLayout
      category="Heating"
      title="Furnace Repair & Installation"
      subtitle="Expert furnace diagnostics, repair, and installation across Southwest Florida — most repairs completed same day."
      icon={<Flame className="w-16 h-16 text-accent" />}
      accentColor="orange"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="Furnace Repair Diagnostic — Peace of Mind Guarantee"
        note="Diagnostic fee is waived if repairs are completed by Hurricane Air. No service or dispatch fees Monday–Friday for new customers."
        items={[
          "In-home furnace problem diagnosis",
          "Comprehensive system report",
          "Personalized solution recommendations",
          "Diagnostic fee waived with completed repair",
          "100% satisfaction guarantee",
          "Licensed & insured technicians (CAC1813319)",
        ]}
      />

      <ServiceSection title="Common Furnace Problems We Fix">
        <IncludedList
          items={[
            { icon: "🔥", title: "Ignition Problems", desc: "Faulty igniters and pilot light issues prevent your furnace from starting. We diagnose and replace ignition components on the spot." },
            { icon: "🌡️", title: "Thermostat Issues", desc: "A miscalibrated or failing thermostat can cause short cycling, no heat, or erratic temperatures — we test and replace as needed." },
            { icon: "💨", title: "Blower Motor Problems", desc: "Weak or failed blower motors reduce airflow and heating efficiency. We service and replace blower motors for all major brands." },
            { icon: "💧", title: "Clogged Condensate Drain", desc: "Blocked condensate lines cause system shutdowns and water damage. We flush and clear drain lines to restore normal operation." },
            { icon: "⚙️", title: "Faulty Limit Switch", desc: "A tripped or failed limit switch shuts the furnace down as a safety measure. We test, reset, or replace limit switches." },
            { icon: "🧹", title: "Dirty Burners", desc: "Accumulated debris on burners causes inefficient combustion and higher gas bills. We clean burner assemblies thoroughly." },
            { icon: "🔍", title: "Flame Sensor Issues", desc: "A dirty or failing flame sensor causes the furnace to light then immediately shut off. We clean or replace sensors as needed." },
            { icon: "⚡", title: "Electrical Problems", desc: "Tripped breakers, bad wiring, and control board failures — our technicians carry the most common electrical components on every truck." },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="What to Expect From Our Service Visit">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Our technicians arrive on time with fully stocked trucks. We perform a complete diagnostic, explain exactly what's wrong in plain language, and give you a written estimate before touching anything.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Most furnace repairs are completed on the first visit. If parts need to be ordered, we'll give you a firm timeline. All repairs come with our satisfaction guarantee — if you're not happy, we make it right.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Why Choose Hurricane Air for Furnace Repair?">
        <IncludedList
          items={[
            { icon: "💰", title: "Flat-Rate Upfront Pricing", desc: "Know the full cost before we start. No hourly rates, no surprise charges after the fact." },
            { icon: "🏆", title: "20+ Years of Experience", desc: "We've serviced thousands of furnaces across Lee, Collier, and Charlotte Counties since 2003." },
            { icon: "📋", title: "Fully Licensed & Insured", desc: "CAC1813319. Every technician is background-checked, licensed, and insured." },
            { icon: "🔄", title: "Repair vs. Replace Guidance", desc: "We give honest advice. If a replacement makes more financial sense, we'll tell you — and back it up with data." },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
