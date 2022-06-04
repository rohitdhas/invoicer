import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoicer</title>
      </Head>
      <main className={styles.main}>
        <h1 className="text-2xl font-bold text-center text-orange-500">
          Hello World! 🚀
        </h1>
      </main>
    </div>
  );
}
