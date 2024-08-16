import type { NextPage } from "next";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.profilePictureWrapper}>
        <img
          className={styles.profilePictureIcon}
          loading="lazy"
          alt=""
          src="/ellipse-10@2x.png"
        />
      </div>
      <h3 className={styles.h3}>“</h3>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumDolorSitAmetConParent}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. In enim cursus odio
              accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices.
            </div>
            <div className={styles.closeQuoteFirst}>
              <h3 className={styles.h31}>“</h3>
            </div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Name</div>
            <div className={styles.ceo}>CEO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
