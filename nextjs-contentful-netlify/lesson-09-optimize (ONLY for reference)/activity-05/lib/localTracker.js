import { createDefaultTracker } from "@uniformdev/optimize-tracker-browser";
import intentManifest from "./intentManifest.json";

const localTracker = createDefaultTracker({
  intentManifest,
});

export default localTracker;
