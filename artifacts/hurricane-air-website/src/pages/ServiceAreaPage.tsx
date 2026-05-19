import { MapPin, Phone, ArrowRight, Wrench, Wind, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { cities, getCitiesByCounty } from "@/data/locationPages";

const SERVICE_LINKS: { slug: string; label: string; icon: typeof Wrench }[] = [
  { slug: "ac-repair", label: "AC Repair", icon: Wrench },
  { slug: "ac-installation", label: "Replacement", icon: Wind },
  { slug: "energy-efficient-ac", label: "High-Efficiency", icon: Sparkles },
];

const COUNTY_META: Record<string, { color: string; dot: string; label: string }> = {
  Lee: {
    color: "text-secondary bg-secondary/10 border-secondary/20",
    dot: "bg-secondary",
    label: "Lee County",
  },
  Collier: {
    color: "text-accent bg-accent/10 border-accent/20",
    dot: "bg-accent",
    label: "Collier County",
  },
  Charlotte: {
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-400",
    label: "Charlotte County",
  },
};

export default function ServiceAreaPage() {
  const byCounty = getCitiesByCounty();

  return (
    <PageLayout
      title="Service Area"
      subtitle="Dispatching from Fort Myers across Lee, Collier, and Charlotte Counties — same-day service to every city below."
      breadcrumb="Service Area"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {[
          { value: "3", label: "Counties Served" },
          { value: `${cities.length}`, label: "Cities Covered" },
          { value: "20+", label: "Years in SWFL" },
          { value: "Same-Day", label: "Availability" },
        ].map((s) => (
          <div key={s.label} className="text-center p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-3xl font-extrabold text-secondary tabular-nums">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* City directory by county */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
        Find your city
      </h2>
      <p className="text-muted-foreground mb-8">
        Every city has dedicated landing pages for AC repair, replacement, and high-efficiency service. Tap any city to learn what we offer in your area.
      </p>

      <div className="space-y-10 mb-16">
        {(Object.keys(byCounty) as ("Lee" | "Collier" | "Charlotte")[]).map((key) => {
          const county = byCounty[key];
          const meta = COUNTY_META[key];
          return (
            <section key={key}>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${meta.color} text-xs font-bold uppercase tracking-widest mb-5`}>
                <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                {meta.label}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {county.map((city) => (
                  <div key={city.slug} className="group rounded-2xl bg-card border border-card-border p-5 hover:border-secondary/40 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <h3 className="font-extrabold text-foreground tracking-tight text-lg">
                        {city.name}
                      </h3>
                    </div>

                    <div className="space-y-1.5 mb-3">
                      {SERVICE_LINKS.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/${city.slug}/${svc.slug}`}
                          className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm font-bold text-foreground/85 hover:bg-secondary/10 hover:text-secondary transition-colors"
                        >
                          <span className="inline-flex items-center gap-2">
                            <svc.icon className="h-3.5 w-3.5 text-secondary/70" />
                            {svc.label}
                          </span>
                          <ArrowRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Don't see your area */}
      <div className="rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-10 noise">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Not sure?</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Don't see your area?</h3>
            <p className="text-white/70 leading-relaxed">
              Our service area continues to grow. If you're in Southwest Florida and your city isn't listed, contact us — we may still be able to serve you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2397481815"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Call Us</div>
                <div className="text-sm font-extrabold">(239) 748-1815</div>
              </div>
            </a>
            <a
              href="mailto:office@hacswfl.net"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Email Us</div>
                <div className="text-sm font-extrabold">office@hacswfl.net</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
