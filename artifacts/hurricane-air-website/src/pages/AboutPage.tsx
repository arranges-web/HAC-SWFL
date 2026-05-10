import { Award, Users, Shield, Clock, Star, Heart, Camera } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { motion } from "framer-motion";

const teamGallery = [
  { src: "/team/chris-ro.jpeg",        alt: "Chris and Ro — Hurricane Air technicians ready for another day in SWFL", tall: true },
  { src: "/team/joey-condenser.jpeg",   alt: "Joey working on an outdoor AC condenser unit" },
  { src: "/team/ro-maintenance-1.jpeg", alt: "Ro running diagnostics during a scheduled maintenance visit" },
  { src: "/team/austin-truck.png",      alt: "Austin with a fully stocked Hurricane Air service van" },
  { src: "/team/brian-truck.jpeg",      alt: "Brian loading the truck before a service call" },
  { src: "/team/van-blue.jpeg",         alt: "Hurricane Air branded blue service van — Just Another Quality Job", tall: true },
  { src: "/team/tech-sunglasses.jpeg",  alt: "Hurricane Air technician inspecting an outdoor AC unit" },
  { src: "/team/ro-maintenance-2.jpeg", alt: "Ro performing an AC maintenance check at an outdoor unit" },
];

const values = [
  { icon: Shield, label: "Trust", desc: "We show up on time, tell you the truth, and stand behind every job we do." },
  { icon: Users, label: "Transparency", desc: "Upfront flat-rate pricing. Written estimates before any work begins. No surprises on your invoice." },
  { icon: Heart, label: "Teamwork", desc: "Every member of our staff — from dispatchers to technicians — is trained to serve you as a team." },
];

const stats = [
  { value: "2000", label: "Founded" },
  { value: "20+", label: "Years in Business" },
  { value: "3", label: "Counties Served" },
  { value: "5★", label: "Google Rated" },
];

const differentiators = [
  { icon: "🏆", title: "Elite ComfortMaker Dealer", desc: "Only 2% of ComfortMaker dealers nationwide achieve Elite Dealer status. We're one of them — and it's earned, not bought." },
  { icon: "📚", title: "12 Hours Annual Training Required", desc: "Every technician on our team completes a minimum of 12 hours of HVAC training per year or holds NATE certification." },
  { icon: "🔒", title: "Licensed & Insured", desc: "License #CAC1813319. Every technician is background-checked, licensed, and insured for your complete peace of mind." },
  { icon: "🏠", title: "Family-Owned & Operated", desc: "We're not a franchise or a national chain. We're a local, family-owned business that lives and works in Southwest Florida." },
  { icon: "💰", title: "Flexible Financing", desc: "We partner with GreenSky to offer financing options so unexpected HVAC emergencies don't have to derail your budget." },
  { icon: "👴", title: "Senior & Veteran Discounts", desc: "We proudly offer discounts for senior citizens, veterans, and community groups — ask us about qualifying." },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="About Hurricane Air"
      subtitle="A family-owned HVAC company serving Southwest Florida since 2000 — built on trust, transparency, and teamwork."
      breadcrumb="About Us"
    >
      {/* Core values */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {values.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-3xl bg-card border border-card-border text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4">
              <v.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-extrabold text-foreground mb-2">{v.label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-3xl font-extrabold text-secondary tabular-nums">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Hurricane Air Conditioning of SWFL, Inc. was founded in 2000 with a simple mission: provide Southwest Florida homeowners with honest, expert HVAC service they can actually trust.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We've grown into one of the region's most respected HVAC companies — not through aggressive advertising or high-pressure sales tactics, but through consistent, exceptional work. Our technicians are trained to educate customers, not sell to them. We believe an informed customer makes better decisions — and that those decisions lead to long, trusting relationships.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today we serve Lee, Collier, and Charlotte Counties, handling everything from emergency AC repairs in the dead of summer to full system replacements, duct work, and indoor air quality solutions. We're proud to be a local, family-owned business — and we act like it on every single job.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 noise">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Elite Dealer Status</span>
          </div>
          <h3 className="text-2xl font-extrabold mb-3">ComfortMaker Elite Dealer</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Only 2% of ComfortMaker dealers nationwide earn Elite Dealer status. This designation recognizes dealers who consistently demonstrate exceptional customer satisfaction, technical expertise, and commitment to quality installations.
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-secondary fill-secondary" />
            ))}
            <span className="ml-2 text-white/60 text-sm">Rated 5 stars on Google</span>
          </div>
        </div>
      </div>

      {/* What makes us different */}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-8">What Makes Us Different</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {differentiators.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex gap-4 p-5 rounded-2xl bg-card border border-card-border"
          >
            <div className="h-9 w-9 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-extrabold tabular-nums text-secondary">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="font-bold text-foreground mb-1">{d.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{d.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team in action gallery */}
      <div className="mt-16">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Camera className="h-4 w-4 text-secondary" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">Team in Action</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Real photos from real jobs.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Every image is our actual team in Lee, Collier &amp; Charlotte counties. No stock photography, no national franchise marketing.
          </p>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          style={{ gridAutoRows: "180px" }}
        >
          {teamGallery.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg group bg-primary ${
                photo.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Licensing */}
      <div className="mt-12 p-6 rounded-2xl bg-card border border-card-border flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-secondary" />
          <span className="text-sm font-semibold text-foreground">Hours: Mon–Sat 8am–5pm</span>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-secondary" />
          <span className="text-sm font-semibold text-foreground">License #CAC1813319</span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-secondary" />
          <span className="text-sm font-semibold text-foreground">office@hacswfl.net</span>
        </div>
      </div>
    </PageLayout>
  );
}
