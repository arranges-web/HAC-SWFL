import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "ac-maintenance-how-often")!;

export default function AcMaintenanceHowOften() {
  return (
    <BlogPostLayout {...post}>
      <p>
        When Florida's heat and humidity arrive in full force, there's no doubt you rely on your air conditioner
        every single day. But how often do you really need to service your AC unit to keep cool air flowing? It's
        one of the most common questions homeowners ask here in Southwest Florida.
      </p>
      <p>
        Understanding the right maintenance schedule and recognizing the signs that your system needs attention
        can save you money, limit unexpected breakdowns, and even improve your indoor air quality.
      </p>

      <h2>The Recommended AC Service Schedule</h2>
      <p>
        For most homes in Florida, a professional AC tune-up is recommended <strong>at least once per year</strong>.
        Florida's climate is especially demanding on air conditioning systems — high humidity, long cooling seasons,
        and near-constant use make yearly maintenance a minimum for efficiency and reliability.
      </p>
      <p>
        If you have pets, allergies, or run your air conditioner nearly year-round, servicing your AC{" "}
        <strong>every six months</strong> is even better. Extra attention to filters and coils helps reduce
        allergens and keeps your system running at its best.
      </p>

      <h2>Is an AC Tune-Up Really Necessary?</h2>
      <p>
        Professional AC maintenance isn't just a convenience — it's essential preventive care for your home. A
        technician will inspect the system, clean internal parts, check for wear and tear, and test overall
        performance. This process identifies issues like failing capacitors, dirty coils, refrigerant leaks, or
        clogged drain lines <em>before</em> they lead to major repairs.
      </p>
      <p>
        Skipping regular maintenance increases the likelihood of unexpected breakdowns, which can be both
        inconvenient and expensive. That's why scheduling routine service with a reputable team pays off in the
        long run.
      </p>

      <h2>Benefits of Regular AC Maintenance</h2>
      <ul>
        <li>
          <strong>Improved Energy Efficiency.</strong> Dirty coils or clogged filters force your AC to work
          harder, using more electricity. Maintenance keeps these components clean, helping your air conditioner
          cool your home while using less energy.
        </li>
        <li>
          <strong>Fewer Unexpected Breakdowns.</strong> Routine check-ups catch small issues early, before they
          become big problems that leave you sweating in the Florida heat.
        </li>
        <li>
          <strong>Longer System Life.</strong> Preventive maintenance helps avoid unnecessary strain on your HVAC
          system, extending its useful life and delaying costly replacements.
        </li>
        <li>
          <strong>Healthier Indoor Air.</strong> Clean filters and coils mean less dust, pollen, and other
          irritants in your air — a big difference if anyone in your household suffers from allergies or asthma.
        </li>
        <li>
          <strong>Consistent Comfort.</strong> A well-maintained AC delivers steady, reliable cooling throughout
          your home, even on the hottest Florida days.
        </li>
      </ul>

      <h2>Factors That May Affect Your Maintenance Schedule</h2>
      <p>
        While once or twice a year is a good general rule, some situations call for more frequent check-ups:
      </p>
      <ul>
        <li><strong>Multiple pets:</strong> Pet hair and dander clog filters and reduce air quality faster.</li>
        <li>
          <strong>Family members with allergies or respiratory issues:</strong> Frequent filter changes and
          cleaning help maintain healthier indoor air.
        </li>
        <li>
          <strong>Construction or renovations:</strong> Dust from home improvements can quickly build up in your
          system.
        </li>
        <li>
          <strong>Older AC units:</strong> Systems over 10 years old may require more frequent inspections to
          remain reliable.
        </li>
      </ul>
      <p>Discuss these factors with your technician for a schedule tailored to your home and lifestyle.</p>

      <h2>Signs Your AC Might Need Immediate Attention</h2>
      <p>
        Even with regular service, sometimes your AC will need a check between standard appointments. Call a
        professional if you notice:
      </p>
      <ul>
        <li>Weak airflow or warm air blowing from your vents</li>
        <li>Unusual noises — banging, grinding, or hissing</li>
        <li>Water leaks or moisture around the unit</li>
        <li>Odd smells coming from the vents</li>
        <li>Increased humidity or hot and cold spots in your home</li>
      </ul>
      <div className="callout">
        <p>
          These symptoms should not be ignored. Prompt attention can prevent larger problems and restore your
          home's comfort quickly.
        </p>
      </div>

      <h2>Your Next Steps for Peace of Mind</h2>
      <p>
        Regular AC maintenance isn't a luxury — it's a necessity for your comfort, health, and budget. By
        sticking to a consistent service schedule and knowing when to call for help, you'll enjoy reliable cooling
        and better air quality year-round.
      </p>
      <p>
        Ready to schedule service or want honest advice about your options? Our{" "}
        <Link href="/services/ac-maintenance" className="text-secondary font-semibold hover:underline">
          A/C Maintenance
        </Link>{" "}
        team at Hurricane Air Conditioning of SWFL can help you determine the right plan for your home. Or read
        our detailed breakdown of{" "}
        <Link href="/blog/ac-tune-up-scope-schedule-pricing" className="text-secondary font-semibold hover:underline">
          what's included in an AC tune-up and what it costs
        </Link>
        .
      </p>
      <div className="inline-cta">
        <div>
          <strong>Schedule your SWFL AC tune-up</strong>
          <p>$69 full inspection, cleaning, and documented report. Diagnostic fee waived with repair.</p>
        </div>
        <a
          href="/schedule"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Book Now
        </a>
      </div>
    </BlogPostLayout>
  );
}
