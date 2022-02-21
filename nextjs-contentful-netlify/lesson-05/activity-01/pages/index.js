import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CanvasClient } from "@uniformdev/canvas";
import { Composition } from "@uniformdev/canvas-react";

export async function getStaticProps() {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });
  const { composition } = await client.getCompositionBySlug({
    slug: "/",
  });
  return {
    props: {
      composition,
    },
  };
}

export default function Home({ composition }) {
  return (
    <Composition data={composition}>
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
