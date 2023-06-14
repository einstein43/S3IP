import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Card from "@/components/organisms/coursecard.organism";
const inter = Inter({ subsets: ["latin"] });

export default function Courses() {
  return (
    <main className={styles.main}>
      <div id={styles.cards_div}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </main>
  );
}
