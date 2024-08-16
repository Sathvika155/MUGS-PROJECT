import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./project-type.module.css";

export type ProjectTypeType = {
  className?: string;
  webDesigns?: string;
  webDesigns1?: string;
  businessLandingPageDesign?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const ProjectType: NextPage<ProjectTypeType> = ({
  className = "",
  webDesigns,
  webDesigns1,
  businessLandingPageDesign,
  propColor,
}) => {
  const businessLandingPageStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.projectType, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.webDesignsParent}>
          <img className={styles.webDesignsIcon} alt="" src={webDesigns} />
          <img className={styles.webDesignsIcon1} alt="" src={webDesigns1} />
        </div>
      </div>
      <div className={styles.webDesignParent}>
        <div className={styles.webDesign}>{`Web Design `}</div>
        <b
          className={styles.businessLandingPage}
          style={businessLandingPageStyle}
        >
          {businessLandingPageDesign}
        </b>
      </div>
    </div>
  );
};

export default ProjectType;
