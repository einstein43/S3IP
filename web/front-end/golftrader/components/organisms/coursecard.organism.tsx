import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import styles from "../../public/styles/organisms/coursecard.module.css";
import { Button } from "../atoms/button.component";
import aerial1 from "../../public/aerial2.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function CourseCard() {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.image_div}>
        {" "}
        <Image id={styles.image} src={aerial1} alt={"golfer"} width={120} height={120}></Image>
      </div>
      <div className={styles.card_description}>
        <h1>Course: </h1>
        <h3>Location:</h3>
        <h3>Price:</h3>
        <h3>Rating:</h3>
        <Button theme={"secondary"} size={"medium"}>
          Start Round
        </Button>
      </div>
    </div>
  );
}
