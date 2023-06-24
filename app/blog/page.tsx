import Image from "next/image";
import { client, getBlogs } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";

export default async function BlogList() {
  const { contents } = await getBlogs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {contents.map((postData: BlogPostType) => {
          return <li key={postData.id}>{postData.title}</li>;
        })}
      </ul>
    </main>
  );
}
