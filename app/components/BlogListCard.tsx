import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import styles from "../styles/page.module.css";

// TODO : thumnail & catedory
interface Props {
  id: string;
  title: string;
  thumnail: string;
  //   category: string;
  createAt: string;
  updatedAt: string;
}

const BlogListCard = ({
  id,
  title,
  thumnail,
  //   category,
  createAt,
  updatedAt,
}: Props) => {
  return (
    <>
      <div className={styles.blogCard}>
        <Link href={`/blog/${id}`}>
          <div className={styles.cardWrap}>
            <div className={styles.cardThumnail}>
              <Image src={thumnail} width={320} height={200} alt={title} />
            </div>
            <div className={styles.cardText}>
              <div>
                <h2 className={styles.cardTitle}>{title}</h2>
              </div>
              <div className={styles.createdate}>
                <h3>
                  作成日 : {format(new Date(createAt), "yyyy-MM-dd HH:mm")}
                </h3>
                <h3>
                  更新日 : {format(new Date(updatedAt), "yyyy-MM-dd HH:mm")}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogListCard;
