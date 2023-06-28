import Link from "next/link";
import React from "react";
import styles from "../styles/page.module.css";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlus400 = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={`${styles.navText} ${styles.firstNav}`}>
        <span className={mPlus400.className}>トップページ</span>
      </Link>
      <Link href="/blog" className={styles.navText}>
        <span className={mPlus400.className}>ブログ</span>
      </Link>
      <Link href="/about" className={`${styles.navText} ${styles.lastNav}`}>
        <span className={mPlus400.className}>わたしついて</span>
      </Link>
    </div>
  );
};

export default Navbar;
