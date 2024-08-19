import ImageDownload from "../components/ImageDownload";
import SupportingContent from "../components/SupportingContent";
import styles from "./Benefits.module.css";

const Benefits = () => {
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
                    <div className={styles.introduction}>Introduction</div>
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
                    <div className={styles.rankingSystems}>Ranking Systems</div>
                  </button>
                </div>
                <div className={styles.benefitsDetails}>
                  <div className={styles.benefitsContent}>
                    <button className={styles.detailsContent}>
                      <div className={styles.benefitsOfEsgi}>
                        Benefits of ESGI
                      </div>
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
                  <div className={styles.rankingSystems}>
                    Issues of ESG Ranking
                  </div>
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
