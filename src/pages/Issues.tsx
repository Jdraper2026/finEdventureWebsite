import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import styles from "./Issues.module.css";

const Issues: FunctionComponent = () => {
  return (
    <div className={styles.issues}>
      <div className={styles.textHere}>Text here</div>
      <div className={styles.main}>
        <div className={styles.content}>
        <div style={{marginLeft:"-3.125rem"}}> to home placeholder align in center</div>
          <div className={styles.leftPane}>
            <img
              className={styles.removebgPreview1Icon}
              loading="lazy"
              alt=""
              src="/file-2-2@2x.png"
            />
          </div>
          <div className={styles.midPane}>
            <div className={styles.downloads}>
              <img
                className={styles.download7RemovebgPreviewIcon}
                loading="lazy"
                alt=""
                src="/download--7-removebgpreview-2@2x.png"
              />
            </div>
            <div className={styles.downloadsTwo}>
              <img
                className={styles.downloadRemovebgPreview2}
                loading="lazy"
                alt=""
                src="/downloadremovebgpreview-2-1@2x.png"
              />
            </div>
            <div className={styles.downloadsFour}>
              <img
                className={styles.removebgPreview1Icon}
                loading="lazy"
                alt=""
                src="/5058305removebgpreview-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <main className={styles.rightPane}>
        <div className={styles.rightPaneChild} />
        <img
          className={styles.rightPaneItem}
          loading="lazy"
          alt=""
          src="/line-111.svg"
        />
        <FrameComponent6 />
        <h1 className={styles.supportingText}>Issues of ESG Ranking Systems</h1>
        <section className={styles.supportVisualParent}>
          <div className={styles.supportVisual} />
          <h2 className={styles.supportingText1} style={{fontWeight:"normal"}}>
            <ul className={styles.rankingScoreDivergenceTher}>
              <li className={styles.rankingScoreDivergenceTher1}>
                <span className={styles.rankingScoreDivergence}>
                  Ranking Score Divergence: There lies a problem with ESG
                  ranking variations- there is a disagreement in ESG data and
                  therefore these variations in ratings are not a matter of
                  subjectivity but objectivity. 
                </span>
              </li>
            </ul>
            <p className={styles.blankLine}>
              <span className={styles.rankingScoreDivergence}>&nbsp;</span>
            </p>
            <ul className={styles.rankingScoreDivergenceTher}>
              <li className={styles.rankingScoreDivergenceTher1}>
                <span className={styles.rankingScoreDivergence}>
                  Varying Methodologies: ESG agencies disagree on key
                  indicators, leading to different methodologies. Example: one
                  may weigh executive employee compensation as 5%, another as
                  10%, while a third may not consider it at all. 
                </span>
              </li>
            </ul>
            <p className={styles.blankLine}>
              <span className={styles.rankingScoreDivergence}>&nbsp;</span>
            </p>
            <ul className={styles.rankingScoreDivergenceTher}>
              <li className={styles.rankingScoreDivergenceTher1}>
                <span className={styles.rankingScoreDivergence}>
                  The Rater Effect: There is a domino effect amongst ESG raters:
                  Bias appears when a rating agency has a predetermined
                  perception of a company’s sustainability. If a rating agency
                  gives a company a good rating in one sector of sustainability,
                  they will likely give good ratings in others as well. 
                </span>
              </li>
            </ul>
            <p className={styles.blankLine}>
              <span className={styles.rankingScoreDivergence}>&nbsp;</span>
            </p>
            <p className={styles.blankLine}>
              <b className={styles.rankingScoreDivergence}>
                Summary and Steps Forward: 
              </b>
            </p>
            <ol className={styles.rankingScoreDivergenceTher}>
              <li className={styles.rankingScoreDivergenceTher1}>
                <span>
                  Transparency: ESG raters must publish criteria and weightings
                  so investors can make better-informed decisions.
                </span>
              </li>
            </ol>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <ol className={styles.rankingScoreDivergenceTher}>
              <li className={styles.rankingScoreDivergenceTher1}>
                <span>
                  Regulation: Regulators must interfere and promote uniform ESG
                  disclosure, ensuring accuracy and legitimacy of rankings and
                  data. This would allow investors to easily differentiate
                  between companies that make positive or negative contributions
                  to society.
                </span>
              </li>
            </ol>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <ol className={styles.rankingScoreDivergenceTher}>
              <li className={styles.rankingScoreDivergenceTher1}>
                <span>
                  Europe vs. U.S: Europe has mandatory ESG reporting (CSRD),
                  while the U.S. has proposed voluntary rules. The European
                  political climate is much more forward looking and favorable
                  for sustainable companies, while the U.S. has polarized
                  politics.
                </span>
              </li>
            </ol>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <p className={styles.rankingScoreDivergenceVideo}>
              <span>{`Ranking Score Divergence Video: `}</span>
              <a
                className={styles.httpswwwyoutubecomwatch}
                href="https://www.youtube.com/watch?v=HMTqXKKoRrk"
                target="_blank"
              >
                <span>
                  <span className={styles.httpswwwyoutubecomwatch1}>
                    https://www.youtube.com/watch?v=HMTqXKKoRrk
                  </span>
                </span>
              </a>
            </p>
          </h2>
        </section>
      </main>
    </div>
  );
};

export default Issues;
