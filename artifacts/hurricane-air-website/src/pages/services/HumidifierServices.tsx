import { CloudRain } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function HumidifierServices() {
  return (
    <ServicePageLayout
      category="Air Quality"
      title="Humidifier Services"
      subtitle="Professional humidifier installation, maintenance, and repair in Southwest Florida — protect your home and improve comfort year-round."
      icon={<CloudRain className="w-16 h-16 text-blue-400" />}
      accentColor="blue"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="Humidifier Assessment — Peace of Mind Guarantee"
        note="Diagnostic fee waived if services are completed by Hurricane Air. No service or dispatch fees Monday–Friday for new customers."
        items={[
          "In-home humidity evaluation and diagnosis",
          "Comprehensive problem report",
          "Personalized humidifier recommendations",
          "Sizing consultation for your space",
          "Post-installation usage guidance",
          "100% satisfaction guarantee",
        ]}
      />

      <ServiceSection title="Key Benefits of a Whole-Home Humidifier">
        <IncludedList
          items={[
            {
              icon: "🌬️",
              title: "Improved Indoor Air Quality",
              desc: "Proper humidity levels reduce airborne dust, allergens, and irritants — creating a healthier environment for your entire family.",
            },
            {
              icon: "😮‍💨",
              title: "Relief from Dry Air Symptoms",
              desc: "Dry air causes chapped lips, dry skin, irritated sinuses, and scratchy throats. A humidifier alleviates these symptoms immediately.",
            },
            {
              icon: "🌡️",
              title: "Enhanced Comfort",
              desc: "Properly humidified air feels warmer at lower thermostat settings, reducing heating costs during cooler months.",
            },
            {
              icon: "🦠",
              title: "Reduced Airborne Viruses",
              desc: "Studies show that viruses survive less effectively in properly humidified air. Optimal humidity is one of the best defenses against airborne illness.",
            },
            {
              icon: "🪵",
              title: "Protection for Wood & Furnishings",
              desc: "Dry air warps hardwood floors, cracks wooden furniture, and damages musical instruments. Proper humidity preserves your home's investments.",
            },
            {
              icon: "⚡",
              title: "Less Static Electricity",
              desc: "Dry air causes static buildup. A humidifier eliminates the shocks and reduces static cling on clothing and electronics.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Our Installation Process">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-foreground mb-2">Comprehensive Assessment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We measure your home's current humidity levels and identify the specific needs of your space before recommending any equipment.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Customized Recommendations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We consider your home's size, your HVAC system, and your preferences to recommend the right humidifier type and capacity.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Professional Installation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Our technicians handle all wiring, plumbing connections, and system integration. We test performance before we leave.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Usage Guidance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We walk you through how to operate and maintain your new humidifier so you get the best performance for years to come.</p>
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="Why Choose Hurricane Air?">
        <IncludedList
          items={[
            { icon: "💰", title: "Flat-Rate Pricing", desc: "Know the full cost before we start. No hidden charges or surprise fees." },
            { icon: "🏆", title: "20+ Years in SWFL", desc: "Trusted by thousands of homeowners across Lee, Collier, Charlotte, and Sarasota Counties since 2003." },
            { icon: "📋", title: "Licensed & Insured", desc: "CAC1813319. Every technician is background-checked, licensed, and insured." },
            { icon: "🤝", title: "Honest Recommendations", desc: "We recommend what your home genuinely needs — not the most expensive option on the shelf." },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
