import { FunctionComponent } from "react";
import styles from "./SupportingContent.module.css";

export type SupportingContentType = {
  className?: string;
};

const SupportingContent: FunctionComponent<SupportingContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.supportingContent, className].join(" ")}>
      <div className={styles.supportingTextParent}>
        <h1 className={styles.supportingText}>Benefits of ESG Investing</h1>
        <h2 className={styles.supportingText1}>
          <p className={styles.esgInvestingIs}>
            ESG Investing is not just a moral pursuit, there is value for
            individual investors and large corporations when investing in
            sustainable companies. 
          </p>
        </h2>
      </div>
      <div className={styles.supportingTextGroup}>
        <h2 className={styles.supportingText2}>
          <p className={styles.esgInvestingIs}>
            Why ESG Investing is Beneficial:
          </p>
        </h2>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.supportingText3}>
              <ul className={styles.performanceManyEsgFundsHa}>
                <li className={styles.performanceManyEsg}>
                  Performance: Many ESG funds have outperformed their
                  traditional non-ESG counterparts, especially during economic
                  downturns: highly ranked ESG firms gained 3% more compared to
                  conventional stocks. 
                </li>
              </ul>
              <p className={styles.esgInvestingIs}>&nbsp;</p>
              <ul className={styles.performanceManyEsgFundsHa}>
                <li className={styles.performanceManyEsg}>
                  Sustainable Funds: From 2019 to 2020, ESG assets under
                  management nearly doubled, and ever since fund allocation has
                  been steadily increasing. From 2007-2015, if one had invested
                  in high scoring ESG firms rather than average ranking ESG
                  firms, they would have avoided 90% of bankruptcies in the
                  group. 
                </li>
              </ul>
              <p className={styles.esgInvestingIs}>&nbsp;</p>
              <ul className={styles.performanceManyEsgFundsHa}>
                <li className={styles.performanceManyEsg}>
                  Short-Term Protections: ESG firms are more resilient during
                  stock market recessions. 
                </li>
              </ul>
              <p className={styles.esgInvestingIs}>&nbsp;</p>
              <ul className={styles.performanceManyEsgFundsHa}>
                <li className={styles.performanceManyEsg}>
                  Long-Term Protections: Better relations with local
                  governments, entities, and higher employee retention rates.
                  Firms are more likely to be selected for government projects,
                  and have fewer hiccups in operations including worker strikes,
                  government project shut downs.
                </li>
              </ul>
              <p className={styles.esgInvestingIs}>&nbsp;</p>
              <ul className={styles.performanceManyEsgFundsHa}>
                <li>
                  Long-Term Value: Higher employee attraction and retention
                  rates and greater customer, business partner, and regulatory
                  loyalty. From a shareholder perspective, firms with lower ESG
                  rankings and a high carbon footprint will see divestment and
                  government penalties, lowering their stock value. However,
                  eco-friendly firms will see more renewable opportunities such
                  as government subsidies and a surge of investors, and the
                  investors may experience tax deductions along with high stock
                  returns.
                </li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.navigationContent}>
          <div
            className={styles.goToIssues}
          >{`Go to Issues of ESG Ranking `}</div>
        </button>
      </div>
    </section>
  );
};

export default SupportingContent;
