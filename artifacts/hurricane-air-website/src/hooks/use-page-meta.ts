import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
}

/**
 * Injects page-level title, meta description, optional canonical link,
 * and JSON-LD structured data. Cleans up on unmount so SPA navigation
 * doesn't leak previous-page tags into the next route.
 */
export function usePageMeta({ title, description, canonical, jsonLd }: PageMetaOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const descMeta = ensureMeta("description");
    const prevDesc = descMeta.content;
    descMeta.content = description;

    const ogTitle = ensureMeta("og:title", true);
    const prevOgTitle = ogTitle.content;
    ogTitle.content = title;

    const ogDesc = ensureMeta("og:description", true);
    const prevOgDesc = ogDesc.content;
    ogDesc.content = description;

    let canonicalEl: HTMLLinkElement | null = null;
    let prevCanonical: string | null = null;
    if (canonical) {
      canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      } else {
        prevCanonical = canonicalEl.href;
      }
      canonicalEl.href = canonical;
    }

    const ldScripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const ldArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      ldArray.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.injected = "page-meta";
        script.textContent = JSON.stringify(entry);
        document.head.appendChild(script);
        ldScripts.push(script);
      });
    }

    return () => {
      document.title = prevTitle;
      descMeta.content = prevDesc;
      ogTitle.content = prevOgTitle;
      ogDesc.content = prevOgDesc;
      if (canonicalEl) {
        if (prevCanonical === null) {
          canonicalEl.remove();
        } else {
          canonicalEl.href = prevCanonical;
        }
      }
      ldScripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, JSON.stringify(jsonLd)]);
}

function ensureMeta(name: string, isProperty = false): HTMLMetaElement {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (isProperty) el.setAttribute("property", name);
    else el.name = name;
    document.head.appendChild(el);
  }
  return el;
}
