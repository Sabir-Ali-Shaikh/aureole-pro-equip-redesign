import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const id = decodeURIComponent(location.hash.slice(1));
        const target = document.getElementById(id);

        if (target) {
          target.scrollIntoView({
            behavior: shouldReduceMotion ? "auto" : "smooth",
            block: "start",
          });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search, location.hash, shouldReduceMotion]);

  return null;
}
