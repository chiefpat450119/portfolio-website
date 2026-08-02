import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-sm text-[#8b82a8] hover:text-[#f0edf8] tracking-wide transition-colors duration-150 py-1"
    >
      {title}
    </Link>
  );
};

export default NavLink;
