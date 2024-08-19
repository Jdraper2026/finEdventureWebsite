import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.impactTop}>
        <div className={styles.image35Parent}>
          <img
            className={styles.image35Icon}
            loading="lazy"
            alt=""
            src="/image-35@2x.png"
          />
          <div className={styles.supportingTextWrapper}>
            <b className={styles.supportingText}>
              <p className={styles.tristanMoore}>Tristan Moore</p>
              <p className={styles.directorOfSustainability}>
                Director of Sustainability
              </p>
            </b>
          </div>
        </div>
      </div>
      <div className={styles.impactDetails}>
        <div className={styles.impactDescription}>
          <div className={styles.impactSummary}>
            <b className={styles.supportingText1}>Content Developers</b>
          </div>
          <div className={styles.impactHighlights}>
            <div className={styles.imageGrid}>
              <div className={styles.image26Wrapper}>
                <img
                  className={styles.image26Icon}
                  loading="lazy"
                  alt=""
                  src="/image-26@2x.png"
                />
              </div>
              <div className={styles.imagePairOneCaption}>
                <b className={styles.supportingText2}>
                  <p className={styles.tristanMoore}>Andy Wang</p>
                  <p className={styles.directorOfSustainability}>
                    Business Education Specialist
                  </p>
                </b>
              </div>
              <div className={styles.image28Wrapper}>
                <img
                  className={styles.image26Icon}
                  loading="lazy"
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <b className={styles.supportingText3}>
                <p className={styles.tristanMoore}>Aadi Valappil</p>
                <p className={styles.directorOfSustainability}>
                  Curriculum Developer
                </p>
              </b>
            </div>
            <div className={styles.imagePairTwo}>
              <div className={styles.image27Wrapper}>
                <img
                  className={styles.image26Icon}
                  loading="lazy"
                  alt=""
                  src="/image-27@2x.png"
                />
              </div>
              <div className={styles.imagePairThreeCaption}>
                <b className={styles.supportingText2}>
                  <p className={styles.tristanMoore}>Ethan Yang</p>
                  <p className={styles.directorOfSustainability}>
                    Business Education Specialist
                  </p>
                </b>
              </div>
              <div className={styles.image39Wrapper}>
                <img
                  className={styles.image26Icon}
                  loading="lazy"
                  alt=""
                  src="/image-39@2x.png"
                />
              </div>
              <div className={styles.supportingTextContainer}>
                <b className={styles.supportingText2}>
                  <p className={styles.tristanMoore}>Rintaro Yamagami</p>
                  <p className={styles.directorOfSustainability}>
                    Curriculum Developer
                  </p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.impactOutro}>
          <b className={styles.supportingText6}>Marketing and Outreach</b>
        </div>
      </div>
      <div className={styles.impactVisual}>
        <div className={styles.impactVisualContent}>
          <div className={styles.image38Wrapper}>
            <img
              className={styles.image38Icon}
              loading="lazy"
              alt=""
              src="/image-38@2x.png"
            />
          </div>
          <b className={styles.supportingText7}>
            <p className={styles.tristanMoore}>Sophia Li</p>
            <p className={styles.directorOfSustainability}>
              Business Education Specialist
            </p>
          </b>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
