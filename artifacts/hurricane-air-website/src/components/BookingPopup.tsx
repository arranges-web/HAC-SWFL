import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

const SESSION_KEY = "booking_popup_dismissed";

const FIRST_NAMES = [
  "Sarah", "Mike", "Jennifer", "David", "Lisa", "Tom",
  "Amanda", "Chris", "Emily", "Brian", "Karen", "Kevin",
  "Maria", "Steven", "Rachel", "James", "Patricia", "Michael",
  "Linda", "Robert", "Angela", "Daniel", "Nicole", "Mark",
];

const CITIES = [
  "Punta Gorda", "Port Charlotte", "Englewood",
  "Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres",
  "Naples", "Marco Island", "Golden Gate",
];

const SERVICES = [
  "AC Repair",
  "AC Tune-Up",
  "Emergency AC Service",
  "Thermostat Installation",
  "Air Duct Cleaning",
  "AC Maintenance",
  "Heat Pump Installation",
  "Indoor Air Quality Check",
];

const TIMES = [
  "just now", "1 min ago", "2 mins ago", "4 mins ago",
  "7 mins ago", "11 mins ago", "18 mins ago",
];

interface Booking {
  id: number;
  name: string;
  city: string;
  service: string;
  time: string;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateBooking(id: number): Booking {
  return {
    id,
    name: pick(FIRST_NAMES),
    city: pick(CITIES),
    service: pick(SERVICES),
    time: pick(TIMES),
  };
}

const INITIAL_DELAY_MS = 6000;
const VISIBLE_MS = 6500;
const GAP_MS = 9000;

export function BookingPopup() {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) {
      setDismissed(true);
      return;
    }

    let counter = 0;
    let visibleTimer: ReturnType<typeof setTimeout> | undefined;
    let nextTimer: ReturnType<typeof setTimeout> | undefined;

    const show = () => {
      counter += 1;
      setBooking(generateBooking(counter));
      visibleTimer = setTimeout(() => {
        setBooking(null);
        nextTimer = setTimeout(show, GAP_MS);
      }, VISIBLE_MS);
    };

    const initialTimer = setTimeout(show, INITIAL_DELAY_MS);
    return () => {
      clearTimeout(initialTimer);
      if (visibleTimer) clearTimeout(visibleTimer);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
    setBooking(null);
  }

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {booking && (
        <motion.div
          key={booking.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed bottom-4 left-4 z-[150] max-w-[320px] w-[calc(100vw-2rem)] sm:w-[320px]"
          role="status"
          aria-live="polite"
        >
          <div className="relative bg-card rounded-2xl shadow-2xl border border-card-border overflow-hidden">
            <div className="flex items-start gap-3 p-3.5 pr-9">
              <div
                className="h-10 w-10 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center shrink-0 font-extrabold text-secondary"
                aria-hidden
              >
                {booking.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0" />
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-secondary">
                    Booking Confirmed
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground leading-tight">
                  {booking.name} from {booking.city}
                </p>
                <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                  booked <span className="font-semibold text-foreground/80">{booking.service}</span>
                </p>
                <p className="text-[11px] text-muted-foreground/70 mt-1">{booking.time}</p>
              </div>
            </div>
            <button
              onClick={dismiss}
              aria-label="Dismiss booking notification"
              className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-foreground/5 flex items-center justify-center transition-colors"
            >
              <X className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
