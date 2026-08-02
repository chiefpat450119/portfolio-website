import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-4 py-1.5 text-sm font-medium border transition-colors duration-150 cursor-pointer ${
        isSelected
          ? "border-primary-500 bg-primary-600 text-white"
          : "border-[#3d2b6b] text-[#8b82a8] hover:border-primary-500 hover:text-[#f0edf8]"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
