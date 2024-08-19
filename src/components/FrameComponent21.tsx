import { FunctionComponent } from "react";
import MemojiVariant2 from "./MemojiVariant2";
import styles from "./FrameComponent21.module.css";

export type FrameComponent21Type = {
  className?: string;
};

const FrameComponent21: FunctionComponent<FrameComponent21Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <button className={styles.ourTeamWrapper}>
          <a className={styles.ourTeam}> Our Team</a>
        </button>
        <h1 className={styles.finedventure}>FinEdVenture</h1>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.financialLiteracyWrapper}>
          <div className={styles.financialLiteracy}>Financial Literacy</div>
        </button>
      </div>
      <div className={styles.frameContainer}>
        <button className={styles.businessCompetitonsWrapper}>
          <div className={styles.businessCompetitons}>
            {" "}
            Business Competitons
          </div>
        </button>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.investmentsWrapper}>
          <a className={styles.investments}>Investments</a>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.memojivariant12Parent}>
            <MemojiVariant2 />
            <img
              className={styles.file27}
              loading="lazy"
              alt=""
              src="/file-2-7@2x.png"
            />
          </div>
          <div className={styles.loginWrapper}>
            <a className={styles.login}> Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent21;
