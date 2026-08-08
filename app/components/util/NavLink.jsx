import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-sm text-slate-400 hover:text-slate-200 tracking-wide transition-colors duration-150 py-1"
    >
      {title}
    </Link>
  );
};

export default NavLink;
