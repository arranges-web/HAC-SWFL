import { Wind } from "lucide-react";
import {
  ServicePageLayout,
  ServiceSection,
  PricingCallout,
  IncludedList,
  TrustBar,
} from "@/components/ServicePageLayout";

export default function DuctlessMiniSplit() {
  return (
    <ServicePageLayout
      category="Cooling"
      title="Ductless Mini Split Systems"
      subtitle="Zone-by-zone comfort without ductwork — install, repair, and maintain ductless mini split systems across Southwest Florida."
      icon={<Wind className="w-16 h-16 text-blue-400" />}
      accentColor="blue"
    >
      <TrustBar />

      <PricingCallout
        price="Free"
        label="In-Home Mini Split Assessment & Quote"
        note="We assess your space, recommend the right system capacity, and provide a no-obligation quote. Most single-zone installations are completed in one day."
        items={[
          "Single-zone and multi-zone systems",
          "Installations typically completed in one day",
          "All major brands: Mitsubishi, Daikin, LG, and more",
          "5-year parts warranty on new installations",
          "SEER2 ratings up to 30+ for maximum efficiency",
          "Financing available for qualified buyers",
        ]}
      />

      <ServiceSection title="What We Offer for Ductless Systems">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Ductless mini splits are perfect for additions, garages, sunrooms, server rooms, and any space that's too hot or too cold. No ductwork required — just a small hole in the wall and a professional installation.
        </p>
        <IncludedList
          items={[
            {
              icon: "🏠",
              title: "New System Installation",
              desc: "We handle everything from sizing and placement to mounting, refrigerant charging, and electrical connections.",
            },
            {
              icon: "🔧",
              title: "Repair — All Brands",
              desc: "Mitsubishi, Daikin, LG, Fujitsu, Pioneer, and more. We diagnose and repair all brands of ductless systems.",
            },
            {
              icon: "🧹",
              title: "Annual Maintenance",
              desc: "Ductless systems need annual coil cleaning, filter service, and refrigerant checks just like central systems. We include them in our Comfort Club membership.",
            },
            {
              icon: "🌡️",
              title: "Multi-Zone Systems",
              desc: "Control multiple rooms independently with a single outdoor unit. We design and install multi-zone systems for whole-home comfort.",
            },
            {
              icon: "📱",
              title: "Smart Controls",
              desc: "Most modern mini splits offer WiFi control and app integration. We configure smart features during installation.",
            },
            {
              icon: "🏅",
              title: "Rebate & Incentive Help",
              desc: "High-SEER ductless systems qualify for utility rebates and federal tax credits. We'll help you identify and apply for available incentives.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Is a Mini Split Right for Your Space?">
        <div className="rounded-3xl bg-card border border-card-border p-7 sm:p-9">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Ductless mini splits are ideal for spaces where extending existing ductwork isn't practical or cost-effective:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Home additions and sunrooms",
              "Garages and workshops",
              "Server rooms and home offices",
              "Guest suites with comfort control",
              "Historic homes without ductwork",
              "Supplemental cooling for hot rooms",
              "Converted attics and basements",
              "Screened lanais and Florida rooms",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-muted-foreground text-sm">
                <span className="h-3 w-3 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                  <span className="h-1 w-1 rounded-full bg-blue-400" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </ServiceSection>
    </ServicePageLayout>
  );
}
