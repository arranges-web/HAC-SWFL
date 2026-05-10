import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ShieldCheck,
  Lock,
  Search,
  RefreshCw,
  Download,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "hac_admin_pw";
const API_BASE: string =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "/api";

interface ContactLead {
  id: number;
  createdAt: string;
  service: string | null;
  urgency: string | null;
  name: string;
  phone: string;
  email: string;
  zip: string | null;
  contactPref: string | null;
  details: string | null;
  source: string | null;
  status: string;
}

interface PmaEnrollment {
  id: number;
  createdAt: string;
  propertyType: string | null;
  systems: number;
  systemAge: string | null;
  billing: string;
  startDate: string | null;
  annualPriceCents: number;
  monthlyPriceCents: number;
  name: string;
  phone: string;
  email: string;
  address: string | null;
  city: string | null;
  zip: string | null;
  notes: string | null;
  status: string;
}

interface BotInquiry {
  id: number;
  createdAt: string;
  name: string;
  phone: string;
  issue: string | null;
  choice: string | null;
  transcript: unknown;
  source: string | null;
  status: string;
}

interface AdminPayload {
  contacts: ContactLead[];
  pmaEnrollments: PmaEnrollment[];
  botInquiries: BotInquiry[];
  counts: { contacts: number; pmaEnrollments: number; botInquiries: number };
}

type Tab = "contacts" | "pma" | "bot";

export default function AdminPage() {
  const [password, setPassword] = useState<string>(
    () => (typeof window !== "undefined" ? sessionStorage.getItem(SESSION_KEY) ?? "" : ""),
  );
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [data, setData] = useState<AdminPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<Tab>("contacts");
  const [search, setSearch] = useState("");
  const [refreshIdx, setRefreshIdx] = useState(0);

  useEffect(() => {
    if (!password) return;
    let cancelled = false;
    setLoading(true);
    setAuthError(null);
    fetch(`${API_BASE}/admin/leads`, {
      headers: { "x-admin-password": password },
    })
      .then(async (res) => {
        if (res.status === 401) throw new Error("unauthorized");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<AdminPayload>;
      })
      .then((payload) => {
        if (cancelled) return;
        setData(payload);
        setAuthed(true);
        sessionStorage.setItem(SESSION_KEY, password);
      })
      .catch((err) => {
        if (cancelled) return;
        if (err.message === "unauthorized") {
          setAuthError("Incorrect password");
          sessionStorage.removeItem(SESSION_KEY);
          setAuthed(false);
        } else {
          setAuthError(`Server error: ${err.message}`);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [password, refreshIdx]);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const pw = String(fd.get("password") ?? "");
    setPassword(pw);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setPassword("");
    setAuthed(false);
    setData(null);
  }

  if (!authed) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-3xl bg-card border border-card-border shadow-2xl p-7 space-y-5"
        >
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 border border-secondary/30 mb-3">
              <Lock className="h-5 w-5 text-secondary" />
            </div>
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Admin Center</h1>
            <p className="text-sm text-muted-foreground mt-1">Hurricane Air lead management</p>
          </div>
          <label className="block">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-1.5 block">
              Password
            </span>
            <input
              name="password"
              type="password"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:bg-card focus:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-foreground transition-colors"
            />
          </label>
          {authError && (
            <div className="text-xs text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg p-2.5">
              {authError}
            </div>
          )}
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 glow-green"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          <p className="text-[11px] text-muted-foreground text-center">
            Sign-in protected by the ADMIN_PASSWORD environment variable.
          </p>
          <Link href="/" className="block text-center text-xs font-bold text-muted-foreground hover:text-secondary">
            ← Back to website
          </Link>
        </form>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground text-sm">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-xl border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.webp" alt="Hurricane Air" className="h-8 w-auto" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary">Admin</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setRefreshIdx((i) => i + 1)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-card-border hover:border-secondary/40 hover:text-secondary text-xs font-extrabold uppercase tracking-widest transition-colors"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-card-border hover:border-red-400/40 hover:text-red-500 text-xs font-extrabold uppercase tracking-widest transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <StatCard
            label="Contact Requests"
            value={data.counts.contacts}
            icon={Mail}
            active={tab === "contacts"}
            onClick={() => setTab("contacts")}
          />
          <StatCard
            label="PMA Enrollments"
            value={data.counts.pmaEnrollments}
            icon={CreditCard}
            active={tab === "pma"}
            onClick={() => setTab("pma")}
          />
          <StatCard
            label="AI Specialist Inquiries"
            value={data.counts.botInquiries}
            icon={Sparkles}
            active={tab === "bot"}
            onClick={() => setTab("bot")}
          />
        </div>

        {/* Search + export */}
        <div className="flex items-center gap-3 flex-wrap">
          <label className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, email…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-card-border focus:border-secondary/60 focus:outline-none text-sm transition-colors"
            />
          </label>
          <ExportButton tab={tab} data={data} />
        </div>

        {/* Tab content */}
        {tab === "contacts" && (
          <ContactsTable
            rows={data.contacts}
            search={search}
            password={password}
            onChanged={() => setRefreshIdx((i) => i + 1)}
          />
        )}
        {tab === "pma" && (
          <PmaTable
            rows={data.pmaEnrollments}
            search={search}
            password={password}
            onChanged={() => setRefreshIdx((i) => i + 1)}
          />
        )}
        {tab === "bot" && (
          <BotTable
            rows={data.botInquiries}
            search={search}
            password={password}
            onChanged={() => setRefreshIdx((i) => i + 1)}
          />
        )}
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  value: number;
  icon: typeof Mail;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-left rounded-2xl border p-5 transition-all duration-300 ${
        active
          ? "bg-secondary/10 border-secondary shadow-md ring-2 ring-secondary/20"
          : "bg-card border-card-border hover:border-secondary/40 hover:bg-secondary/5"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center">
          <Icon className="h-5 w-5 text-secondary" />
        </div>
        <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${active ? "translate-x-0.5 text-secondary" : ""}`} />
      </div>
      <div className="mt-4 text-3xl font-black tabular-nums text-foreground leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-widest font-extrabold text-muted-foreground mt-2">
        {label}
      </div>
    </button>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-500/10 border-blue-500/30 text-blue-500",
    pending: "bg-amber-500/10 border-amber-500/30 text-amber-600",
    contacted: "bg-purple-500/10 border-purple-500/30 text-purple-500",
    converted: "bg-secondary/15 border-secondary/40 text-secondary",
    active: "bg-secondary/15 border-secondary/40 text-secondary",
    dismissed: "bg-zinc-500/10 border-zinc-400/30 text-zinc-500",
    cancelled: "bg-zinc-500/10 border-zinc-400/30 text-zinc-500",
  };
  const style = styles[status] ?? "bg-zinc-500/10 border-zinc-400/30 text-zinc-500";
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-extrabold uppercase tracking-widest ${style}`}>
      {status}
    </span>
  );
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function StatusActions({
  type,
  id,
  current,
  password,
  onChanged,
}: {
  type: "contact" | "pma" | "bot";
  id: number;
  current: string;
  password: string;
  onChanged: () => void;
}) {
  const options = type === "pma"
    ? ["pending", "active", "cancelled"]
    : ["new", "contacted", "converted", "dismissed"];

  async function set(newStatus: string) {
    if (newStatus === current) return;
    await fetch(`${API_BASE}/admin/leads/${type}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ status: newStatus }),
    });
    onChanged();
  }

  return (
    <select
      value={current}
      onChange={(e) => void set(e.target.value)}
      className="px-2 py-1 rounded-lg bg-background border border-card-border text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-secondary/60 cursor-pointer"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

function ContactsTable({
  rows,
  search,
  password,
  onChanged,
}: {
  rows: ContactLead[];
  search: string;
  password: string;
  onChanged: () => void;
}) {
  const filtered = useMemo(() => filterRows(rows, search), [rows, search]);
  if (filtered.length === 0) return <EmptyState label="No contact requests yet" />;
  return (
    <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background/50 text-[10px] uppercase tracking-widest text-muted-foreground font-extrabold">
              <Th>Received</Th>
              <Th>Name</Th>
              <Th>Contact</Th>
              <Th>Service</Th>
              <Th>Urgency</Th>
              <Th>ZIP</Th>
              <Th>Pref</Th>
              <Th>Details</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-t border-card-border hover:bg-secondary/[0.04] transition-colors">
                <Td>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {fmtDate(row.createdAt)}
                  </div>
                </Td>
                <Td>
                  <div className="font-extrabold text-foreground">{row.name}</div>
                  <StatusPill status={row.status} />
                </Td>
                <Td>
                  <a href={`tel:${row.phone}`} className="flex items-center gap-1 text-foreground hover:text-secondary text-xs font-bold">
                    <Phone className="h-3 w-3" />
                    {row.phone}
                  </a>
                  <a href={`mailto:${row.email}`} className="flex items-center gap-1 text-muted-foreground hover:text-secondary text-xs">
                    <Mail className="h-3 w-3" />
                    {row.email}
                  </a>
                </Td>
                <Td className="text-xs">{row.service ?? "—"}</Td>
                <Td className="text-xs">{row.urgency ?? "—"}</Td>
                <Td className="text-xs">{row.zip ?? "—"}</Td>
                <Td className="text-xs capitalize">{row.contactPref ?? "—"}</Td>
                <Td className="text-xs text-muted-foreground max-w-[260px]">
                  {row.details ?? "—"}
                </Td>
                <Td>
                  <StatusActions type="contact" id={row.id} current={row.status} password={password} onChanged={onChanged} />
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PmaTable({
  rows,
  search,
  password,
  onChanged,
}: {
  rows: PmaEnrollment[];
  search: string;
  password: string;
  onChanged: () => void;
}) {
  const filtered = useMemo(() => filterRows(rows, search), [rows, search]);
  if (filtered.length === 0) return <EmptyState label="No PMA enrollments yet" />;
  return (
    <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background/50 text-[10px] uppercase tracking-widest text-muted-foreground font-extrabold">
              <Th>Received</Th>
              <Th>Name</Th>
              <Th>Contact</Th>
              <Th>Plan</Th>
              <Th>Systems</Th>
              <Th>Property</Th>
              <Th>Address</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-t border-card-border hover:bg-secondary/[0.04] transition-colors">
                <Td>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {fmtDate(row.createdAt)}
                  </div>
                </Td>
                <Td>
                  <div className="font-extrabold text-foreground">{row.name}</div>
                  <StatusPill status={row.status} />
                </Td>
                <Td>
                  <a href={`tel:${row.phone}`} className="flex items-center gap-1 text-foreground hover:text-secondary text-xs font-bold">
                    <Phone className="h-3 w-3" />
                    {row.phone}
                  </a>
                  <a href={`mailto:${row.email}`} className="flex items-center gap-1 text-muted-foreground hover:text-secondary text-xs">
                    <Mail className="h-3 w-3" />
                    {row.email}
                  </a>
                </Td>
                <Td>
                  <div className="font-extrabold text-secondary tabular-nums">
                    {row.billing === "annual"
                      ? `$${(row.annualPriceCents / 100).toFixed(0)}/yr`
                      : `$${(row.monthlyPriceCents / 100).toFixed(2)}/mo`}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    {row.startDate ?? "—"}
                  </div>
                </Td>
                <Td className="text-xs tabular-nums">
                  {row.systems} system{row.systems > 1 ? "s" : ""}
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    {row.systemAge ?? ""}
                  </div>
                </Td>
                <Td className="text-xs capitalize">{row.propertyType?.replace(/-/g, " ") ?? "—"}</Td>
                <Td className="text-xs text-muted-foreground max-w-[220px]">
                  <div className="flex items-start gap-1">
                    <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
                    <span>
                      {row.address ?? "—"}
                      {row.city ? `, ${row.city}` : ""} {row.zip ?? ""}
                    </span>
                  </div>
                </Td>
                <Td>
                  <StatusActions type="pma" id={row.id} current={row.status} password={password} onChanged={onChanged} />
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BotTable({
  rows,
  search,
  password,
  onChanged,
}: {
  rows: BotInquiry[];
  search: string;
  password: string;
  onChanged: () => void;
}) {
  const filtered = useMemo(() => filterRows(rows, search), [rows, search]);
  if (filtered.length === 0) return <EmptyState label="No AI Specialist inquiries yet" />;
  return (
    <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background/50 text-[10px] uppercase tracking-widest text-muted-foreground font-extrabold">
              <Th>Received</Th>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Issue</Th>
              <Th>Choice</Th>
              <Th>Source</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-t border-card-border hover:bg-secondary/[0.04] transition-colors">
                <Td>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {fmtDate(row.createdAt)}
                  </div>
                </Td>
                <Td>
                  <div className="font-extrabold text-foreground">{row.name}</div>
                  <StatusPill status={row.status} />
                </Td>
                <Td>
                  <a href={`tel:${row.phone}`} className="flex items-center gap-1 text-foreground hover:text-secondary text-xs font-bold">
                    <Phone className="h-3 w-3" />
                    {row.phone}
                  </a>
                </Td>
                <Td className="text-xs text-muted-foreground max-w-[260px]">{row.issue ?? "—"}</Td>
                <Td className="text-xs capitalize">
                  {row.choice ? (
                    <span className="inline-flex items-center gap-1 text-secondary font-bold">
                      <CheckCircle2 className="h-3 w-3" />
                      {row.choice}
                    </span>
                  ) : "—"}
                </Td>
                <Td className="text-[10px] text-muted-foreground font-mono">{row.source ?? "—"}</Td>
                <Td>
                  <StatusActions type="bot" id={row.id} current={row.status} password={password} onChanged={onChanged} />
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left px-4 py-3 whitespace-nowrap">{children}</th>;
}
function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-top ${className ?? ""}`}>{children}</td>;
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-2xl bg-card border border-card-border p-12 text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted mb-3">
        <ArrowRight className="h-5 w-5 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

function filterRows<T extends { name: string; phone: string }>(
  rows: T[],
  search: string,
): T[] {
  const q = search.trim().toLowerCase();
  if (!q) return rows;
  return rows.filter((r) =>
    JSON.stringify(r).toLowerCase().includes(q),
  );
}

function ExportButton({ tab, data }: { tab: Tab; data: AdminPayload }) {
  function handleClick() {
    const rows =
      tab === "contacts" ? data.contacts : tab === "pma" ? data.pmaEnrollments : data.botInquiries;
    if (rows.length === 0) return;
    const headers = Object.keys(rows[0] as object);
    const csv = [
      headers.join(","),
      ...rows.map((r) =>
        headers
          .map((h) => {
            const v = (r as unknown as Record<string, unknown>)[h];
            const s = v === null || v === undefined ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
            return `"${s.replace(/"/g, '""')}"`;
          })
          .join(","),
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${tab}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <button
      onClick={handleClick}
      className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-card-border hover:border-secondary/40 hover:text-secondary text-xs font-extrabold uppercase tracking-widest transition-colors"
    >
      <Download className="h-3.5 w-3.5" />
      Export CSV
    </button>
  );
}
