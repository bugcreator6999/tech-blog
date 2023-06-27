import { getBlogDetail } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { format } from "date-fns";
import styles from "../../styles/page.module.css";
import Link from "next/link";

export default async function BlogDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogDetail: BlogPostType = await getBlogDetail(id);
  return (
    <>
      <div className="title">
        <h1>{blogDetail.title}</h1>
      </div>
      <div className="createdate">
        <p>{format(new Date(blogDetail.createdAt), "yyyy-MM-dd HH:mm")}</p>
      </div>
      <div className="detailImage">
        <Image
          src={blogDetail.eyecatch?.url || "/no-image.png"}
          width={320}
          height={200}
          alt={blogDetail.title}
        />
      </div>
      <div className="detail">{parse(blogDetail.content)}</div>
      <div className={styles.detailBack}>
        <Link href="/blog">戻る</Link>
      </div>
    </>
  );
}
