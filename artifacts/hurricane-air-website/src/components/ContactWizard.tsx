import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { submitContactLead } from "@/lib/leads-api";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  Calendar,
  Wrench,
  Wind,
  Sparkles,
  Zap,
  AlertTriangle,
  Clock,
  CalendarDays,
  Search,
  Mail,
  User,
  MapPin,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = "repair" | "tune-up" | "install" | "emergency" | "air-quality" | "other";
type Urgency = "today" | "this-week" | "this-month" | "exploring";
type ContactPref = "phone" | "text" | "email";

interface WizardData {
  service?: Service;
  urgency?: Urgency;
  name: string;
  phone: string;
  email: string;
  zip: string;
  details: string;
  contactPref: ContactPref;
}

const SERVICE_OPTIONS: { value: Service; label: string; desc: string; icon: typeof Wrench; tone: string }[] = [
  { value: "repair", label: "A/C Repair", desc: "Something's not right with my system", icon: Wrench, tone: "secondary" },
  { value: "tune-up", label: "Tune-Up / Maintenance", desc: "Keep my system running like new", icon: Sparkles, tone: "secondary" },
  { value: "install", label: "New System Quote", desc: "Replacing or installing", icon: Wind, tone: "accent" },
  { value: "emergency", label: "Emergency Service", desc: "AC is down — need help now", icon: AlertTriangle, tone: "red" },
  { value: "air-quality", label: "Air Quality / Ducts", desc: "IAQ, ducts, dehumidifier", icon: Zap, tone: "blue" },
  { value: "other", label: "Something Else", desc: "Not sure where it fits", icon: MessageSquare, tone: "secondary" },
];

const URGENCY_OPTIONS: { value: Urgency; label: string; desc: string; icon: typeof Clock; tone: string }[] = [
  { value: "today", label: "Today / ASAP", desc: "I need help now", icon: Zap, tone: "red" },
  { value: "this-week", label: "This Week", desc: "In the next few days", icon: Clock, tone: "secondary" },
  { value: "this-month", label: "This Month", desc: "Within a few weeks", icon: CalendarDays, tone: "accent" },
  { value: "exploring", label: "Just Exploring", desc: "Comparing options", icon: Search, tone: "blue" },
];

const TONE_CLASSES: Record<string, { active: string; idle: string; icon: string; iconBg: string }> = {
  secondary: {
    active: "border-secondary bg-secondary/10 ring-2 ring-secondary/30",
    idle: "border-card-border hover:border-secondary/40 hover:bg-secondary/5",
    icon: "text-secondary",
    iconBg: "bg-secondary/15 border-secondary/30",
  },
  accent: {
    active: "border-accent bg-accent/10 ring-2 ring-accent/30",
    idle: "border-card-border hover:border-accent/40 hover:bg-accent/5",
    icon: "text-accent",
    iconBg: "bg-accent/15 border-accent/30",
  },
  blue: {
    active: "border-blue-400 bg-blue-500/10 ring-2 ring-blue-400/30",
    idle: "border-card-border hover:border-blue-400/40 hover:bg-blue-500/5",
    icon: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-400/30",
  },
  red: {
    active: "border-red-400 bg-red-500/10 ring-2 ring-red-400/30",
    idle: "border-card-border hover:border-red-400/40 hover:bg-red-500/5",
    icon: "text-red-500",
    iconBg: "bg-red-500/15 border-red-400/30",
  },
};

const TOTAL_STEPS = 4;

interface ContactWizardProps {
  variant?: "card" | "embedded";
  defaultService?: Service;
}

export function ContactWizard({ variant = "card", defaultService }: ContactWizardProps) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<WizardData>({
    service: defaultService,
    name: "",
    phone: "",
    email: "",
    zip: "",
    details: "",
    contactPref: "phone",
  });

  function update<K extends keyof WizardData>(key: K, value: WizardData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  const canAdvance = (() => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.urgency;
    if (step === 2) {
      const phoneDigits = data.phone.replace(/\D/g, "");
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      return data.name.trim().length >= 2 && phoneDigits.length >= 10 && emailOk;
    }
    if (step === 3) return true;
    return false;
  })();

  function next() {
    if (!canAdvance) return;
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      void submitContactLead({
        service: data.service,
        urgency: data.urgency,
        name: data.name,
        phone: data.phone,
        email: data.email,
        zip: data.zip,
        contactPref: data.contactPref,
        details: data.details,
      });
      setDone(true);
    }
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  if (done) return <SuccessState data={data} />;

  const wrapperClass =
    variant === "card"
      ? "relative rounded-3xl bg-card border border-card-border shadow-xl overflow-hidden"
      : "relative";

  return (
    <div className={wrapperClass}>
      {/* Top progress strip */}
      <div className="relative px-5 sm:px-7 pt-6 sm:pt-7 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">
            Step {step + 1} of {TOTAL_STEPS}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold tabular-nums">
            {Math.round(((step + 1) / TOTAL_STEPS) * 100)}%
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-secondary/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-secondary to-emerald-400 rounded-full"
            initial={false}
            animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && <StepService value={data.service} onChange={(v) => update("service", v)} />}
            {step === 1 && <StepUrgency value={data.urgency} onChange={(v) => update("urgency", v)} />}
            {step === 2 && (
              <StepContact
                data={data}
                onChange={(patch) => setData((prev) => ({ ...prev, ...patch }))}
              />
            )}
            {step === 3 && (
              <StepReview
                data={data}
                onChange={(patch) => setData((prev) => ({ ...prev, ...patch }))}
                onEdit={(targetStep) => setStep(targetStep)}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer nav */}
        <div className="flex items-center justify-between gap-3 mt-7 pt-5 border-t border-card-border">
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              onClick={back}
              className="text-muted-foreground hover:text-foreground font-bold h-11"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back
            </Button>
          ) : (
            <a href="tel:2397481815" className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-secondary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              Or call (239) 748-1815
            </a>
          )}
          <Button
            type="button"
            size="lg"
            onClick={next}
            disabled={!canAdvance}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-11 sm:h-12 px-5 sm:px-7 glow-green disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {step === TOTAL_STEPS - 1 ? (
              <>
                <Check className="mr-1.5 h-4 w-4" />
                Send Request
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

function StepService({ value, onChange }: { value?: Service; onChange: (v: Service) => void }) {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        What can we help you with?
      </h3>
      <p className="text-sm text-muted-foreground mb-5 sm:mb-6">Pick the closest match — we'll dial in the details next.</p>

      <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
        {SERVICE_OPTIONS.map((opt) => {
          const tone = TONE_CLASSES[opt.tone];
          const active = value === opt.value;
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`relative flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl border bg-background text-left transition-all duration-200 press ${
                active ? tone.active : tone.idle
              }`}
              aria-pressed={active}
            >
              <div className={`h-10 w-10 rounded-xl border flex items-center justify-center shrink-0 ${tone.iconBg}`}>
                <Icon className={`h-5 w-5 ${tone.icon}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-extrabold text-foreground leading-tight">{opt.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{opt.desc}</div>
              </div>
              {active && (
                <span className="absolute top-2.5 right-2.5 h-5 w-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepUrgency({ value, onChange }: { value?: Urgency; onChange: (v: Urgency) => void }) {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        How soon do you need it?
      </h3>
      <p className="text-sm text-muted-foreground mb-5 sm:mb-6">Helps us route emergencies to priority dispatch.</p>

      <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
        {URGENCY_OPTIONS.map((opt) => {
          const tone = TONE_CLASSES[opt.tone];
          const active = value === opt.value;
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border bg-background text-left transition-all duration-200 press ${
                active ? tone.active : tone.idle
              }`}
              aria-pressed={active}
            >
              <div className={`h-10 w-10 rounded-xl border flex items-center justify-center shrink-0 ${tone.iconBg}`}>
                <Icon className={`h-5 w-5 ${tone.icon}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-extrabold text-foreground leading-tight">{opt.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{opt.desc}</div>
              </div>
              {active && (
                <span className="absolute top-2.5 right-2.5 h-5 w-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepContact({
  data,
  onChange,
}: {
  data: WizardData;
  onChange: (patch: Partial<WizardData>) => void;
}) {
  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground placeholder:text-muted-foreground transition-colors";

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        Where can we reach you?
      </h3>
      <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
        We'll call within 15 minutes during business hours. Your info stays private.
      </p>

      <div className="space-y-3.5">
        <FieldRow icon={User} label="Full name">
          <input
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Jane Smith"
            autoComplete="name"
            className={inputClass}
          />
        </FieldRow>
        <div className="grid sm:grid-cols-2 gap-3.5">
          <FieldRow icon={Phone} label="Phone">
            <input
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="(239) 555-0100"
              type="tel"
              autoComplete="tel"
              className={inputClass}
            />
          </FieldRow>
          <FieldRow icon={Mail} label="Email">
            <input
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              className={inputClass}
            />
          </FieldRow>
        </div>
        <FieldRow icon={MapPin} label="ZIP code">
          <input
            value={data.zip}
            onChange={(e) => onChange({ zip: e.target.value })}
            placeholder="33901"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="postal-code"
            className={inputClass}
          />
        </FieldRow>

        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-2 block">
            Preferred contact method
          </span>
          <div className="grid grid-cols-3 gap-2">
            {(["phone", "text", "email"] as ContactPref[]).map((p) => {
              const active = data.contactPref === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => onChange({ contactPref: p })}
                  className={`px-3 py-2.5 rounded-xl border text-xs font-extrabold uppercase tracking-widest transition-all ${
                    active
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-card-border bg-background text-muted-foreground hover:text-foreground hover:border-secondary/40"
                  }`}
                  aria-pressed={active}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepReview({
  data,
  onChange,
  onEdit,
}: {
  data: WizardData;
  onChange: (patch: Partial<WizardData>) => void;
  onEdit: (step: number) => void;
}) {
  const service = SERVICE_OPTIONS.find((s) => s.value === data.service);
  const urgency = URGENCY_OPTIONS.find((u) => u.value === data.urgency);

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        Anything else we should know?
      </h3>
      <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
        Optional — but the more detail, the better-prepared our tech will be.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-5">
        <SummaryChip
          label="Service"
          value={service?.label ?? "—"}
          onEdit={() => onEdit(0)}
        />
        <SummaryChip
          label="Urgency"
          value={urgency?.label ?? "—"}
          onEdit={() => onEdit(1)}
        />
      </div>

      <div className="rounded-xl bg-secondary/5 border border-secondary/20 p-3.5 mb-5">
        <div className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
          <div>
            We'll reach <span className="font-extrabold text-foreground">{data.name || "you"}</span> via{" "}
            <span className="font-extrabold text-foreground capitalize">{data.contactPref}</span> at{" "}
            <span className="font-extrabold text-foreground">{data.contactPref === "email" ? data.email : data.phone}</span>.{" "}
            <button onClick={() => onEdit(2)} className="text-secondary font-bold hover:underline">
              Change
            </button>
          </div>
        </div>
      </div>

      <label className="block">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-2 block">
          Tell us more (optional)
        </span>
        <textarea
          value={data.details}
          onChange={(e) => onChange({ details: e.target.value })}
          placeholder="System brand/age, when symptoms started, any error codes — anything that helps us prep the truck."
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground placeholder:text-muted-foreground transition-colors resize-y leading-relaxed"
        />
      </label>
    </div>
  );
}

function FieldRow({ icon: Icon, label, children }: { icon: typeof User; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1.5">
        <Icon className="h-3 w-3 text-secondary" />
        {label}
      </span>
      {children}
    </label>
  );
}

function SummaryChip({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
  return (
    <div className="rounded-xl border border-card-border bg-background p-3.5 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest font-extrabold text-muted-foreground">{label}</div>
        <div className="text-sm font-extrabold text-foreground truncate">{value}</div>
      </div>
      <button
        onClick={onEdit}
        className="text-[11px] font-extrabold uppercase tracking-widest text-secondary hover:text-secondary/80"
      >
        Edit
      </button>
    </div>
  );
}

function SuccessState({ data }: { data: WizardData }) {
  const first = data.name.split(" ")[0] || "there";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-card border border-card-border shadow-xl overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white px-7 py-10 text-center noise overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-60 h-60 bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
          className="relative w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center shadow-2xl"
        >
          <Check className="h-8 w-8 text-secondary-foreground" strokeWidth={3} />
        </motion.div>
        <h3 className="relative text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          You're all set, {first}!
        </h3>
        <p className="relative text-white/70 max-w-md mx-auto leading-relaxed">
          A Hurricane Air dispatcher will reach out{" "}
          <span className="font-extrabold text-white">within 15 minutes</span> during business hours.
        </p>
      </div>

      <div className="p-6 sm:p-7 space-y-3">
        <Button asChild size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 glow-green">
          <Link href="/schedule">
            <Calendar className="mr-2 h-4 w-4" />
            Pick a time slot now
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full border-card-border hover:border-secondary/40 hover:text-secondary font-bold h-12">
          <a href="tel:2397481815">
            <Phone className="mr-2 h-4 w-4" />
            Or call (239) 748-1815
          </a>
        </Button>
        <p className="text-[11px] text-muted-foreground text-center pt-2 leading-relaxed">
          For after-hours emergencies, our 24/7 line is always staffed by a real human.
        </p>
      </div>
    </motion.div>
  );
}
