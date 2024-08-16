import type { NextPage } from "next";
import styles from "./btn.module.css";

export type BtnType = {
  className?: string;
};

const Btn: NextPage<BtnType> = ({ className = "" }) => {
  return (
    <div className={[styles.btn, className].join(" ")}>
      <div className={styles.hireMeButtonBackground} />
      <div className={styles.hireMe}>{`Hire Me `}</div>
    </div>
  );
};

export default Btn;
