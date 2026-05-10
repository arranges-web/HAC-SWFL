import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Sparkles, X, Send, Phone, CheckCircle2, Calendar } from "lucide-react";
import { submitBotInquiry } from "@/lib/leads-api";

type Sender = "bot" | "user";

interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  options?: string[];
}

type Step =
  | "intro"
  | "name"
  | "phone"
  | "issue"
  | "empathy"
  | "schedule"
  | "done";

interface LeadDraft {
  name?: string;
  phone?: string;
  issue?: string;
}

const QUICK_ISSUES = [
  "Not cooling",
  "Strange noise",
  "High bills",
  "Tune-up / Maintenance",
  "New system quote",
  "Something else",
];

const TYPING_DELAY_MS = 650;

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function isValidPhone(s: string) {
  const digits = s.replace(/\D/g, "");
  return digits.length >= 10;
}

function pickEmpathy(issue: string, firstName: string): string {
  const i = issue.toLowerCase();
  const name = firstName || "friend";

  if (i.includes("not cool") || i.includes("warm") || i.includes("hot") || i.includes("blowing")) {
    return `Understood, ${name}. A system blowing warm in Florida heat is almost always a small repair — typically a capacitor, low refrigerant, or a clogged drain line. Our trucks are stocked for these, so most jobs are completed on the first visit.`;
  }
  if (i.includes("noise") || i.includes("loud") || i.includes("rattle") || i.includes("buzz") || i.includes("squeal")) {
    return `Noted. Unusual noises typically signal a worn component — addressing it early prevents a much larger repair down the road. Our diagnostic isolates the exact source quickly.`;
  }
  if (i.includes("bill") || i.includes("expensive") || i.includes("electric") || i.includes("efficien")) {
    return `Higher utility bills usually trace back to dirty coils, low refrigerant, or duct leakage — all of which we can identify and resolve. You'll receive a clear breakdown of what's affecting efficiency and the expected payback.`;
  }
  if (i.includes("tune") || i.includes("maintenan") || i.includes("check")) {
    return `A wise decision, ${name}. In Southwest Florida's climate, semi-annual maintenance protects your warranty and helps avoid the larger emergency repairs we routinely see during peak season.`;
  }
  if (i.includes("new") || i.includes("replac") || i.includes("install") || i.includes("quote")) {
    return `Of course. Our estimates are complimentary and include a proper Manual J load calculation — no guesswork by square footage. You'll receive a written quote outlining options across multiple efficiency tiers.`;
  }
  if (i.includes("leak") || i.includes("water") || i.includes("drip")) {
    return `Water around an indoor unit usually indicates a clogged condensate drain line — straightforward to clear, but worth addressing promptly to avoid system shutdown or ceiling damage.`;
  }
  if (i.includes("emergency") || i.includes("urgent") || i.includes("asap") || i.includes("now")) {
    return `I understand, ${name}. We dispatch 24 hours a day. Let me move you into our priority queue right now.`;
  }
  return `Thank you for the details, ${name}. I'd like to ensure a licensed technician takes a proper look — straightforward diagnosis, no upselling. Let's get you scheduled.`;
}

export function SupportBot() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<Step>("intro");
  const [draft, setDraft] = useState<LeadDraft>({});
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, botTyping]);

  useEffect(() => {
    if (open && inputRef.current && (step === "name" || step === "phone" || step === "issue")) {
      inputRef.current.focus();
    }
  }, [open, step]);

  function pushBot(text: string, options?: string[]) {
    setBotTyping(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: uid(), sender: "bot", text, options }]);
        setBotTyping(false);
        resolve();
      }, TYPING_DELAY_MS);
    });
  }

  function pushUser(text: string) {
    setMessages((prev) => [...prev, { id: uid(), sender: "user", text }]);
  }

  async function startConversation() {
    if (messages.length > 0) return;
    await pushBot("Hello — I'm your AI Comfort Specialist at Hurricane Air.");
    await pushBot("I'll connect you with a licensed technician quickly. May I have your first name?");
    setStep("name");
  }

  function openWidget() {
    setOpen(true);
    setUnread(false);
    if (messages.length === 0) {
      startConversation();
    }
  }

  async function handleNameSubmit(value: string) {
    pushUser(value);
    setDraft((d) => ({ ...d, name: value }));
    setInput("");
    const first = value.split(" ")[0] || value;
    await pushBot(`Pleasure to meet you, ${first}. What's the best phone number to reach you?`);
    setStep("phone");
  }

  async function handlePhoneSubmit(value: string) {
    if (!isValidPhone(value)) {
      pushUser(value);
      setInput("");
      await pushBot("Hmm, that doesn't look like a complete phone number — could you double-check it for me?");
      return;
    }
    pushUser(value);
    setDraft((d) => ({ ...d, phone: value }));
    setInput("");
    await pushBot("Thank you. Now, what's happening with your system? Select an option below or describe it in your own words.", QUICK_ISSUES);
    setStep("issue");
  }

  async function handleIssueSubmit(value: string) {
    pushUser(value);
    setDraft((d) => ({ ...d, issue: value }));
    setInput("");
    setStep("empathy");
    const first = (draft.name || "").split(" ")[0] || "friend";
    await pushBot(pickEmpathy(value, first));
    await pushBot("Would you like to reserve a time on our schedule now? Same-day appointments are typically available.", [
      "Yes — schedule me",
      "Have someone call me",
    ]);
    setStep("schedule");
  }

  async function handleScheduleChoice(value: string) {
    pushUser(value);
    setStep("done");
    const first = (draft.name || "").split(" ")[0] || "friend";

    if (draft.name && draft.phone) {
      void submitBotInquiry({
        name: draft.name,
        phone: draft.phone,
        issue: draft.issue,
        choice: value,
        transcript: messages.map((m) => ({ sender: m.sender, text: m.text })),
      });
    }

    if (value.toLowerCase().includes("schedule")) {
      await pushBot(
        `Excellent, ${first}. Use the button below to select your time — it takes about 60 seconds. We'll confirm by phone immediately after.`,
      );
    } else {
      await pushBot(
        `Thank you, ${first}. A Hurricane Air dispatcher will call ${draft.phone} within 15 minutes during business hours. For immediate assistance, please dial (239) 748-1815.`,
      );
    }
  }

  function handleSubmitText() {
    const value = input.trim();
    if (!value) return;
    if (step === "name") {
      void handleNameSubmit(value);
    } else if (step === "phone") {
      void handlePhoneSubmit(value);
    } else if (step === "issue") {
      void handleIssueSubmit(value);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitText();
    }
  }

  const showOptions = (() => {
    if (step === "issue" || step === "schedule") {
      const last = messages[messages.length - 1];
      if (last && last.sender === "bot" && last.options) return last.options;
    }
    return null;
  })();

  const inputDisabled = step === "intro" || step === "schedule" || step === "empathy" || step === "done" || botTyping;

  const placeholder = (() => {
    switch (step) {
      case "name":
        return "Your first name";
      case "phone":
        return "(239) 555-0100";
      case "issue":
        return "Describe what's going on...";
      default:
        return "Type your message...";
    }
  })();

  return (
    <>
      {/* Toggle button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="toggle"
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            onClick={openWidget}
            className="fixed bottom-4 right-4 z-[180] flex items-center gap-2.5 pl-3 pr-5 py-2.5 rounded-full bg-primary text-white shadow-2xl hover:shadow-secondary/30 transition-all hover:-translate-y-0.5 group"
            aria-label="Open AI Comfort Specialist"
          >
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center shadow-inner">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              {unread && (
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500 border-2 border-primary animate-pulse" />
              )}
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-secondary/90">
                AI Comfort Specialist
              </div>
              <div className="text-sm font-bold">Chat with us</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-[180] w-[calc(100vw-1rem)] sm:w-[400px] max-h-[min(680px,calc(100dvh-1rem))] sm:max-h-[min(680px,calc(100vh-2rem))] flex flex-col rounded-3xl bg-card border border-card-border shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="AI Comfort Specialist chat"
          >
            {/* Header */}
            <div className="relative bg-primary text-white px-5 py-4 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/[0.12] via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center shadow-inner">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-primary" />
              </div>
              <div className="relative flex-1 min-w-0">
                <div className="font-extrabold tracking-tight leading-tight">AI Comfort Specialist</div>
                <div className="text-[11px] text-white/65 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online · Replies instantly
                </div>
              </div>
              <a
                href="tel:2397481815"
                className="relative hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white/85 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="Call Hurricane Air"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="relative h-8 w-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-zinc-50">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white text-foreground border border-zinc-200 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {botTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-zinc-200 rounded-2xl rounded-bl-sm px-3.5 py-3 flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce"
                        style={{ animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {showOptions && !botTyping && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {showOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => (step === "issue" ? handleIssueSubmit(opt) : handleScheduleChoice(opt))}
                      className="px-3 py-1.5 rounded-full bg-white border border-secondary/40 text-secondary text-xs font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {step === "done" && (
                <div className="pt-2 space-y-2">
                  <Link
                    href="/schedule"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-extrabold rounded-xl py-3 transition-all hover:-translate-y-0.5 shadow-lg"
                  >
                    <Calendar className="h-4 w-4" />
                    Pick my time slot
                  </Link>
                  <a
                    href="tel:2397481815"
                    className="flex items-center justify-center gap-2 w-full bg-white border border-card-border hover:border-secondary/40 text-foreground font-bold rounded-xl py-2.5 transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 text-secondary" />
                    Or call (239) 748-1815
                  </a>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-zinc-200 bg-white p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitText();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type={step === "phone" ? "tel" : "text"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={inputDisabled ? "Choose an option above..." : placeholder}
                  disabled={inputDisabled}
                  className="flex-1 px-3.5 py-2.5 rounded-full bg-zinc-100 border border-transparent focus:bg-white focus:border-secondary/50 focus:outline-none text-sm placeholder:text-muted-foreground transition-colors disabled:opacity-50"
                  aria-label="Your message"
                />
                <button
                  type="submit"
                  disabled={inputDisabled || !input.trim()}
                  className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight flex items-center justify-center gap-1">
                <CheckCircle2 className="h-2.5 w-2.5 text-secondary" />
                Your info stays private — used only to schedule your service.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
