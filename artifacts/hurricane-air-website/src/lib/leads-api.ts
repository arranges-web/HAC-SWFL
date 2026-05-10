/**
 * Thin wrapper around the public lead-capture endpoints exposed by api-server.
 *
 * VITE_API_BASE_URL can be set in .env to point at a different host;
 * defaults to "/api" so the same origin can serve both the static site
 * and the Express API behind a reverse proxy.
 */

const API_BASE: string =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "/api";

interface SubmitResult {
  ok: boolean;
  id?: number;
  error?: string;
}

async function post(path: string, body: unknown): Promise<SubmitResult> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}` };
    }
    const json = (await res.json()) as { id?: number };
    return { ok: true, id: json.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "network_error" };
  }
}

export interface ContactPayload {
  service?: string;
  urgency?: string;
  name: string;
  phone: string;
  email: string;
  zip?: string;
  contactPref?: string;
  details?: string;
  source?: string;
}

export function submitContactLead(payload: ContactPayload) {
  return post("/leads/contact", { ...payload, source: payload.source ?? location.pathname });
}

export interface PmaPayload {
  propertyType?: string;
  systems: number;
  systemAge?: string;
  billing: string;
  startDate?: string;
  annualPriceCents: number;
  monthlyPriceCents: number;
  name: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  zip?: string;
  notes?: string;
}

export function submitPmaEnrollment(payload: PmaPayload) {
  return post("/leads/pma", payload);
}

export interface BotPayload {
  name: string;
  phone: string;
  issue?: string;
  choice?: string;
  transcript?: unknown;
  source?: string;
}

export function submitBotInquiry(payload: BotPayload) {
  return post("/leads/bot", { ...payload, source: payload.source ?? location.pathname });
}
