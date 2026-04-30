import { useState } from "react";
import { Shield, Phone, Mail, CheckCircle, Clock } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const commitments = [
  { icon: "🏆", title: "100% Satisfaction Guarantee", desc: "We stand behind every job we do. If you're not satisfied, we'll make it right — no questions asked." },
  { icon: "💰", title: "Upfront Flat-Rate Pricing", desc: "You receive a written estimate before any work begins. The price we quote is the price you pay." },
  { icon: "📋", title: "Written Estimates Always", desc: "No verbal promises. Every recommendation comes with a written estimate so there are no surprises on your invoice." },
  { icon: "🔒", title: "Licensed & Insured", desc: "Every technician is licensed, insured, and background-checked for your complete peace of mind." },
  { icon: "📚", title: "Honest, Educational Service", desc: "We train our staff to educate customers, not pressure them. You'll always understand your options before deciding." },
  { icon: "⚡", title: "Same-Day Response", desc: "Call before noon Monday–Saturday and we'll have a technician at your door before sunset — guaranteed in writing." },
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "phone",
    reason: "",
    timeline: "asap",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center rounded-3xl bg-card border border-card-border">
        <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="text-xl font-extrabold text-foreground mb-2">Message Received!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">We'll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-foreground mb-1.5 block">First Name *</label>
          <input name="firstName" required value={form.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors" placeholder="Jane" />
        </div>
        <div>
          <label className="text-sm font-semibold text-foreground mb-1.5 block">Last Name *</label>
          <input name="lastName" required value={form.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors" placeholder="Smith" />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Email *</label>
        <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors" placeholder="jane@example.com" />
      </div>
      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Phone *</label>
        <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors" placeholder="(239) 555-0123" />
      </div>
      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Reason for Reaching Out *</label>
        <textarea name="reason" required value={form.reason} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="Tell us how we can help..." />
      </div>
      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Timeline</label>
        <select name="timeline" value={form.timeline} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground focus:outline-none focus:border-secondary transition-colors">
          <option value="asap">ASAP</option>
          <option value="days">Next few days</option>
          <option value="weeks">Within weeks</option>
          <option value="months">Within months</option>
        </select>
      </div>
      <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
        <Mail className="mr-2 h-4 w-4" /> Send Message
      </Button>
    </form>
  );
}

export default function CustomerServicePage() {
  return (
    <PageLayout
      title="Customer Service"
      subtitle="Hurricane Air stands by our work, 100%. We're committed to exceptional service and we invite your feedback."
      breadcrumb="Customer Service"
      showBottomCta={false}
    >
      {/* Main callout */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 sm:p-12 mb-14 noise">
        <div className="relative grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">Our Promise</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-4">"We stand by our work, 100%."</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you had a service experience that didn't meet your expectations, we want to know about it. Our team is committed to making things right — promptly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
                <a href="tel:2397481815">
                  <Phone className="mr-2 h-4 w-4" />
                  (239) 748-1815
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold">
                <a href="mailto:office@hacswfl.net">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            {[
              "Live answering 24/7",
              "Respond to all inquiries within one business day",
              "Committed to resolving every concern promptly",
              "Senior, veteran, and community group discounts",
              "Residential and select commercial service",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitments */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Our Service Commitments</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {commitments.map((c) => (
          <div key={c.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-card-border">
            <div className="text-2xl shrink-0 mt-0.5">{c.icon}</div>
            <div>
              <div className="font-bold text-foreground mb-1">{c.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">Whether it's feedback, a follow-up on a recent service, or a new request — we're here to help.</p>
          <ContactForm />
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl bg-card border border-card-border p-6">
            <h3 className="font-extrabold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" /> Hours of Operation
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="font-medium text-foreground">Monday – Friday</span><span className="text-muted-foreground">8:00am – 10:00pm</span></div>
              <div className="h-px bg-border" />
              <div className="flex justify-between"><span className="font-medium text-foreground">Saturday & Sunday</span><span className="text-muted-foreground">8:00am – 5:00pm</span></div>
              <div className="h-px bg-border" />
              <div className="flex justify-between"><span className="font-medium text-secondary">Emergencies</span><span className="text-secondary font-bold">24/7</span></div>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-card-border p-6 space-y-3">
            <h3 className="font-extrabold text-foreground">Quick Links</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["Labor Warranty", "/labor-warranty"],
                ["A/C Membership", "/membership"],
                ["Financing", "/financing"],
                ["Leave a Review", "/reviews"],
                ["Service Area", "/service-area"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-1.5 rounded-full text-sm bg-muted/60 border border-border text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-card-border p-6">
            <h3 className="font-extrabold text-foreground mb-2">License</h3>
            <p className="text-sm text-muted-foreground">CAC1813319 · Fully licensed and insured in the State of Florida</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
