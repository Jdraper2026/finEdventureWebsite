import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.weveBeenHardParent}>
        <h1 className={styles.weveBeenHard}>{`We’ve been hard `}</h1>
        <h1 className={styles.atWork}>at work</h1>
      </div>
      <div className={styles.statisticsContentWrapper}>
        <div className={styles.statisticsContent}>
          <div className={styles.statisticsData}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.representativesWrapper}>
                <h2 className={styles.representatives}>
                  <p className={styles.representatives1}>Representatives</p>
                </h2>
              </div>
              <div className={styles.separator}>40+</div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild} />
              <div className={styles.representativesWrapper}>
                <h2 className={styles.countriesRepresented}>
                  Countries Represented
                </h2>
              </div>
              <div className={styles.div}>15+</div>
            </div>
          </div>
          <div className={styles.studentsReachedContentWrapper}>
            <div className={styles.studentsReachedContent}>
              <div className={styles.studentsReachedContentChild} />
              <div className={styles.studentsReachedNumber}>4500+</div>
              <div className={styles.studentsReachedWrapper}>
                <h2 className={styles.studentsReached}>Students Reached</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
