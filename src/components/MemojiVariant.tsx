import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MemojiVariant.module.css";

export type MemojiVariantType = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const MemojiVariant: FunctionComponent<MemojiVariantType> = ({
  className = "",
  propHeight,
}) => {
  const memojiVariant12Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.memojivariant12, className].join(" ")}
      style={memojiVariant12Style}
    >
      <div className={styles.memoji} />
    </div>
  );
};

export default MemojiVariant;
