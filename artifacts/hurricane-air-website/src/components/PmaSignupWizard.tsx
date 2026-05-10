import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { submitPmaEnrollment } from "@/lib/leads-api";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  Calendar,
  Home,
  Building2,
  Snowflake,
  Wind,
  ShieldCheck,
  Mail,
  User,
  MapPin,
  CreditCard,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type PropertyType = "single-family" | "condo" | "multi-family" | "commercial";
type SystemAge = "0-5" | "5-10" | "10-15" | "15+" | "unknown";
type Billing = "annual" | "monthly";

interface PmaData {
  propertyType?: PropertyType;
  systems: number;
  systemAge?: SystemAge;
  billing: Billing;
  startDate: "asap" | "next-30" | "after-60";
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  notes: string;
}

const PROPERTY_OPTIONS: { value: PropertyType; label: string; desc: string; icon: typeof Home }[] = [
  { value: "single-family", label: "Single-Family Home", desc: "Detached residence", icon: Home },
  { value: "condo", label: "Condo / Townhouse", desc: "Attached or stacked unit", icon: Building2 },
  { value: "multi-family", label: "Multi-Family", desc: "Duplex, triplex, or rental", icon: Building2 },
  { value: "commercial", label: "Commercial", desc: "Office, retail, or light industrial", icon: Building2 },
];

const AGE_OPTIONS: { value: SystemAge; label: string }[] = [
  { value: "0-5", label: "0–5 years" },
  { value: "5-10", label: "5–10 years" },
  { value: "10-15", label: "10–15 years" },
  { value: "15+", label: "15+ years" },
  { value: "unknown", label: "Not sure" },
];

const START_OPTIONS: { value: PmaData["startDate"]; label: string; desc: string }[] = [
  { value: "asap", label: "As soon as possible", desc: "First visit scheduled in the next 7 days" },
  { value: "next-30", label: "Within 30 days", desc: "Standard onboarding window" },
  { value: "after-60", label: "Plan ahead (60+ days)", desc: "Schedule the first visit later" },
];

const BASE_PRICE_ANNUAL = 189;
const ADDITIONAL_SYSTEM_ANNUAL = 99;
const MONTHLY_FACTOR = 1 / 12;

function priceForData(data: PmaData) {
  const annual = BASE_PRICE_ANNUAL + Math.max(0, data.systems - 1) * ADDITIONAL_SYSTEM_ANNUAL;
  const monthly = Math.round(annual * MONTHLY_FACTOR * 100) / 100;
  return { annual, monthly };
}

const TOTAL_STEPS = 5;

export function PmaSignupWizard() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<PmaData>({
    systems: 1,
    billing: "annual",
    startDate: "next-30",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    notes: "",
  });

  function update<K extends keyof PmaData>(key: K, value: PmaData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  const canAdvance = (() => {
    if (step === 0) return !!data.propertyType;
    if (step === 1) return data.systems >= 1 && !!data.systemAge;
    if (step === 2) return !!data.billing && !!data.startDate;
    if (step === 3) {
      const phoneDigits = data.phone.replace(/\D/g, "");
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      return data.name.trim().length >= 2 && phoneDigits.length >= 10 && emailOk && data.address.trim().length > 2 && data.zip.trim().length >= 5;
    }
    if (step === 4) return true;
    return false;
  })();

  function next() {
    if (!canAdvance) return;
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      const price = priceForData(data);
      void submitPmaEnrollment({
        propertyType: data.propertyType,
        systems: data.systems,
        systemAge: data.systemAge,
        billing: data.billing,
        startDate: data.startDate,
        annualPriceCents: Math.round(price.annual * 100),
        monthlyPriceCents: Math.round(price.monthly * 100),
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        city: data.city,
        zip: data.zip,
        notes: data.notes,
      });
      setDone(true);
    }
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  if (done) return <SuccessState data={data} price={priceForData(data)} />;

  const { annual, monthly } = priceForData(data);

  return (
    <div className="relative rounded-3xl bg-card border border-card-border shadow-2xl overflow-hidden">
      {/* Header strip with live price */}
      <div className="relative bg-primary text-white px-6 py-5 noise overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary/[0.18] rounded-full blur-[80px] pointer-events-none" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">
                Comfort Club Membership
              </span>
            </div>
            <div className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
              Enroll in 4 quick steps
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest font-extrabold text-white/50">Your plan</div>
            <div className="text-2xl sm:text-3xl font-black tabular-nums text-secondary leading-none">
              ${data.billing === "annual" ? annual : monthly.toFixed(2)}
              <span className="text-xs font-bold text-white/60 ml-1">
                /{data.billing === "annual" ? "yr" : "mo"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-5 pb-1">
        <div className="flex items-center justify-between mb-2">
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
      <div className="px-6 pb-6 pt-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && <StepProperty value={data.propertyType} onChange={(v) => update("propertyType", v)} />}
            {step === 1 && (
              <StepSystem
                systems={data.systems}
                age={data.systemAge}
                onSystems={(v) => update("systems", v)}
                onAge={(v) => update("systemAge", v)}
              />
            )}
            {step === 2 && (
              <StepPlan
                billing={data.billing}
                startDate={data.startDate}
                annual={annual}
                monthly={monthly}
                onBilling={(v) => update("billing", v)}
                onStartDate={(v) => update("startDate", v)}
              />
            )}
            {step === 3 && (
              <StepContact data={data} onChange={(patch) => setData((prev) => ({ ...prev, ...patch }))} />
            )}
            {step === 4 && (
              <StepReview
                data={data}
                annual={annual}
                monthly={monthly}
                onChange={(patch) => setData((prev) => ({ ...prev, ...patch }))}
                onEdit={(targetStep) => setStep(targetStep)}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer nav */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-card-border">
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
                Confirm Enrollment
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

function StepProperty({ value, onChange }: { value?: PropertyType; onChange: (v: PropertyType) => void }) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        What kind of property?
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Helps us route the right technician for your first visit.
      </p>
      <div className="grid sm:grid-cols-2 gap-2.5">
        {PROPERTY_OPTIONS.map((opt) => {
          const active = value === opt.value;
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`relative flex items-start gap-3 p-3.5 rounded-2xl border bg-background text-left transition-all duration-200 press ${
                active
                  ? "border-secondary bg-secondary/10 ring-2 ring-secondary/30"
                  : "border-card-border hover:border-secondary/40 hover:bg-secondary/5"
              }`}
              aria-pressed={active}
            >
              <div className="h-10 w-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-secondary" />
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

function StepSystem({
  systems,
  age,
  onSystems,
  onAge,
}: {
  systems: number;
  age?: SystemAge;
  onSystems: (n: number) => void;
  onAge: (a: SystemAge) => void;
}) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        Tell us about your system.
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Each additional A/C system adds <span className="font-extrabold text-secondary">$99/yr</span> to the plan.
      </p>

      <div className="rounded-2xl bg-background border border-card-border p-4 sm:p-5 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest font-extrabold text-muted-foreground">
              Number of A/C systems
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">Indoor units, mini-splits, or zoned condensers</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSystems(Math.max(1, systems - 1))}
              className="h-10 w-10 rounded-xl border border-card-border bg-background hover:border-secondary/40 hover:text-secondary text-foreground font-extrabold text-lg transition-colors"
              aria-label="Decrease"
            >
              −
            </button>
            <div className="min-w-[3ch] text-center text-2xl font-black tabular-nums text-foreground">
              {systems}
            </div>
            <button
              type="button"
              onClick={() => onSystems(Math.min(8, systems + 1))}
              className="h-10 w-10 rounded-xl border border-card-border bg-background hover:border-secondary/40 hover:text-secondary text-foreground font-extrabold text-lg transition-colors"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-widest font-extrabold text-muted-foreground mb-2">
          Approximate system age
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {AGE_OPTIONS.map((opt) => {
            const active = age === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onAge(opt.value)}
                className={`px-3 py-2.5 rounded-xl border text-xs font-extrabold uppercase tracking-widest transition-all ${
                  active
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-card-border bg-background text-muted-foreground hover:text-foreground hover:border-secondary/40"
                }`}
                aria-pressed={active}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepPlan({
  billing,
  startDate,
  annual,
  monthly,
  onBilling,
  onStartDate,
}: {
  billing: Billing;
  startDate: PmaData["startDate"];
  annual: number;
  monthly: number;
  onBilling: (b: Billing) => void;
  onStartDate: (s: PmaData["startDate"]) => void;
}) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        Choose your billing.
      </h3>
      <p className="text-sm text-muted-foreground mb-5">Same plan, two ways to pay. Cancel any time.</p>

      <div className="grid sm:grid-cols-2 gap-3 mb-5">
        <button
          type="button"
          onClick={() => onBilling("annual")}
          className={`relative text-left p-4 rounded-2xl border bg-background transition-all duration-200 press ${
            billing === "annual"
              ? "border-secondary bg-secondary/10 ring-2 ring-secondary/30"
              : "border-card-border hover:border-secondary/40 hover:bg-secondary/5"
          }`}
          aria-pressed={billing === "annual"}
        >
          <div className="flex items-center gap-2 mb-2">
            <Snowflake className="h-4 w-4 text-secondary" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">Best Value</span>
          </div>
          <div className="text-3xl font-black tabular-nums text-foreground leading-none">
            ${annual}
            <span className="text-xs font-semibold text-muted-foreground ml-1">/year</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1.5">One annual payment</div>
          {billing === "annual" && (
            <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
              <Check className="h-3 w-3" />
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => onBilling("monthly")}
          className={`relative text-left p-4 rounded-2xl border bg-background transition-all duration-200 press ${
            billing === "monthly"
              ? "border-secondary bg-secondary/10 ring-2 ring-secondary/30"
              : "border-card-border hover:border-secondary/40 hover:bg-secondary/5"
          }`}
          aria-pressed={billing === "monthly"}
        >
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="h-4 w-4 text-secondary" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">Spread Out</span>
          </div>
          <div className="text-3xl font-black tabular-nums text-foreground leading-none">
            ${monthly.toFixed(2)}
            <span className="text-xs font-semibold text-muted-foreground ml-1">/month</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1.5">Auto-billed monthly</div>
          {billing === "monthly" && (
            <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
              <Check className="h-3 w-3" />
            </span>
          )}
        </button>
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-widest font-extrabold text-muted-foreground mb-2 flex items-center gap-1.5">
          <CalendarDays className="h-3 w-3 text-secondary" />
          When should we start?
        </div>
        <div className="space-y-2">
          {START_OPTIONS.map((opt) => {
            const active = startDate === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onStartDate(opt.value)}
                className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 ${
                  active
                    ? "border-secondary bg-secondary/10"
                    : "border-card-border bg-background hover:border-secondary/40"
                }`}
                aria-pressed={active}
              >
                <span
                  className={`mt-0.5 h-4 w-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                    active ? "border-secondary bg-secondary" : "border-card-border"
                  }`}
                >
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-secondary-foreground" />}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-foreground leading-tight">{opt.label}</div>
                  <div className="text-xs text-muted-foreground leading-snug mt-0.5">{opt.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepContact({
  data,
  onChange,
}: {
  data: PmaData;
  onChange: (patch: Partial<PmaData>) => void;
}) {
  const inputClass =
    "w-full px-4 py-2.5 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground placeholder:text-muted-foreground transition-colors";
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        Where will service be performed?
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        We dispatch from Fort Myers across Lee, Collier & Charlotte counties.
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
        <FieldRow icon={MapPin} label="Service address">
          <input
            value={data.address}
            onChange={(e) => onChange({ address: e.target.value })}
            placeholder="1234 Palm Drive"
            autoComplete="street-address"
            className={inputClass}
          />
        </FieldRow>
        <div className="grid sm:grid-cols-[1.4fr_1fr] gap-3.5">
          <FieldRow icon={Wind} label="City">
            <input
              value={data.city}
              onChange={(e) => onChange({ city: e.target.value })}
              placeholder="Fort Myers"
              autoComplete="address-level2"
              className={inputClass}
            />
          </FieldRow>
          <FieldRow icon={MapPin} label="ZIP">
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
        </div>
      </div>
    </div>
  );
}

function StepReview({
  data,
  annual,
  monthly,
  onChange,
  onEdit,
}: {
  data: PmaData;
  annual: number;
  monthly: number;
  onChange: (patch: Partial<PmaData>) => void;
  onEdit: (step: number) => void;
}) {
  const property = PROPERTY_OPTIONS.find((p) => p.value === data.propertyType);
  const age = AGE_OPTIONS.find((a) => a.value === data.systemAge);
  const start = START_OPTIONS.find((s) => s.value === data.startDate);
  const billingLabel =
    data.billing === "annual" ? `$${annual}/yr — paid annually` : `$${monthly.toFixed(2)}/mo — auto-billed monthly`;

  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1.5 leading-tight">
        Review &amp; confirm.
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Looks good? We'll lock in your plan and reach out to schedule the first visit.
      </p>

      <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-4 mb-4">
        <div className="flex items-baseline justify-between mb-1">
          <div className="text-[10px] uppercase tracking-widest font-extrabold text-secondary">Total today</div>
          <div className="text-2xl font-black text-secondary tabular-nums">
            {data.billing === "annual" ? `$${annual}` : `$${monthly.toFixed(2)}`}
            <span className="text-xs font-bold text-foreground/60 ml-1">
              /{data.billing === "annual" ? "yr" : "mo"}
            </span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground leading-snug">
          {data.systems} {data.systems === 1 ? "system" : "systems"} ·{" "}
          {data.billing === "annual" ? "annual billing" : "monthly auto-pay"} · cancel anytime
        </div>
      </div>

      <dl className="space-y-2">
        <ReviewRow label="Property" value={property?.label ?? "—"} onEdit={() => onEdit(0)} />
        <ReviewRow
          label="Systems"
          value={`${data.systems} system${data.systems > 1 ? "s" : ""} · ${age?.label ?? "—"}`}
          onEdit={() => onEdit(1)}
        />
        <ReviewRow label="Plan" value={billingLabel} onEdit={() => onEdit(2)} />
        <ReviewRow label="First visit" value={start?.label ?? "—"} onEdit={() => onEdit(2)} />
        <ReviewRow
          label="Contact"
          value={`${data.name} · ${data.phone}`}
          onEdit={() => onEdit(3)}
        />
        <ReviewRow
          label="Address"
          value={`${data.address}, ${data.city || ""} ${data.zip}`.replace(/, $/, "").trim()}
          onEdit={() => onEdit(3)}
        />
      </dl>

      <label className="block mt-5">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-1.5 block">
          Anything we should know? (Optional)
        </span>
        <textarea
          value={data.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          placeholder="Gate codes, pet on premises, system brand, equipment closet location..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground placeholder:text-muted-foreground transition-colors resize-y leading-relaxed"
        />
      </label>

      <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
        By confirming, you authorize Hurricane Air to contact you about onboarding and to charge the selected
        billing cycle. Membership is non-binding — cancel any time without penalty.
      </p>
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

function ReviewRow({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-card-border last:border-0">
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest font-extrabold text-muted-foreground">{label}</div>
        <div className="text-sm font-bold text-foreground truncate">{value || "—"}</div>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="text-[11px] font-extrabold uppercase tracking-widest text-secondary hover:text-secondary/80"
      >
        Edit
      </button>
    </div>
  );
}

function SuccessState({
  data,
  price,
}: {
  data: PmaData;
  price: { annual: number; monthly: number };
}) {
  const first = data.name.split(" ")[0] || "there";
  const due =
    data.billing === "annual" ? `$${price.annual}/yr` : `$${price.monthly.toFixed(2)}/mo`;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-card border border-card-border shadow-2xl overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white px-7 py-10 text-center noise overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-60 h-60 bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
          className="relative w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center shadow-2xl"
        >
          <ShieldCheck className="h-8 w-8 text-secondary-foreground" strokeWidth={2.5} />
        </motion.div>
        <h3 className="relative text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Welcome to the Comfort Club, {first}.
        </h3>
        <p className="relative text-white/70 max-w-md mx-auto leading-relaxed">
          Your membership is locked in at <span className="font-extrabold text-white">{due}</span>. We'll call{" "}
          <span className="font-extrabold text-white">{data.phone}</span> within 1 business day to confirm payment
          details and schedule your first visit.
        </p>
      </div>

      <div className="p-6 space-y-3">
        <div className="rounded-xl bg-secondary/10 border border-secondary/30 p-4 text-xs text-foreground/85 leading-relaxed">
          <span className="font-extrabold text-foreground">What's next:</span> Look out for a confirmation email at{" "}
          <span className="font-extrabold text-foreground">{data.email}</span>. If you'd like to reserve your first
          tune-up window now, schedule below.
        </div>
        <Button
          asChild
          size="lg"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 glow-green"
        >
          <Link href="/schedule">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule my first tune-up
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full border-card-border hover:border-secondary/40 hover:text-secondary font-bold h-12"
        >
          <a href="tel:2397481815">
            <Phone className="mr-2 h-4 w-4" />
            Or call (239) 748-1815
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
