import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import styles from "../../public/styles/organisms/scorecard.module.css";
import { Button } from "../atoms/button.component";
import aerial1 from "../../public/aerial2.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function ScoreCard() {
  return (
    <div className={styles.scorecard_wrapper}>
      <form id={styles.form}>
        <label className={styles.label}>Hole 1:
          <input type="text" name="Hole1" />
        </label>
       
      </form>
    </div>
  );
}
