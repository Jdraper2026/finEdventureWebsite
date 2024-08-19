import PropTypes from "prop-types";
import styles from "./ImageDownload.module.css";

const ImageDownload = ({ className = "" }) => {
  return (
    <div className={[styles.imageDownload, className].join(" ")}>
      <div className={styles.imageComponents}>
        <img
          className={styles.removebgPreview1Icon}
          loading="lazy"
          alt=""
          src="/file-2-2@2x.png"
        />
      </div>
      <div className={styles.imageComponents1}>
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
      <div className={styles.imageComponents}>
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

ImageDownload.propTypes = {
  className: PropTypes.string,
};

export default ImageDownload;
