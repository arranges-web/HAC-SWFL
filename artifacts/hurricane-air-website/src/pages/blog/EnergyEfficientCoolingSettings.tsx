import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "energy-efficient-cooling-ac-settings")!;

export default function EnergyEfficientCoolingSettings() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Staying cool in Southwest Florida is not optional. You want comfort that won't punish your power bill.
        The good news is that a few smart settings and habits can reduce energy use without sacrificing comfort.
        This guide explains the most efficient temperature settings, the best modes to use, and simple ways to
        stretch every kilowatt.
      </p>

      <h2>The Most Energy-Efficient AC Setting</h2>
      <ul>
        <li>
          <strong>Aim for 76–78°F</strong> when you are home and awake. This target balances comfort and cost in
          our humid climate.
        </li>
        <li>
          Bump the setpoint <strong>4–6 degrees higher</strong> when you are away for more than two hours
          (e.g., 78°F at home, 82–84°F when away).
        </li>
        <li>
          Keep sleep settings close to your daytime target. Many homeowners prefer 76–78°F at night with a
          ceiling fan on low.
        </li>
      </ul>
      <div className="callout">
        <p>
          Every degree you raise your thermostat can cut cooling costs by about 1–3%. In SWFL, humidity is the
          challenge. Moderate, steady temperatures let your system remove moisture and avoid long, inefficient
          recovery cycles.
        </p>
      </div>

      <h2>Which AC Mode Is Best for Energy Saving?</h2>
      <ul>
        <li>
          <strong>Cool mode with Auto fan:</strong> Use standard cooling with the fan set to Auto. This avoids
          blowing warm, unconditioned air when the compressor is off.
        </li>
        <li>
          <strong>Avoid On fan for daily use:</strong> Continuous fan can reintroduce humidity and add runtime
          costs.
        </li>
        <li>
          <strong>Dry or Dehumidify mode:</strong> Only use if your system offers it. It can lower humidity at
          mild temperatures but is not a full replacement for Cool mode in peak heat.
        </li>
      </ul>
      <p>
        If you have a variable speed or inverter system, keep it in its default efficiency mode. These systems
        sip power at lower speeds and manage humidity well when allowed to run steadily.
      </p>

      <h2>Smart Temperature Programming That Works in SWFL</h2>
      <p>
        Create <strong>small, predictable setbacks</strong>. A 4-degree setback is efficient. A 10-degree setback
        is not, because recovery takes too long and comfort suffers.
      </p>
      <p>Example schedule:</p>
      <ul>
        <li>78°F from 6 a.m. to 8 a.m.</li>
        <li>82°F from 8 a.m. to 5 p.m. (away setback)</li>
        <li>78°F from 5 p.m. to 10 p.m.</li>
        <li>77°F overnight if you prefer a cooler bedroom</li>
      </ul>
      <p>
        Use <strong>gradual recovery</strong>. Many smart thermostats allow pre-cool — start recovery 30–60
        minutes before you arrive home so humidity stays in check. Frequent manual swings increase runtime and
        reduce dehumidification performance.
      </p>

      <h2>Humidity Control Is Half the Battle</h2>
      <p>Comfort in SWFL depends on moisture removal as much as air temperature.</p>
      <ul>
        <li>Keep relative humidity near <strong>45–55%</strong> indoors when possible.</li>
        <li>
          Set the fan to <strong>Auto</strong> so condensate can drain and moisture doesn't evaporate back into
          the airstream.
        </li>
        <li>
          Check that your system runs long enough to dehumidify during mild weather. If short cycles persist, ask
          for a tune-up or airflow check. Undersized returns, dirty coils, and incorrect blower speeds all reduce
          moisture removal.
        </li>
      </ul>
      <p>
        If humidity remains high even with proper settings, consider add-ons like a whole-home dehumidifier or a
        variable speed air handler. Visit our{" "}
        <Link href="/services/dehumidifier" className="text-secondary font-semibold hover:underline">
          Dehumidifier Services
        </Link>{" "}
        page to learn more.
      </p>

      <h2>Practical Tips for Energy-Efficient Cooling</h2>
      <ul>
        <li>
          <strong>Change filters on schedule.</strong> In our dusty, salty air, check monthly and replace at
          least every 60 days. A clogged filter increases energy use and shortens equipment life.
        </li>
        <li>
          <strong>Seal and insulate ductwork.</strong> Leaky ducts waste conditioned air into attics and garages.
          Proper sealing and insulation improve efficiency and comfort in every room.
        </li>
        <li>
          <strong>Shade and airflow matter.</strong> Keep outdoor units clear by at least 2–3 feet. Trim
          vegetation and remove debris.
        </li>
        <li>
          <strong>Close blinds on sun-facing windows</strong> during peak hours. Reduce heat gain to reduce
          runtime.
        </li>
        <li>
          <strong>Use ceiling fans</strong> to feel cooler at the same thermostat setting. Each fan can allow a
          2–4 degree higher setpoint with the same comfort.
        </li>
        <li>
          <strong>Schedule seasonal maintenance.</strong> Coil cleaning, drain line clearing, and refrigerant
          checks keep efficiency high and prevent mid-season failures.
        </li>
      </ul>

      <h2>Can You Make Your AC Smarter?</h2>
      <p>Yes. You have two practical paths:</p>
      <ul>
        <li>
          <strong>Install a smart thermostat.</strong> Features include scheduling, geofencing, learning routines,
          humidity setpoint options, and utility bill insights. A professional install ensures correct wiring and
          safe control of multi-stage or variable systems.
        </li>
        <li>
          <strong>Add a smart controller for mini splits.</strong> These devices use infrared to control
          temperature and scheduling through an app. Look for models with humidity sensing and
          compressor-friendly algorithms that avoid rapid cycling.
        </li>
      </ul>

      <h2>Signs Your System Can Do Better</h2>
      <ul>
        <li>High bills compared to neighbors with similar homes</li>
        <li>Indoor humidity over 60% even with regular cooling</li>
        <li>Frequent short cycles, rooms that feel clammy, or noise spikes</li>
        <li>Dust, hot spots, or weak airflow in certain rooms</li>
      </ul>
      <p>
        Any of these can point to airflow restrictions, duct leaks, incorrect refrigerant charge, or a control
        strategy mismatch. A tune-up and airflow assessment can resolve many of these issues without a full
        replacement. See our{" "}
        <Link href="/services/ac-maintenance" className="text-secondary font-semibold hover:underline">
          AC Maintenance
        </Link>{" "}
        service for details.
      </p>

      <h2>Summary</h2>
      <p>
        Set your thermostat to 76–78°F at home, use small setbacks when you're away, and keep the fan on Auto.
        Focus on humidity control as much as temperature. Change filters on time, keep outdoor equipment clear,
        use ceiling fans, and schedule professional maintenance. Consider smart thermostats or controllers for
        better scheduling and steady comfort.
      </p>

      <div className="inline-cta">
        <div>
          <strong>Get a professional efficiency assessment</strong>
          <p>We'll check airflow, settings, and recommend upgrades that pay back in our humidity.</p>
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
