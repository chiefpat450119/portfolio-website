import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-4 py-1.5 text-sm font-medium border transition-colors duration-150 cursor-pointer ${
        isSelected
          ? "border-primary-500 bg-primary-600 text-white"
          : "border-slate-600 text-slate-400 hover:border-white hover:text-white"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
