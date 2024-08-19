import PropTypes from "prop-types";
import styles from "./Progress.module.css";

const Progress = ({ className = "" }) => {
  return (
    <div className={[styles.progress, className].join(" ")}>
      <div className={styles.progressContent}>
        <div className={styles.progressHeader}>
          <h1 className={styles.weveBeenHard}>{`We’ve been hard `}</h1>
          <h1 className={styles.atWork}>at work</h1>
        </div>
        <div className={styles.statsIntro}>
          <div className={styles.statsHighlights}>
            <div className={styles.frameParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.representativesWrapper}>
                  <b className={styles.representatives}>
                    <p className={styles.representatives1}>Representatives</p>
                  </b>
                </div>
                <div className={styles.delimiter}>40+</div>
              </div>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameChild} />
                <div className={styles.representativesWrapper}>
                  <b className={styles.countriesRepresented}>
                    Countries Represented
                  </b>
                </div>
                <div className={styles.div}>15+</div>
              </div>
            </div>
            <div className={styles.studentsCircle}>
              <div className={styles.statistic}>
                <div className={styles.circle} />
                <div className={styles.number}>4500+</div>
                <div className={styles.statistics}>
                  <b className={styles.studentsReached}>Students Reached</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
};

export default Progress;
