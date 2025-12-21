import ReactGA from "react-ga4";

export const initGA = () => {
  const gaId = import.meta.env.VITE_GA_ID;
  if (gaId) {
    ReactGA.initialize(gaId);
  }
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
