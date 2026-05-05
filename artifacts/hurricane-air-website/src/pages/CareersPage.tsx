import { Briefcase, Phone, Mail, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  { icon: "🏥", title: "Health, Dental & Vision Insurance", desc: "Comprehensive coverage for you and your family — paid by the company." },
  { icon: "💰", title: "Excellent Earnings Potential", desc: "Highly competitive pay structure with performance incentives and year-round work availability." },
  { icon: "📚", title: "Ongoing Training & Support", desc: "We invest in our team. You'll have access to continued HVAC education, brand training, and certification support." },
  { icon: "📅", title: "Work Available Year Round", desc: "Southwest Florida's climate keeps HVAC in constant demand — no slow season layoffs." },
  { icon: "🤝", title: "Team Culture", desc: "We operate as a team, not a collection of independent contractors. Support is always a phone call away." },
  { icon: "🚐", title: "Company Vehicle & Equipment", desc: "Arrive to every job in a fully stocked, branded truck with professional tools and equipment." },
];

const requirements = [
  "Minimum of 1 year apprentice experience in HVAC",
  "Strong communication and people skills",
  "Valid driver's license",
  "Ability to pass a drug test and background check",
  "Authorized to work in the United States",
];

export default function CareersPage() {
  return (
    <PageLayout
      title="Join Our Team"
      subtitle="Hurricane Air is growing — and we're looking for skilled HVAC technicians who share our commitment to trust, transparency, and teamwork."
      breadcrumb="Careers"
      showBottomCta={false}
    >
      {/* Hero callout */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-12 mb-14 noise">
        <div className="relative grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-secondary" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Now Hiring</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-4">HVAC Technicians</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Join a family-owned team that's been serving Southwest Florida since 2000. We offer competitive pay, full benefits, and a company culture built on respect and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
                <a href="tel:2397481815">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Apply
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold">
                <a href="mailto:office@hacswfl.net">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Your Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-widest text-white/50 mb-3">Employment Types Available</div>
            {["Full Time", "Part Time", "Freelance / Contract", "Internship", "Temporary"].map((type) => (
              <div key={type} className="flex items-center gap-2.5 text-sm text-white/85">
                <span className="h-4 w-4 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </span>
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Why Work at Hurricane Air?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex gap-4 p-5 rounded-2xl bg-card border border-card-border"
          >
            <div className="h-9 w-9 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-extrabold tabular-nums text-secondary">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="font-bold text-foreground mb-1">{b.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{b.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Requirements */}
      <div className="grid lg:grid-cols-2 gap-10 mb-14">
        <div className="rounded-2xl bg-card border border-card-border p-7">
          <h3 className="text-lg font-extrabold text-foreground mb-5">Requirements</h3>
          <ul className="space-y-3">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-card border border-card-border p-7">
          <h3 className="text-lg font-extrabold text-foreground mb-4">How to Apply</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Call us directly or send your resume by email. We'll set up an interview and walk you through the next steps. We respond to all applications promptly.
          </p>
          <div className="space-y-4">
            <a href="tel:2397481815" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Call</div>
                <div className="font-bold text-foreground group-hover:text-secondary transition-colors">(239) 748-1815</div>
              </div>
            </a>
            <a href="mailto:office@hacswfl.net" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email</div>
                <div className="font-bold text-foreground group-hover:text-secondary transition-colors">office@hacswfl.net</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Culture callout */}
      <div className="rounded-3xl bg-card border border-card-border p-8 text-center">
        <h3 className="text-2xl font-extrabold text-foreground mb-3">Trust. Transparency. Teamwork.</h3>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Our core values aren't just words on a wall — they're how we operate every day. When you join Hurricane Air, you join a team that has each other's backs and takes pride in doing the job right.
        </p>
      </div>
    </PageLayout>
  );
}
