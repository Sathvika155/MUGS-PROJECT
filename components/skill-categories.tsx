import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./skill-categories.module.css";

export type SkillCategoriesType = {
  className?: string;
  uX?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const SkillCategories: NextPage<SkillCategoriesType> = ({
  className = "",
  uX,
  propDisplay,
  propMinWidth,
}) => {
  const uXStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.skillCategories, className].join(" ")}>
      <div className={styles.ux} style={uXStyle}>
        {uX}
      </div>
      <div className={styles.uXSkillIconsWrapper}>
        <div className={styles.uXSkillIcons}>
          <div className={styles.tanzaniaTermsAndConditions} />
          <div className={styles.social} />
          <div className={styles.marketingSkillIcons} />
        </div>
      </div>
    </div>
  );
};

export default SkillCategories;
