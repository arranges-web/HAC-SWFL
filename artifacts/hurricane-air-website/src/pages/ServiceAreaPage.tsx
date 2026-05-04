import { MapPin, Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const counties = [
  {
    name: "Lee County",
    color: "secondary",
    cities: ["Fort Myers", "Fort Myers Beach", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres", "Gateway", "Sanibel", "Captiva", "Bokeelia", "Pine Island"],
  },
  {
    name: "Collier County",
    color: "accent",
    cities: ["Naples", "Marco Island"],
  },
  {
    name: "Charlotte County",
    color: "blue",
    cities: ["Port Charlotte", "Punta Gorda", "Englewood", "Rotonda West", "Boca Grande"],
  },
];

const colorMap: Record<string, string> = {
  secondary: "text-secondary bg-secondary/10 border-secondary/20",
  accent: "text-accent bg-accent/10 border-accent/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

const dotMap: Record<string, string> = {
  secondary: "bg-secondary",
  accent: "bg-accent",
  blue: "bg-blue-400",
};

export default function ServiceAreaPage() {
  return (
    <PageLayout
      title="Service Area"
      subtitle="Dispatching from Southwest Florida — we serve Lee, Collier, and Charlotte Counties with same-day availability."
      breadcrumb="Service Area"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {[
          { value: "3", label: "Counties Served" },
          { value: "20+", label: "Cities & Towns" },
          { value: "20+", label: "Years in SWFL" },
          { value: "Same-Day", label: "Availability" },
        ].map((s) => (
          <div key={s.label} className="text-center p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-3xl font-extrabold text-secondary tabular-nums">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* County grid */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Where We Serve</h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        {counties.map((county) => (
          <div key={county.name} className="p-6 rounded-2xl bg-card border border-card-border">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${colorMap[county.color]} text-xs font-bold uppercase tracking-widest mb-5`}>
              <span className={`h-1.5 w-1.5 rounded-full ${dotMap[county.color]}`} />
              {county.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {county.cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 rounded-full text-sm bg-muted/60 border border-border text-muted-foreground font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Don't see your area */}
      <div className="rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-10 noise">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Not sure?</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Don't See Your Area?</h3>
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
