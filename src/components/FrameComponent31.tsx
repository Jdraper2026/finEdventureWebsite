import PropTypes from "prop-types";
import styles from "./FrameComponent31.module.css";

const FrameComponent31 = ({ className = "" }) => {
  return (
    <div className={[styles.headerInner, className].join(" ")}>
      <div className={styles.financialMasteryCurriculumParent}>
        <h1 className={styles.financialMasteryCurriculum}>
          Financial Mastery Curriculum
        </h1>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.supportingTextWrapper}>
              <div className={styles.supportingText}>
                <p className={styles.exploreEssentialFinancialCo}>
                  <span
                    className={styles.exploreEssential}
                  >{`Explore essential `}</span>
                  <span className={styles.financialConcepts}>
                    financial concepts
                  </span>
                  <span>
                    {" "}
                    from budgeting basics to advanced investment strategies
                  </span>
                </p>
                <p className={styles.exploreEssentialFinancialCo}>&nbsp;</p>
                <p className={styles.exploreEssentialFinancialCo}>
                  <span>{`Designed to empower high school students to take control of their `}</span>
                  <span className={styles.financialConcepts}>
                    financial futures
                  </span>
                  <span className={styles.exploreEssential}>
                    {" "}
                    with confidence and ambition.
                  </span>
                </p>
              </div>
            </div>
            <img
              className={styles.image13Icon}
              loading="lazy"
              alt=""
              src="/image-13@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent31.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent31;
