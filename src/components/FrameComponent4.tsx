import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.galleryImagesParent}>
        <div className={styles.galleryImages}>
          <img
            className={styles.image30Icon}
            loading="lazy"
            alt=""
            src="/image-30@2x.png"
          />
        </div>
        <div className={styles.image31Wrapper}>
          <img
            className={styles.image30Icon}
            loading="lazy"
            alt=""
            src="/image-31@2x.png"
          />
        </div>
        <img
          className={styles.image33Icon}
          loading="lazy"
          alt=""
          src="/image-33@2x.png"
        />
        <img
          className={styles.image33Icon}
          loading="lazy"
          alt=""
          src="/image-32@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
