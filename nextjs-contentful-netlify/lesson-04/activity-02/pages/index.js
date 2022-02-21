import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uniform Enablement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>[header]</h1>

        <p className={styles.description}>[body]</p>
      </main>

      <footer className={styles.footer}>
        <div>[footer]</div>
      </footer>
    </div>
  );
}
