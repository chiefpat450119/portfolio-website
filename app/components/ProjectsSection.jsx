"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import ProjectCard from "./util/ProjectCard";
import ProjectTag from "./util/ProjectTag";
import { motion, useInView } from "framer-motion";
import projectsJson from "@/content/data/projects.json";

const PROJECTS_DATA = projectsJson.projects;

const cardVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

// Featured project ID — displayed full-width at the top
const FEATURED_ID = 0; // Project Starhaven

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.05 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag)
  );

  const featuredProject = filteredProjects.find((p) => p.id === FEATURED_ID);
  const otherProjects = filteredProjects.filter((p) => p.id !== FEATURED_ID);

  return (
    <section id="projects" className="py-12 px-4 xl:px-16">
      <h2 className="font-heading text-3xl font-bold text-[#f0edf8] tracking-tight mb-8">
        Projects
      </h2>

      {/* Filter tags */}
      <div className="text-[#f0edf8] flex flex-wrap gap-2 py-4 mb-6">
        {["All", "Game Dev", "Hackathon", "Personal", "Community", "School"].map(
          (name) => (
            <ProjectTag
              key={name}
              onClick={handleTagChange}
              name={name}
              isSelected={tag === name}
            />
          )
        )}
      </div>

      <ul ref={ref} className="flex flex-col gap-8">
        {/* ── Game embed ── */}
        {["All", "Game Dev", "Hackathon"].includes(tag) && (
        <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
        >
          <div className="group bg-[#1a1425] border border-[#3d2b6b] hover:border-primary-600 transition-all duration-200 hover:-translate-y-1 flex flex-col">
            <div
              className="border-b border-[#3d2b6b] overflow-hidden w-full relative bg-[#0d0a14]"
              style={{ aspectRatio: "1280 / 740" }}
            >
              {!isGameLoaded ? (
                <button
                  onClick={() => setIsGameLoaded(true)}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center group/btn"
                  aria-label="Load Sand of Souls"
                >
                  {/* Background Image */}
                  <Image
                    src="/images/game/sandofsouls_thumbnail.png"
                    alt="Sand of Souls Thumbnail"
                    fill
                    className="object-cover transition-transform duration-500 group-hover/btn:scale-105"
                  />
                  
                  {/* Dark overlay so the play button stays visible */}
                  <div className="absolute inset-0 bg-[#1a1425]/60 group-hover/btn:bg-[#1a1425]/40 transition-colors duration-300" />
                  
                  {/* Play Button UI */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary-500 flex items-center justify-center mb-4 group-hover/btn:scale-110 transition-transform bg-[#3d2b6b]/90 backdrop-blur-sm shadow-lg">
                      {/* CSS Triangle Play Icon */}
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#f0edf8] border-b-[10px] border-b-transparent ml-1" />
                    </div>
                    <span className="text-primary-400 font-heading tracking-widest uppercase text-sm group-hover/btn:text-[#f0edf8] transition-colors drop-shadow-md font-semibold">
                      Click to Load Game
                    </span>
                  </div>
                </button>
              ) : (
                <iframe
                  src="https://itch.io/embed-upload/18705654?color=333333"
                  frameBorder="0"
                  allowFullScreen
                  title="Sand Of Souls on itch.io"
                  className="w-full h-full"
                />
              )}
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-heading text-xs tracking-widest text-primary-500 uppercase mb-3 block">
                    Latest Release — Play Now
                  </span>
                  <h5 className="font-semibold text-[#f0edf8] text-base leading-snug">
                    Sand of Souls
                  </h5>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/chiefpat450119" 
                    aria-label="View source code"
                    className="border border-[#3d2b6b] hover:border-primary-400 p-2 transition-colors duration-150 bg-[#0d0a14]"
                    target="_blank"
                  >
                    <CodeBracketIcon className="h-5 w-5 text-[#8b82a8] hover:text-primary-400 transition-colors duration-150" />
                  </Link>
                  <Link
                    href="https://patrickzhou45.itch.io/sand-of-souls"
                    aria-label="View live preview"
                    className="border border-[#3d2b6b] hover:border-primary-400 p-2 transition-colors duration-150 bg-[#0d0a14]"
                    target="_blank"
                  >
                    <EyeIcon className="h-5 w-5 text-[#8b82a8] hover:text-primary-400 transition-colors duration-150" />
                  </Link>
                </div>
              </div>
              <p className="text-[#8b82a8] text-sm leading-relaxed flex-1 mt-2">
                A brand new game created in Godot. Play it directly in the browser!
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Godot", "C#"].map((tech, index) => (
                  <span
                    key={index}
                    className="text-[#f0edf8] text-xs px-2 py-0.5 bg-[#3d2b6b] border border-[#6d28d9]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.li>
        )}

        {/* Featured card — full width */}
        {featuredProject && (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard
              key={featuredProject.id}
              title={featuredProject.title}
              description={featuredProject.description}
              imgUrl={featuredProject.image}
              tags={featuredProject.tag}
              gitUrl={featuredProject.gitUrl}
              previewUrl={featuredProject.previewUrl}
              technologies={featuredProject.technologies}
              featured
            />
          </motion.li>
        )}


        {/* Grid of remaining projects */}
        {otherProjects.length > 0 && (
          <li>
            <ul className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.35, delay: (index + 1) * 0.08 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project.tag}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    technologies={project.technologies}
                  />
                </motion.li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
