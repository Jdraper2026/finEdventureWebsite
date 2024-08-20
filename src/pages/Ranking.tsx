import { FunctionComponent } from "react";
import Download from "../components/Download";
import Content from "../components/Content";
import FrameComponent from "../components/FrameComponent";
import styles from "./Ranking.module.css";

const Ranking: FunctionComponent = () => {
  return (
    <div className={styles.ranking}>
      <div className={styles.textHere}>Text here</div>
      <div className={styles.textHere1}>Text here</div>
      <div className={styles.page}>
        <Download />
      </div>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <Content />
        <FrameComponent />
        
        <section className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/line-111.svg"
          />
          <img
            className={styles.lineIcon}
            loading="lazy"
            alt=""
            src="/line-111.svg"
          />
          <img
            className={styles.frameChild1}
            loading="lazy"
            alt=""
            src="/line-111.svg"
          />
          <img
            className={styles.image2Icon}
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default Ranking;
