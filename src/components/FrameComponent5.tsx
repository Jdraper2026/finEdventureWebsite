import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.introductionWrapper}>
          <h1 className={styles.introduction}>Introduction</h1>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.rankingTitlesParent}>
              <div className={styles.rankingTitles}>
                <div className={styles.introduction1}>Introduction</div>
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/line-111.svg"
                />
              </div>
              <button className={styles.rankingTitles1}>
                <a className={styles.rankingSystems}>Ranking Systems</a>
              </button>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <button className={styles.benefitsOfEsgiWrapper}>
                  <div className={styles.benefitsOfEsgi}>Benefits of ESGI</div>
                </button>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/line-111.svg"
                  />
                </div>
              </div>
            </div>
            <button className={styles.issuesOfEsgRankingWrapper}>
              <a className={styles.rankingSystems}>Issues of ESG Ranking</a>
            </button>
          </div>
        </div>
        <div className={styles.supportingTextParent}>
          <div className={styles.supportingText}>
            Introduction to/History of ESG Investing
          </div>
          <div className={styles.supportingText1}>
            Understanding the importance of sustainable investing and the
            urgency for financial firms to transition to supporting eco-friendly
            businesses is crucial. This course will teach three key aspects of
            environmentally sustainable investing: the history of ESG/impact
            investing, ESG ranking systems, the benefits of impact investing,
            and the issues of ESG ranking systems.
          </div>
        </div>
        <div className={styles.supportingText2}>
          <ul className={styles.whatIsEsgInvestingItsAn}>
            <li className={styles.whatIsEsgInvestingItsAn1}>
              <b className={styles.whatIsEsg}>What Is ESG Investing:</b>
              <span>
                {" "}
                It's an investment approach focusing on companies making
                positive contributions to the world. 
              </span>
            </li>
          </ul>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.whatIsEsgInvestingItsAn}>
            <li className={styles.whatIsEsgInvestingItsAn1}>
              <b className={styles.whatIsEsg}>Three Pillars of ESG:</b>
              <span>
                {" "}
                ESG is made up of three pillars: Environmental, Social, and
                Governance. ESG investing aims to support sustainable businesses
                and avoid "sin industries".
              </span>
            </li>
          </ul>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.whatThePillarsInclude}>
            <b>What the pillars include:</b>
          </p>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
