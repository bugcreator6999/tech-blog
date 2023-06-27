import Image from "next/image";
import { client, getBlogs } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";
import Link from "next/link";
import BlogListCard from "../components/BlogListCard";

export default async function BlogList() {
  const { contents } = await getBlogs();
  console.log(contents);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {contents.map((postData: BlogPostType) => {
          return (
            <BlogListCard
              key={postData.id}
              id={postData.id}
              title={postData.title}
              createAt={postData.createdAt}
              updatedAt={postData.updatedAt}
              thumnail={postData.eyecatch?.url || "/no-image.png"}
            />
            // <Link key={postData.id} href={`/blog/${postData.id}`}>
            //   <li key={postData.id}>{postData.title}</li>
            // </Link>
          );
        })}
      </ul>
    </main>
  );
}
