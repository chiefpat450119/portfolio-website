import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
        active ? "text-[#f0edf8]" : "text-[#8b82a8] hover:text-[#f0edf8]"
      }`}
    >
      {children}
      <motion.div
        variants={variants}
        animate={active ? "active" : "default"}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 h-[2px] bg-primary-500"
      />
    </button>
  );
};

export default TabButton;
