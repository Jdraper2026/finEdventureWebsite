import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.titleContentWrapper, className].join(" ")}>
      <div className={styles.titleContent}>
        <h1 className={styles.issuesOfEsg}>Issues of ESG Ranking Systems</h1>
        <div className={styles.titleContentInner}>
          <div className={styles.introHeaderParent}>
            <div className={styles.introHeader}>
              <div className={styles.introHeaderItems}>
                <a className={styles.introduction} href="intro" style={{color:"inherit", textDecoration:"none"}}>Introduction</a>
              </div>
              <div className={styles.introDivider}>
                <img
                  className={styles.introDividerChild}
                  loading="lazy"
                  alt=""
                  src="/line-111.svg"
                />
              </div>
              <button className={styles.introHeaderItems1}>
                <a className={styles.rankingSystems} href="ranking" style={{textDecoration:"none"}}>Ranking Systems</a>
              </button>
            </div>
            <div className={styles.benefitsContentWrapper}>
              <div className={styles.benefitsContent}>
                <button className={styles.benefitsItem}>
                  <a className={styles.benefitsOfEsgi} href="benefits" style={{textDecoration:"none"}}>Benefits of ESGI</a>
                </button>
                <div className={styles.benefitsDivider}>
                  <img
                    className={styles.benefitsDividerChild}
                    loading="lazy"
                    alt=""
                    src="/line-111.svg"
                  />
                </div>
              </div>
            </div>
            <button className={styles.issuesOfEsgRankingWrapper}>
              <a className={styles.issuesOfEsg1} href="issues" style={{textDecoration:"none"}}>Issues of ESG Ranking</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
