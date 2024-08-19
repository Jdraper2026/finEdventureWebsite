import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MemojiVariant1.module.css";

export type MemojiVariant1Type = {
  className?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const MemojiVariant1: FunctionComponent<MemojiVariant1Type> = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
}) => {
  const memojiVariant121Style: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div
      className={[styles.memojivariant12, className].join(" ")}
      style={memojiVariant121Style}
    >
      <div className={styles.memoji} />
    </div>
  );
};

export default MemojiVariant1;
