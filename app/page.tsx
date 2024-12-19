import styles from "./page.module.css";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Poetry Fridge
          </li>
          <li>Arrange words into messages and send them somewhere</li>
        </ol>

          <Link href={"/play"}><button>PLAY</button></Link>


      </main>
      <footer className={styles.footer}>
        au27
      </footer>
    </div>
  );
}
