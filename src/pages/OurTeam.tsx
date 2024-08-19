import MemojiVariant from "../components/MemojiVariant";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import Reached from "../components/Reached";
import Progress from "../components/Progress";
import styles from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.profil}>
        <div className={styles.loginWrapper}>
          <b className={styles.login}> Login</b>
        </div>
        <MemojiVariant propHeight="3rem" />
      </div>
      <main className={styles.frameParent}>
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <FrameComponent2 />
          <FrameComponent3 />
        </section>
        <section className={styles.frameGroup}>
          <FrameComponent1 />
          <FrameComponent4 />
        </section>
        <Reached />
      </main>
      <div className={styles.vectorParent}>
        <img className={styles.frameItem} alt="" />
        <img className={styles.frameInner} alt="" />
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      </div>
      <div className={styles.teamIntro}>
        <div className={styles.teamPhotosParent}>
          <div className={styles.teamPhotos}>
            <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          </div>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <div className={styles.image10Wrapper}>
            <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
          </div>
        </div>
      </div>
      <Progress />
    </div>
  );
};

export default OurTeam;
