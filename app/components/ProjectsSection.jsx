"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// TODO: Update projects and github repos (make public if possible)
// TODO: Update preview (make video links)
// TODO: Add tags to the project cards to display technologies and frameworks used.
// TODO: CHnage favicon
const ROOT_URL = "https://github.com/chiefpat450119/";

const projectsData = [
  {
    id: 1,
    title: "Ammonium Bot",
    description: "Reddit bot that helps users with common grammatical and etymological mistakes.",
    image: "/images/projects/ammoniumbot.png",
    tag: ["All", "Community"],
    gitUrl: ROOT_URL + "AmmoniumBot",
    previewUrl: "/",
    technologies: ["Python", "PRAW", "Github Actions"],
  },
  {
    id: 2,
    title: "Fighting My Demons: HackCamp 2023 Winning Submission",
    description: "An innovative game that stops users from snoozing their alarms in the morning.",
    image: "/images/projects/fightingmydemons.png",
    tag: ["All", "Hackathon"],
    gitUrl: ROOT_URL + "FightingMyDemons",
    previewUrl: "/",
    technologies: ["Python", "Pygame"],
  },
  {
    id: 3,
    title: "Loopy",
    description: "Maps API powered planner and rating system for Metro Vancouver transit routes.",
    image: "/images/projects/loopy.png",
    tag: ["All", "Hackathon", "Community"],
    gitUrl: "https://github.com/Andrewyx/Loopy",
    previewUrl: "/",
    technologies: ["JavaScript", "HTML/CSS", "React", "Tailwind CSS", "Firebase", "Google Maps API"],
  },
  {
    id: 4,
    title: "Heart Disease Classifier",
    description: "Data science analysis using KNN classification in R to predict the presence of heart disease.",
    image: "/images/projects/heartdisease.png",
    tag: ["All", "School"],
    gitUrl: ROOT_URL + "HeartDiseaseClassifier",
    previewUrl: "/",
    technologies: ["R", "Jupyter"],
  },
  {
    id: 5,
    title: "Iron Insight",
    description: "Java desktop application for tracking strength training progress.",
    image: "/images/projects/ironinsight.png",
    tag: ["All", "School"],
    gitUrl: ROOT_URL + "IronInsight",
    previewUrl: "/",
    technologies: ["Java", "Swing"],
  },
  {
    id: 6,
    title: "Portfolio Tracker",
    description: "Personal invesment tracker built with Python, Sheets API and GitHub Actions.",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Personal"],
    gitUrl: ROOT_URL + "PortfolioTracker",
    previewUrl: "/",
    technologies: ["Python", "Google Sheets API", "Github Actions", "SMTP", "REST APIs"],
  },
  {
    id: 7,
    title: "SLack Off",
    description: "Lecture slide and audio summarizer to help you catch up on missed (or skipped) classes.",
    image: "/images/projects/slackoff.jpg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/Andrewyx/slack-off",
    previewUrl: "/",
    technologies: ["React", "JavaScript", "Python", "Flask", "OpenAI API", "Cohere API"],
  }
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hackathon"
          isSelected={tag === "Hackathon"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Community"
          isSelected={tag === "Community"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="School"
          isSelected={tag === "School"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
            transition = {{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
    </section>
  );
};

export default ProjectsSection;
