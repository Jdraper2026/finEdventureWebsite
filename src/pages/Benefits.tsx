import { FunctionComponent } from "react";
import ImageDownload from "../components/ImageDownload";
import SupportingContent from "../components/SupportingContent";
import styles from "./Benefits.module.css";

const Benefits: FunctionComponent = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.textHere}>Text here</div>
      <div className={styles.textHere1}>Text here</div>
      <div className={styles.imageDownloadWrapper}>
        <ImageDownload />
      </div>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/line-111.svg"
        />
        <section className={styles.benefitsTitleWrapper}>
          <div className={styles.benefitsTitle}>
            <h1 className={styles.benefitsOfEsg}>Benefits of ESG Investing</h1>
            <div className={styles.benefitsTitleInner}>
              <div className={styles.frameParent}>
                <div className={styles.headerItemsParent}>
                  <div className={styles.headerItems}>
                    <a className={styles.introduction} href="intro" style={{color:"inherit", textDecoration:"none"}}>Introduction</a>
                  </div>
                  <div className={styles.headerDivider}>
                    <img
                      className={styles.headerDividerChild}
                      loading="lazy"
                      alt=""
                      src="/line-111.svg"
                    />
                  </div>
                  <button className={styles.headerItems1}>
                    <a className={styles.rankingSystems} href="ranking" style={{textDecoration:"none"}}>Ranking Systems</a>
                  </button>
                </div>
                <div className={styles.benefitsDetails}>
                  <div className={styles.benefitsContent}>
                    <button className={styles.detailsContent}>
                      <a className={styles.benefitsOfEsgi} href="benefits" style={{textDecoration:"none"}}>
                        Benefits of ESGI
                      </a>
                    </button>
                    <div className={styles.contentSeparator}>
                      <img
                        className={styles.contentSeparatorChild}
                        loading="lazy"
                        alt=""
                        src="/line-111.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.issuesOfEsgRankingWrapper}>
                  <a className={styles.rankingSystems} href="issues" style={{textDecoration:"none"}}>
                    Issues of ESG Ranking
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <SupportingContent />
      </main>
    </div>
  );
};

export default Benefits;
