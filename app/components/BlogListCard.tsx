import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

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
      <Link href={`/blog/${id}`}>
        <div className="">
          <div className="thumnail">
            <Image src={thumnail} width={320} height={200} alt={title} />
          </div>
          <div className="title">
            <h2 className="cardTitle">{title}</h2>
          </div>
          <div className="date">
            <h3>作成日 : {format(new Date(createAt), "yyyy-MM-dd HH:mm")}</h3>
            <h3>更新日 : {format(new Date(updatedAt), "yyyy-MM-dd HH:mm")}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogListCard;
