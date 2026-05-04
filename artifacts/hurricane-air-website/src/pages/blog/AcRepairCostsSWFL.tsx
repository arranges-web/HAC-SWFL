import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "ac-repair-costs-swfl")!;

export default function AcRepairCostsSWFL() {
  return (
    <BlogPostLayout {...post}>
      <p>
        If your air conditioner quits in the middle of a Southwest Florida afternoon, the first worry is comfort
        — followed quickly by cost. You want a straight answer on pricing, timelines, and whether a repair is
        worth it. This guide explains how AC repair pricing works in SWFL, what's fair, and how to avoid
        surprises.
      </p>

      <h2>Why AC Repair Can Feel Expensive</h2>
      <p>
        AC systems combine electrical, refrigeration, and airflow components. Diagnosis takes training,
        specialized tools, and time. In SWFL, heat, salt air, and heavy runtime accelerate wear — that means more
        strain on capacitors, compressors, contactors, blower motors, and drain systems. Parts availability and
        brand differences also affect price.
      </p>
      <p>
        When a technician arrives prepared for same-day service, you're paying for the readiness, inventory,
        testing equipment, and warranty support that keep your home cool again without multiple visits.
      </p>
      <div className="callout">
        <p>
          At Hurricane Air Conditioning of SWFL, most AC repair diagnostics are <strong>$49 or $69</strong>
          based on the repair type. If you choose to complete the repair with us, we{" "}
          <strong>waive that diagnostic fee</strong>. There are no dispatch fees.
        </p>
      </div>

      <h2>What You Can Expect to Pay for a Diagnostic Visit</h2>
      <p>
        A fair diagnostic fee in SWFL often ranges from $59 to $129. Our standard is $49 or $69. During the
        visit, a trained technician tests electrical components, refrigerant pressures, airflow, and controls.
        You should receive a clear explanation, photos if helpful, and a written estimate before any work begins.
      </p>
      <p>Real-world example — a no-cool call caused by a failed capacitor:</p>
      <div className="price-table">
        <div className="row">
          <span className="label">Diagnostic</span>
          <span className="price">$49 or $69</span>
        </div>
        <div className="row">
          <span className="label">Part and labor (typical)</span>
          <span className="price">$150–$350</span>
        </div>
        <div className="row">
          <span className="label">Diagnostic fee when repaired with us</span>
          <span className="price">Waived</span>
        </div>
      </div>

      <h2>Common Repair Cost Ranges</h2>
      <p>Service calls vary based on what's needed. Use these as a guide, not a guarantee:</p>
      <div className="price-table">
        <div className="row">
          <span className="label">Drain line clog and safety switch reset</span>
          <span className="price">$120–$250</span>
        </div>
        <div className="row">
          <span className="label">Dual run capacitor replacement</span>
          <span className="price">$150–$350</span>
        </div>
        <div className="row">
          <span className="label">Contactor replacement</span>
          <span className="price">$175–$350</span>
        </div>
        <div className="row">
          <span className="label">Blower motor replacement (standard PSC)</span>
          <span className="price">$450–$950</span>
        </div>
        <div className="row">
          <span className="label">Refrigerant leak search with dye or nitrogen</span>
          <span className="price">$250–$600</span>
        </div>
        <div className="row">
          <span className="label">Small coil leak repair (if accessible)</span>
          <span className="price">$300–$750</span>
        </div>
        <div className="row">
          <span className="label">Refrigerant charge correction (R-410A)</span>
          <span className="price">~$100–$200/lb</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Every estimate should include labor, parts, and warranty information. Ask what is covered and for how
        long. Legacy R-22 refrigerant is significantly higher due to phaseout scarcity — this often signals
        time to discuss replacement.
      </p>

      <h2>How Long an AC Repair Should Take</h2>
      <ul>
        <li>Simple fixes (capacitor, contactor, float switch, cleared drain): <strong>45–90 minutes</strong></li>
        <li>Thermostat replacement and setup: <strong>45–90 minutes</strong></li>
        <li>Blower motor or fan motor replacement: <strong>1.5–3 hours</strong></li>
        <li>Leak search and repair: <strong>2–5 hours</strong>, sometimes split across two visits</li>
        <li>Compressor replacement: <strong>4–8 hours</strong>, plus system evacuation and recharge</li>
      </ul>

      <h2>What Drives the Price Up or Down</h2>
      <ul>
        <li><strong>Age and condition:</strong> Older systems have higher failure rates and harder-to-find parts.</li>
        <li><strong>Refrigerant type:</strong> R-22 systems cost more to recharge; R-410A is more manageable.</li>
        <li><strong>Brand and model:</strong> Proprietary parts and inverter systems can run higher.</li>
        <li><strong>Warranty status:</strong> Manufacturer or extended warranties reduce part cost, but labor may still apply.</li>
        <li><strong>Location and access:</strong> Attics and tight closets add labor time.</li>
        <li><strong>Seasonal demand:</strong> Reputable companies hold pricing steady year-round.</li>
      </ul>

      <h2>When to Repair Versus Replace</h2>
      <ul>
        <li><strong>Under 8 years old, minor single-part failure, efficient system:</strong> Repair</li>
        <li><strong>8–12 years old, multiple failures in 12 months, rising energy bills:</strong> Price both paths</li>
        <li><strong>12–15+ years old, compressor or coil failure, R-22 refrigerant, uneven cooling:</strong> Consider replacement</li>
      </ul>
      <p>
        See our deep-dive guide on{" "}
        <Link href="/blog/repair-or-replace-5000-hvac-rule" className="text-secondary font-semibold hover:underline">
          applying the $5,000 HVAC rule in SWFL
        </Link>
        .
      </p>

      <h2>How to Spot Unreasonable Charges</h2>
      <ul>
        <li>Vague estimates, no line items, or pressure to decide on the spot without questions</li>
        <li>Large repair quotes that shift after you agree</li>
        <li>Claims that your system is unsafe without proof, photos, or meter readings</li>
        <li>Charging for a diagnostic even after you approve the repair, unless disclosed beforehand</li>
      </ul>
      <p>
        Look for technicians who test first, show readings, and explain options. Ask what happens if the repair
        does not fix the problem.
      </p>

      <h2>Maintenance Can Lower Repair Costs</h2>
      <p>
        Regular tune-ups help catch weak capacitors, clogged drains, dirty coils, and failing motors before they
        cause breakdowns. Our{" "}
        <Link href="/services/ac-maintenance" className="text-secondary font-semibold hover:underline">
          $69 Tune-Up
        </Link>{" "}
        includes a full inspection and cleaning, priority scheduling, and a no-cost re-diagnosis within six months
        if your system breaks down.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>Why does AC repair cost so much?</h3>
        <p>You're paying for technical skill, proper testing, stocked parts, and the time it takes to diagnose safely and correctly. Florida heat and heavy usage add stress, requiring more robust service to restore reliability.</p>
      </div>
      <div className="faq-item">
        <h3>How much does it cost to have someone look at my air conditioner?</h3>
        <p>Expect $59–$129 for a diagnostic in our area. We charge $49 or $69, and waive that fee if we complete the repair.</p>
      </div>
      <div className="faq-item">
        <h3>How long should an AC repair take?</h3>
        <p>Simple fixes often finish in under 90 minutes. Larger repairs can take several hours, and component replacements like compressors can span half a day.</p>
      </div>

      <div className="inline-cta">
        <div>
          <strong>Straight pricing, waived diagnostic with repair</strong>
          <p>Same-day service available across Lee, Collier &amp; Charlotte Counties.</p>
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
