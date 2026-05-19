/**
 * Location-specific SEO landing pages. Each entry maps to a route like
 * `/pelican-bay/ac-repair` and is rendered by LocationServicePage.
 *
 * Structure intentionally mirrors the page outline used on the original
 * hurricaneairconditioning.com site so JSON-LD + on-page content stay
 * aligned for SEO crawlers.
 */

export type AccentColor = "green" | "orange" | "blue";

export interface ContentSection {
  id?: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; desc: string }[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface LocationPage {
  location: string;
  locationSlug: string;
  serviceSlug: string;
  url: string;
  category: "Cooling" | "Heating" | "Air Quality";
  accentColor: AccentColor;
  price: string;
  priceLabel: string;
  pageTitle: string;          // page H1
  metaTitle: string;          // <title>
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  sections: ContentSection[];
  faqs: FAQ[];
  related: RelatedLink[];
}

const PELICAN_BAY_RELATED: RelatedLink[] = [
  { href: "/pelican-bay/ac-repair", label: "Home AC Repair – Pelican Bay" },
  { href: "/pelican-bay/ac-installation", label: "HVAC Unit Replacement – Pelican Bay" },
  { href: "/pelican-bay/energy-efficient-ac", label: "High-Efficiency AC – Pelican Bay" },
];

export const locationPages: LocationPage[] = [
  // ───────────────────────────────────────────────────────────────────────
  // Pelican Bay – AC Installation / HVAC Unit Replacement
  // ───────────────────────────────────────────────────────────────────────
  {
    location: "Pelican Bay",
    locationSlug: "pelican-bay",
    serviceSlug: "ac-installation",
    url: "/pelican-bay/ac-installation",
    category: "Cooling",
    accentColor: "green",
    price: "Free",
    priceLabel: "In-home replacement estimate · written quote",
    pageTitle: "Pelican Bay HVAC Unit Replacement & AC Installation",
    metaTitle: "Pelican Bay HVAC Unit Replacement & AC Installation | Hurricane Air",
    metaDescription:
      "Pelican Bay HVAC unit replacement and AC installation from Hurricane Air Conditioning of SWFL. Licensed technicians; call to schedule service.",
    heroSubtitle:
      "Licensed, insured replacement and installation of high-efficiency air conditioning systems for Pelican Bay homes, sized and built for Southwest Florida.",
    intro:
      "Pelican Bay HVAC unit replacement is a core residential service from Hurricane Air Conditioning of SWFL. Our licensed technicians handle full system changeouts — diagnostics, removal of aging equipment, and installation of new high-efficiency units engineered for Florida heat and humidity. Every replacement starts with an in-home evaluation and a written, no-pressure proposal.",
    sections: [
      {
        id: "service",
        heading: "HVAC unit replacement services in Pelican Bay",
        paragraphs: [
          "HVAC unit replacement in Pelican Bay covers the full changeout of residential cooling systems — designed for homes whose existing equipment is no longer reliable, efficient, or cost-effective to keep repairing. Our technicians evaluate the air conditioner, supporting components, and ductwork before recommending replacement options.",
        ],
        bullets: [
          "On-site inspection and diagnostics",
          "Guidance on appropriate system sizing for the home",
          "Written installation proposals with a defined scope of work",
          "Removal and disposal of old HVAC equipment",
          "Installation of new outdoor and indoor units",
          "Code-compliant electrical and safety checks",
          "Photographic and written documentation of completed work",
        ],
      },
      {
        id: "installation",
        heading: "Pelican Bay residential AC installation",
        paragraphs: [
          "We install single-stage, multi-stage, variable-speed, and inverter air conditioning systems, selected for performance in the Southwest Florida climate. The objective is stable indoor comfort, reduced noise, and energy-efficient operation.",
          "Every installation starts with an in-home review of layout, load requirements, and airflow paths. Recommendations are presented without pressure — efficiency ratings, humidity-control performance, and long-term maintenance are all explained so you can compare options side by side.",
        ],
      },
      {
        id: "process",
        heading: "What to expect during HVAC unit replacement",
        steps: [
          {
            title: "Initial contact and scheduling",
            desc: "Office staff answer live calls and arrange a visit. Same-day and rapid appointments are offered when possible.",
          },
          {
            title: "On-site evaluation",
            desc: "A licensed technician inspects your current system, electrical supply, drain line, and accessible ductwork. Findings are explained in clear terms.",
          },
          {
            title: "Proposal and options",
            desc: "A written proposal outlines recommended equipment, scope, and any related duct or IAQ work. Repair alternatives are described when suitable.",
          },
          {
            title: "System removal and preparation",
            desc: "We remove the old HVAC unit, prepare or replace the concrete pad, and update mounting, strapping, and breakers for safety and compliance.",
          },
          {
            title: "New system installation",
            desc: "Refrigerant line preparation, drain line configuration, filter and surge protection, and thermostat upgrades are completed and verified.",
          },
          {
            title: "Testing and documentation",
            desc: "The system is tested for performance, airflow, and temperature control. You receive photos and written paperwork summarizing the work.",
          },
          {
            title: "Client education and follow-up",
            desc: "We walk you through operation, filter schedules, and basic troubleshooting. The office stays available for follow-up questions and future service.",
          },
        ],
      },
      {
        id: "ductwork",
        heading: "Ductwork, airflow, and replacement projects",
        paragraphs: [
          "HVAC unit replacement in Pelican Bay frequently involves a review of duct conditions and airflow balance. Aging, leaking, or damaged ducts limit the benefits of a new system. We offer duct replacement and ductwork upgrades when inspection shows losses through gaps, kinks, or poor layout.",
        ],
        bullets: [
          "Duct inspection and airflow checks",
          "Sealing of accessible leaks",
          "Replacement of deteriorated or damaged sections",
          "Layout modifications to improve comfort between rooms",
        ],
      },
      {
        id: "efficiency",
        heading: "Energy efficiency and indoor air quality",
        paragraphs: [
          "Most replacement projects focus on energy savings. Our high-efficiency systems reduce energy consumption while maintaining comfort, and indoor air quality measures — HEPA filtration, UV-C lights, in-duct purifiers, humidity control, and NADCA-certified duct cleaning — are explained during the proposal so they can be combined with the project when appropriate.",
        ],
      },
      {
        id: "financing",
        heading: "Financing, promotions, and documentation",
        paragraphs: [
          "Formal written quotes outline equipment details, scope, and any current promotional offers. Financing options are available through third-party partners with monthly and weekly payment illustrations, subject to eligibility and the specific terms shown in your quote.",
          "All work is documented with photos and written records for your warranty file and future maintenance.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is it determined that an HVAC unit in Pelican Bay should be replaced rather than repaired?",
        a: "Technicians evaluate system age, repair history, current condition, efficiency, and the cost of required repairs. When repeated breakdowns, high energy use, or major component failures are present, a replacement recommendation may be made. You receive repair and replacement options in writing.",
      },
      {
        q: "How long does a typical Pelican Bay HVAC unit replacement take?",
        a: "Most standard residential replacements are completed within a day, assuming normal access and no major duct reconstruction. More complex projects can require additional time. The schedule is explained during the proposal process.",
      },
      {
        q: "Are emergency services available if the system fails before replacement can be scheduled?",
        a: "Yes. We offer 24/7 emergency repair for system failures, including properties in Pelican Bay. We provide diagnostics, temporary repairs where feasible, and planning for full replacement when needed.",
      },
      {
        q: "What preparation is required before residential AC installation?",
        a: "Clients are generally asked to ensure clear access to indoor and outdoor units and to secure pets or sensitive belongings near the work area. Specific preparation steps are provided by the office at the time of scheduling.",
      },
      {
        q: "Can duct problems be addressed as part of HVAC unit replacement in Pelican Bay?",
        a: "Yes. When inspection reveals damaged or inefficient ducts, duct replacement can be incorporated into the project scope so the new system can operate to specification.",
      },
      {
        q: "Are there high-efficiency options for new HVAC units?",
        a: "Yes. We install high-efficiency systems and explain SEER ratings and expected performance as part of every replacement proposal.",
      },
      {
        q: "Is indoor air quality considered during HVAC unit replacement?",
        a: "Yes. We offer IAQ assessments and solutions — in-duct purifiers, UV lights, and duct cleaning — that can be combined with replacement projects.",
      },
      {
        q: "Who performs the replacement work?",
        a: "All work is performed by licensed and insured technicians employed by Hurricane Air Conditioning of SWFL. Office staff coordinate scheduling, with management available for escalated concerns.",
      },
    ],
    related: PELICAN_BAY_RELATED,
  },

  // ───────────────────────────────────────────────────────────────────────
  // Pelican Bay – Energy Efficient AC
  // ───────────────────────────────────────────────────────────────────────
  {
    location: "Pelican Bay",
    locationSlug: "pelican-bay",
    serviceSlug: "energy-efficient-ac",
    url: "/pelican-bay/energy-efficient-ac",
    category: "Cooling",
    accentColor: "green",
    price: "$189",
    priceLabel: "Annual tune-up & maintenance membership",
    pageTitle: "High Efficiency Air Conditioners in Pelican Bay",
    metaTitle: "High Efficiency Air Conditioners in Pelican Bay | Hurricane Air",
    metaDescription:
      "High efficiency air conditioners in Pelican Bay with installation, repair, and maintenance by Hurricane Air Conditioning of SWFL. Call or schedule online.",
    heroSubtitle:
      "Variable-speed, inverter, and high-SEER air conditioning systems professionally sized and installed for Pelican Bay homes — lower energy bills, quieter operation, better humidity control.",
    intro:
      "High efficiency air conditioners in Pelican Bay are supported by professional installation, repair, and maintenance services from Hurricane Air Conditioning of SWFL. We supply residential and light-commercial cooling solutions designed for Florida conditions — including high-efficiency system upgrades and energy-focused recommendations grounded in real load calculations, not square-footage guesses.",
    sections: [
      {
        id: "solutions",
        heading: "High efficiency cooling solutions",
        paragraphs: [
          "High-efficiency systems are configured to reduce wasted energy and improve indoor comfort. We supply and install single-stage, multi-stage, variable-speed, and inverter equipment matched to property size and usage.",
        ],
        bullets: [
          "Licensed and insured HVAC technicians",
          "On-site system evaluations before replacement or new installation",
          "Written, no-pressure proposals for equipment and labor",
          "Documentation with photos and completed paperwork after work",
          "Same-day and 24/7 emergency capability for critical outages",
        ],
      },
      {
        id: "process",
        heading: "What to expect from a high-efficiency AC installation",
        steps: [
          {
            title: "System assessment",
            desc: "Evaluation of existing equipment age, capacity, ductwork condition, airflow, and indoor air quality — plus a discussion of your efficiency goals and any comfort problems like hot rooms or humidity.",
          },
          {
            title: "Equipment and design recommendations",
            desc: "Selection of properly sized high-efficiency equipment for Florida climates. Variable-speed and inverter options are considered for energy savings and even temperatures. Optional smart-thermostat and zoning integration where suitable.",
          },
          {
            title: "Written proposal and scheduling",
            desc: "A written quote outlining scope, components, and any available financing options. Scheduling is coordinated through our office with live phone support and follow-up communication.",
          },
          {
            title: "Installation day",
            desc: "Removal of old equipment, installation of new outdoor and indoor units, drain line work, pads or strapping as required by code, electrical and control connections verified, and initial start-up performance checks.",
          },
          {
            title: "Post-installation review",
            desc: "Walkthrough of system operation and thermostat controls. You receive photos and paperwork plus recommendations for maintenance and filter replacement schedules.",
          },
        ],
      },
      {
        id: "features",
        heading: "Energy-focused features and options",
        paragraphs: [
          "High efficiency air conditioners in Pelican Bay are commonly configured with the following features:",
        ],
        bullets: [
          "Higher SEER-rated equipment designed for reduced consumption under Florida loads",
          "Variable-speed and multi-stage compressors that moderate output rather than running only at full capacity",
          "Enhanced indoor blower controls for even air distribution and quieter operation",
          "Smart thermostats and controls for scheduling, remote access, and energy monitoring",
          "Zoning capabilities where appropriate, allowing targeted cooling for specific areas",
        ],
      },
      {
        id: "iaq",
        heading: "Indoor air quality and comfort",
        paragraphs: [
          "A high-efficiency system pairs well with indoor air quality solutions: HEPA filtration, in-duct purification, UV-C sterilization lights, and whole-home purifiers where appropriate. These services are coordinated with the HVAC system to maintain airflow and filtration performance.",
        ],
      },
      {
        id: "maintenance",
        heading: "Maintenance and protection for energy-saving AC systems",
        paragraphs: [
          "To maintain efficiency, regular maintenance is recommended. Our Comfort Club membership is $189/yr and includes two tune-ups, priority scheduling, member-only repair discounts, and a discounted service-call fee.",
        ],
        bullets: [
          "Filter changes every 30–90 days (monthly under heavy use)",
          "Routine coil cleaning and inspection",
          "Drain line checks to prevent clogs and water damage",
          "Surge protection to reduce damage from lightning-related events",
        ],
      },
    ],
    faqs: [
      {
        q: "How do high efficiency air conditioners differ from standard systems?",
        a: "High efficiency units use advanced compressor technology, improved indoor blowers, and higher SEER ratings to reduce electrical consumption. They operate more evenly, often at lower speeds for longer periods, improving comfort and humidity control compared to older single-stage systems.",
      },
      {
        q: "Are high efficiency AC units suitable for Pelican Bay's coastal climate?",
        a: "Yes. Equipment is selected with Florida's heat, humidity, and coastal conditions in mind. Proper sizing, airflow design, and material choices are part of every proposal and installation.",
      },
      {
        q: "When is high efficiency AC recommended instead of repair?",
        a: "Replacement is often considered when systems are aging, breaking down frequently, or running older low-efficiency technology that drives higher energy bills. During a visit, technicians provide diagnostics and options, which may include repair or full HVAC unit replacement with high-efficiency equipment.",
      },
      {
        q: "Can existing ductwork support a new high-efficiency system?",
        a: "Existing ductwork is evaluated during the system assessment. If leaks, damage, or design limitations are present, sealing, repair, or duct replacement may be recommended to support high-efficiency performance.",
      },
      {
        q: "What maintenance is required for energy-saving AC?",
        a: "Routine professional inspections, coil cleaning, refrigerant checks, and regular filter changes are recommended. Seasonal tune-ups help maintain operating efficiency, reduce unexpected failures, and keep warranties in good standing.",
      },
      {
        q: "Are emergency services available for high-efficiency systems?",
        a: "Yes. We provide 24/7 emergency response for system failures, including high-efficiency units. Same-day service is offered when scheduling and demand conditions permit.",
      },
      {
        q: "Can indoor air quality upgrades be combined with a new high-efficiency installation?",
        a: "Yes. IAQ assessments and products such as HEPA filtration, UV lights, and in-duct purifiers can be integrated as part of a new efficiency-focused system design.",
      },
    ],
    related: PELICAN_BAY_RELATED,
  },

  // ───────────────────────────────────────────────────────────────────────
  // Pelican Bay – Home AC Repair
  // ───────────────────────────────────────────────────────────────────────
  {
    location: "Pelican Bay",
    locationSlug: "pelican-bay",
    serviceSlug: "ac-repair",
    url: "/pelican-bay/ac-repair",
    category: "Cooling",
    accentColor: "green",
    price: "$125",
    priceLabel: "Diagnostic — waived with completed repair",
    pageTitle: "Home AC Repair in Pelican Bay",
    metaTitle: "Home AC Repair Pelican Bay | Hurricane Air Conditioning of SWFL",
    metaDescription:
      "Home AC repair Pelican Bay by Hurricane Air Conditioning of SWFL, offering licensed residential diagnostics, same-day service, and 24/7 emergency support.",
    heroSubtitle:
      "Licensed, insured residential AC repair across Pelican Bay — same-day diagnostics, documented findings, and 24/7 emergency support when the heat won't wait.",
    intro:
      "Home AC repair in Pelican Bay is what we do every day. Our licensed, insured HVAC technicians diagnose system failures, explain findings in plain language, and complete documented repairs with photos and written paperwork. Same-day and after-hours visits are available — we know that in Southwest Florida, a broken AC isn't an inconvenience, it's a health issue.",
    sections: [
      {
        id: "services",
        heading: "Professional home AC repair services",
        paragraphs: [
          "Home air conditioning systems in Pelican Bay run long hours in high heat and humidity. When they fail, accurate repair matters. Our technicians arrive in stocked vehicles and handle the full range of residential AC issues.",
        ],
        bullets: [
          "Diagnostics for all major air conditioning brands and models",
          "Electrical and mechanical troubleshooting",
          "Refrigerant leak detection and repair",
          "Compressor and component assessment and replacement",
          "Thermostat and control checks, including programming issues",
          "Blower, fan, and motor inspection and repairs",
          "Condensate drain cleaning and unclogging",
          "Coil assessment and cleaning when required for performance",
        ],
      },
      {
        id: "process",
        heading: "What to expect from a repair visit",
        steps: [
          {
            title: "Scheduling and confirmation",
            desc: "Office staff answer live calls, gather basic system information, and provide a service window. You'll get updates if technicians are running behind.",
          },
          {
            title: "On-site inspection and diagnostics",
            desc: "The technician inspects indoor and outdoor units, electrical connections, refrigerant levels, airflow, thermostat, condensate lines, and visible duct conditions to identify the root cause.",
          },
          {
            title: "Findings and repair options",
            desc: "The problem is explained in clear terms with photos and notes. Multiple options are provided when possible — targeted repairs versus broader upgrades if the system is old or inefficient.",
          },
          {
            title: "Approval and repair work",
            desc: "Work proceeds only after you approve it. Parts like capacitors, contactors, motors, and fans are replaced as needed. If compressor replacement is more cost-effective than continued minor repairs, the reasoning is explained.",
          },
          {
            title: "Testing and documentation",
            desc: "After repair the system is tested in cooling mode. Temperature, airflow, and basic performance are verified. You get photos and written paperwork summarizing the work.",
          },
          {
            title: "Follow-up support",
            desc: "Our office can arrange future maintenance, answer questions about documentation, and escalate concerns to management when needed.",
          },
        ],
      },
      {
        id: "problems",
        heading: "Common home AC problems we resolve",
        paragraphs: [
          "Pelican Bay systems often run long hours in high humidity, which accelerates wear. The issues we see most frequently:",
        ],
        bullets: [
          "Warm air from supply vents or uneven cooling between rooms",
          "Short cycling or systems that will not turn on",
          "Frozen indoor coils or iced refrigerant lines",
          "Water leaks from indoor units or clogged drain lines",
          "Unusual noises from outdoor condensers or indoor blowers",
          "Frequent breaker trips or an electrical odor at the air handler",
        ],
      },
      {
        id: "local",
        heading: "Local service you can count on",
        paragraphs: [
          "Hurricane Air Conditioning of SWFL has served Pelican Bay and the surrounding Southwest Florida region for over 20 years. We focus on residential systems and light-commercial equipment where applicable.",
        ],
        bullets: [
          "Local, licensed and insured HVAC technicians",
          "Over 20 years of experience in Southwest Florida climates",
          "Same-day and 24/7 emergency availability for critical outages and storm-related failures",
          "Detailed diagnostic process with photos and written records",
          "Office-based scheduling, communication, and follow-up",
        ],
      },
      {
        id: "maintenance",
        heading: "Preventive maintenance and system longevity",
        paragraphs: [
          "Regular maintenance supports reliability and reduces emergency repairs. Our $189/yr Comfort Club membership covers two annual tune-ups, priority scheduling, and member-only repair discounts — and our diagnostic fee is waived when we complete the recommended repair.",
        ],
        bullets: [
          "Filter inspection and replacement guidance",
          "Coil inspection and cleaning when necessary",
          "Refrigerant charge checks and leak evaluation",
          "Electrical connections and component testing",
          "Thermostat calibration and operational checks",
          "Drain line clearing and condensate safety checks",
        ],
      },
    ],
    faqs: [
      {
        q: "How fast can home AC repair in Pelican Bay be scheduled?",
        a: "We offer same-day service for many Pelican Bay calls. 24/7 emergency repair is available for critical outages and storm-related failures, subject to technician availability.",
      },
      {
        q: "Are technicians licensed and insured for work in Pelican Bay?",
        a: "All field technicians are licensed and insured. The team is trained for residential and light-commercial HVAC systems in Southwest Florida climates.",
      },
      {
        q: "Is emergency home AC repair available at night or on weekends?",
        a: "Yes. We offer 24/7 emergency availability. Technicians respond to late-night, weekend, and post-storm calls when systems fail and cooling is urgently required.",
      },
      {
        q: "What if my AC system is too old to repair cost-effectively?",
        a: "When repair costs approach or exceed the value of an aging system, technicians explain replacement options. Services include HVAC unit replacement and residential AC installation, with written quotes and financing information where applicable.",
      },
      {
        q: "Can high-efficiency systems reduce my cooling costs?",
        a: "Yes. High-SEER and variable-speed systems reduce energy use when properly sized and installed. We provide guidance on equipment selection and expected savings.",
      },
      {
        q: "Are indoor air quality services offered along with home AC repair?",
        a: "Yes. We provide IAQ assessments, duct cleaning, and whole-home purification and filtration solutions.",
      },
      {
        q: "How are diagnostic fees handled?",
        a: "Our flat $125 diagnostic fee is waived when you proceed with the repair. Exact pricing is confirmed at the time of scheduling or during the visit.",
      },
      {
        q: "What should I check before requesting emergency repair?",
        a: "Confirm the thermostat is set to cool, breakers haven't tripped, the filter is clean, and there's no visible ice on the coils. If the system still fails, a licensed technician should perform a full diagnostic.",
      },
    ],
    related: PELICAN_BAY_RELATED,
  },
];

export function findLocationPage(locationSlug: string, serviceSlug: string): LocationPage | undefined {
  return locationPages.find(
    (p) => p.locationSlug === locationSlug && p.serviceSlug === serviceSlug,
  );
}

export function buildJsonLd(page: LocationPage, origin: string): object[] {
  const fullUrl = `${origin}${page.url}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${fullUrl}#webpage`,
      url: fullUrl,
      name: page.pageTitle,
      description: page.metaDescription,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "Hurricane Air Conditioning of SWFL",
        url: origin,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${fullUrl}#service`,
      name: page.pageTitle,
      description: page.metaDescription,
      provider: {
        "@type": "Organization",
        name: "Hurricane Air Conditioning of SWFL",
        url: origin,
        telephone: ["+1-239-748-1815"],
      },
      areaServed: [
        { "@type": "Place", name: `${page.location}, Florida` },
        { "@type": "Place", name: "Southwest Florida" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${fullUrl}#faqpage`,
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}
