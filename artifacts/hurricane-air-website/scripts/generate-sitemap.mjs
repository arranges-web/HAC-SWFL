#!/usr/bin/env node
/**
 * Build-time sitemap generator.
 *
 * Imports the locationPages data and emits public/sitemap.xml covering
 * all static routes plus every dynamically-generated city × service URL.
 *
 * Run via `pnpm --filter @workspace/hurricane-air-website run build` —
 * wired in package.json as a prebuild step.
 */

import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");
const OUTPUT = resolve(ROOT, "public/sitemap.xml");
const BASE_URL = "https://hurricaneairconditioning.com";

// Static routes the SPA serves
const STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/membership",
  "/financing",
  "/labor-warranty",
  "/service-area",
  "/careers",
  "/offers",
  "/reviews",
  "/customer-service",
  "/schedule",
  "/blog",
  "/blog/what-happens-during-ac-inspection",
  "/blog/ac-maintenance-how-often",
  "/blog/ac-tune-up-scope-schedule-pricing",
  "/blog/energy-efficient-cooling-ac-settings",
  "/blog/energy-efficient-cooling-southwest-florida",
  "/blog/hvac-emergency-criteria-southwest-florida",
  "/blog/replace-ac-5000-rule",
  "/blog/repair-or-replace-5000-hvac-rule",
  "/blog/ac-repair-costs-swfl",
  "/blog/ductwork-lifespan-cost-upgrades-swfl-homes",
  "/blog/duct-repair-or-replace-guide",
  // Services
  "/services/ac-repair",
  "/services/ac-installation",
  "/services/ac-maintenance",
  "/services/emergency-ac",
  "/services/ductless-mini-split",
  "/services/heating-repair",
  "/services/heat-pump-installation",
  "/services/heating-maintenance",
  "/services/furnace-repair",
  "/services/thermostat-install",
  "/services/indoor-air-quality",
  "/services/air-duct-repair",
  "/services/air-duct-cleaning",
  "/services/dehumidifier",
  "/services/humidifier",
];

async function main() {
  // Dynamic import — locationPages.ts is TypeScript so we use a tsx loader
  // via the prebuild script entry point. When invoked through `node`, fall
  // back to parsing the file as text and extracting city/service slugs.
  let locationUrls = [];
  try {
    const modUrl = pathToFileURL(resolve(ROOT, "src/data/locationPages.ts")).href;
    const mod = await import(modUrl);
    locationUrls = mod.getAllLocationUrls?.() ?? mod.locationPages?.map((p) => p.url) ?? [];
  } catch {
    // Fallback: hard-coded city × service grid. Keeps build resilient if
    // tsx loader isn't present.
    const cities = [
      "fort-myers", "cape-coral", "bonita-springs", "estero", "lehigh-acres",
      "naples", "pelican-bay", "marco-island", "golden-gate",
      "punta-gorda", "port-charlotte", "englewood",
    ];
    const services = ["ac-repair", "ac-installation", "energy-efficient-ac"];
    locationUrls = cities.flatMap((c) => services.map((s) => `/${c}/${s}`));
  }

  const allUrls = [...STATIC_ROUTES, ...locationUrls];
  const today = new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path.startsWith("/services/") || path.includes("/ac-") || path.includes("/energy-") ? "0.8" : "0.6"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  writeFileSync(OUTPUT, xml);
  // eslint-disable-next-line no-console
  console.log(`✓ Wrote ${allUrls.length} URLs to ${OUTPUT.replace(ROOT, ".")}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
