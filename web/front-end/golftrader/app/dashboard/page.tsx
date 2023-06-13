"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Card from "@/components/organisms/coursecard.organism";
import { useState, useEffect } from "react";

var classnames = require("classnames");
export default function Dashboard() {
  interface Round {
    id: number;
    course_id: number;
    golfer_id?: number;
    score: number;
  }
  const [rounds, setRounds] = useState<Round[]>([]);
  const [courseNames, setCourseNames] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');


  useEffect(() => {
    fetchRounds();
    createCourseNames();
  }, []);

  const fetchRounds = async () => {
    try {
      const response = await fetch("http://localhost:3001/round/all");
      if (response.ok) {
        const data: Round[] = await response.json();
        setRounds(data);
      } else {
        throw new Error("Error fetching rounds");
      }
    } catch (error) {
      console.error("Error fetching rounds:", error);
    }
  };

  const createCourseNames = () => {
    // Create a list of course names manually or from any source
    const names = [
      "Crossmoor, Weert",
      "Het woold, Asten-Heusden",
      "De tongelreep, Eindhoven",
      "De swinkelsche, Someren",
      "De gulbergen, Mierlo",
      "De schoot, Sint-Oedenrode",
      "De stippelberg, Bakel",
      "De berckt, Baarlo",
      "De peelse, Evertsoord",
      "De golfhorst, America",
      "De brugse vaart, Oostburg",
      "De domburgsche, Domburg",
      "De zeeuwsche, Middelburg",
      "De goese, Goes",
      "De molenberg, Burgh-Haamstede",
      "De herkenbosche, Herkenbosch",
      "De hooge rotterdamsche, Bergschenhoek",
      "De rozenstein, Wassenaar",
      // Add more course names as needed
    ];
    setCourseNames(names);
  };

  const handleEdit = async (id:number) => {
    const newScore = prompt('Enter the new score:');
    const newCourseId = prompt('Enter the new course ID:');
  
    // Prepare the request body
    const requestBody = {
      id: id,
      course_id: newCourseId,
       
      score: newScore,
    };
  
    try {
      const response = await fetch("http://localhost:3001/round/update", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ requestBody }),
      });
  
      if (response.ok) {
        console.log('Round updated successfully');
        // Perform any necessary actions after successful update
      } else {
        throw new Error('Failed to update round');
      }
    } catch (error) {
      console.error('Error updating round:', error);
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/round/delete/${id}`, {
      method: 'DELETE',
     
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",

        },
       
      });
  
      if (response.ok) {
        console.log('Round deleted successfully');
        setSuccessMessage('Round deleted successfully');
        window.alert('Round deleted successfully');
      } else {
        throw new Error('Failed to delete round');
      }
    } catch (error) {
      console.error('Error deleting round:', error);
    }
  };
  
  

  return (
    <main className={styles.main}>
      <div className={styles.wrapper_div}>
        <h1 className={styles.title}>Dashboard</h1>
        <h2 className={styles.subtitle}>Your rounds</h2>
        {successMessage && <p>{successMessage}</p>}

        <div id={styles.wrapper_card}>
          {rounds.map((round) => (
            <div key={round.id} className={styles.card}>
              <p>Round ID: {round.id}</p>
              <p>Course Name: {courseNames[round.course_id - 1]}</p>
              <p>Golfer ID: {round.golfer_id}</p>
              <p>Score: {round.score}</p>
              <div className={styles.buttons}>
                <button id={styles.button} onClick={() => handleEdit(round.id)}>
                  Edit
                </button>
                <button
                  id={styles.button}
                  onClick={() => handleDelete(round.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
