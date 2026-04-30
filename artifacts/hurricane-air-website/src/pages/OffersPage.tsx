import { Tag, Phone, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

type Category = "all" | "cooling" | "heating" | "air-quality";

const offers = [
  {
    category: "cooling" as Category,
    tag: "Cooling",
    title: "$125 A/C Repair Diagnostic",
    desc: "Full system diagnostics on all major brands with a written estimate before any work begins. Diagnostic fee waived if repairs are completed by Hurricane Air.",
    note: "Monday–Friday, new customers only",
    cta: "Schedule Now",
    href: "/services/ac-repair",
  },
  {
    category: "cooling" as Category,
    tag: "Cooling",
    title: "Free Second Opinion",
    desc: "Got a quote from another company that doesn't feel right? We'll give you an honest second opinion at no charge.",
    note: "Call to schedule",
    cta: "Call Us",
    href: "tel:2397481815",
  },
  {
    category: "heating" as Category,
    tag: "Heating",
    title: "$125 Furnace Repair Diagnostic",
    desc: "In-home furnace diagnosis with a comprehensive system report and personalized recommendations. Diagnostic fee waived with completed repair.",
    note: "Monday–Friday, new customers only",
    cta: "Schedule Now",
    href: "/services/furnace-repair",
  },
  {
    category: "heating" as Category,
    tag: "Heating",
    title: "$280 Thermostat Installation",
    desc: "Professional smart thermostat installation including in-home assessment, installation, system testing, and a full walkthrough.",
    note: "No service or dispatch fees Mon–Fri",
    cta: "Schedule Now",
    href: "/services/thermostat-install",
  },
  {
    category: "air-quality" as Category,
    tag: "Air Quality",
    title: "$125 Air Duct Repair Diagnostic",
    desc: "In-home ductwork inspection using thermal imaging and airflow measurement tools. Diagnostic fee waived with completed repair.",
    note: "Monday–Friday, new customers only",
    cta: "Schedule Now",
    href: "/services/air-duct-repair",
  },
  {
    category: "air-quality" as Category,
    tag: "Air Quality",
    title: "$125 Air Duct Cleaning Proposal",
    desc: "Home inspection of air duct design with a comprehensive report of our findings and personalized cleaning recommendations.",
    note: "No service or dispatch fees Mon–Fri",
    cta: "Get Proposal",
    href: "/services/air-duct-cleaning",
  },
  {
    category: "air-quality" as Category,
    tag: "Air Quality",
    title: "$125 Dehumidifier Assessment",
    desc: "In-home humidity assessment including a comprehensive problem report, personalized recommendations, and sizing consultation.",
    note: "Diagnostic fee waived with completed service",
    cta: "Schedule Now",
    href: "/services/dehumidifier",
  },
  {
    category: "cooling" as Category,
    tag: "Membership",
    title: "$189 A/C Membership Plan",
    desc: "Two annual maintenance visits, priority scheduling, member discounts on repairs, and a discounted $89 service call fee (saves $36).",
    note: "Annual plan — cancel anytime",
    cta: "Learn More",
    href: "/membership",
  },
];

const tagColors: Record<Category | "Membership", string> = {
  all: "",
  cooling: "bg-secondary/10 border-secondary/20 text-secondary",
  heating: "bg-accent/10 border-accent/20 text-accent",
  "air-quality": "bg-blue-500/10 border-blue-500/20 text-blue-400",
  Membership: "bg-purple-500/10 border-purple-500/20 text-purple-400",
};

export default function OffersPage() {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all" ? offers : offers.filter((o) => o.category === filter);

  return (
    <PageLayout
      title="All Offers"
      subtitle="Current specials and service offers from Hurricane Air — upfront pricing with no surprises."
      breadcrumb="Offers"
    >
      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-10 flex-wrap">
        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
        {(["all", "cooling", "heating", "air-quality"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all capitalize ${
              filter === cat
                ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                : "bg-card border-card-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat === "air-quality" ? "Air Quality" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Offers grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {filtered.map((offer) => {
          const tagColor = offer.tag === "Membership"
            ? tagColors["Membership"]
            : tagColors[offer.category];

          return (
            <div
              key={offer.title}
              className="flex flex-col p-6 rounded-2xl bg-card border border-card-border hover:border-secondary/40 transition-all duration-300"
            >
              <div className={`inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${tagColor}`}>
                <Tag className="w-3 h-3" />
                {offer.tag}
              </div>
              <h3 className="text-lg font-extrabold text-foreground mb-2">{offer.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">{offer.desc}</p>
              <div className="text-xs text-muted-foreground italic mb-5">{offer.note}</div>
              <Button
                asChild
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold self-start"
              >
                {offer.href.startsWith("tel:") ? (
                  <a href={offer.href}>
                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                    {offer.cta}
                  </a>
                ) : (
                  <Link href={offer.href}>{offer.cta}</Link>
                )}
              </Button>
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="rounded-2xl bg-card border border-card-border p-6 text-sm text-muted-foreground leading-relaxed">
        <p>All offers subject to change without notice. Diagnostic fee waivers apply when repairs are completed by Hurricane Air Conditioning of SWFL, Inc. Monday–Friday new customer offers exclude weekends and holidays. Call <a href="tel:2397481815" className="text-secondary font-semibold hover:underline">(239) 748-1815</a> to confirm current offers before scheduling.</p>
      </div>
    </PageLayout>
  );
}
