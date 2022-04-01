import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  CanvasClient,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import resolveRenderer from "../lib/resolveRenderer";

// LESSON 7 - ACTIVITY 6- START
import { useLivePreviewNextStaticProps } from "../hooks/useLivePreviewNextStaticProps";
import getConfig from "next/config";
// LESSON 7 - ACTIVITY 6 - END

export async function getStaticProps({ preview }) {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });
  const { composition } = await client.getCompositionBySlug({
    slug: "/",
    state: preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
  });
  return {
    props: {
      composition,
    },
  };
}

// LESSON 7 - ACTIVITY 6 - START
const { publicRuntimeConfig } = getConfig();
const { uniform } = publicRuntimeConfig;
// LESSON 7 - ACTIVITY 6 - END

export default function Home({ composition }) {
  // LESSON 7 - ACTIVITY 6 - START
  useLivePreviewNextStaticProps({
    compositionId: composition?._id,
    projectId: uniform.projectId,
  });
  // LESSON 7 - ACTIVITY 6 - END
  return (
    <Composition data={composition} resolveRenderer={resolveRenderer}>
      <div className={styles.container}>
        <Head>
          <title>{composition.parameters.title?.value}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Slot name="header" />

          <Slot name="body" />
        </main>

        <footer className={styles.footer}>
          <Slot name="footer" />
        </footer>
      </div>
    </Composition>
  );
}
