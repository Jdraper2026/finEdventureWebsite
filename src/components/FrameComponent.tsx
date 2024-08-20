import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.supportingFiveContentWrapper, className].join(" ")}
    >
      <div className={styles.supportingFiveContent}>
        <div className={styles.supportingText}>
          <ul className={styles.industrySpecificManyEsgRa}>
            <li className={styles.industrySpecificManyEsg}>
              Industry-specific: Many ESG ranking agencies are
              industry-specific: they only evaluate firms in a particular
              sector. For example, some ratings agencies focus on the oil and
              gas sector only. Consequently, they will have different evaluation
              methods than an agency that focuses on another sector. 
            </li>
          </ul>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.industrySpecificManyEsgRa}>
            <li className={styles.industrySpecificManyEsg}>
              Popular Agencies: Popular agencies include Bloomberg and MSCI.
              They evaluate companies on the 3 ESG pillars and combine those
              ratings to form a score out of 100 points.
            </li>
          </ul>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.industrySpecificManyEsgRa}>
            <li>
              How They Are Created: ESG rankings are NOT just pulled out of thin
              air, teams of experienced evaluators investigate a company, making
              use of companies’ annual sustainability reports, evaluating
              corporate investment decisions, employee/stakeholder
              compensations, allocation of resources, and involvement in
              controversial activities. These resources are then numerically
              weighted by importance, creating a rating for investors and the
              public to see.
            </li>
          </ul>
        </div>
        <div className={styles.supportingSixContentWrapper}>
          <div className={styles.supportingSixContent}>
            <div className={styles.supportingText1}>
              {`How ESG Rankings are created video: `}
              <a
                className={styles.httpswwwyoutubecomwatch}
                href="https://www.youtube.com/watch?v=QgcWthlPHP0"
                target="_blank"
              >
                <span className={styles.httpswwwyoutubecomwatch1}>
                  https://www.youtube.com/watch?v=QgcWthlPHP0
                </span>
              </a>
            </div>
            <div className={styles.supportingSevenContentWrapper}>
              <button className={styles.supportingSevenContent}>
                <a className={styles.goToThe} href="benefits" style={{color:"inherit", textDecoration:"none"}}>
                  Go to the Benefits of ESG Investing
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
