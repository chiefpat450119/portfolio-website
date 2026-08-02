import React from "react";
import { motion } from "framer-motion";

// Create variants for slide animation
const variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const TabContent = ({ items, selectedTab }) => {
  return (
    <motion.div
      key={selectedTab}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
    >
      <ul className="space-y-2 pl-0">
        {items.map((item, index) => (
          <li key={index} className="text-[#8b82a8] text-sm flex gap-2 items-start">
            <span className="text-primary-500 mt-0.5 flex-shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TabContent;
