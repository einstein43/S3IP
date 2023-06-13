"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import GolfScoreTracker from "@/components/organisms/scoreTracker.organism";
const inter = Inter({ subsets: ["latin"] });

export default function Scores() {
  return (
    <main className={styles.main}>
      <div id={styles.score_wrapper}>
        <div id={styles.score_card}> </div>
        <GolfScoreTracker></GolfScoreTracker>
      </div>
    </main>
  );
}
