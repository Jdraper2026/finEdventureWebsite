import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.rankingContent}>
        <div className={styles.rankingSystemsParent}>
          <h1 className={styles.rankingSystems}>Ranking Systems</h1>
          <div className={styles.esgiIssuesTitleWrapper}>
            <div className={styles.esgiIssuesTitle}>
              <div className={styles.introductionContentWrapper}>
                <div className={styles.introductionContent}>
                  <a className={styles.introduction} href="intro" style={{color:"inherit", textDecoration:"none"}}>Introduction</a>
                </div>
              </div>
              <div className={styles.rankingSystemsWrapper}>
                <a className={styles.rankingSystems1} href="ranking" style={{color:"inherit", textDecoration:"none"}}>Ranking Systems</a>
              </div>
              <div className={styles.benefitsContentWrapper}>
                <button className={styles.benefitsContent}>
                  <a className={styles.benefitsOfEsgi} href="benefits" style={{textDecoration:"none"}}>Benefits of ESGI</a>
                </button>
              </div>
              <button className={styles.issuesOfEsgRankingWrapper}>
                <a className={styles.issuesOfEsg} href="issues" style={{textDecoration:"none"}}>Issues of ESG Ranking</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.supportingTextParent}>
        <div className={styles.supportingText}>ESG Ranking Systems</div>
        <div className={styles.supportingText1}>
          <p className={styles.esgRankingsAgencies}>
            ESG rankings agencies exist to maximize societal and environmental
            benefit: they have complex ranking methodologies that place the
            actions of corporations into categories, and combine these category
            ratings into a numerically weighted ESG ranking.
          </p>
        </div>
      </div>
      <div className={styles.supportingTextGroup}>
        <b className={styles.supportingText2}>
          <p className={styles.esgRankingsAgencies}>
            Key ESG ranking background information:
          </p>
        </b>
        <div className={styles.supportingTextWrapper}>
          <div className={styles.supportingText3}>
            <ul className={styles.varietyOver600AgenciesWor}>
              <li>
                Variety: Over 600 agencies worldwide rate companies on ESG
                factors. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
