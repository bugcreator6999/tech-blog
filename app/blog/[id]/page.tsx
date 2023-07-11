import { getBlogDetail, getBlogs } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { format } from "date-fns";
import styles from "../../styles/page.module.css";
import Link from "next/link";
import "../../styles/code.css";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlus400 = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// for SSG
export async function generateStaticParams() {
  const contents = await getBlogs();

  const id = contents.map((content) => {
    return {
      id: content.id,
    };
  });
  return [...id];
  // return contents.map((content) => ({
  //   id: content.id,
  // }));

  // return contents.map(({ id }) => ({
  //   id,
  // }));
}

export default async function BlogDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogDetail: BlogPostType = await getBlogDetail(id);
  return (
    <>
      <div className={mPlus400.className}>
        <div className={styles.detailArea}>
          <div className={styles.detailTitle}>
            <h1>{blogDetail.title}</h1>
          </div>
          <div className={styles.detailDate}>
            <p>{format(new Date(blogDetail.createdAt), "yyyy年MM月dd日")}</p>
          </div>
          <div className={styles.detailImage}>
            <Image
              src={blogDetail.eyecatch?.url || "/no-image.png"}
              //   width={320}
              //   height={200}
              layout="fill"
              objectFit="contain"
              alt={blogDetail.title}
            />
          </div>
          <div className={styles.detailText}>{parse(blogDetail.content)}</div>
          <div>
            <Link href="/blog" className={styles.detailBack}>
              <ArrowUturnLeftIcon className="w-5 h-4 m-0 p-0" />
              <span>戻る</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
