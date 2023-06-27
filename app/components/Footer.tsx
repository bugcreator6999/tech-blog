import React from "react";
import styles from "../styles/page.module.css";
import { Montserrat_Alternates } from "next/font/google";

const gFont = Montserrat_Alternates({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={gFont.className}>
        (c) bugcreatos-tech / bugcreatos6999
      </span>
    </div>
  );
};

export default Footer;
