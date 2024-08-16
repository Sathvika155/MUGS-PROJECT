import type { NextPage } from "next";
import { useCallback } from "react";
import Btn from "../components/btn";
import SkillCategories from "../components/skill-categories";
import ProjectType from "../components/project-type";
import GroupComponent from "../components/group-component";
import GroupComponent1 from "../components/group-component1";
import GroupComponent2 from "../components/group-component2";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  const onMenuButtonsContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSAFARIContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuButtonsContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='servicesText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTanzaniaLandOfSafarisNaturClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='myProjectsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='testimonialsText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='loremIpsumDolor4']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.desktop2}>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <section className={styles.desktop2Inner}>
        <div className={styles.frameParent}>
          <header className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  loading="lazy"
                  alt=""
                  src="/subtract.svg"
                />
                <div className={styles.mumairWrapper}>
                  <a className={styles.mumair}>
                    <span>
                      <b>M</b>
                    </span>
                    <span>
                      <span>umair</span>
                      <span className={styles.span}>{` `}</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.menuButtonsParent}>
                  <div
                    className={styles.menuButtons}
                    onClick={onMenuButtonsContainerClick}
                  >
                    <a className={styles.home}>Home</a>
                  </div>
                  <div
                    className={styles.safari}
                    onClick={onSAFARIContainerClick}
                  >
                    <a className={styles.aboutMe}>About Me</a>
                  </div>
                  <div
                    className={styles.button}
                    onClick={onMenuButtonsContainerClick1}
                  >
                    <a className={styles.services}>Services</a>
                  </div>
                  <div
                    className={styles.menuButtons}
                    onClick={onTanzaniaLandOfSafarisNaturClick}
                  >
                    <a className={styles.projects}>Projects</a>
                  </div>
                  <div
                    className={styles.button}
                    onClick={onButtonContainerClick}
                  >
                    <a className={styles.testimonials}>Testimonials</a>
                  </div>
                  <div className={styles.frameDiv}>
                    <div
                      className={styles.button}
                      onClick={onFrameContainerClick}
                    >
                      <a className={styles.contact}>Contact</a>
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <a className={styles.downlaodCv}>Downlaod CV</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.groupDiv} data-scroll-to="groupContainer1">
                <div className={styles.heroNameContainerWrapper}>
                  <div className={styles.heroNameContainer}>
                    <div className={styles.heroTitleContainer}>
                      <div className={styles.hiIAmWrapper}>
                        <div className={styles.hiIAmContainer}>
                          <span>Hi I am</span>
                          <span className={styles.span1}>{` `}</span>
                        </div>
                      </div>
                      <div className={styles.frameParent2}>
                        <div className={styles.muhammadUmairWrapper}>
                          <h3
                            className={styles.muhammadUmair}
                          >{`Muhammad Umair `}</h3>
                        </div>
                        <div className={styles.uiUxParent}>
                          <h1 className={styles.uiUx}>{`UI & UX`}</h1>
                          <div className={styles.designerWrapper}>
                            <h1 className={styles.designer}>
                              <span>Designer</span>
                              <span className={styles.span1}>{` `}</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.loremIpsumDolorSitAmetConWrapper}>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <div className={styles.hiIAmWrapper}>
                      <Btn />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-2@2x.png"
                  />
                  <div className={styles.serengetiTheUltimateWildlif} />
                </div>
              </div>
              <div className={styles.socialMediaIconsWrapper}>
                <div className={styles.socialMediaIcons}>
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/facebook--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/twitter--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/instagram--negative.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/linkedin--negative.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div
              className={styles.aboutHeaderParent}
              data-scroll-to="groupContainer"
            >
              <div className={styles.aboutHeader}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-7@2x.png"
                />
                <div className={styles.aboutTitleBackground} />
              </div>
              <div className={styles.aboutInfo}>
                <div className={styles.aboutDescription}>
                  <h1 className={styles.aboutMe1}>{`About Me `}</h1>
                  <div className={styles.aboutSkills}>
                    <div className={styles.aboutParagraph}>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <SkillCategories uX="UX" />
                    <div className={styles.skillCategories}>
                      <div className={styles.websiteDesign}>Website Design</div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameInner} />
                        <div className={styles.rectangleDiv} />
                        <div className={styles.secondUXSkillIcon} />
                      </div>
                    </div>
                    <div className={styles.skillCategories1}>
                      <div className={styles.websiteDesign}>
                        <span>App Design</span>
                        <span className={styles.span1}>{` `}</span>
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameInner} />
                        <div className={styles.frameChild2} />
                        <div className={styles.ellipseDiv} />
                      </div>
                    </div>
                    <SkillCategories
                      uX="Graphic Design "
                      propDisplay="unset"
                      propMinWidth="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.servicesContentWrapper}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeader}>
                <div className={styles.servicesTitle}>
                  <div className={styles.servicesWrapper}>
                    <h1
                      className={styles.services1}
                      data-scroll-to="servicesText"
                    >
                      Services
                    </h1>
                  </div>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                  </div>
                </div>
              </div>
              <div className={styles.servicesList}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.serviceCategoriesChild} />
                  <div className={styles.firstServiceCategory}>
                    <div className={styles.firstServiceIcons}>
                      <img
                        className={styles.firstServiceIconPair}
                        alt=""
                        src="/first-service-icon-pair.svg"
                      />
                      <img
                        className={styles.secondServiceIconPair}
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className={styles.thirdServiceIconPair}
                        alt=""
                        src="/vector-2.svg"
                      />
                      <img
                        className={styles.fourthServiceIconPair}
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className={styles.fifthServiceIconPair}
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className={styles.sixthServiceIcon}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className={styles.seventhServiceIcon}
                        alt=""
                        src="/vector-6.svg"
                      />
                      <img
                        className={styles.eighthServiceIcon}
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.secondServiceCategory}>
                    <h3 className={styles.uiux3}>UI/UX</h3>
                    <div className={styles.secondServiceCategoryDescri}>
                      <div className={styles.loremIpsumDolor3}>
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                        nam diam interdum
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.serviceCategories}>
                  <div className={styles.serviceCategoriesChild} />
                  <img
                    className={styles.layer1Icon}
                    loading="lazy"
                    alt=""
                    src="/layer-1.svg"
                  />
                  <h3 className={styles.webDesign}>{`Web Design `}</h3>
                  <div className={styles.thirdServiceCategory}>
                    <div className={styles.loremIpsumDolor3}>
                      Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                      nam diam interdum
                    </div>
                  </div>
                </div>
                <div className={styles.serviceCategories1}>
                  <div className={styles.serviceCategoriesChild} />
                  <div className={styles.serviceCategoriesInner}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group-18.svg"
                    />
                  </div>
                  <div className={styles.secondServiceCategory}>
                    <h3 className={styles.webDesign}>App Design</h3>
                    <div className={styles.thirdServiceCategory}>
                      <div className={styles.loremIpsumDolor3}>
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                        nam diam interdum
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.serviceCategories2}>
                  <div className={styles.serviceCategoriesChild} />
                  <div className={styles.serviceCategoriesInner1}>
                    <div className={styles.firstServiceIcons}>
                      <img
                        className={styles.firstServiceIconPair}
                        alt=""
                        src="/vector-8.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-9.svg"
                      />
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-10.svg"
                      />
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector-11.svg"
                      />
                      <img
                        className={styles.vectorIcon4}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.secondServiceCategory}>
                    <h3 className={styles.webDesign}>{`Graphic Design `}</h3>
                    <div className={styles.thirdServiceCategory}>
                      <div className={styles.loremIpsumDolor3}>
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                        nam diam interdum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectsContentParent}>
            <div className={styles.projectsContent}>
              <div className={styles.projectsHeader}>
                <div className={styles.projectsTitle}>
                  <div className={styles.projectsTitleContainerParent}>
                    <div className={styles.projectsTitleContainer}>
                      <h1
                        className={styles.myProjects}
                        data-scroll-to="myProjectsText"
                      >
                        My Projects
                      </h1>
                    </div>
                    <div className={styles.loremIpsumDolor7}>
                      Lorem ipsum dolor sit amet consectetur. Mollis erat duis
                      aliquam mauris est risus lectus. Phasellus consequat urna
                      tellus
                    </div>
                  </div>
                </div>
                <div className={styles.projectCategories}>
                  <div className={styles.viewAllWrapper}>
                    <div className={styles.viewAll}>
                      <div className={styles.all}>All</div>
                    </div>
                  </div>
                  <div className={styles.projectCategoryButtons}>
                    <div className={styles.uiux}>UI/UX</div>
                  </div>
                  <div className={styles.projectCategoryButtons1}>
                    <div className={styles.webDesign1}>Web Design</div>
                  </div>
                  <div className={styles.projectCategoryButtons2}>
                    <div className={styles.appDesign2}>App Design</div>
                  </div>
                  <div className={styles.projectCategoryButtons2}>
                    <div className={styles.appDesign2}>Graphic Design</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectTypeParent}>
              <div className={styles.projectType}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <div className={styles.webDesignCards}>
                    <img
                      className={styles.webDesignsIcon}
                      loading="lazy"
                      alt=""
                      src="/web-designs@2x.png"
                    />
                    <img
                      className={styles.webDesignsIcon1}
                      alt=""
                      src="/web-designs-1@2x.png"
                    />
                  </div>
                  <div className={styles.frameChild5} />
                </div>
                <div className={styles.landingPageType}>
                  <div className={styles.webDesign2}>{`Web Design `}</div>
                  <b
                    className={styles.aircallingLandingPage}
                  >{`AirCalling Landing Page Design `}</b>
                </div>
              </div>
              <ProjectType
                webDesigns="/web-designs-2@2x.png"
                webDesigns1="/web-designs-3@2x.png"
                businessLandingPageDesign="Business Landing Page Design "
              />
              <ProjectType
                webDesigns="/web-designs-4@2x.png"
                webDesigns1="/web-designs-5@2x.png"
                businessLandingPageDesign="Ecom Web Page Design "
                propColor="#fefefe"
              />
            </div>
          </div>
          <div className={styles.testimonialContentWrapper}>
            <div className={styles.servicesTitle}>
              <div className={styles.servicesWrapper}>
                <h1
                  className={styles.services1}
                  data-scroll-to="testimonialsText"
                >
                  Testimonials
                </h1>
              </div>
              <div className={styles.loremIpsumDolor2}>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testimonialSlider}>
        <div className={styles.testimonialCard}>
          <GroupComponent />
          <GroupComponent1 />
          <GroupComponent2 />
        </div>
        <FrameComponent />
      </section>
      <Footer />
    </div>
  );
};

export default Desktop;
