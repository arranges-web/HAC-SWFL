import { Sparkles } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function AirDuctCleaning() {
  return (
    <ServicePageLayout
      category="Air Quality"
      title="Air Duct Cleaning"
      subtitle="Professional air duct cleaning in Southwest Florida — remove years of dust, allergens, and debris for cleaner air and a more efficient system."
      icon={<Sparkles className="w-16 h-16 text-blue-400" />}
      accentColor="blue"
    >
      <TrustBar />

      <PricingCallout
        price="$125"
        label="Air Duct Cleaning Service Proposal — Trusted by SWFL Homeowners"
        note="Includes in-home inspection of air duct design and a comprehensive report of our findings. No service or dispatch fees Monday–Friday for new customers."
        items={[
          "Home inspection of air duct design and condition",
          "Comprehensive report with findings",
          "No service or dispatch fees",
          "Personalized cleaning recommendations",
          "All major duct types serviced",
          "100% satisfaction guarantee",
        ]}
      />

      <ServiceSection title="Why Clean Your Air Ducts?">
        <IncludedList
          items={[
            {
              icon: "🌬️",
              title: "Healthier Indoor Air",
              desc: "Professional cleaning removes allergens, dust mites, mold spores, and respiratory irritants that accumulate inside ductwork over years of use.",
            },
            {
              icon: "⚡",
              title: "Improved Energy Efficiency",
              desc: "Restricted airflow caused by debris buildup forces your HVAC to work harder. Cleaning restores airflow and reduces energy consumption.",
            },
            {
              icon: "🔧",
              title: "Longer System Life",
              desc: "Cleaner systems experience less mechanical stress and wear, extending the life of your air handler, blower motor, and coils.",
            },
            {
              icon: "👃",
              title: "Odor Elimination",
              desc: "Mold, mildew, and pet dander trapped in ductwork create persistent odors that recirculate every time the system runs.",
            },
            {
              icon: "🐛",
              title: "Pest Prevention",
              desc: "Ductwork can harbor insects, rodents, and their waste. Cleaning eliminates these contaminants and reduces the likelihood of infestation.",
            },
            {
              icon: "✅",
              title: "Warranty Compliance",
              desc: "Some HVAC manufacturer warranties require documented maintenance, including periodic duct cleaning, to remain valid.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="How Often Should You Clean Your Air Ducts?">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            The EPA and NADCA recommend air duct cleaning every <strong className="text-foreground">3–5 years</strong> for most homes. However, homes with pets, smokers, recent renovations, allergy sufferers, or high humidity levels may benefit from more frequent cleaning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Signs you're overdue: visible dust blowing from registers when the system starts, allergy symptoms that worsen indoors, musty odors, or not knowing the last time it was done. If you can't remember, it's time.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="Why Choose Hurricane Air for Duct Cleaning?">
        <IncludedList
          items={[
            { icon: "💰", title: "Upfront Flat-Rate Pricing", desc: "No hidden fees, no upselling. We quote the job before we start and stick to it." },
            { icon: "🏆", title: "20+ Years in SWFL", desc: "Trusted by thousands of homeowners across Lee, Collier, Charlotte, and Sarasota Counties." },
            { icon: "📋", title: "Licensed & Insured", desc: "CAC1813319. Every technician is background-checked, licensed, and insured." },
            { icon: "🤝", title: "Honest Assessment", desc: "We'll tell you if your ducts genuinely need cleaning — or if your money is better spent elsewhere." },
          ]}
        />
      </ServiceSection>
    </ServicePageLayout>
  );
}
