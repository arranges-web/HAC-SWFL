import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "repair-or-replace-5000-hvac-rule")!;

export default function RepairOrReplace5000Rule() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Southwest Florida summers test every air conditioner. When an unexpected breakdown happens during peak
        heat, the first question is repair or replace. The $5,000 rule offers a clear starting point, but it is
        only one factor in a smart decision.
      </p>
      <p>
        This guide explains the rule, shows how to apply it in SWFL conditions, and outlines related criteria
        such as efficiency, refrigerant type, and reliability risk. It also clarifies when compressor replacement
        makes sense compared to full system replacement.
      </p>

      <h2>What the $5,000 HVAC Rule Means</h2>
      <p>
        The $5,000 rule is a simple screening tool:{" "}
        <strong>multiply the age of the system by the repair cost</strong>. If that product is more than $5,000,
        replacement is typically the better long-term value. If it is less than $5,000, repair is often
        reasonable.
      </p>
      <div className="price-table">
        <div className="row">
          <span className="label">10-year-old system × $400 repair</span>
          <span className="price">$4,000 → Repair</span>
        </div>
        <div className="row">
          <span className="label">12-year-old system × $600 repair</span>
          <span className="price">$7,200 → Replace</span>
        </div>
      </div>

      <h2>SWFL-Specific Factors That Adjust the Rule</h2>
      <p>Age and repair cost are only part of the decision. In Southwest Florida, add the following to your evaluation:</p>
      <ul>
        <li>
          <strong>Efficiency and utility impact.</strong> Older systems — especially pre-2015 equipment — are
          typically less efficient than current high-SEER2 heat pumps. Replacing an older unit can lower summer
          bills and reduce strain during long run cycles.
        </li>
        <li>
          <strong>Refrigerant type.</strong> Systems using R-22 are costly to service due to phaseout-related
          scarcity. Even medium repair quotes on R-22 systems often push toward replacement.
        </li>
        <li>
          <strong>Reliability risk in peak season.</strong> A unit that has frequent faults or marginal components
          may fail again during July or August. The risk of repeated outages, emergency visits, and lost comfort
          has real value in the decision.
        </li>
        <li>
          <strong>Comfort and humidity control.</strong> Modern variable-speed and inverter systems handle SWFL
          humidity and part-load conditions better. If rooms feel clammy or uneven, a replacement may solve more
          than a single repair can.
        </li>
        <li>
          <strong>Warranty status.</strong> Manufacturer and parts warranties can offset repair costs. If out of
          warranty, compare the one-time repair to the value of a new system warranty and workmanship coverage.
        </li>
      </ul>

      <h2>When Compressor Replacement Is Justified</h2>
      <p>The compressor is the most expensive single component in a split system. Replacing it can be smart in specific cases:</p>
      <ul>
        <li>The system is relatively young — typically under 8 years — and otherwise in good condition</li>
        <li>The failure is clear and isolated, with clean coils and no systemic contamination</li>
        <li>The part is available and supported by manufacturer warranty or a strong parts program</li>
        <li>The refrigerant circuit is free of acid and debris, verified by testing</li>
      </ul>
      <p>
        Compressor replacement becomes hard to justify when the unit is older, uses R-22, has restricted coils,
        or shows repeat electrical and refrigerant issues. In those cases, a full system replacement usually
        delivers better efficiency and a reset on warranties.
      </p>

      <h2>Is It Cheaper to Replace a Compressor or the Whole Unit?</h2>
      <p>
        Upfront, a compressor-only repair often costs less than a full system replacement. However, total cost of
        ownership matters. If the system is near the end of its service life, a compressor change can be a
        short-term patch that leaves you with older coils, a tired blower, and dated controls.
      </p>
      <p>
        Use this test: apply the $5,000 rule, then add an efficiency and reliability lens. If the product of age
        and compressor repair cost exceeds $5,000, and the system is past midlife or uses R-22, whole-system
        replacement is typically the smarter spend.
      </p>

      <h2>Example Scenarios for SWFL Homes</h2>
      <ul>
        <li>
          <strong>8-year-old 3-ton heat pump, minor leak repair at $550.</strong> 8 × 550 = $4,400. System uses
          R-410A, coils clean, performance solid. Repair is reasonable. Consider a maintenance plan to prevent
          recurrence.
        </li>
        <li>
          <strong>12-year-old straight-cool system, compressor short-to-ground, quoted at $2,100.</strong> 12 ×
          2,100 = $25,200. Replacement is the better value. Expect efficiency gains and improved humidity control
          from new equipment.
        </li>
        <li>
          <strong>15-year-old 4-ton system with R-22, blower motor and capacitor issues totaling $900.</strong>{" "}
          15 × 900 = $13,500. Replacement is advised. Parts scarcity and reduced efficiency increase long-run
          costs.
        </li>
        <li>
          <strong>6-year-old system with a failed compressor under partial warranty, total out-of-pocket $1,200.</strong>{" "}
          6 × 1,200 = $7,200. The rule suggests replacement, but warranty support and young age justify compressor
          replacement after contamination checks and proper cleanup.
        </li>
      </ul>

      <h2>The Expected Diagnostic Process</h2>
      <p>A thorough diagnostic in SWFL should include:</p>
      <ul>
        <li>Electrical checks on capacitors, contactors, and high-voltage connections</li>
        <li>Refrigerant pressures, superheat, and subcool readings, with leak checks as needed</li>
        <li>Visual inspection and temperature split to assess coil condition and airflow</li>
        <li>Drain and condensate line inspection and cleaning if required</li>
        <li>Thermostat settings, control board status, and system communication checks</li>
        <li>Duct inspection for obvious leaks or blockages, especially in attic runs</li>
      </ul>
      <p>
        Written findings and photos are standard. Clear options should be presented — repair paths with parts and
        labor estimates, and a replacement proposal with model options, efficiency ratings, and financing terms.
      </p>

      <h2>How Financing Fits Into the Decision</h2>
      <p>
        Financing can spread the cost of a replacement while reducing energy and repair risk. Many SWFL
        homeowners compare the monthly payment to expected utility savings and avoided repair costs. Our
        installations can start as low as $38/month. Written quotes state the scope, equipment details, and
        finance terms. See our{" "}
        <Link href="/financing" className="text-secondary font-semibold hover:underline">
          Financing page
        </Link>{" "}
        for current options.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is the $5,000 rule for HVAC?</h3>
        <p>Multiply the system age by the repair cost. If the result is more than $5,000, replacement typically offers better value. Always consider efficiency, refrigerant type, and reliability history alongside the calculation.</p>
      </div>
      <div className="faq-item">
        <h3>Is it worth replacing an AC compressor?</h3>
        <p>Yes, when the system is relatively young, the failure is isolated, and warranty or strong parts support is available. If the system is older, uses R-22, or has multiple issues, replacement is usually wiser.</p>
      </div>
      <div className="faq-item">
        <h3>How long do HVAC units need to be replaced?</h3>
        <p>Many systems in SWFL reach replacement consideration around 10–15 years due to heavy cooling loads, salt air, and humidity. Maintenance can extend useful life, but performance and reliability usually decline in later years.</p>
      </div>
      <div className="faq-item">
        <h3>What is the life expectancy of an HVAC unit?</h3>
        <p>In Southwest Florida, typical life expectancy is about 10–15 years. Usage patterns, maintenance history, coastal exposure, and installation quality affect outcomes.</p>
      </div>

      <div className="inline-cta">
        <div>
          <strong>Get a documented diagnosis with photos and a written quote</strong>
          <p>Financing options available. Same-day service across Lee, Collier &amp; Charlotte Counties.</p>
        </div>
        <a
          href="/schedule"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Schedule Now
        </a>
      </div>
    </BlogPostLayout>
  );
}
