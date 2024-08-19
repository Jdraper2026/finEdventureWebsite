import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./MemojiVariant.module.css";

const MemojiVariant = ({ className = "", propHeight }) => {
  const memojiVariant12Style = useMemo(() => {
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

MemojiVariant.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default MemojiVariant;
