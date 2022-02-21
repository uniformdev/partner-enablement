import { useRouter } from "next/router";
import { useCallback } from "react";
import { useCompositionEventEffect } from "@uniformdev/canvas-react";

export function useLivePreviewNextStaticProps(options) {
  const router = useRouter();

  const effect = useCallback(() => {
    router.replace(router.asPath, undefined, { scroll: false });
    console.log("Page will be reloaded.", new Date());
  }, [router]);

  return useCompositionEventEffect({
    ...options,
    enabled: router.isPreview,
    effect,
  });
}
