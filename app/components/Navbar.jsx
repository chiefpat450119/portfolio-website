"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./util/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./util/MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-gray-950 border-2 border-blue-900 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
      <div className="flex items-center justify-center px-6 py-3">
        {/* Mobile toggle */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              aria-label="Open menu"
              className="flex items-center px-3 py-2 border border-blue-900 text-slate-400 hover:text-slate-200 hover:border-primary-500 transition-colors duration-150"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close menu"
              className="flex items-center px-3 py-2 border border-blue-900 text-slate-400 hover:text-slate-200 hover:border-primary-500 transition-colors duration-150"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Desktop nav */}
        <div className="menu hidden md:block">
          <ul className="flex p-0 flex-row space-x-6 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
