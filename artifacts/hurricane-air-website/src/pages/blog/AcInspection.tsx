import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "what-happens-during-ac-inspection")!;

export default function AcInspection() {
  return (
    <BlogPostLayout {...post}>
      <p>
        If you're living in Southwest Florida, you know that keeping your home cool and comfortable isn't just a
        luxury — it's a necessity. Still, many homeowners feel a little uneasy about booking a professional AC
        inspection. What exactly do technicians do during their visit? Are there surprise costs? Is it quick, or
        should you block out your whole afternoon?
      </p>
      <p>
        We're here to break it all down, giving you the knowledge and confidence you need to take good care of
        your cooling system.
      </p>

      <h2>Why Get an AC Inspection?</h2>
      <p>
        Regular AC inspections aren't just a formality — they're one of the simplest ways to keep your air
        conditioning running efficiently and avoid unexpected breakdowns. By spotting small issues early, you can
        often prevent much bigger (and more expensive) headaches down the road. Inspections also help you get the
        most out of your AC's lifespan, meaning better comfort and a healthier wallet over the long haul.
      </p>

      <h2>What to Expect: Step-by-Step Through a Professional AC Inspection</h2>
      <p>
        When a technician from Hurricane Air arrives at your door, their goal is to make everything easy and
        transparent. Here's what typically happens during a thorough AC inspection:
      </p>

      <ol>
        <li>
          <strong>Initial Conversation and Comfort Check.</strong> Your technician will chat briefly about any
          concerns you've noticed — odd noises, weak airflow, or higher energy bills. This helps them tailor the
          inspection to your home's specific needs.
        </li>
        <li>
          <strong>Thermostat Check.</strong> Your technician will verify the thermostat is working correctly and
          set to the proper settings.
        </li>
        <li>
          <strong>Assessing Airflow and System Performance.</strong> The technician checks how well air is moving
          through your vents and takes temperature readings at various points. This helps spot issues like clogs,
          leaks, or poorly balanced ductwork — common culprits in Southwest Florida homes.
        </li>
        <li>
          <strong>Inspecting and Cleaning Components.</strong> Expect a close look at the blower motor and fan,
          filters, electrical connections, condenser and evaporator coils, refrigerant levels, and the drain line.
        </li>
        <li>
          <strong>Safety Checks.</strong> Your technician examines all safety features and controls, verifying
          everything is running within manufacturer specifications.
        </li>
        <li>
          <strong>Final Report and Recommendations.</strong> After a detailed inspection, your technician explains
          what they found in plain language. If any repairs or tune-ups are recommended, they'll offer options
          with transparent pricing and answer all your questions.
        </li>
      </ol>

      <h2>Are HVAC Inspections Free?</h2>
      <p>
        One of the biggest questions we hear is: <em>"Is this going to cost me just to have someone look at my
        AC?"</em> The answer varies. Many companies offer complimentary inspections when paired with a maintenance
        package or seasonal special. Other times, there may be a modest fee — which covers the time, expertise,
        and tools required for a thorough evaluation.
      </p>
      <div className="callout">
        <p>
          At Hurricane Air Conditioning of SWFL, standard diagnostic visits start at <strong>$49–$69</strong>,
          and we waive the diagnostic fee when you proceed with the repair. No dispatch fees, no surprises.
        </p>
      </div>

      <h2>How Long Does an HVAC Inspection Take?</h2>
      <p>
        You don't need to clear your whole afternoon. Most standard AC inspections can be completed in about 45 to
        90 minutes. It depends on the complexity of your system, the number of units being checked, and whether
        any minor issues are found. Your technician will always let you know if something comes up that could take
        a little longer.
      </p>

      <h2>What Is Included in an AC Inspection?</h2>
      <p>An HVAC inspection is a comprehensive, methodical process. The standard checklist includes:</p>
      <ul>
        <li>Evaluating the thermostat and system controls</li>
        <li>Testing all electrical components</li>
        <li>Inspecting and cleaning coils and drain lines</li>
        <li>Verifying refrigerant levels and checking for leaks</li>
        <li>Examining the filter and ductwork</li>
        <li>Testing system operation under different settings</li>
        <li>Indoor air quality check and energy efficiency tips</li>
      </ul>

      <h2>The Value of Regular Inspections</h2>
      <p>
        Some homeowners wonder if routine inspections are worth it, especially when the AC seems to be working
        fine. The truth is, Southwest Florida's relentless heat and humidity can wear down your system faster than
        you might expect. Regular, professional checks help protect your investment, ensure better air quality,
        and give you peace of mind through every season.
      </p>
      <p>
        If you're due for an inspection or want to understand what's going on with your system, our friendly
        technicians will walk you through every finding. And if your ductwork hasn't been looked at in a while,
        consider our{" "}
        <Link href="/services/air-duct-cleaning" className="text-secondary font-semibold hover:underline">
          Air Duct Cleaning
        </Link>{" "}
        service to boost efficiency and indoor air quality.
      </p>

      <h2>Ready to Schedule?</h2>
      <p>
        Having a professional AC inspection is nothing to stress about. With honest, caring technicians on your
        side, you're not just getting peace of mind — you're investing in the comfort, health, and longevity of
        your home.
      </p>
      <div className="inline-cta">
        <div>
          <strong>Book your AC inspection today</strong>
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
