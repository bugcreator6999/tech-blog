import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bugCretors-Tech blog",
  description:
    "ReactとNext.js v13を使用して作ったブログです。ReactやらNext.jsの情報を発信していく予定です",
};

export default function BlogListPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
