import PropTypes from "prop-types";
import styles from "./FrameComponent12.module.css";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.supportingTextWrapper}>
          <div className={styles.supportingText}>
            <ul className={styles.esgInvestingEsgInvestingI}>
              <li className={styles.esgInvestingEsg}>
                ESG Investing: ESG investing is the pursuit of businesses that
                make meaningful and positive contributions to the world through
                their actions. ESG investing aims to stay away from companies
                that are NOT environmentally, socially, or managerially
                sustainable in some way, and divesting from them. 
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.esgInvestingEsgInvestingI}>
              <li>
                Why ESG Investing Is Important: ESG Investing combines financial
                opportunities with positive world impact, addressing global
                issues like climate change and social injustice. There are
                investment opportunities everywhere, but the path to a better
                society and environment includes not only investing in firms
                that will make money, but also firms with positive contributions
                to the world.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.supportingText1}>History of ESG</div>
          </div>
          <div className={styles.supportingText2}>
            <ul className={styles.esgInvestingEsgInvestingI}>
              <li className={styles.esgInvestingEsg}>
                Origins: Initially, ESG investors wanted to avoid participation
                in “sin industries/activities”, these include investments in
                weapons, gambling, pornography, firms that undermine social
                justice in any way.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.esgInvestingEsgInvestingI}>
              <li className={styles.esgInvestingEsg}>
                Modern Applications: Today, the goals of ESG investing have
                shifted. The meaning of ESG investing has been applied more to
                impacts on the environment. Now, firms must still avoid “sin
                industries”, but also must have eco-friendly business models and
                contribute to the mitigation of climate change.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              {`ESG Investing Overview Video: `}
              <a
                className={styles.httpswwwyoutubecomwatch}
                href="https://www.youtube.com/watch?v=Cw1kDk_vS60"
                target="_blank"
              >
                <span className={styles.httpswwwyoutubecomwatch1}>
                  https://www.youtube.com/watch?v=Cw1kDk_vS60
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.goToTheEsgRankingSystemsWrapper}>
          <div className={styles.goToThe}>Go to the ESG Ranking Systems</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
