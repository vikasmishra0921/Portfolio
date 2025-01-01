import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikas Mishra</h1>
        <p className={styles.description}>
          Aspiring full-stack developer with hands-on experience in MERN Stack.
          Excited to bring creativity and dedication to your team—let’s connect!
        </p>
        <a
          href="mailto:mishravikas8087@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles.heroImage}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
