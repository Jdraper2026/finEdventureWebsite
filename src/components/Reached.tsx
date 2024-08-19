import { FunctionComponent } from "react";
import styles from "./Reached.module.css";

export type ReachedType = {
  className?: string;
};

const Reached: FunctionComponent<ReachedType> = ({ className = "" }) => {
  return (
    <section className={[styles.reached, className].join(" ")}>
      <div className={styles.testimonialsContent}>
        <div className={styles.testimonialOne}>
          <b className={styles.supportingText}>
            <p className={styles.bernedineViri}>Bernedine Viri</p>
            <p className={styles.headOfMarketing}>
              Head of Marketing and Outreach
            </p>
          </b>
        </div>
        <div className={styles.testimonialTwo}>
          <b className={styles.supportingText1}>
            <p className={styles.bernedineViri}>Valentina Martin</p>
            <p className={styles.headOfMarketing}>U.S Marketing Manager</p>
          </b>
          <b className={styles.supportingText2}>Developers</b>
          <b className={styles.supportingText3}>
            <p className={styles.bernedineViri}>Whitney Baron</p>
            <p className={styles.headOfMarketing}>Overseas Marketing Manager</p>
          </b>
        </div>
        <b className={styles.supportingText4}>
          <p className={styles.bernedineViri}>Anna Chen</p>
          <p className={styles.headOfMarketing}>
            Canada and China Outreach Manager
          </p>
        </b>
      </div>
    </section>
  );
};

export default Reached;
