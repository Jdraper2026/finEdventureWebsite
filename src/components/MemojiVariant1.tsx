import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./MemojiVariant1.module.css";

const MemojiVariant1 = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
}) => {
  const memojiVariant121Style = useMemo(() => {
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

MemojiVariant1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default MemojiVariant1;
