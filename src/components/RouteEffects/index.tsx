import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
export default function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Zoey Kourianos";
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}
