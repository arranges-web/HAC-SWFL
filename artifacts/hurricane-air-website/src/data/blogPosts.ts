export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readMin: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-happens-during-ac-inspection",
    title: "What Really Happens During an AC Inspection?",
    metaDescription:
      "Find out exactly what a professional AC inspection covers in Southwest Florida — step by step, with no surprises.",
    excerpt:
      "Many homeowners feel uneasy about booking a professional AC inspection. We break down every step — from the initial conversation to the final report — so you know exactly what to expect and why it matters.",
    category: "Maintenance",
    publishDate: "2025-04-10",
    readMin: 5,
  },
  {
    slug: "ac-maintenance-how-often",
    title: "AC Maintenance: How Often Should You Really Service Your Air Conditioner?",
    metaDescription:
      "Florida homeowners ask it every year. Here's the recommended AC service schedule for SWFL homes, plus signs you need service now.",
    excerpt:
      "In Southwest Florida's demanding climate, knowing the right AC service schedule can save you money and prevent unexpected breakdowns. Here's how often you should be calling for professional maintenance.",
    category: "Maintenance",
    publishDate: "2025-04-15",
    readMin: 5,
  },
  {
    slug: "ac-tune-up-scope-schedule-pricing",
    title: "AC Tune-Up Scope, Schedule, and Pricing",
    metaDescription:
      "Everything in a proper SWFL AC tune-up: what's checked, how often to schedule, transparent pricing, and warranty compliance.",
    excerpt:
      "Keeping your AC on track in Southwest Florida takes more than a quick rinse of the outdoor unit. This guide explains what a tune-up includes, how often to schedule it, and what you can expect to pay.",
    category: "Maintenance",
    publishDate: "2025-04-20",
    readMin: 7,
  },
  {
    slug: "energy-efficient-cooling-ac-settings",
    title: "Energy Efficient Cooling: Which AC Settings Really Save Money?",
    metaDescription:
      "The right thermostat settings, fan modes, and habits that cut your power bill without sacrificing comfort in Southwest Florida.",
    excerpt:
      "A few smart thermostat settings and daily habits can meaningfully reduce your cooling costs without sacrificing comfort. Here's what actually works in SWFL's hot, humid climate.",
    category: "Energy Savings",
    publishDate: "2025-04-25",
    readMin: 6,
  },
  {
    slug: "energy-efficient-cooling-southwest-florida",
    title: "Energy-Efficient Cooling Options for Southwest Florida Homes",
    metaDescription:
      "Explore energy-efficient cooling options for Southwest Florida, including SEER2, variable-speed AC, humidity control, and smart thermostat settings.",
    excerpt:
      "High humidity, long cooling seasons, and frequent afternoon storms define Southwest Florida. This guide outlines practical equipment choices — from SEER2 ratings to variable-speed inverter systems — that deliver measurable efficiency gains.",
    category: "Energy Savings",
    publishDate: "2025-04-30",
    readMin: 8,
  },
  {
    slug: "hvac-emergency-criteria-southwest-florida",
    title: "HVAC Emergency Criteria in Southwest Florida",
    metaDescription:
      "Know exactly when a broken AC is a true emergency in SWFL — temperature thresholds, hazard types, and the step-by-step after-hours protocol.",
    excerpt:
      "Heat and humidity make cooling failures time-sensitive in SWFL. This guide defines what qualifies as an HVAC emergency, sets clear temperature thresholds, and gives you a step-by-step after-hours action plan.",
    category: "Emergency Service",
    publishDate: "2025-05-02",
    readMin: 6,
  },
  {
    slug: "replace-ac-5000-rule",
    title: "Is It Time to Replace Your AC? Understanding the $5,000 Rule",
    metaDescription:
      "Use the $5,000 HVAC rule to decide whether to repair or replace your air conditioner — and know when the math changes.",
    excerpt:
      "Knowing when to repair or replace an aging air conditioner can be confusing. The $5,000 HVAC rule is a simple way to weigh repair costs against system age and efficiency — here's how to apply it.",
    category: "Replacement",
    publishDate: "2025-05-05",
    readMin: 5,
  },
  {
    slug: "repair-or-replace-5000-hvac-rule",
    title: "Repair or Replace: Applying the $5,000 HVAC Rule in SWFL",
    metaDescription:
      "A detailed SWFL guide to applying the $5,000 rule — including R-22 refrigerant, compressor replacement scenarios, and financing options.",
    excerpt:
      "Southwest Florida summers test every air conditioner. When a breakdown happens during peak heat, the first question is repair or replace. This detailed guide explains the $5,000 rule and the SWFL-specific factors that refine it.",
    category: "Replacement",
    publishDate: "2025-05-07",
    readMin: 7,
  },
  {
    slug: "ac-repair-costs-swfl",
    title: "The Truth About AC Repair Costs in SWFL",
    metaDescription:
      "Straight answers on AC repair pricing in Southwest Florida — what's fair, what drives costs up, and how to spot unreasonable charges.",
    excerpt:
      "If your AC quits on a SWFL afternoon, the first worry is comfort — the second is cost. This guide gives you straight answers on how AC repair pricing works, what's fair, and how to avoid surprises.",
    category: "Repair",
    publishDate: "2025-05-09",
    readMin: 6,
  },
  {
    slug: "ductwork-lifespan-cost-upgrades-swfl-homes",
    title: "Ductwork: Lifespan, Upgrades, and Cost in SWFL Homes",
    metaDescription:
      "Learn typical ductwork lifespan, repair and replacement costs, and when cleaning or a full redesign makes sense for SWFL homes.",
    excerpt:
      "Southwest Florida homes face unique ductwork stresses — heat, humidity, salt air, and attic temperatures accelerate wear. This guide covers lifespan expectations, cleaning versus replacement, common design mistakes, and realistic cost ranges.",
    category: "Ductwork",
    publishDate: "2025-05-11",
    readMin: 8,
  },
  {
    slug: "duct-repair-or-replace-guide",
    title: "Let's Talk Ductwork: Is It Time to Repair or Replace Your Air Ducts?",
    metaDescription:
      "Clear signs, costs, and next steps for deciding whether to repair or replace ductwork in your Southwest Florida home.",
    excerpt:
      "Weak airflow at vents, dust that keeps coming back, rooms that never match the thermostat — these are classic ductwork clues. Here's how to tell whether repair is enough or it's time for replacement.",
    category: "Ductwork",
    publishDate: "2025-05-13",
    readMin: 6,
  },
];

export const categoryColors: Record<string, string> = {
  Maintenance: "bg-secondary/10 text-secondary border-secondary/20",
  "Energy Savings": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Emergency Service": "bg-red-500/10 text-red-400 border-red-500/20",
  Replacement: "bg-accent/10 text-accent border-accent/20",
  Repair: "bg-accent/10 text-accent border-accent/20",
  Ductwork: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};
