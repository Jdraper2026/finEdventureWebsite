import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent12 from "../components/FrameComponent12";
import styles from "./Intro.module.css";

const Intro: FunctionComponent = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.textHere}>Text here</div>
      <div className={styles.textHere1}>Text here</div>
      <div className={styles.introInner}>
        <div className={styles.frameParent}>
          <div> to home placeholder</div>
          <div className={styles.file22Wrapper}>
            <img
              className={styles.removebgPreview1Icon}
              loading="lazy"
              alt=""
              src="/file-2-2@2x.png"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.download7RemovebgPreviewWrapper}>
              <img
                className={styles.download7RemovebgPreviewIcon}
                loading="lazy"
                alt=""
                src="/download--7-removebgpreview-2@2x.png"
              />
            </div>
            <div className={styles.downloadRemovebgPreview2Wrapper}>
              <img
                className={styles.downloadRemovebgPreview2}
                loading="lazy"
                alt=""
                src="/downloadremovebgpreview-2-1@2x.png"
              />
            </div>
            <div className={styles.file22Wrapper}>
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
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/line-111.svg"
        />
        <FrameComponent5 />
        <FrameComponent12 />
      </main>
    </div>
  );
};

export default Intro;
