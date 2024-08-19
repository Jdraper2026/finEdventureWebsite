import { FunctionComponent } from "react";
import MemojiVariant from "./MemojiVariant";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.finedventureParent, className].join(" ")}>
      <h2 className={styles.finedventure}>FinEdVenture</h2>
      <div className={styles.finLiteracyContainerWrapper}>
        <div className={styles.finLiteracyContainer}>
          <button className={styles.teamLiteracyInvestments}>
            <a className={styles.ourTeam}> Our Team</a>
          </button>
          <button className={styles.teamLiteracyInvestments1}>
            <div className={styles.financialLiteracy}>Financial Literacy</div>
          </button>
          <div className={styles.finLiteracyContainerInner}>
            <button className={styles.businessCompetitonsWrapper}>
              <div className={styles.businessCompetitons}>
                {" "}
                Business Competitons
              </div>
            </button>
          </div>
          <div className={styles.teamLiteracyInvestments2}>
            <a className={styles.investments}>Investments</a>
          </div>
          <div className={styles.finLiteracyContainerChild}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.memojivariant12Parent}>
                <MemojiVariant />
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
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
