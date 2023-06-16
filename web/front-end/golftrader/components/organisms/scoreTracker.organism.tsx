import React, { useState } from "react";
import styles from "../../public/styles/organisms/scoreTracker.module.css";
import classNames from "classnames";

interface Score {
  hole: number;
  score: number;
}

const GolfScoreTracker = () => {
  const [formData, setFormData] = useState({
    id: "",
    course_id: "",
    golfer_id: "",
    scores: Array.from({ length: 18 }, () => 0),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleScoreChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newScores = [...prevFormData.scores];
      newScores[index - 1] = parseInt(value, 10);
      return {
        ...prevFormData,
        scores: newScores,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const totalScore = formData.scores.reduce((sum, score) => sum + score, 0);
    const dataToSend = {
      id: formData.id,
      course_id: formData.course_id,
      golfer_id: formData.golfer_id,
      totalScore: totalScore,
    };

    try {
      const response = await fetch("http://localhost:3001/round/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (response.ok) {
        console.log("Form data sent successfully.");
      } else {
        console.error("Failed to send form data.");
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    }
  };

  const getScoreForHole = (index: number) => {
    return formData.scores[index - 1] || 0;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
     
      <div className={classNames(styles.data_wrapper)}>
        <h2>Golf Score Tracker</h2>
        <div className={styles.inputWrapper}>
          <label htmlFor="id">Round number:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            className={styles.scoreInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="course_id">Course Name:</label>
          <input
            type="text"
            id="course_id"
            name="course_id"
            value={formData.course_id}
            onChange={handleInputChange}
            className={styles.scoreInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="golfer_id">NGF #:</label>
          <input
            type="text"
            id="golfer_id"
            name="golfer_id"
            value={formData.golfer_id}
            onChange={handleInputChange}
            className={styles.scoreInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="golfer_id">NGF # marker:</label>
          <input
            type="text"
            id="golfer_id"
            name="golfer_id"
            value={formData.golfer_id}
            onChange={handleInputChange}
            className={styles.scoreInput}
          />
        </div>
      </div>
      <table className={styles.scoreTable}>
        <thead>
          <tr>
            <th>Hole</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 18 }, (_, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={getScoreForHole(index + 1)}
                  onChange={(event) => handleScoreChange(index + 1, event)}
                  className={styles.scoreInput}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id={styles.submit_buttontje} type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default GolfScoreTracker;
