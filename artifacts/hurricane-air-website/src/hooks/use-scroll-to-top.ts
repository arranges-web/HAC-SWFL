import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls to the top of the page on every route change. If the URL contains
 * a hash (e.g. /services/ac-repair#book), scrolls to that element after the
 * page renders. Uses rAF + multiple targets so it works on iOS Safari and
 * after Suspense-loaded chunks finish mounting.
 */
export function useScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.slice(1);
    const run = () => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          const headerOffset = 96;
          const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top, behavior: "auto" });
          return;
        }
      }
      window.scrollTo(0, 0);
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    requestAnimationFrame(() => requestAnimationFrame(run));
  }, [pathname]);
}
