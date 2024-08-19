import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./MemojiVariant2.module.css";

const MemojiVariant2 = ({ className = "", propHeight }) => {
  const memojiVariant122Style = useMemo(() => {
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

MemojiVariant2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default MemojiVariant2;
