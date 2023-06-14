"use client";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import styles from "../../public/styles/organisms/coursecard.module.css";
import { Button } from "../atoms/button.component";
import aerial1 from "../../public/aerial2.jpg";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface Course {
  id: number;
  courseName: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

export default function CourseCard() {
  const [courseData, setCourseData] = useState<Course[]>([{ id: 0, courseName: "Crossmoor", location: "Weert", price: 185, rating: 3.5, image:"" }]);

  useEffect(() => {
    try {
      fetch("http://localhost:3001/courses/all")
      .then((response) => response.json())
      .then((data) => setCourseData(data));
    }
    catch (error) {
      console.error('Error fetching courses:', error)
    }
    // Fetch data from "/courses/all" endpoint
    
  }, []);

  return (
    <div id={styles.cards_grid}>
      {courseData.map((course) => (
        <div className={styles.card_wrapper} key={course.id}>
          <div className={styles.image_div}>
            <Image
              className={styles.image}
              src={aerial1}
              alt={"golfer"}
              width={120}
              height={120}
            />
          </div>
          <div className={styles.card_description}>
            <h1>Course: {course.courseName}</h1>
            <h3>Location: {course.location}</h3>
            <h3>Price: {course.price}</h3>
            <h3>Rating: {course.rating}</h3>
            <Link href="/scores">
              
                <button className={styles.start_round_button}>
                  Start Round
                </button>
              
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
