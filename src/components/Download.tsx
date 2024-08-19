import PropTypes from "prop-types";
import styles from "./Download.module.css";

const Download = ({ className = "" }) => {
  return (
    <div className={[styles.download, className].join(" ")}>
      <div className={styles.file22Wrapper}>
        <img
          className={styles.removebgPreview1Icon}
          loading="lazy"
          alt=""
          src="/file-2-2@2x.png"
        />
      </div>
      <div className={styles.download7RemovebgPreviewWrapper}>
        <img
          className={styles.download7RemovebgPreviewIcon}
          loading="lazy"
          alt=""
          src="/download--7-removebgpreview-2@2x.png"
        />
      </div>
      <img
        className={styles.downloadRemovebgPreview2}
        loading="lazy"
        alt=""
        src="/downloadremovebgpreview-2-1@2x.png"
      />
      <div className={styles.removebgPreview1Wrapper}>
        <img
          className={styles.removebgPreview1Icon}
          loading="lazy"
          alt=""
          src="/5058305removebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

Download.propTypes = {
  className: PropTypes.string,
};

export default Download;
