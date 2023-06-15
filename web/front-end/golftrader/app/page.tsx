"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Card from "@/components/organisms/coursecard.organism";
import classNames from "classnames";
import { Button } from "@/components/atoms/button.component";
import logo from "../public/golftrader_1.svg";
import { useRouter } from "next/navigation";
import Video1 from "@/components/molecules/video.molecule";
var classnames = require("classnames");
const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <main className={classNames(styles.main, inter.className)}>
     
        <div id={styles.video_div}>
          <Video1></Video1>
        </div>
        <div id={styles.welcome_div}>
        <div id={styles.welcome_text}>Welcome to Golftrader!</div>
        <div id={styles.welcome_desc}>Get started by creating a round</div>
        <Button
          id={styles.button}
          onClick={() => router.push("/scores")}
          size="large"
          theme="primary"
          icon={{
            src: logo,
            alt: "Start",
          }}
        >
          Create round
        </Button>
      </div>
    </main>
  );
}
