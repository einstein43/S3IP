import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div id={styles.navbar_div}>
        <img id={styles.golfball_1} src="golf_ball_vangogh.png" alt="golfball" />
        <ul id={styles.ul_1}>
          <li>
            <h3 className={styles.li_p}>LOGO</h3>
          </li>
          <li>
            <p className={styles.li_p}>LOGO LINK</p>
          </li>
        </ul>
        <ul id={styles.ul_2}>
          <li>
            <p className={styles.li_p}>SOCIALS LINK</p>
          </li>
          <li>
            <p className={styles.li_p}>SOCIALS LINK</p>
          </li>
          <li>
            <p className={styles.li_p}>SOCIALS LINK</p>
          </li>
          <li>
            <p className={styles.li_p}>PROFILE LINK</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
