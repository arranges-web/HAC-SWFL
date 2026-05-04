import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "ductwork-lifespan-cost-upgrades-swfl-homes")!;

export default function DuctworkLifespanCost() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Southwest Florida homes face unique ductwork stresses. Heat, humidity, salt air, and attic temperatures
        accelerate wear. Airflow design errors are common in older retrofits. Leaks, degraded insulation, and
        biological growth reduce comfort and efficiency.
      </p>
      <p>
        A clear inspection protocol, defined repair options, and realistic cost ranges allow better decisions.
        This guide summarizes typical findings, when to clean versus replace, expected lifespan, and what a
        correct redesign delivers in static pressure and efficiency.
      </p>

      <h2>What Inspections in Coastal Climates Reveal</h2>
      <p>
        Licensed technicians typically document issues with photos, static pressure readings, and airflow
        measurements at supply and return. In SWFL, the following patterns are frequent:
      </p>
      <ul>
        <li>Air leaks at takeoffs, boots, plenums, and seam joints due to failed tape or mastic</li>
        <li>Insulation decay on flex and metal runs from UV exposure in vented attics, rodent intrusion, and high humidity</li>
        <li>Biological growth at the air handler liner and within ducts when moisture control is poor or drain lines back up</li>
        <li>Undersized returns, long flex runs with excessive sag, and tight-radius bends creating high total external static pressure</li>
        <li>Disconnected or crushed flex in attic pathways after service activity or storm events</li>
        <li>Rust and fastener corrosion near coastal exposures</li>
      </ul>
      <div className="callout">
        <p>
          A baseline total external static pressure of about <strong>0.5 in. w.c. or less</strong> is the target
          for many residential air handlers. Readings above manufacturer limits indicate design or duct condition
          problems.
        </p>
      </div>

      <h2>Lifespan and Replacement Timing</h2>
      <p>
        Typical service life for residential HVAC ductwork in SWFL is <strong>15–25 years</strong> under normal
        conditions. Life shortens when ducts run through hot, vented attics without adequate insulation, or when
        salt and humidity remain unmanaged. Replacement is usually due when:
      </p>
      <ul>
        <li>Insulation is deteriorated or water damaged, or outer vapor barriers are split</li>
        <li>Mold or biological growth is found on porous duct liners that cannot be remediated to standard</li>
        <li>Static pressure remains high after sealing and minor corrections, indicating design constraints</li>
        <li>Flex duct is kinked, crushed, or the inner core is torn</li>
        <li>Metal trunk systems show corrosion or joint failure not practical to repair</li>
      </ul>

      <h2>Cleaning vs. Replacement</h2>
      <p>
        Cleaning intervals vary. NADCA (National Air Duct Cleaners Association) standards support cleaning when
        there is visible debris accumulation, verified biological growth, post-construction contamination, vermin
        evidence, or restricted airflow from deposits. Routine cleaning on a set calendar is not required without
        cause.
      </p>
      <p>
        Cleaning is appropriate when duct interiors are structurally sound, non-porous, and dry, and when
        biological growth is limited to components that can be sanitized and kept dry. Porous, water-damaged, or
        mold-colonized liners often require replacement rather than cleaning to meet hygiene standards.
      </p>
      <p>
        Learn more about our{" "}
        <Link href="/services/air-duct-cleaning" className="text-secondary font-semibold hover:underline">
          Air Duct Cleaning service
        </Link>
        .
      </p>

      <h2>Common Installation Mistakes to Avoid</h2>
      <p>Errors that drive high static pressure and poor comfort include:</p>
      <ul>
        <li>Undersized or single return in multi-room layouts that need additional returns</li>
        <li>Excessive flex length, sharp bends, and unsupported sags that reduce effective diameter</li>
        <li>Supply branches tapped too close together on trunks, causing imbalance</li>
        <li>Boots not sealed to drywall, creating envelope leakage</li>
        <li>Filter grilles with low free area or stacked filtration increasing resistance</li>
        <li>Improperly sized trunk and branch diameters that don't meet calculated load and friction rates</li>
      </ul>
      <div className="callout">
        <p>
          <strong>The 2-foot rule for ducts</strong> refers to avoiding short branch connections tapped too close
          to a trunk transition or elbow. Maintaining at least about 2 feet of straight trunk after a fitting
          helps flow stabilize, reduces turbulence, and improves pressure recovery before the takeoff.
        </p>
      </div>

      <h2>Cost Ranges in SWFL</h2>
      <p>
        Actual prices depend on home layout, attic accessibility, material type, and scope. The following ranges
        are typical starting points and are provided for planning, not quotes:
      </p>
      <div className="price-table">
        <div className="row">
          <span className="label">Leak sealing and minor repairs</span>
          <span className="price">$300–$1,200</span>
        </div>
        <div className="row">
          <span className="label">Aerodynamic corrections (add return, resize branches)</span>
          <span className="price">$500–$2,000</span>
        </div>
        <div className="row">
          <span className="label">Full replacement, like-for-like (average single-story home)</span>
          <span className="price">$3,500–$9,000</span>
        </div>
        <div className="row">
          <span className="label">Full redesign and new layout</span>
          <span className="price">$6,000–$14,000+</span>
        </div>
        <div className="row">
          <span className="label">NADCA-standard duct cleaning (when justified)</span>
          <span className="price">$500–$1,200</span>
        </div>
        <div className="row">
          <span className="label">UV-C or in-duct air purification (optional add-on)</span>
          <span className="price">$500–$1,200/unit</span>
        </div>
      </div>

      <h2>Efficiency Impact from Proper Sealing and Static Control</h2>
      <p>
        Sealing and design corrections reduce leakage that can reach 15–30% in older systems. Lower leakage and
        corrected static pressure restore coil airflow to specification, improving latent and sensible capacity.
        Homeowners typically observe:
      </p>
      <ul>
        <li>More uniform room temperatures</li>
        <li>Shorter run times and quieter operation</li>
        <li>Reduced blower watt draw on variable-speed equipment when static falls within spec</li>
      </ul>

      <h2>When a Full Redesign Is Warranted</h2>
      <p>A new layout is considered when:</p>
      <ul>
        <li>Total external static pressure remains high despite sealing and minor corrections</li>
        <li>There are persistent hot or cold rooms tied to distribution limits, not equipment capacity</li>
        <li>Additions or remodels changed loads, but ducts remained original</li>
        <li>Noise at grilles and the air handler indicates turbulent flow and restriction</li>
      </ul>
      <p>
        A redesign should follow Manual J (load), Manual D (duct design), and manufacturer airflow
        specifications. Deliverables include sizing worksheets, takeoff schedules, and commissioning data.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How long does HVAC ductwork last?</h3>
        <p>In coastal climates, 15–25 years is common, with shorter life where heat and humidity are severe or insulation is compromised.</p>
      </div>
      <div className="faq-item">
        <h3>How often should HVAC ductwork be replaced?</h3>
        <p>Replacement is based on condition rather than a set interval. Consider replacement when insulation fails, liners are contaminated, static pressure remains high, or ducts are physically damaged.</p>
      </div>
      <div className="faq-item">
        <h3>Is replacing ductwork worth it?</h3>
        <p>It is often justified when leakage is high, airflow is restricted, rooms are imbalanced, or IAQ concerns exist. Benefits include better comfort, lower blower energy, and restored equipment performance.</p>
      </div>
      <div className="faq-item">
        <h3>What is the 2-foot rule for ducts?</h3>
        <p>Maintain roughly 2 feet of straight trunk after transitions or elbows before a branch takeoff to reduce turbulence and pressure loss. Follow fitting manufacturer guidance.</p>
      </div>
      <div className="faq-item">
        <h3>Does replacing ductwork increase home value?</h3>
        <p>Direct appraised value changes vary. Properly installed ducts can improve inspection outcomes, comfort, and energy use, which can support marketability.</p>
      </div>

      <p>
        For comprehensive IAQ review alongside duct findings, see our{" "}
        <Link href="/services/indoor-air-quality" className="text-secondary font-semibold hover:underline">
          Indoor Air Quality
        </Link>{" "}
        service.
      </p>

      <div className="inline-cta">
        <div>
          <strong>Schedule a duct assessment with photos and static pressure data</strong>
          <p>Financing available through formal quotes. Serving SWFL communities including Fort Myers, Gateway, Naples, and more.</p>
        </div>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Get Assessment
        </a>
      </div>
    </BlogPostLayout>
  );
}
