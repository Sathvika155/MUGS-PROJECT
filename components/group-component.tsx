import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.authorImage} />
      <div className={styles.testimonialQuote}>
        <h3 className={styles.h3}>“</h3>
        <div className={styles.authorName}>
          <div className={styles.authorDetails}>
            <div className={styles.name}>Name</div>
            <div className={styles.ceo}>CEO</div>
          </div>
        </div>
      </div>
      <div className={styles.firstPartWrapper}>
        <div className={styles.firstPart}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. In enim cursus odio
            accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.
            Augue dictum dolor elementum convallis dignissim malesuada commodo
            ultrices.
          </div>
          <div className={styles.secondPart}>
            <h3 className={styles.h31}>“</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
