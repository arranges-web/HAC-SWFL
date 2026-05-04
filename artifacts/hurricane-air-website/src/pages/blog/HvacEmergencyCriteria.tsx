import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "hvac-emergency-criteria-southwest-florida")!;

export default function HvacEmergencyCriteria() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Air conditioning is essential in Southwest Florida. High heat and humidity create health and safety risks
        when cooling fails. This guide defines HVAC emergencies for residential properties in SWFL, sets practical
        temperature thresholds, and explains what to do after hours. It provides a clear decision path so you can
        act quickly and document the event for service records and insurance.
      </p>

      <h2>What Qualifies as an HVAC Emergency?</h2>
      <p>
        An HVAC issue is an emergency when it creates an immediate risk to health, safety, property, or critical
        comfort needs. Use these categories to decide:
      </p>
      <ul>
        <li>
          <strong>Total loss of cooling during a heat event.</strong> Indoor temperatures at or above 86°F for
          more than two hours, with higher risk for homes with infants, elderly residents, or medical conditions.
          In SWFL, heat index and humidity amplify risk even at lower readings.
        </li>
        <li>
          <strong>Refrigerant leak.</strong> Any hissing at the line set, oily residue on fittings or the coil,
          or a detectable chemical odor. Refrigerant exposure and loss of charge can harm health and the system.
        </li>
        <li>
          <strong>Electrical hazard.</strong> Burning smell, smoke, sparking at the condenser or air handler,
          repeatedly tripping breaker, buzzing from contactors, or hot electrical panel covers. This is a fire risk.
        </li>
        <li>
          <strong>Water leak or overflow.</strong> Active condensate overflow, ceiling stains under the air
          handler, drain pan full, or water near electrical components. Risk of property damage and mold growth
          increases quickly in high humidity.
        </li>
        <li>
          <strong>Ice on coil or line set with airflow loss.</strong> Visible frost or ice and warm air from
          vents. The compressor can be damaged if the system continues to run.
        </li>
        <li>
          <strong>Repeated short cycling with no cooling.</strong> System starts and stops within a minute,
          cannot hold temperature, or thermostat goes blank.
        </li>
        <li>
          <strong>Post-storm damage.</strong> Flooding around the condenser, wind-blown debris inside the fan
          shroud, or visible bent refrigerant lines. Do not run the unit until inspected.
        </li>
      </ul>

      <h2>Is a Broken AC Considered an Emergency?</h2>
      <p>Yes, when the unit cannot cool and indoor temperature rises toward unsafe levels. In SWFL, a broken AC is an emergency if:</p>
      <ul>
        <li>Indoor temperature reaches 86°F or more, <em>or</em></li>
        <li>A vulnerable person is in the home, <em>or</em></li>
        <li>You detect electrical, refrigerant, or water hazards — even if temperature is lower.</li>
      </ul>
      <p>
        If the unit is down but the home remains below 82°F and no hazard is present, schedule same-day service.
        If temperatures are climbing quickly or hazards are present, request emergency service immediately.
      </p>

      <h2>Temperature Thresholds to Guide Action</h2>
      <div className="price-table">
        <div className="row">
          <span className="label">82°F – 85°F indoors</span>
          <span className="price">Monitor — request same-day</span>
        </div>
        <div className="row">
          <span className="label">86°F – 90°F indoors</span>
          <span className="price">Emergency for most homes</span>
        </div>
        <div className="row">
          <span className="label">Above 90°F indoors</span>
          <span className="price">Immediate emergency</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        At any temperature, the presence of electrical, refrigerant, or water hazards elevates the situation to
        an emergency.
      </p>

      <h2>After-Hours Protocol, Step by Step</h2>
      <ol>
        <li>
          <strong>Verify power and settings.</strong> Set thermostat to Cool and Auto, lower setpoint to 72°F for
          testing. Replace thermostat batteries if applicable. Check the air filter. Confirm indoor breakers and
          the outdoor service disconnect are on.
        </li>
        <li>
          <strong>Inspect for hazards.</strong> Listen for hissing near refrigerant lines. Smell for burning or
          chemical odors. Look for water around the air handler or ceiling registers. Check for ice on the indoor
          coil or outdoor lines.
        </li>
        <li>
          <strong>Take immediate safety actions.</strong> If you smell burning or see sparks — turn the system
          off at the thermostat and breaker, do not reset repeatedly. For an active leak — turn system off to
          stop water production, use towels or a wet vac. For iced equipment — turn system off and set fan to On
          to thaw the coil for 2–4 hours.
        </li>
        <li>
          <strong>Document the situation.</strong> Note time, thermostat readings, and humidity if available.
          Take photos of error codes, breaker positions, water damage, ice, or oily residue. Record noises, odors,
          and the sequence of events.
        </li>
        <li>
          <strong>Call a 24/7 HVAC provider for dispatch.</strong> Request emergency response if temperature
          thresholds or hazards apply. Provide your documentation. Ask for ETA, diagnostic fee, and scope of
          work.
        </li>
      </ol>

      <h2>What to Expect During an Emergency Visit</h2>
      <ul>
        <li><strong>Arrival and safety check.</strong> The technician verifies power off when hazards are suspected and stabilizes the site.</li>
        <li><strong>Diagnosis.</strong> Electrical testing, refrigerant pressure readings, airflow checks, drain inspection, and thermostat evaluation.</li>
        <li><strong>Immediate corrective actions.</strong> Clearing drains, replacing capacitors or contactors, repairing low-voltage faults, thawing coils, and restoring airflow.</li>
        <li><strong>Documentation.</strong> Photos of findings, parts replaced, refrigerant logs, and written recommendations.</li>
        <li><strong>Follow-up.</strong> If parts are ordered, you get an ETA. For water damage, you receive guidance on drying and mold prevention.</li>
      </ul>

      <h2>How to Reduce the Chance of Future Emergencies</h2>
      <ul>
        <li>Replace filters every 30–60 days during summer</li>
        <li>Schedule annual tune-ups before peak heat, including coil cleaning, drain line maintenance, and electrical testing</li>
        <li>Install a float switch on the condensate drain if not present</li>
        <li>Consider surge protection to reduce lightning-related failures</li>
        <li>Address duct leaks to improve airflow and reduce coil icing risk</li>
        <li>Use smart thermostat alerts for temperature and humidity excursions</li>
      </ul>
      <p>
        See our{" "}
        <Link href="/services/emergency-ac" className="text-secondary font-semibold hover:underline">
          Emergency A/C service
        </Link>{" "}
        page for our 24/7 response process.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What qualifies as an HVAC emergency?</h3>
        <p>Any event with unsafe indoor temperatures, refrigerant or electrical hazards, active water leaks, or total loss of cooling that cannot stabilize the home environment.</p>
      </div>
      <div className="faq-item">
        <h3>What temperature is considered an emergency for AC?</h3>
        <p>86°F indoors for two hours, or sooner with vulnerable occupants. Above 90°F indoors is an immediate emergency.</p>
      </div>
      <div className="faq-item">
        <h3>Who should I call when my AC is not working?</h3>
        <p>A licensed 24/7 HVAC company with same-day capability and documented diagnostics. If fire risk is suspected, call emergency services after powering off. If you rent, notify your property manager first.</p>
      </div>
      <div className="faq-item">
        <h3>Same-day vs. immediate emergency — which do I need?</h3>
        <p>Same-day: mild indoor temperatures, no hazards, system still runs but performs poorly. Immediate emergency: high indoor temperature per thresholds, refrigerant leak suspected, electrical smells or tripping breakers, active condensate overflow, or post-storm damage.</p>
      </div>

      <div className="inline-cta">
        <div>
          <strong>24/7 Emergency AC Service — SWFL</strong>
          <p>Call now for rapid response, photo-backed diagnostics, and same-day repairs when possible.</p>
        </div>
        <a
          href="tel:2397481815"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Call (239) 748-1815
        </a>
      </div>
    </BlogPostLayout>
  );
}
