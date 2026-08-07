"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./util/ProjectCard";
import ProjectTag from "./util/ProjectTag";
import { motion, useInView } from "framer-motion";
import { PROJECTS_DATA } from "@/constants";

const cardVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

// Featured project ID — displayed full-width at the top
const FEATURED_ID = 0; // Project Starhaven

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
        <li>
          <p className="font-heading text-xs tracking-widest text-primary-500 uppercase mb-3">
            Latest Release — Play Now
          </p>
          <div
            className="border border-[#3d2b6b] overflow-hidden w-full"
            style={{ aspectRatio: "1280 / 740" }}
          >
            <iframe
              src="https://itch.io/embed-upload/18705654?color=333333"
              frameBorder="0"
              allowFullScreen
              title="Sand Of Souls on itch.io"
              className="w-full h-full"
            />
          </div>
        </li>

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
