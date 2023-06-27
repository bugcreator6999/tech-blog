import Image from "next/image";
import { client, getBlogs } from "@/libs/microcms";
import { BlogPostType } from "@/types/blogPost";
import Link from "next/link";
import BlogListCard from "../components/BlogListCard";
import styles from "../styles/page.module.css";

import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlus400 = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default async function BlogList() {
  const { contents } = await getBlogs();
  console.log(contents);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className={styles.blogListTitle}>
        <span className={mPlus400.className}>記事一覧</span>
      </h2>
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
