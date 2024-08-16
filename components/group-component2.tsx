import type { NextPage } from "next";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/ellipse-11@2x.png"
      />
      <div className={styles.name}>Name</div>
      <div className={styles.parent}>
        <h3 className={styles.h3}>“</h3>
        <div className={styles.thirdPart}>
          <div className={styles.testimonialContentLast}>
            <div className={styles.loremIpsumDolorSitAmetConParent}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
              </div>
              <div className={styles.closeQuoteSecond}>
                <h3 className={styles.h31}>“</h3>
              </div>
            </div>
            <div className={styles.ceo}>CEO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
