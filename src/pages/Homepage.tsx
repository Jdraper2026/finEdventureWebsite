import { FunctionComponent } from "react";
import MemojiVariant1 from "../components/MemojiVariant1";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-3135@2x.png"
        />
        <img
          className={styles.image5Icon}
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className={styles.image8Icon}
          loading="lazy"
          alt=""
          src="/image-8@2x.png"
        />
        <img
          className={styles.image9Icon}
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.rectangleDiv} />
            </div>
          </div>
          <img
            className={styles.image13Icon}
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.ellipseDiv} />
          <img
            className={styles.rectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle-3173.svg"
          />
        </div>
        <img
          className={styles.image54Icon}
          loading="lazy"
          alt=""
          src="/image-54@2x.png"
        />
      </section>
      <section className={styles.homepageChild} />
      <section className={styles.homepageItem} />
      <section className={styles.homepageInner}>
        <header className={styles.finedventureParent}>
          <h2 className={styles.finedventure}><a href="" style={{all:'inherit'}}>FinEdVenture</a></h2>
          <div className={styles.frameContainer}>
            <div className={styles.menuOptionsParent}>
              <button className={styles.menuOptions}>
                <a className={styles.ourTeam} href="ourTeam">Our Team</a>
              </button>
              <button className={styles.menuOptions1}>
                <div className={styles.financialLiteracy}>
                <a href="FinancialLiteracy" style={{all:'inherit'}}>Financial Literacy</a>
                  
                </div>
              </button>
              <div className={styles.competitionsLink}>
                <button className={styles.buttonContainer}>
                  <div className={styles.businessCompetitons}>
                    {" "}
                    Business Competitons
                  </div>
                </button>
              </div>
              <div className={styles.menuOptions2}>
                <a className={styles.investments}>Investments</a>
              </div>
              <div className={styles.profileLink}>
                <div className={styles.profileButton}>
                  <div className={styles.profileBackground} />
                  <div className={styles.profil}>
                    <MemojiVariant1
                      propPosition="relative"
                      propTop="unset"
                      propLeft="unset"
                    />
                    <div className={styles.loginContainer}>
                      <div className={styles.loginWrapper}>
                        <a className={styles.login}> Login</a>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.file27}
                    loading="lazy"
                    alt=""
                    src="/file-2-7@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <div className={styles.sloganContainerWrapper}>
        <div className={styles.sloganContainer}>
          <h1 className={styles.yourFinancialDevelopmentContainer}>
            <p
              className={styles.yourFinancialDevelopment}
            >{`Your Financial Development `}</p>
            <p className={styles.yourFinancialDevelopment}>Platform</p>
          </h1>
          <div className={styles.supportingText}>
            <p className={styles.elevateYourFinancialLiterac}>
              <span>
                <i className={styles.elevate}>Elevate</i>
                <i> your Financial literacy.</i>
              </span>
            </p>
            <p className={styles.elevateYourFinancialLiterac}>
              <span>
                <i>{`Fully `}</i>
                <i className={styles.elevate}>Compete</i>
                <i className={styles.inBusinessCompetitions}>
                  {" "}
                  in Business Competitions.
                </i>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.blankLine1}>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.moneyTalksWeTeach}>
              <span className={styles.blankLine1}>
                <span>Money Talks, We Teach.</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.profil1}>
        <div className={styles.loginFrame}>
          <b className={styles.login1}> Login</b>
        </div>
        <MemojiVariant1 />
      </div>
      <section className={styles.testimonialsContentWrapper}>
        <div className={styles.testimonialsContent}>
          <div className={styles.testimonialContainer}>
            <div className={styles.supportingText1}>Used by Students From</div>
          </div>
          <div className={styles.firstTestimonialParent}>
            <div className={styles.firstTestimonial}>
              <div className={styles.firstNameParent}>
                <div className={styles.firstName}>
                  <b className={styles.phillips}>Phillip’s</b>
                </div>
                <div className={styles.image2Parent}>
                  <img
                    className={styles.image2Icon}
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className={styles.firstSchoolName}>
                    <h1 className={styles.exeter}>Exeter</h1>
                  </div>
                </div>
              </div>
              <div className={styles.secondTestimonial}>
                <div className={styles.secondPerson}>
                  <img
                    className={styles.image6Icon}
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <div className={styles.secondSchoolName}>
                    <div className={styles.supportingText2}>
                      Business Competitions
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thirdTestimonial}>
              <div className={styles.thirdTestimonialInner}>
                <div className={styles.image7Parent}>
                  <img
                    className={styles.image7Icon}
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                  <div className={styles.thirdSchoolName}>
                    <b className={styles.theBronxHigh}>
                      The Bronx High School of Science
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.callToActionContentWrapper}>
            <div className={styles.callToActionContent}>
              <div className={styles.buttonRow}>
                <div className={styles.buttonColumn}>
                  <div className={styles.supportingText3}>
                    <p className={styles.elevateYourFinancialLiterac}>
                      <span
                        className={styles.prepareWithThe}
                      >{`Prepare with the `}</span>
                      <span className={styles.topAwardWinners}>
                        Top Award Winners
                      </span>
                      <span> in each Business Competition</span>
                    </p>
                    <p className={styles.blankLine2}>&nbsp;</p>
                  </div>
                </div>
                <div className={styles.buttonOptions}>
                  <div className={styles.buttons}>
                    <div className={styles.buttonDetails}>
                      <img
                        className={styles.image3Icon}
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                      <div className={styles.buttonLabels}>
                        <i className={styles.supportingText4}>
                          YIS Global Stock Pitch Competition
                        </i>
                      </div>
                      <div className={styles.secondButtonAction}>
                        <button className={styles.comingSoonWrapper}>
                          <div className={styles.comingSoon}>Coming Soon</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttons1}>
                    <div className={styles.frameGroup}>
                      <div className={styles.image1Wrapper}>
                        <img
                          className={styles.image1Icon}
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                      <div className={styles.supportingTextParent}>
                        <i className={styles.supportingText5}>
                          Worldwide Global Investment Competition
                        </i>
                        <div className={styles.secondButtonAction}>
                          <button className={styles.getStartedWrapper}>
                            <div className={styles.getStarted}>Get Started</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttons2}>
                    <div className={styles.image2Wrapper}>
                      <img
                        className={styles.image2Icon1}
                        loading="lazy"
                        alt=""
                        src="/image-2-1@2x.png"
                      />
                    </div>
                    <div className={styles.thirdButtonDetails}>
                      <i className={styles.supportingText5}>
                        <p
                          className={styles.yourFinancialDevelopment}
                        >{`DECA Business `}</p>
                        <p className={styles.yourFinancialDevelopment}>
                          Competition
                        </p>
                      </i>
                      <div className={styles.thirdButtonAction}>
                        <button className={styles.comingSoonWrapper}>
                          <div className={styles.comingSoon}>Coming Soon</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footerDescription}>
                <div className={styles.supportingText7}>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>
                        We brought the Global Champions and Finalists in each
                        respective competition and curated complete, in-depth
                        business competition courses to ensure that you will be
                        prepared with all the information to succeed.
                      </span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.blankLine8}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.yourFinancialDevelopment}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.copyright}>
                <div className={styles.supportingText8}>
                  Prepare to Compete, not Participate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.vectorGroup}>
        <img
          className={styles.ellipseIcon}
          loading="lazy"
          alt=""
          src="/ellipse-30.svg"
        />
        <img className={styles.frameChild1} alt="" src="/ellipse-31.svg" />
        <img
          className={styles.image10Icon}
          loading="lazy"
          alt=""
          src="/image-10@2x.png"
        />
        <img
          className={styles.image12Icon}
          loading="lazy"
          alt=""
          src="/image-12@2x.png"
        />
        <img
          className={styles.image11Icon}
          loading="lazy"
          alt=""
          src="/image-11@2x.png"
        />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
      </section>
      <section className={styles.masteryContentWrapper}>
        <div className={styles.masteryContent}>
          <div className={styles.thirdTestimonialInner}>
            <div className={styles.group1}>
              <div className={styles.group1}>
                <h2 className={styles.comprehensiveFinancialMasterContainer}>
                  <span>{`Comprehensive `}</span>
                  <span className={styles.financialMastery}>
                    Financial Mastery
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.supportingText9}>
            <p className={styles.yourFinancialDevelopment}>
              <span
                className={styles.ourCurriculumIs}
              >{`Our curriculum is formatted in a `}</span>
              <b className={styles.ourCurriculumIs}>multi-leveled structure</b>
              <span>{`, a beginner and advanced program. `}</span>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.groupWrapper}>
        <div className={styles.group3}>
          <div className={styles.recognitionIcon} />
          <div className={styles.group4}>
            <h1 className={styles.globalRecognitions}>
              <span className={styles.blankLine1}>Global</span>
              <span className={styles.financialMastery}> Recognitions</span>
            </h1>
          </div>
        </div>
      </section>
      <section className={styles.impactContentWrapper}>
        <div className={styles.impactContent}>
          <div className={styles.group5}>
            <div className={styles.group6}>
              <h1 className={styles.weveBeenHard}>{`We’ve been hard `}</h1>
            </div>
            <div className={styles.group7}>
              <h1 className={styles.atWork}>at work</h1>
            </div>
          </div>
          <div className={styles.representativesContentWrapper}>
            <div className={styles.representativesContent}>
              <div className={styles.representativesData}>
                <div className={styles.group8}>
                  <div className={styles.representativesCount}>40+</div>
                </div>
                <div className={styles.group9}>
                  <div className={styles.group1}>
                    <div className={styles.group1}>
                      <b className={styles.representatives}>
                        <p className={styles.yourFinancialDevelopment}>
                          Representatives
                        </p>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.countriesContentParent}>
                <div className={styles.countriesContent}>
                  <div className={styles.group12}>
                    <div className={styles.representativesCount}>15+</div>
                  </div>
                </div>
                <div className={styles.group13}>
                  <div className={styles.group1}>
                    <div className={styles.group1}>
                      <b className={styles.countriesRepresented}>
                        Countries Represented
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.studentsContentWrapper}>
        <div className={styles.studentsContent}>
          <div className={styles.group16}>
            <div className={styles.studentsCount}>4500+</div>
          </div>
          <div className={styles.group17}>
            <div className={styles.group1}>
              <div className={styles.group1}>
                <b className={styles.countriesRepresented}>Students Reached</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.frameDiv} />
    </div>
  );
};

export default Homepage;
