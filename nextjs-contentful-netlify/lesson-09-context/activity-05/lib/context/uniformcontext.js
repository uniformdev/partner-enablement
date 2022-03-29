import {
  Context,
  enableContextDevTools,
} from "@uniformdev/context";
import { NextCookieTransitionDataStore } from "@uniformdev/context-next";
import manifest from "./manifest.json";

export function createUniformContext(serverContext) {
  const context = new Context({
    defaultConsent: true,
    manifest: manifest,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    plugins: [enableContextDevTools()],
  });

  return context;
}
