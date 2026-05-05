import { BlogPostLayout } from "@/components/BlogPostLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";

const post = blogPosts.find((p) => p.slug === "duct-repair-or-replace-guide")!;

export default function DuctRepairOrReplace() {
  return (
    <BlogPostLayout {...post}>
      <p>
        Air that feels weak at the vents, dust that keeps coming back, rooms that never seem to match the
        thermostat — these are classic ductwork clues. When ducts leak, sag, or are undersized, your system
        works harder, costs rise, and air quality suffers.
      </p>
      <p>
        If you're wondering whether repair is enough or if it's time for replacement, this guide gives you clear
        signs, costs, and next steps so you can breathe easier and make a confident decision.
      </p>

      <h2>Why Ductwork Design Matters</h2>
      <p>
        Your air conditioner and heat pump can only perform as well as the ducts that deliver the air. Correct
        sizing, sealing, and layout protect efficiency, comfort, and health. In Southwest Florida, humidity
        control also depends on steady airflow. Poor ducts can lead to long run times, sticky rooms, and
        microbial growth inside the system. Good ducts help your equipment last longer, reduce noise, and keep
        temperatures consistent from room to room.
      </p>

      <h2>Common Signs You Need Duct Attention</h2>
      <p>Look for these symptoms during daily use:</p>
      <ul>
        <li>Uneven temperatures across rooms, especially far from the air handler</li>
        <li>Low airflow at some or all vents</li>
        <li>Higher than normal energy bills compared with prior seasons</li>
        <li>Dust buildup near supply registers or at the return grille</li>
        <li>Persistent odors when the system starts</li>
        <li>Whistling sounds, rattles, or visible gaps at connections</li>
        <li>Condensation or rust on ducts in the attic or crawl area</li>
        <li>Frequent filter clogs or dirty coils</li>
      </ul>
      <div className="callout">
        <p>
          If you see two or more of these symptoms, schedule a duct inspection. A professional will test static
          pressure, verify sizing against system capacity, and check for leaks with visual and smoke testing.
        </p>
      </div>

      <h2>Repair vs. Replacement — How to Decide</h2>
      <p><strong>Duct repair is effective when:</strong></p>
      <ul>
        <li>Leaks are limited to accessible joints or boots</li>
        <li>Insulation is intact and moisture-free</li>
        <li>The duct layout is mostly correct for your home size and system</li>
        <li>Airflow test results can be improved with sealing and minor re-routing</li>
      </ul>
      <p><strong>Duct replacement makes sense when:</strong></p>
      <ul>
        <li>Ducts are 15–20 years old with brittle or damaged liners</li>
        <li>There is widespread leakage, poor insulation, or microbial contamination</li>
        <li>The layout is undersized, causing high static pressure and noisy vents</li>
        <li>Materials are not code-compliant or have visible water damage</li>
        <li>Multiple prior repairs have not resolved comfort or dust issues</li>
      </ul>
      <p>
        A careful contractor will quantify leakage, compare pressure before and after temporary sealing, and
        model expected airflow gains. If replacement will restore proper duct sizing and reduce static pressure
        to manufacturer targets, it often provides better long-term results than patching a failing system.
      </p>

      <h2>Does New Ductwork Improve Indoor Air Quality?</h2>
      <p>
        Yes, when replacement includes proper sealing, insulation, and clean materials, indoor air quality
        improves. New ducts reduce infiltration of attic dust, fiberglass particles, and outdoor allergens.
        Sealed return ducts prevent unfiltered air from bypassing the filter. Balanced airflow also supports
        correct humidity control, which limits microbial growth on coils and in duct interiors.
      </p>
      <p>
        Pairing new ducts with a quality filter or in-duct purifier can further reduce particles and odors. See
        our{" "}
        <Link href="/services/indoor-air-quality" className="text-secondary font-semibold hover:underline">
          Indoor Air Quality
        </Link>{" "}
        service for options including UV air purification and advanced filtration.
      </p>

      <h2>How Much Does It Cost to Replace Ductwork?</h2>
      <p>Costs vary by home size, access, and materials. Typical ranges for a single-family home include:</p>
      <div className="price-table">
        <div className="row">
          <span className="label">Partial replacement or major reconfiguration</span>
          <span className="price">A few thousand dollars (scope-dependent)</span>
        </div>
        <div className="row">
          <span className="label">Full replacement, average-sized home</span>
          <span className="price">Commonly higher — varies by materials &amp; zoning</span>
        </div>
      </div>
      <p>
        Attic conditions, existing platform or air handler location, and the need for new return pathways can
        add labor. The most reliable way to understand price is an in-home evaluation with a written scope,
        photos, and line items for sealing, insulation, and new boots or registers. For detailed ranges, see our
        guide on{" "}
        <Link href="/blog/ductwork-lifespan-cost-upgrades-swfl-homes" className="text-secondary font-semibold hover:underline">
          ductwork lifespan and cost in SWFL homes
        </Link>
        .
      </p>

      <h2>Is Ductwork Replacement Worth It?</h2>
      <p>It is worth it when the current ducts are the bottleneck. Benefits include:</p>
      <ul>
        <li>Lower energy use from reduced leakage and proper static pressure</li>
        <li>Better comfort, even temperatures, and quieter operation</li>
        <li>Cleaner air from sealed returns and improved filtration</li>
        <li>Less strain on the blower and compressor, which can extend equipment life</li>
        <li>Stronger dehumidification in our climate due to steady, correct airflow</li>
      </ul>

      <h2>What to Expect During Professional Repair or Replacement</h2>
      <p>A thorough process should include:</p>
      <ul>
        <li>Pre-work testing — airflow measurements, static pressure readings, and documentation</li>
        <li>Clear scope, materials list, and photos of problem areas</li>
        <li>Protection of your home — covers at work areas and daily cleanup</li>
        <li>Sealing with mastic and approved tapes, not cloth duct tape</li>
        <li>Correct insulation levels for attic conditions</li>
        <li>Commissioning tests after the work — new readings to confirm design targets</li>
        <li>Warranty documentation and maintenance guidance</li>
      </ul>

      <h2>Care Tips to Keep Air Clean All Year</h2>
      <ul>
        <li>Replace filters every 30–90 days, monthly during heavy use</li>
        <li>Keep supply registers and returns unblocked — leave at least a few inches of clearance</li>
        <li>Schedule a seasonal tune-up to clean coils and check drain lines</li>
        <li>Ask for a duct inspection if you remodel or add rooms</li>
        <li>Consider an IAQ assessment if you notice odors, dust spikes, or allergy symptoms</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How do I know if I need new ducts?</h3>
        <p>You may need them if you have uneven rooms, high bills, dust at vents, noisy airflow, or ducts older than 15 years. Testing will confirm.</p>
      </div>
      <div className="faq-item">
        <h3>Does replacing ductwork improve indoor air quality?</h3>
        <p>Yes. Sealed, insulated, correctly sized ducts cut dust infiltration and support better filtration and humidity control.</p>
      </div>
      <div className="faq-item">
        <h3>Is ductwork replacement worth it?</h3>
        <p>It is worthwhile when the existing system is leaky, contaminated, or undersized. Expect better comfort and lower energy use.</p>
      </div>

      <div className="inline-cta">
        <div>
          <strong>Schedule a duct inspection — clear report, no pressure</strong>
          <p>Serving Fort Myers, Cape Coral, Naples, and all of SWFL. Financing available.</p>
        </div>
        <a
          href="/schedule"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors whitespace-nowrap"
        >
          Book Inspection
        </a>
      </div>
    </BlogPostLayout>
  );
}
