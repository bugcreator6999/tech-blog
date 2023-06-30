import React from "react";
import styles from "../styles/page.module.css";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlus400 = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const aboutPage = () => {
  return (
    <div className={styles.aboutMain}>
      {/* <div className="flex min-h-screen flex-col items-center p-24"> */}
      <div
        className={`flex min-h-screen flex-col items-center p-24 ${styles.aboutMain}`}
      >
        <h1 className={styles.aboutTitle}>
          <span className={mPlus400.className}>わたしについて</span>
        </h1>
        <h2 className={styles.aboutArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <div className={mPlus400.className}>
          <div className={styles.aboutPara}>
            <h3>初めての就職</h3>
            <p>
              もともとは、卒業後すぐにIT企業に就職はしたのですが、その会社がまぁまぁひどかったのです。
            </p>
            <p>
              どうひどかったのかと言えば、Windowsはもちろん、Officeも正規版を買っていなくて、コピーディスクを使ってインストールするような会社でした。
            </p>
            <p>もちろん、プロダクトキーはオール1で抜けてました。</p>
            <p>
              そこでは、社員全員が外に出向というか、派遣されている会社でした。あ、偽装派遣ですね。
            </p>
            <p>そんなこともあり、早々と最初の会社は辞めてしまいました。</p>
          </div>
        </div>
        <h2 className={styles.aboutArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <div className={mPlus400.className}>
          <div className={styles.aboutPara}>
            <h3>初めての転職</h3>
            <p>その後、また別のIT企業だったのですが、前よりはマシでした。</p>
            <p>
              とはいえ、SES事業だけで育っていた企業で、それなのに本社は都内の一等地に構えていました。
            </p>
            <p>
              その会社は、リーマンショックで業績が大きく傾き、リストラに遭いました。
            </p>
            <p>
              この会社では、前の会社から続いてPowerBuilderという言語を使っていました。
            </p>
            <p>
              この言語、簡単なCRUDであれば、SQL文を書かずともWindowsアプリが作れてしまうという、そんな便利な言語です。
            </p>
          </div>
        </div>
        <h2 className={styles.aboutArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <div className={mPlus400.className}>
          <div className={styles.aboutPara}>
            <h3>さらに別のIT企業へ</h3>
            <p>この会社では、なぜかExcelVBAばかりいじっていました。</p>
            <p>某証券会社のツール、某信託銀行のツール、などなど。</p>
            <p>本当にいろいろなツールをExcelVBAで作りました。</p>
            <p>
              ここでも、同じように派遣(という名の業務委託)で外にいたのですが、そのときの現場の会社に人に引き抜かれました。
            </p>
          </div>
        </div>
        <h2 className={styles.aboutArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <div className={mPlus400.className}>
          <div className={styles.aboutPara}>
            <h3>引き抜きってあるんですね</h3>
            <p>ここで初めてWebサイト作りをし始めました。</p>
            <p>
              言語はPHPだったのですが、いろいろと思い出があったりなかったり。
            </p>
            <p>
              特に、某学校法人のサイトを作ってるときは、本当にデスマーチでした。
            </p>
            <p>
              あまりにデスマだったので、自宅作業をしていたのですが、気づいたら月間の勤務時間が300時間とかになってました。
            </p>
            <p>そんなんで、疲れちゃったり救われなかったり。</p>
            <p>
              あげく、その会社から派遣で出た先で、PMを押しつけられて、お客さんにどやされたりしてました。泣きそう。
            </p>
          </div>
        </div>
        <h2 className={styles.aboutArrow}>
          <ArrowDownIcon className="w-12 h-12 m-10 p-0" />
        </h2>
        <div className={mPlus400.className}>
          <div className={styles.aboutPara}>
            <p>
              そんなこともあり、一時的にIT業から離れて別の仕事をしていました。
            </p>
            <p>
              のですが、学生時代の友人が有限会社を立ち上げると言うことで、そのサイトを作成しました。
            </p>
            <p>また、その会社が行うECサイトも作ったりしました。</p>
            <p>ここで、またIT業界に出戻りとなりました。</p>
            <p>
              じゃぁ、ということで、今までやったことのない技術も身につけちゃえ、と思って、このサイトとブログを作成しています。
            </p>
            <p>
              ReactもNext.jsも、なんならJavaScriptもちゃんと扱ったことがなかったので、ほぼゼロからのスタートだったのですが、この言語楽しいですね♪
            </p>
            <p>そんなこんなで、日々楽しく学んでいる最中です。</p>
            <p>
              あ、このサイトはgoogle検索だけで作成しているので、コード的にはあちこちにアンチパターンがありそうです。
            </p>
            <p>
              そして、コード自体はgithubで公開していますので、参考にどうぞ。あくまで参考ですよ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
