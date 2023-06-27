import { getBlogDetail } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";
import React from "react";
import parse from "html-react-parser";

export default async function BlogDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogDetail: BlogPostType = await getBlogDetail(id);
  return (
    <>
      <h1>{blogDetail.title}</h1>
      <p>{blogDetail.createdAt}</p>
      {parse(blogDetail.content)}
    </>
  );
}
