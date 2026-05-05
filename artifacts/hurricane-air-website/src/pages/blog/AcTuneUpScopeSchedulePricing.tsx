import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "ac-tune-up-scope-schedule-pricing")!;

export default function AcTuneUpScopeSchedulePricing() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Keeping your AC on track in Southwest Florida takes more than a quick rinse of the outdoor unit. High
        heat and year-round humidity push equipment hard, and small issues can turn into early failures or high
        energy bills. This guide explains what an AC maintenance service includes, how often you should schedule
        it in our climate, and what you can expect to pay. You'll also see how proper documentation protects
        your warranty and helps you make informed decisions.
      </p>

      <h2>What AC Maintenance Service Means</h2>
      <p>
        An AC maintenance service is a structured inspection and cleaning performed by a licensed technician. The
        goal is to restore safe, efficient operation, verify performance against manufacturer specs, and document
        the system's condition. In SWFL, a complete tune-up centers on airflow, heat transfer, electrical
        reliability, condensate removal, and controls.
      </p>
      <p>
        You can expect clear notes and photos, a prioritized list of findings, and options if repairs are
        recommended. Reputable providers explain what was tested, what passed, and what needs attention now or on
        a future visit.
      </p>

      <h2>What Happens During an AC Tune-Up</h2>
      <p>A standard tune-up in our area typically includes:</p>
      <ul>
        <li>
          <strong>Filter assessment and replacement guidance.</strong> The technician confirms the correct size
          and MERV rating for your system and notes pressure drop or airflow restriction.
        </li>
        <li>
          <strong>Evaporator and condenser coil cleaning.</strong> Removing dust, pet hair, and outdoor debris
          restores heat transfer and helps prevent icing and long run times.
        </li>
        <li>
          <strong>Refrigerant evaluation.</strong> Technicians verify superheat and subcooling, watch for signs
          of undercharge or overcharge, and check for leaks if readings are outside target ranges.
        </li>
        <li>
          <strong>Electrical testing.</strong> Capacitors, contactors, relays, and wire connections are inspected
          and tested. Loose or heat-damaged connections are tightened or replaced as needed.
        </li>
        <li>
          <strong>Condensate drain clearing.</strong> The drain line is flushed, the trap is checked, and the
          float switch is tested to prevent overflows and water damage.
        </li>
        <li>
          <strong>Thermostat calibration.</strong> Settings are verified, sensors are checked, and schedules are
          adjusted for comfort and efficiency.
        </li>
        <li>
          <strong>Airflow measurements.</strong> Static pressure readings, blower performance, and supply and
          return temperatures are documented to confirm proper distribution.
        </li>
        <li>
          <strong>Safety and system controls check.</strong> The technician verifies short cycling, blower
          delays, and defrost or heat mode operation where applicable.
        </li>
        <li>
          <strong>Documentation.</strong> Photos, readings, and a written report summarize findings. This
          supports warranty requirements and gives you a baseline for future visits.
        </li>
      </ul>

      <h2>Is an AC Tune-Up Really Necessary?</h2>
      <p>
        Yes, especially in Florida. Humid air loads your evaporator coil and drain line. Salt air and vegetation
        impact outdoor coils. Filters load faster. Skipping tune-ups in this environment risks:
      </p>
      <ul>
        <li>Higher energy use from dirty coils and low airflow</li>
        <li>Water leaks from clogged drains</li>
        <li>Electrical failures from worn contactors or weak capacitors</li>
        <li>Poor cooling under peak heat</li>
        <li>Voided manufacturer warranties when maintenance records are missing</li>
      </ul>
      <p>
        A single visit can uncover small issues before they become emergency calls, and the performance
        measurements help you track trends year over year.
      </p>

      <h2>How Often Should an AC Unit Be Serviced in SWFL?</h2>
      <p>
        Most homes benefit from <strong>two visits per year</strong> — one before peak cooling season and one
        mid-season. At minimum, schedule a professional tune-up once a year and change filters frequently. In
        heavy-use homes or those with pets, renovations, or allergies, plan for:
      </p>
      <ul>
        <li>Filter changes every 30 to 60 days during summer, up to 90 days in mild periods</li>
        <li>Condensate line checks every visit, with extra attention during rainy months</li>
        <li>Coil inspections each visit, with cleaning as needed</li>
      </ul>

      <h2>Transparent Pricing in SWFL</h2>
      <p>You should know costs before work begins. Here's what homeowners in our service area typically see:</p>

      <div className="price-table">
        <div className="row">
          <span className="label">AC tune-up (full inspection + cleaning + report)</span>
          <span className="price">$69</span>
        </div>
        <div className="row">
          <span className="label">Standard home diagnostic visit</span>
          <span className="price">$49–$69</span>
        </div>
        <div className="row">
          <span className="label">Diagnostic fee with approved repair</span>
          <span className="price">Waived</span>
        </div>
      </div>

      <p>
        Always confirm whether trip fees, after-hours surcharges, or coil cleaning chemicals are included. A
        written estimate avoids surprises and helps you compare apples to apples.
      </p>

      <h2>Warranty Compliance and Documentation</h2>
      <p>
        Manufacturers require routine maintenance to keep warranties valid. Keep copies of tune-up reports,
        photos, and invoices. Ensure the report lists:
      </p>
      <ul>
        <li>Date of service and technician license</li>
        <li>Refrigerant readings and airflow data</li>
        <li>Electrical test results</li>
        <li>Documented cleaning and drain maintenance</li>
        <li>Noted deficiencies and recommended corrections</li>
      </ul>
      <p>Good records protect you if a compressor or coil claim arises later.</p>

      <h2>Signs You Should Schedule Service Now</h2>
      <ul>
        <li>Room temperatures swing or cannot reach setpoint</li>
        <li>Ice on the indoor unit or refrigerant lines</li>
        <li>Water at the air handler or rust at the emergency pan</li>
        <li>Short cycling or frequent breaker trips</li>
        <li>Odors or visible dust at supply registers</li>
        <li>Higher energy bills without a change in usage</li>
      </ul>

      <p>
        For more, see our full guide on{" "}
        <Link href="/services/ac-maintenance" className="text-secondary font-semibold hover:underline">
          A/C Maintenance plans at Hurricane Air
        </Link>
        .
      </p>

      <div className="inline-cta">
        <div>
          <strong>$69 A/C Tune-Up — Book Today</strong>
          <p>Priority scheduling, full documentation, diagnostic waived with repair.</p>
        </div>
        <a
          href="/schedule"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Claim Offer
        </a>
      </div>
    </BlogPostLayout>
  );
}
