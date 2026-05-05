import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, CheckCircle2, Bot } from "lucide-react";

type Sender = "bot" | "user";

interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  options?: string[];
}

type Step =
  | "intro"
  | "service"
  | "name"
  | "phone"
  | "email"
  | "address"
  | "preferred"
  | "submitting"
  | "done";

interface LeadDraft {
  service?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  preferred?: string;
}

const SERVICE_OPTIONS = [
  "AC not cooling",
  "AC making noise",
  "Schedule a tune-up",
  "Need a new system",
  "Air quality / ducts",
  "Something else",
];

const PREFERRED_OPTIONS = ["Today / ASAP", "Tomorrow", "This week", "Next week"];

const TYPING_DELAY_MS = 600;

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function isValidPhone(s: string) {
  const digits = s.replace(/\D/g, "");
  return digits.length >= 10;
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
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
    if (open && inputRef.current && step !== "intro" && step !== "service" && step !== "preferred" && step !== "submitting" && step !== "done") {
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
    await pushBot("Hi there! 👋 I'm Hurricane Air's Support Bot.");
    await pushBot("I can get you scheduled with a licensed technician in under a minute. What's going on?", SERVICE_OPTIONS);
    setStep("service");
  }

  function openWidget() {
    setOpen(true);
    setUnread(false);
    if (messages.length === 0) {
      startConversation();
    }
  }

  async function handleServiceSelect(value: string) {
    pushUser(value);
    setDraft((d) => ({ ...d, service: value }));
    await pushBot(`Got it — ${value.toLowerCase()}. What's your full name?`);
    setStep("name");
  }

  async function handleSubmitText() {
    const value = input.trim();
    if (!value) return;
    if (step === "name") {
      pushUser(value);
      setDraft((d) => ({ ...d, name: value }));
      setInput("");
      await pushBot(`Thanks ${value.split(" ")[0]}! What's the best phone number to reach you?`);
      setStep("phone");
      return;
    }
    if (step === "phone") {
      if (!isValidPhone(value)) {
        await pushBot("Hmm, that doesn't look like a valid phone number. Could you double-check it?");
        return;
      }
      pushUser(value);
      setDraft((d) => ({ ...d, phone: value }));
      setInput("");
      await pushBot("Perfect. What's your email address? (We'll send a confirmation.)");
      setStep("email");
      return;
    }
    if (step === "email") {
      if (!isValidEmail(value)) {
        await pushBot("That email doesn't look right — mind trying again?");
        return;
      }
      pushUser(value);
      setDraft((d) => ({ ...d, email: value }));
      setInput("");
      await pushBot("Almost done. What's the service address (street + city)?");
      setStep("address");
      return;
    }
    if (step === "address") {
      pushUser(value);
      setDraft((d) => ({ ...d, address: value }));
      setInput("");
      await pushBot("Last thing — when would you like service?", PREFERRED_OPTIONS);
      setStep("preferred");
      return;
    }
  }

  async function handlePreferredSelect(value: string) {
    pushUser(value);
    const finalDraft = { ...draft, preferred: value };
    setDraft(finalDraft);
    setStep("submitting");
    await pushBot("Booking your request now...");
    setTimeout(async () => {
      // In production this would POST to /api/leads or similar.
      // For now we capture the draft to console so it's available for inspection.
      // eslint-disable-next-line no-console
      console.info("[SupportBot lead]", finalDraft);
      await pushBot(
        `You're all set, ${finalDraft.name?.split(" ")[0] || "there"}! ✅ A Hurricane Air dispatcher will reach out at ${finalDraft.phone} within 15 minutes during business hours. For immediate help, call (239) 748-1815.`,
      );
      setStep("done");
    }, 900);
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitText();
    }
  }

  const showOptions = (() => {
    if (step === "service" || step === "preferred") {
      const last = messages[messages.length - 1];
      if (last && last.sender === "bot" && last.options) return last.options;
    }
    return null;
  })();

  const inputDisabled =
    step === "intro" ||
    step === "service" ||
    step === "preferred" ||
    step === "submitting" ||
    step === "done" ||
    botTyping;

  const placeholder = (() => {
    switch (step) {
      case "name":
        return "Your full name";
      case "phone":
        return "(239) 555-0100";
      case "email":
        return "you@example.com";
      case "address":
        return "Street, city";
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
            className="fixed bottom-4 right-4 z-[180] flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-primary text-white shadow-2xl hover:shadow-secondary/30 transition-all hover:-translate-y-0.5 group"
            aria-label="Open Hurricane Air Support Bot"
          >
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              {unread && (
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500 border-2 border-primary animate-pulse" />
              )}
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-secondary/90">Support Bot</div>
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
            className="fixed bottom-4 right-4 z-[180] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[min(640px,calc(100vh-2rem))] flex flex-col rounded-3xl bg-card border border-card-border shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Hurricane Air Support Bot"
          >
            {/* Header */}
            <div className="relative bg-primary text-white px-5 py-4 flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-extrabold tracking-tight leading-tight">Support Bot</div>
                <div className="text-[11px] text-white/60 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online · Replies instantly
                </div>
              </div>
              <a
                href="tel:2397481815"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="Call Hurricane Air"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="h-8 w-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-zinc-50">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
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
                      onClick={() =>
                        step === "service" ? handleServiceSelect(opt) : handlePreferredSelect(opt)
                      }
                      className="px-3 py-1.5 rounded-full bg-white border border-secondary/40 text-secondary text-xs font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {step === "done" && (
                <div className="pt-2">
                  <div className="rounded-2xl bg-secondary/10 border border-secondary/30 p-3.5 flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div className="text-xs text-foreground/80 leading-relaxed">
                      Need help right now? Call{" "}
                      <a href="tel:2397481815" className="font-extrabold text-secondary hover:underline">
                        (239) 748-1815
                      </a>
                      .
                    </div>
                  </div>
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
                  type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
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
              <p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">
                <MessageCircle className="inline h-2.5 w-2.5 mr-0.5 -mt-0.5" />
                Your info stays private — used only to schedule your service.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
