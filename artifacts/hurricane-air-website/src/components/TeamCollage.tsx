import { motion } from "framer-motion";
import { ShieldCheck, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface FeaturePhoto {
  src: string;
  alt: string;
  caption: string;
}

const featured: FeaturePhoto = {
  src: "/team/install-condenser.jpeg",
  alt: "Hurricane Air technicians installing a new high-efficiency condenser at a Southwest Florida home",
  caption: "New install · Fort Myers",
};

const supporting: FeaturePhoto[] = [
  {
    src: "/team/van-green.jpeg",
    alt: "Hurricane Air branded service van on a SWFL job site",
    caption: "Branded fleet · Fully stocked",
  },
  {
    src: "/team/tech-gauges.jpeg",
    alt: "Hurricane Air technician checking refrigerant pressure with calibrated gauges",
    caption: "Refrigerant diagnostics",
  },
  {
    src: "/team/duct-cleaning.jpeg",
    alt: "Hurricane Air technician cleaning ceiling ductwork at a customer's home",
    caption: "Indoor air quality",
  },
];

function PhotoTile({
  photo,
  className,
  loading = "lazy",
  showCaption = true,
}: {
  photo: FeaturePhoto;
  className?: string;
  loading?: "lazy" | "eager";
  showCaption?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl shadow-xl group bg-primary ${className ?? ""}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={loading}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/5 to-transparent pointer-events-none" />
      {showCaption && (
        <figcaption className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-foreground text-[10px] uppercase tracking-widest font-extrabold shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {photo.caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function TeamCollage() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] bg-secondary/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.05] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">
                Locally Owned · Family Run
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05] mb-5 sm:mb-6">
              Your neighbors{" "}
              <span className="text-secondary">in Fort Myers.</span>{" "}
              Not a franchise.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-7 max-w-lg">
              These aren't stock photos. Hurricane Air is a privately owned, family-run HVAC company —
              founded and operated right here in Southwest Florida since 2003. Every technician on every
              job is one of ours.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7 max-w-lg">
              <TrustCard
                icon={ShieldCheck}
                title="Privately Owned"
                desc="Independent · family-operated since 2003."
                tone="secondary"
              />
              <TrustCard
                icon={Users}
                title="100% Local Team"
                desc="W-2 employees · trained in-house · never subbed."
                tone="accent"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-6 glow-green"
              >
                <Link href="/about">Meet the Team</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-card-border hover:border-secondary/40 hover:text-secondary font-bold h-12 px-6"
              >
                <Link href="/careers">We're Hiring</Link>
              </Button>
            </div>
          </motion.div>

          {/* Editorial photo grid */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Featured photo */}
              <div className="col-span-12 sm:col-span-7 sm:row-span-2 aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-[560px] relative">
                <PhotoTile photo={featured} loading="eager" className="absolute inset-0" />

                {/* Floating "20+ years" badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-card border border-card-border rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-2.5 sm:gap-3"
                >
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center shrink-0">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-base sm:text-xl font-extrabold text-foreground tabular-nums">
                      20+ years
                    </div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                      Serving SWFL
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Supporting photos */}
              {supporting.map((photo, i) => (
                <div
                  key={photo.src}
                  className={
                    i === 0
                      ? "col-span-12 sm:col-span-5 aspect-[5/3] sm:aspect-auto sm:h-[242px] lg:h-[272px]"
                      : "col-span-6 sm:col-span-5 aspect-[5/4] sm:aspect-auto sm:h-[242px] lg:h-[272px]"
                  }
                  style={i > 0 ? { marginLeft: i === 1 ? 0 : undefined } : undefined}
                >
                  <PhotoTile photo={photo} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  icon: Icon,
  title,
  desc,
  tone,
}: {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
  tone: "secondary" | "accent";
}) {
  const wrapper =
    tone === "secondary"
      ? "bg-secondary/10 border-secondary/20"
      : "bg-accent/10 border-accent/20";
  const iconColor = tone === "secondary" ? "text-secondary" : "text-accent";
  return (
    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-card border border-card-border">
      <div className={`h-10 w-10 rounded-xl border flex items-center justify-center shrink-0 ${wrapper}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-extrabold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{desc}</div>
      </div>
    </div>
  );
}
