import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const counties = [
  {
    name: "Lee County",
    cities: ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres"],
  },
  {
    name: "Collier County",
    cities: ["Naples", "Marco Island", "Golden Gate"],
  },
  {
    name: "Charlotte County",
    cities: ["Punta Gorda", "Port Charlotte", "Englewood"],
  },
  {
    name: "Sarasota County",
    cities: ["Sarasota", "Venice", "North Port"],
  },
];

export function ServiceArea() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Service Area</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              Proudly Serving All of Southwest Florida
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Fort Myers, our fleet of fully-stocked service vehicles is ready to dispatch across four counties to restore your comfort fast.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {counties.map((county, index) => (
                <div key={county.name} className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    <h4 className="font-bold text-lg">{county.name}</h4>
                  </div>
                  <ul className="space-y-1 pl-7">
                    {county.cities.map((city) => (
                      <li key={city} className="text-sm text-muted-foreground">{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px] border border-border/50"
          >
            <img 
              src="/swfl-map.png" 
              alt="Map of Southwest Florida Service Area" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-bold text-xl drop-shadow-md">Fast Dispatch from Fort Myers HQ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
