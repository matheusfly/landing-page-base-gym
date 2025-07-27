import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = "G-P9WENGK1Z3";

function Analytics() {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return null;
}

export default Analytics;
