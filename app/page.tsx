import Image from "next/image";
import styles from "./styles/page.module.css";

import { ArrowDownIcon } from "@heroicons/react/24/solid";

import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlus400 = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className={mPlus400.className}>
        <h1 className={styles.topTitle}>bugCreatos - TechBlog</h1>
        <div className={styles.topHeroImage}>
          <Image
            src={"/topHeroImage.png"}
            layout="fill"
            objectFit="contain"
            alt="ポートフォリオとReact / Next.jsのTechBlog "
          />
        </div>
        <h2 className={styles.topSubTitle}>
          # ポートフォリオとReact / Next.jsのTechBlog #
        </h2>
        <h2 className={styles.topArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <p>現在、ポートフォリオは作成中です。</p>
        <p>
          近いうちに作り終わりたいところですが、そもそも公開できるようなポートフォリオがない...うん。
        </p>
        <h2 className={styles.topArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <p>
          ひとまず、このブログを作るまでの過程を、ブログに書き記してみたいので、のんびりとお付き合いくださいませ。
        </p>
        <p>上のグローバルナビから、ブログへどうぞ</p>
      </div>
    </main>
  );
}
