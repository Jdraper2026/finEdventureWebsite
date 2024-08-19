import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.rankingContent}>
        <div className={styles.rankingSystemsParent}>
          <h1 className={styles.rankingSystems}>Ranking Systems</h1>
          <div className={styles.esgiIssuesTitleWrapper}>
            <div className={styles.esgiIssuesTitle}>
              <div className={styles.introductionContentWrapper}>
                <div className={styles.introductionContent}>
                  <div className={styles.introduction}>Introduction</div>
                </div>
              </div>
              <div className={styles.rankingSystemsWrapper}>
                <div className={styles.rankingSystems1}>Ranking Systems</div>
              </div>
              <div className={styles.benefitsContentWrapper}>
                <button className={styles.benefitsContent}>
                  <div className={styles.benefitsOfEsgi}>Benefits of ESGI</div>
                </button>
              </div>
              <button className={styles.issuesOfEsgRankingWrapper}>
                <div className={styles.issuesOfEsg}>Issues of ESG Ranking</div>
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

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
