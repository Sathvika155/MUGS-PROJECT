import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.designContentWrapper, className].join(" ")}>
      <div className={styles.designContent}>
        <div className={styles.designHeader}>
          <div className={styles.designBackgroundShape}>
            <div className={styles.designShape} />
            <div className={styles.designShape1} />
            <div className={styles.designShape} />
            <div className={styles.designShape} />
          </div>
        </div>
        <div className={styles.designDescription}>
          <div className={styles.designTitle}>
            <h1 className={styles.letsDesignTogether}>Lets Design Together</h1>
          </div>
          <div
            className={styles.loremIpsumDolor}
            data-scroll-to="loremIpsumDolor4"
          >
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formContent}>
            <div className={styles.formFields}>
              <div className={styles.formFieldsChild} />
              <div className={styles.enterYourEmail}>Enter Your Email</div>
            </div>
            <div className={styles.formFields1}>
              <div className={styles.formFieldsItem} />
              <div className={styles.contactMe}>{`Contact Me `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
