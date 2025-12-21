import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../Analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem("analytics_consent");
    if (consent === "accepted") {
      trackPageView(location.pathname);
    }
  }, [location]);

  return null;
}
