import { getBlogDetail } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { format } from "date-fns";

export default async function BlogDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogDetail: BlogPostType = await getBlogDetail(id);
  return (
    <>
      <h1>{blogDetail.title}</h1>
      <p>{format(new Date(blogDetail.createdAt), "yyyy-MM-dd HH:mm")}</p>
      <div className="detailImage">
        <Image
          src={blogDetail.eyecatch?.url || "/no-image.png"}
          width={320}
          height={200}
          alt={blogDetail.title}
        />
      </div>
      {parse(blogDetail.content)}
    </>
  );
}
