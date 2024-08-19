import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MemojiVariant2.module.css";

export type MemojiVariant2Type = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const MemojiVariant2: FunctionComponent<MemojiVariant2Type> = ({
  className = "",
  propHeight,
}) => {
  const memojiVariant122Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.memojivariant12, className].join(" ")}
      style={memojiVariant122Style}
    >
      <div className={styles.memoji} />
    </div>
  );
};

export default MemojiVariant2;
