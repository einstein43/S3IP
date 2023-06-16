"use client";

import Image from "next/image";
import styles from "../../public/styles/organisms/footer.module.css";
import logo from '../../public/golftrader_1.svg'
import React from "react";

export const Footer = () => {
  // Fn - handle click
  const handleClick = (id: string) => {
    // Get element
    const el = document.getElementById(id);

    // If element exists
    if (el) {
      // Scroll to element
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Current year
  const year = new Date().getFullYear();

  return (
    <>
      <div id={styles.footer}>
        {/* Logo */}
        <div id={styles.logoWrap}>
          <Image
            src={logo}
            alt="Golftrader logo"
            fill={true}
            id={styles.logo}
          />
        </div>

        {/* Details */}
        <div className={styles.section}>
          <p className={styles.title}>Golftrader</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="https://goo.gl/maps/pgG1u7PspoTZ7Nc19" target="_blank">
                 
              </a>
            </li>
           
          </ul>
        </div>

        {/* Sections */}
        <div className={styles.section}>
          <p className={styles.title}>Sections</p>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Home
            </li>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Dashboard
            </li>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Scores
            </li>
            <li className={styles.li} onClick={() => handleClick("section-1")}>
              Courses
            </li>
          </ul>
        </div>
      </div>

      {/* Disclosure bar */}
      <div id={styles.disclosureContainer}>
        <p>Copyright @ {year} Golftrader</p>
      </div>
    </>
  );
};
