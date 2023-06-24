import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">top</Link>
      <Link href="/blog">blog</Link>
      <Link href="/about">about</Link>
    </div>
  );
};

export default Navbar;
