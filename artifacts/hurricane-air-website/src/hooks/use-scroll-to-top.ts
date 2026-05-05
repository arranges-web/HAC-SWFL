import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls to the top of the page on every route change. If the URL contains
 * a hash (e.g. /services/ac-repair#book), defers to native anchor scrolling.
 */
export function useScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
}
