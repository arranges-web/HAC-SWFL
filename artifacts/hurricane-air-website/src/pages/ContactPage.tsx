import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(239) 748-1815",
    sub: "24/7 Live Answering",
    href: "tel:2397481815",
  },
  {
    icon: Mail,
    label: "Email",
    value: "office@hacswfl.net",
    sub: "We respond within 24 hours",
    href: "mailto:office@hacswfl.net",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 8am–5pm",
    sub: "Emergencies: 24/7",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "12940 Express Ct, Ste 8",
    sub: "Fort Myers, FL 33913",
    href: null,
  },
];

export default function ContactPage() {
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

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Reach our team any time — we have live answering 24/7 for emergencies."
      breadcrumb="Contact Us"
      showBottomCta={false}
    >
      {/* Contact info cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {contactInfo.map((c) => (
          <div key={c.label} className="p-5 rounded-2xl bg-card border border-card-border">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-3">
              <c.icon className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">{c.label}</div>
            {c.href ? (
              <a href={c.href} className="font-bold text-foreground hover:text-secondary transition-colors block text-sm">{c.value}</a>
            ) : (
              <div className="font-bold text-foreground text-sm">{c.value}</div>
            )}
            <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-2">Send Us a Message</h2>
          <p className="text-muted-foreground mb-8">Fill out the form and a member of our team will reach out within one business day.</p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center rounded-3xl bg-card border border-card-border">
              <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground mb-2">Message Received!</h3>
              <p className="text-muted-foreground text-sm max-w-xs">We'll be in touch within one business day. For urgent issues, please call us directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">First Name *</label>
                  <input
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Last Name *</label>
                  <input
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="(239) 555-0123"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Preferred Contact</label>
                <select
                  name="preferredContact"
                  value={form.preferredContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Reason for Reaching Out *</label>
                <textarea
                  name="reason"
                  required
                  value={form.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Describe your HVAC issue or question..."
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Timeline for Work Needed</label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="asap">ASAP</option>
                  <option value="days">Next few days</option>
                  <option value="weeks">Within weeks</option>
                  <option value="months">Within months</option>
                </select>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-13 text-base glow-green"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting you agree to receive communications about your appointment. We never share your information.
              </p>
            </form>
          )}
        </div>

        {/* Right: emergency callout + hours */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-8 noise">
            <div className="text-xs font-extrabold uppercase tracking-widest text-secondary mb-3">Emergency Service</div>
            <h3 className="text-2xl font-extrabold mb-3">AC emergency in SWFL?</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              We have live answering 24/7. Call before noon Monday–Saturday and we'll have a technician at your door before sunset — guaranteed in writing.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green w-full">
              <a href="tel:2397481815">
                <Phone className="mr-2 h-4 w-4" />
                Call (239) 748-1815
              </a>
            </Button>
          </div>

          <div className="rounded-2xl bg-card border border-card-border p-6">
            <h3 className="font-extrabold text-foreground mb-4">Hours of Operation</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">Monday – Saturday</span>
                <span className="text-sm text-muted-foreground">8:00am – 5:00pm</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">Sunday</span>
                <span className="text-sm text-muted-foreground">Closed</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-secondary">Emergencies</span>
                <span className="text-sm text-secondary font-bold">24/7</span>
              </div>
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
