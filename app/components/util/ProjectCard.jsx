import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  technologies,
  featured = false,
}) => {
  return (
    <div
      className={`group bg-gray-900 border border-blue-900 hover:border-primary-600 transition-all duration-200 hover:-translate-y-1 ${
        featured ? "md:grid md:grid-cols-2 md:gap-0" : "flex flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-gray-950 ${
          featured ? "md:h-full min-h-[220px]" : "h-48 md:h-56"
        }`}
      >
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
        {/* Overlay links */}
        <div className="overlay items-center justify-center absolute inset-0 bg-gray-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-300 gap-4">
          <Link
            href={gitUrl}
            aria-label="View source code"
            className="border border-blue-900 hover:border-primary-400 p-3 transition-colors duration-150"
            target="_blank"
          >
            <CodeBracketIcon className="h-7 w-7 text-slate-400 hover:text-primary-400 transition-colors duration-150" />
          </Link>
          <Link
            href={previewUrl}
            aria-label="View live preview"
            className="border border-blue-900 hover:border-primary-400 p-3 transition-colors duration-150"
            target="_blank"
          >
            <EyeIcon className="h-7 w-7 text-slate-400 hover:text-primary-400 transition-colors duration-150" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        {featured && (
          <span className="font-heading text-base tracking-widest text-primary-500 uppercase mb-3">
            Featured Project
          </span>
        )}
        <h5 className="font-semibold text-slate-200 text-base mb-2 leading-snug">
          {title}
        </h5>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {description}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-slate-200 text-xs px-2 py-0.5 bg-blue-900 border border-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
