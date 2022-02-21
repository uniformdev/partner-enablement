import "../styles/globals.css";
import { UniformTracker } from "@uniformdev/optimize-tracker-react";
import localTracker from "../lib/localTracker";

export default function MyApp({ Component, pageProps }) {
  return (
    <UniformTracker trackerInstance={localTracker}>
      <Component {...pageProps} />
    </UniformTracker>
  );
}
