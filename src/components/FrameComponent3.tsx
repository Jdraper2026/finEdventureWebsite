import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.introContentWrapper, className].join(" ")}>
      <div className={styles.introContent}>
        <div className={styles.supportingTextWrapper}>
          <b className={styles.supportingText}>Founding Team</b>
        </div>
        <div className={styles.features}>
          <div className={styles.image14Parent}>
            <img
              className={styles.image14Icon}
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
            <div className={styles.supportingTextContainer}>
              <b className={styles.supportingText1}>
                <p className={styles.alaricChen}>Alaric Chen</p>
                <p className={styles.coPresident}>Co-President</p>
              </b>
            </div>
          </div>
          <div className={styles.image15Parent}>
            <img
              className={styles.image14Icon}
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
            <div className={styles.supportingTextContainer}>
              <b className={styles.supportingText1}>
                <p className={styles.alaricChen}>Charlie Taft</p>
                <p className={styles.coPresident}>Co-President</p>
              </b>
            </div>
          </div>
          <div className={styles.image16Parent}>
            <img
              className={styles.image14Icon}
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
            />
            <div className={styles.frameDiv}>
              <b className={styles.supportingText1}>
                <p className={styles.alaricChen}>Ryan Stiles</p>
                <p className={styles.headOfCurriculum}>Co-President</p>
              </b>
            </div>
          </div>
          <div className={styles.featureFour}>
            <div className={styles.image17Wrapper}>
              <img
                className={styles.image17Icon}
                loading="lazy"
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <b className={styles.supportingText4}>
              <p className={styles.alaricChen}>Aryeh Goldstein</p>
              <p className={styles.headOfCurriculum}>
                Head of Curriculum Development
              </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
