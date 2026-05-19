/**
 * Location-specific SEO landing pages.
 *
 * Each entry maps to a route like `/cape-coral/ac-repair` and is rendered
 * by the LocationServicePage component. Pages are generated from the
 * cartesian product of {cities} x {service templates}, with a per-city
 * `localBlurb` injecting unique local detail so the pages aren't thin
 * duplicates in Google's eyes.
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
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  sections: ContentSection[];
  faqs: FAQ[];
  related: RelatedLink[];
}

// ────────────────────────────────────────────────────────────────────────
// City directory — one entry per city we serve, with unique local detail
// ────────────────────────────────────────────────────────────────────────

interface City {
  slug: string;
  name: string;
  county: "Lee" | "Collier" | "Charlotte";
  /** 2–3 sentence unique local detail used in intros for SEO */
  localBlurb: string;
}

export const cities: City[] = [
  // Lee County
  {
    slug: "fort-myers",
    name: "Fort Myers",
    county: "Lee",
    localBlurb:
      "Hurricane Air is headquartered in Fort Myers, which means our trucks are stocked and our techs are out the door faster here than anywhere else in SWFL. Fort Myers homes — from the historic McGregor and Edison Park districts to newer Gateway and Verandah developments — face long cooling seasons, salty air, and heavy summer humidity that wear systems out faster than national averages.",
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee",
    localBlurb:
      "Cape Coral's 400+ miles of canals put air conditioning equipment under unique stress. Salt-laden air accelerates coil corrosion on waterfront homes, and the city's rapid build-out means many systems installed in the 2000s are reaching end of life right now. We service every neighborhood from Pelican to Tarpon Point and Cape Harbour.",
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee",
    localBlurb:
      "Bonita Springs sits between Estero Bay and the Gulf, with humid coastal air that pushes AC systems hard year-round. We service Bonita Bay, Pelican Landing, Hunters Ridge, Worthington, and the gated communities along Bonita Beach Road — gulf-front condos and inland single-family homes alike.",
  },
  {
    slug: "estero",
    name: "Estero",
    county: "Lee",
    localBlurb:
      "Estero's master-planned communities — Miromar Lakes, West Bay Club, Grandezza, The Brooks — typically have central HVAC systems sized for tight builder specs that haven't always aged well. Our techs know the common builder-installed brands and the common failure points specific to this area's housing stock.",
  },
  {
    slug: "lehigh-acres",
    name: "Lehigh Acres",
    county: "Lee",
    localBlurb:
      "Lehigh Acres is sprawling, with homes spread across hundreds of square miles east of Fort Myers. Many properties run on aging, builder-grade systems that work overtime in the heat. Our dispatch is configured for the longer drive — appointments here are scheduled with realistic windows so we arrive on time, every time.",
  },

  // Collier County
  {
    slug: "naples",
    name: "Naples",
    county: "Collier",
    localBlurb:
      "Naples has some of the most demanding clients in SWFL — and rightly so. From Port Royal and Old Naples to Pelican Bay, Park Shore, and the Vineyards, our work is held to luxury standards: spotless installations, immaculate documentation, and technicians who respect your home and your time.",
  },
  {
    slug: "pelican-bay",
    name: "Pelican Bay",
    county: "Collier",
    localBlurb:
      "Pelican Bay's coastal high-rises, low-rises, and single-family homes share one truth: the Gulf air is hard on equipment. We service condominium associations, single-family residences, and seasonal homes across the Pelican Bay Foundation footprint — from St. Raphael to Hyde Park, Bay Colony, and the Vanderbilt Beach corridor.",
  },
  {
    slug: "marco-island",
    name: "Marco Island",
    county: "Collier",
    localBlurb:
      "Marco Island's coastal environment means salt corrosion, hurricane preparedness, and humidity management are part of every HVAC conversation. We service single-family homes, condos, and rental properties across the island — including the Estates, Tigertail Beach area, and the Hideaway Beach communities.",
  },
  {
    slug: "golden-gate",
    name: "Golden Gate",
    county: "Collier",
    localBlurb:
      "Golden Gate City and the Golden Gate Estates cover a large swath of Collier County's inland residential neighborhoods. Homes here range from compact city lots to multi-acre estates with long well-water runs and older HVAC equipment. We're routinely in the area and know the local code requirements well.",
  },

  // Charlotte County
  {
    slug: "punta-gorda",
    name: "Punta Gorda",
    county: "Charlotte",
    localBlurb:
      "Punta Gorda's historic downtown, Burnt Store Marina, and Punta Gorda Isles see a mix of coastal humidity, salt air, and storm exposure that AC systems must withstand. Many homes were repaired or replaced post-Hurricane Charley and post-Ian — we service those installations and help plan the next round of upgrades.",
  },
  {
    slug: "port-charlotte",
    name: "Port Charlotte",
    county: "Charlotte",
    localBlurb:
      "Port Charlotte is one of Charlotte County's largest residential markets, with homes spread across the Harbor area, Murdock, and Mid-County. The Peace River and Charlotte Harbor moderate the climate slightly, but humidity and salt still drive routine AC service needs across the area.",
  },
  {
    slug: "englewood",
    name: "Englewood",
    county: "Charlotte",
    localBlurb:
      "Englewood sits on the Gulf at the northern edge of our service area. Its beach-adjacent location means salt-air corrosion is a real factor for outdoor condensers, and many of the homes in Englewood East and Rotonda are aging into HVAC replacement territory. We're here regularly and know the local building stock.",
  },
];

// ────────────────────────────────────────────────────────────────────────
// Service templates — content patterns that get specialized per city
// ────────────────────────────────────────────────────────────────────────

interface ServiceTemplate {
  slug: string;
  shortName: string;
  category: "Cooling" | "Heating" | "Air Quality";
  accentColor: AccentColor;
  price: string;
  priceLabel: string;
  buildPage: (city: City) => Omit<LocationPage, "location" | "locationSlug" | "serviceSlug" | "url" | "category" | "accentColor" | "price" | "priceLabel" | "related">;
}

const SERVICE_TEMPLATES: ServiceTemplate[] = [
  // ─── AC Repair ───
  {
    slug: "ac-repair",
    shortName: "AC Repair",
    category: "Cooling",
    accentColor: "green",
    price: "$125",
    priceLabel: "Diagnostic — waived with completed repair",
    buildPage: (city) => ({
      pageTitle: `Home AC Repair in ${city.name}`,
      metaTitle: `${city.name} AC Repair | Same-Day | Hurricane Air Conditioning of SWFL`,
      metaDescription: `Licensed home AC repair in ${city.name}, ${city.county} County. Same-day diagnostics, 24/7 emergency support, flat $125 diagnostic waived with completed repair. Call (239) 748-1815.`,
      heroSubtitle: `Licensed, insured residential AC repair across ${city.name} — same-day diagnostics, documented findings, and 24/7 emergency support when the heat won't wait.`,
      intro: `${city.localBlurb} When the AC fails, our licensed technicians dispatch with stocked trucks, diagnose the system in plain language, and complete repairs the same day in most cases. Every visit ends with photos and a written record — so you know exactly what was done and why.`,
      sections: [
        {
          id: "services",
          heading: `Professional home AC repair in ${city.name}`,
          paragraphs: [
            `${city.name} homes run their cooling systems hard. When something goes wrong, accurate diagnosis matters more than a quick patch. Our technicians arrive in fully stocked vehicles and handle the full range of residential AC repairs.`,
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
            { title: "Scheduling and confirmation", desc: "Office staff answer live calls, gather basic system info, and provide a service window with text updates if technicians run behind." },
            { title: "On-site inspection and diagnostics", desc: "Your technician inspects indoor and outdoor units, electrical connections, refrigerant levels, airflow, thermostat, condensate lines, and visible duct conditions." },
            { title: "Findings and repair options", desc: "The problem is explained in clear terms with photos and notes. Multiple options are provided when possible — targeted repairs versus broader upgrades when relevant." },
            { title: "Approval and repair work", desc: "Work proceeds only after you approve the written quote. Parts like capacitors, contactors, motors, and fans are replaced from truck stock when possible." },
            { title: "Testing and documentation", desc: "After repair the system is tested in cooling mode. Temperature, airflow, and performance are verified. You receive photos and paperwork." },
            { title: "Follow-up support", desc: "Our office arranges future maintenance, answers documentation questions, and escalates concerns to management when needed." },
          ],
        },
        {
          id: "problems",
          heading: `Common AC problems we resolve in ${city.name}`,
          paragraphs: [
            "Southwest Florida systems run long hours in high humidity, which accelerates wear. The issues we see most frequently:",
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
          heading: `Local ${city.name} service you can count on`,
          paragraphs: [
            `Hurricane Air Conditioning of SWFL has served ${city.name} and the surrounding ${city.county} County area for over 20 years. We focus on residential systems and light-commercial equipment where applicable.`,
          ],
          bullets: [
            "Local, licensed and insured HVAC technicians (CAC1813319)",
            "Over 20 years of experience in Southwest Florida climates",
            "Same-day and 24/7 emergency availability",
            "Detailed diagnostic process with photos and written records",
            "Office-based scheduling, communication, and follow-up",
          ],
        },
      ],
      faqs: [
        { q: `How fast can home AC repair in ${city.name} be scheduled?`, a: `We offer same-day service for many calls in ${city.name}. 24/7 emergency repair is available for critical outages and storm-related failures, subject to technician availability.` },
        { q: `Are your technicians licensed and insured for work in ${city.name}?`, a: "All field technicians are licensed under Florida HVAC license CAC1813319 and fully insured. The team is trained for residential and light-commercial systems in Southwest Florida climates." },
        { q: "Is emergency AC repair available at night or on weekends?", a: "Yes. We offer 24/7 emergency availability. Technicians respond to late-night, weekend, and post-storm calls when systems fail and cooling is urgently required." },
        { q: `What if my AC system in ${city.name} is too old to repair cost-effectively?`, a: "When repair costs approach or exceed the value of an aging system, your technician explains replacement options with written quotes and financing information where applicable." },
        { q: "Can high-efficiency systems reduce my cooling costs?", a: "Yes. High-SEER and variable-speed systems reduce energy use when properly sized and installed. We provide guidance on equipment selection and expected savings." },
        { q: "Are indoor air quality services offered along with AC repair?", a: "Yes. We provide IAQ assessments, duct cleaning, and whole-home purification and filtration solutions that can be added to any repair visit." },
        { q: "How are diagnostic fees handled?", a: "Our flat $125 diagnostic fee is waived when you proceed with the repair. The diagnostic price is confirmed when you schedule, so there are no surprises." },
        { q: "What should I check before requesting emergency repair?", a: "Confirm the thermostat is set to cool, breakers haven't tripped, the filter is clean, and there's no visible ice on the coils. If the system still fails, a licensed technician should perform a full diagnostic." },
      ],
    }),
  },

  // ─── AC Installation / Replacement ───
  {
    slug: "ac-installation",
    shortName: "AC Installation",
    category: "Cooling",
    accentColor: "green",
    price: "Free",
    priceLabel: "In-home replacement estimate · written quote",
    buildPage: (city) => ({
      pageTitle: `${city.name} HVAC Unit Replacement & AC Installation`,
      metaTitle: `${city.name} HVAC Replacement & AC Installation | Hurricane Air`,
      metaDescription: `${city.name} HVAC unit replacement and AC installation by Hurricane Air Conditioning of SWFL. Licensed technicians, written proposals, 10-year manufacturer warranty.`,
      heroSubtitle: `Licensed, insured replacement and installation of high-efficiency air conditioning systems for ${city.name} homes — sized, installed, and warrantied for Southwest Florida.`,
      intro: `${city.localBlurb} When your system reaches the end of its life, our licensed technicians handle the full changeout — diagnostics, removal of aging equipment, and installation of new high-efficiency units. Every replacement starts with an in-home evaluation and a written, no-pressure proposal.`,
      sections: [
        {
          id: "service",
          heading: `HVAC unit replacement in ${city.name}`,
          paragraphs: [
            `HVAC unit replacement in ${city.name} covers the full changeout of residential cooling systems. Service is designed for systems that are no longer reliable, efficient, or cost-effective to repair. Technicians evaluate the existing air conditioner, supporting components, and ductwork conditions before recommending replacement options.`,
          ],
          bullets: [
            "On-site inspection and Manual J load calculations",
            "Guidance on appropriate system sizing for the home",
            "Written installation proposals with defined scope of work",
            "Removal and disposal of old HVAC equipment",
            "Installation of new outdoor and indoor units",
            "Code-compliant electrical and safety checks",
            "Photographic and written documentation of completed work",
          ],
        },
        {
          id: "installation",
          heading: `Residential AC installation in ${city.name}`,
          paragraphs: [
            "We install single-stage, multi-stage, variable-speed, and inverter air conditioning systems, selected for performance in the Southwest Florida climate. The objective is stable indoor comfort, reduced noise, and energy-efficient operation.",
            "Every installation starts with an in-home review of layout, load requirements, and airflow paths. Recommendations are presented without pressure — efficiency ratings, humidity-control performance, and long-term maintenance are all explained so you can compare options side by side.",
          ],
        },
        {
          id: "process",
          heading: "What to expect during HVAC unit replacement",
          steps: [
            { title: "Initial contact and scheduling", desc: "Office staff answer live calls and arrange a visit. Same-day and rapid appointments are offered when possible." },
            { title: "On-site evaluation", desc: "A licensed technician inspects your current system, electrical supply, drain line, and accessible ductwork. Findings are explained in clear terms." },
            { title: "Proposal and options", desc: "A written proposal outlines recommended equipment, scope, and any related duct or IAQ work. Repair alternatives are described when suitable." },
            { title: "System removal and preparation", desc: "We remove the old HVAC unit, prepare or replace the concrete pad, and update mounting, strapping, and breakers for safety and compliance." },
            { title: "New system installation", desc: "Refrigerant line preparation, drain line configuration, filter and surge protection, and thermostat upgrades are completed and verified." },
            { title: "Testing and documentation", desc: "The system is tested for performance, airflow, and temperature control. You receive photos and written paperwork summarizing the work." },
            { title: "Client education and follow-up", desc: "We walk you through operation, filter schedules, and basic troubleshooting. The office stays available for follow-up questions and future service." },
          ],
        },
        {
          id: "ductwork",
          heading: "Ductwork, airflow, and replacement projects",
          paragraphs: [
            "HVAC unit replacement often involves a review of duct conditions and airflow balance. Aging, leaking, or damaged ducts limit the benefits of a new system. We offer duct replacement and upgrades when inspection shows losses through gaps, kinks, or poor layout.",
          ],
          bullets: [
            "Duct inspection and airflow checks",
            "Sealing of accessible leaks",
            "Replacement of deteriorated or damaged sections",
            "Layout modifications to improve comfort between rooms",
          ],
        },
        {
          id: "warranty",
          heading: "Warranty, financing, and documentation",
          paragraphs: [
            "New installations include a 10-year limited manufacturer warranty plus our 1-year labor guarantee. Financing options are available through Florida-licensed lenders — pre-approval takes about 60 seconds and won't affect your credit.",
            "All work is documented with photos and written records for your warranty file and future maintenance.",
          ],
        },
      ],
      faqs: [
        { q: `How is it determined that an HVAC unit in ${city.name} should be replaced rather than repaired?`, a: "Technicians evaluate system age, repair history, current condition, efficiency, and the cost of required repairs. When repeated breakdowns, high energy use, or major component failures are present, replacement is typically the better long-term value. You receive repair and replacement options in writing." },
        { q: `How long does a typical ${city.name} HVAC replacement take?`, a: "Most standard residential replacements are completed in a single day, assuming normal access and no major duct reconstruction. Larger projects can require additional time, which is scoped during the proposal." },
        { q: "Are emergency services available if my system fails before replacement?", a: `Yes. We offer 24/7 emergency repair across ${city.name} and the surrounding area, including diagnostics, temporary repairs where feasible, and planning for full replacement.` },
        { q: "What preparation is required before installation day?", a: "Ensure clear access to indoor and outdoor units, and secure pets or sensitive belongings near the work area. The office provides specific preparation steps at scheduling." },
        { q: "Can duct problems be addressed as part of replacement?", a: "Yes. When inspection reveals damaged or inefficient ducts, duct replacement can be incorporated into the project scope so the new system performs to specification." },
        { q: "Are high-efficiency options available?", a: "Yes. We install high-SEER, variable-speed, and inverter systems and explain efficiency ratings, expected savings, and payback periods as part of every replacement proposal." },
        { q: "Is indoor air quality considered during replacement?", a: "Yes. IAQ assessments — HEPA filtration, UV lights, in-duct purifiers, NADCA-certified duct cleaning — can be combined with replacement projects." },
        { q: "Who performs the replacement work?", a: "All work is performed by licensed and insured technicians employed by Hurricane Air Conditioning of SWFL (CAC1813319). Office staff coordinate scheduling, with management available for escalated concerns." },
      ],
    }),
  },

  // ─── Energy Efficient AC ───
  {
    slug: "energy-efficient-ac",
    shortName: "High-Efficiency AC",
    category: "Cooling",
    accentColor: "green",
    price: "$189",
    priceLabel: "Annual tune-up & maintenance membership",
    buildPage: (city) => ({
      pageTitle: `High Efficiency Air Conditioners in ${city.name}`,
      metaTitle: `${city.name} High Efficiency Air Conditioners | Hurricane Air`,
      metaDescription: `High efficiency air conditioners in ${city.name} with installation, repair, and maintenance by Hurricane Air Conditioning of SWFL. Variable-speed and inverter systems for Florida.`,
      heroSubtitle: `Variable-speed, inverter, and high-SEER air conditioning systems professionally sized and installed for ${city.name} homes — lower energy bills, quieter operation, better humidity control.`,
      intro: `${city.localBlurb} A properly specified high-efficiency system can cut your cooling bills by 20–40% in Florida heat while improving humidity control and indoor comfort. Our technicians size, install, and maintain inverter and variable-speed systems built for the climate — and back them with our 5-year parts warranty and a 10-year limited manufacturer warranty.`,
      sections: [
        {
          id: "solutions",
          heading: "High-efficiency cooling solutions",
          paragraphs: [
            `High-efficiency systems reduce wasted energy and improve indoor comfort. We supply and install single-stage, multi-stage, variable-speed, and inverter equipment matched to property size and usage in ${city.name}.`,
          ],
          bullets: [
            "Licensed and insured HVAC technicians (CAC1813319)",
            "On-site Manual J load calculations before replacement",
            "Written, no-pressure proposals for equipment and labor",
            "Documentation with photos and completed paperwork",
            "Same-day and 24/7 emergency capability",
          ],
        },
        {
          id: "process",
          heading: "What to expect from a high-efficiency installation",
          steps: [
            { title: "System assessment", desc: "Evaluation of existing equipment age, capacity, ductwork condition, airflow, and indoor air quality — plus a discussion of your efficiency goals and comfort problems." },
            { title: "Equipment and design recommendations", desc: "Properly sized high-efficiency equipment for Florida climates. Variable-speed and inverter options for energy savings and even temperatures. Optional smart-thermostat and zoning integration." },
            { title: "Written proposal and scheduling", desc: "A written quote outlining scope, components, and available financing options. Scheduling coordinated through our office with live phone support and follow-up." },
            { title: "Installation day", desc: "Removal of old equipment, installation of new units, drain line work, electrical and control connections verified, initial start-up performance checks." },
            { title: "Post-installation review", desc: "Walkthrough of system operation and thermostat controls. Photos and paperwork delivered, plus maintenance and filter replacement schedules." },
          ],
        },
        {
          id: "features",
          heading: "Energy-focused features and options",
          paragraphs: [
            `High-efficiency air conditioners in ${city.name} are commonly configured with the following features:`,
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
            "A high-efficiency system pairs well with indoor air quality solutions: HEPA filtration, in-duct purification, UV-C sterilization lights, and whole-home purifiers where appropriate. These are coordinated with the HVAC system to maintain airflow and filtration performance.",
          ],
        },
        {
          id: "maintenance",
          heading: "Maintenance and protection for energy-saving AC",
          paragraphs: [
            "To maintain efficiency, regular maintenance is required. Our $189/yr Comfort Club membership includes two annual tune-ups, priority scheduling, member-only repair discounts, and a discounted service-call fee.",
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
        { q: "How do high-efficiency air conditioners differ from standard systems?", a: "They use advanced compressor technology, improved indoor blowers, and higher SEER ratings to reduce electrical consumption. They operate more evenly, often at lower speeds for longer periods, improving comfort and humidity control compared to older single-stage systems." },
        { q: `Are high-efficiency AC units suitable for ${city.name}'s climate?`, a: `Yes. Equipment is selected with Florida's heat, humidity, and ${city.county === "Charlotte" || city.slug === "marco-island" || city.slug === "pelican-bay" || city.slug === "naples" ? "coastal" : "subtropical"} conditions in mind. Proper sizing, airflow design, and material choices are part of every proposal.` },
        { q: "When is high-efficiency AC recommended instead of repair?", a: "Replacement is often considered when systems are aging, breaking down frequently, or running older low-efficiency technology that drives higher energy bills. Your technician provides diagnostics and both repair and replacement options at the visit." },
        { q: "Can existing ductwork support a new high-efficiency system?", a: "Existing ductwork is evaluated during the system assessment. If leaks, damage, or design limitations are present, sealing, repair, or duct replacement may be recommended to support high-efficiency performance." },
        { q: "What maintenance is required for energy-saving AC?", a: "Routine professional inspections, coil cleaning, refrigerant checks, and regular filter changes. Seasonal tune-ups help maintain operating efficiency and keep manufacturer warranties in good standing." },
        { q: "Are emergency services available for high-efficiency systems?", a: "Yes. We provide 24/7 emergency response for system failures, including high-efficiency units. Same-day service is offered when scheduling and demand conditions permit." },
        { q: "Can indoor air quality upgrades be combined with a new installation?", a: "Yes. IAQ assessments and products such as HEPA filtration, UV lights, and in-duct purifiers can be integrated as part of a new efficiency-focused system design." },
      ],
    }),
  },
];

// ────────────────────────────────────────────────────────────────────────
// Generate all city × service entries
// ────────────────────────────────────────────────────────────────────────

function buildRelated(citySlug: string, cityName: string): RelatedLink[] {
  return SERVICE_TEMPLATES.map((s) => ({
    href: `/${citySlug}/${s.slug}`,
    label: `${s.shortName} – ${cityName}`,
  }));
}

export const locationPages: LocationPage[] = cities.flatMap((city) =>
  SERVICE_TEMPLATES.map<LocationPage>((service) => {
    const built = service.buildPage(city);
    return {
      ...built,
      location: city.name,
      locationSlug: city.slug,
      serviceSlug: service.slug,
      url: `/${city.slug}/${service.slug}`,
      category: service.category,
      accentColor: service.accentColor,
      price: service.price,
      priceLabel: service.priceLabel,
      related: buildRelated(city.slug, city.name),
    };
  }),
);

export function findLocationPage(locationSlug: string, serviceSlug: string): LocationPage | undefined {
  return locationPages.find(
    (p) => p.locationSlug === locationSlug && p.serviceSlug === serviceSlug,
  );
}

export function getAllLocationUrls(): string[] {
  return locationPages.map((p) => p.url);
}

export function getCitiesByCounty(): Record<"Lee" | "Collier" | "Charlotte", City[]> {
  return {
    Lee: cities.filter((c) => c.county === "Lee"),
    Collier: cities.filter((c) => c.county === "Collier"),
    Charlotte: cities.filter((c) => c.county === "Charlotte"),
  };
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
