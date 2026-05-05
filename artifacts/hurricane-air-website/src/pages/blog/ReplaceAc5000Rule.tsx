import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "replace-ac-5000-rule")!;

export default function ReplaceAc5000Rule() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Knowing when to repair or replace an aging air conditioner can be confusing. Costs add up, comfort
        suffers, and summer does not wait. The $5,000 HVAC rule is a simple way to decide. It helps you weigh
        repair price against system age, expected lifespan, and efficiency. With a clear method and a few
        practical checks, you can choose the option that protects your budget and your comfort.
      </p>

      <h2>What the $5,000 Rule Means</h2>
      <p>
        The $5,000 rule is a quick calculation:{" "}
        <strong>multiply the estimated repair cost by the age of your AC in years</strong>. If the total is more
        than $5,000, replacement is usually the smarter choice. If it is less than $5,000, repair can still be
        cost-effective.
      </p>
      <div className="price-table">
        <div className="row">
          <span className="label">$600 repair × 6-year-old system</span>
          <span className="price">$3,600 → Repair</span>
        </div>
        <div className="row">
          <span className="label">$1,200 repair × 12-year-old system</span>
          <span className="price">$14,400 → Replace</span>
        </div>
      </div>
      <p>
        The rule is a guide, not a law. Use it alongside system condition, warranty status, and energy efficiency.
      </p>

      <h2>How Long an Air Conditioner Lasts</h2>
      <p>
        Most central air conditioners last <strong>10–15 years</strong> with regular maintenance. In coastal and
        high-heat areas, you may see the shorter end of that range due to salt air, long cooling seasons, and
        heavy runtime. Well-maintained systems with clean coils, proper refrigerant charge, and regular filter
        changes can reach or exceed 15 years.
      </p>
      <p>
        If your system is past 12 years, plan for a replacement in the near future. You can extend life with
        upkeep, but budgeting now avoids surprise failures during peak heat.
      </p>

      <h2>When Repair Is Cheaper — and When It Is Not</h2>
      <p>
        Small, isolated issues are good candidates for repair: capacitors, contactors, minor refrigerant leaks,
        drain clogs, and thermostat failures are often inexpensive and quick. Use the $5,000 rule to confirm.
      </p>
      <p>Replacement becomes cheaper over time when:</p>
      <ul>
        <li>You face frequent breakdowns or rising repair bills</li>
        <li>Your monthly energy costs are high compared to neighbors or past years</li>
        <li>Your unit still uses R-22 refrigerant, which is no longer produced</li>
        <li>Cooling is uneven, noisy, or the system short cycles</li>
      </ul>
      <p>
        In these cases, a modern high-efficiency system can lower monthly bills, reduce repairs, and improve
        comfort. Over several seasons, these savings can exceed the price difference between another big repair
        and a new install.
      </p>

      <h2>Is Replacing an AC Compressor Worth It?</h2>
      <p>Compressor replacement is one of the costliest repairs on an air conditioner. It <strong>can</strong> make sense if:</p>
      <ul>
        <li>The system is newer — typically under 8 years</li>
        <li>You have a valid parts warranty that covers the compressor</li>
        <li>The rest of the system is in excellent condition</li>
      </ul>
      <p>It is usually <strong>not worth it</strong> if:</p>
      <ul>
        <li>The unit is 10 years or older</li>
        <li>The repair is not covered by warranty</li>
        <li>Other components show wear, coil corrosion, or electrical issues</li>
      </ul>
      <div className="callout">
        <p>
          A new compressor in an old system can be a short-term fix that delays the inevitable replacement. Use
          the $5,000 rule on the compressor quote specifically. If the product of cost and age is above $5,000,
          replacement is often the wiser investment.
        </p>
      </div>

      <h2>Efficiency Gains You Can Bank On</h2>
      <p>Newer systems deliver higher SEER2 ratings, better humidity control, and variable-speed comfort. These upgrades translate into:</p>
      <ul>
        <li>Lower monthly energy bills</li>
        <li>Quieter operation</li>
        <li>More consistent temperatures and fewer hot spots</li>
        <li>Improved indoor air quality when paired with the right filtration and ductwork</li>
      </ul>
      <p>
        If your home struggles with airflow or dust, consider a duct inspection during a replacement consultation.
        See our{" "}
        <Link href="/services/air-duct-repair" className="text-secondary font-semibold hover:underline">
          Air Duct Repair
        </Link>{" "}
        and{" "}
        <Link href="/services/air-duct-cleaning" className="text-secondary font-semibold hover:underline">
          Air Duct Cleaning
        </Link>{" "}
        services.
      </p>

      <h2>How to Apply the Rule at Home</h2>
      <ol>
        <li>Get a written repair estimate and the diagnosis in plain terms.</li>
        <li>Confirm your system age from the install date or serial number.</li>
        <li>Multiply repair cost by age, then compare to $5,000.</li>
        <li>Ask for energy savings estimates on a replacement option, including SEER2 rating and projected monthly costs.</li>
        <li>Factor in warranty coverage, available financing, and any utility rebates.</li>
      </ol>

      <h2>Signs Your AC Is Ready for Replacement</h2>
      <ul>
        <li>Frequent service calls in the last 12–18 months</li>
        <li>Uneven cooling, persistent humidity, or long run times</li>
        <li>Rusted or leaking coils, or repeat refrigerant issues</li>
        <li>Rising electric bills with no change in use</li>
        <li>System age above 12 years</li>
      </ul>
      <p>
        If you see two or more of these signs, pricing a replacement alongside the repair quote is smart. For a
        more detailed analysis, read our guide on{" "}
        <Link href="/blog/repair-or-replace-5000-hvac-rule" className="text-secondary font-semibold hover:underline">
          applying the $5,000 rule in SWFL conditions
        </Link>
        .
      </p>

      <h2>Budgeting and Timeline</h2>
      <p>
        You don't need to wait for a total failure. Planning a replacement during cooler months or before peak
        heat can secure better scheduling and less downtime. Many homeowners choose financing to spread the cost —
        a modest monthly payment can be offset by energy savings and lower repair risk. Our installations can
        start as low as $38/month.
      </p>

      <div className="inline-cta">
        <div>
          <strong>Get a clear diagnosis and replacement quote</strong>
          <p>Honest guidance, transparent pricing, and financing options available.</p>
        </div>
        <a
          href="/schedule"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Schedule Assessment
        </a>
      </div>
    </BlogPostLayout>
  );
}
