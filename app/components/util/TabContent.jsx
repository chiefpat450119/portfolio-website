import React from "react";
import { motion } from "framer-motion";

// Create variants for slide animation
const variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const TabContent = ({ items, selectedTab }) => {
  return (
    <motion.div key={selectedTab} variants={variants} initial="hidden" animate="visible">
      <ul className="list-disc pl-2 marker:text-secondary-400">
        {items.map((item, index) => (
          <li key={index} className="text-white">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TabContent;
