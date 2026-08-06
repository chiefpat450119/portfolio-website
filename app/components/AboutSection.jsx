"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Bio content ──────────────────────────────────────────────────────────────
const BIO_SECTIONS = [
  {
    id: "deployed",
    heading: "Currently Deployed",
    text: "4th year CS student at UBC. Currently interning at Shopify in Toronto. Active game developer at UBC Game Dev Club, where I lead design and programming on Project Starhaven — a narrative-driven isometric space colony builder.",
  },
  {
    id: "build",
    heading: "What I Build",
    text: "My main obsession is game development — primarily in Godot and Unity, building narrative-driven games at the intersection of sci-fi world-building and systems design. I also love scripting and automation: if it can be automated, it will be.",
  },
  {
    id: "rest",
    heading: "Rest States",
    text: "Competitive tennis player and co-founder of CanDo Tennis. Avid sci-fi reader — Asimov, Liu Cixin, Vernor Vinge. I follow space exploration news obsessively and hit the gym most days.",
  },
];

// ── Skills content ────────────────────────────────────────────────────────────
const LANGUAGES = [
  { name: "Python",     icon: "devicon-python-plain colored" },
  { name: "Kotlin",     icon: "devicon-kotlin-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "C#",         icon: "devicon-csharp-plain colored" },
  { name: "Java",       icon: "devicon-java-plain colored" },
  { name: "R",          icon: "devicon-r-plain colored" },
];

const TOOLS = [
  { name: "Godot",    icon: "devicon-godot-plain colored" },
  { name: "Unity",    icon: "devicon-unity-plain" },
  { name: "React",    icon: "devicon-react-original colored" },
  { name: "Next.js",  icon: "devicon-nextjs-plain" },
  { name: "GitHub",   icon: "devicon-github-original" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
const BioCard = ({ heading, text, delay, isInView }) => (
  <motion.div
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.55, delay }}
    className="bg-[#1a1425] border border-[#3d2b6b] border-l-[3px] border-l-primary-500 p-5 flex flex-col gap-2"
  >
    <h3 className="text-[#f0edf8] font-semibold text-base">{heading}</h3>
    <p className="text-[#8b82a8] text-sm leading-relaxed">{text}</p>
  </motion.div>
);

const SkillChip = ({ name, icon, delay, isInView }) => (
  <motion.div
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay }}
    className="flex flex-col items-center justify-center gap-2 p-3 bg-[#1a1425] border border-[#3d2b6b] hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-150 cursor-default w-[88px]"
  >
    <i className={`${icon} text-4xl`} aria-hidden="true" />
    <span className="text-[#f0edf8] text-[11px] text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

const SkillGroup = ({ label, skills, baseDelay, isInView }) => (
  <div className="flex-1 min-w-0">
    <p className="font-heading text-[10px] tracking-widest text-primary-500 uppercase mb-4">
      {label}
    </p>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <SkillChip
          key={skill.name}
          {...skill}
          delay={baseDelay + i * 0.05}
          isInView={isInView}
        />
      ))}
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const AboutSection = () => {
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const isBioInView = useInView(bioRef, { amount: 0.2, once: true });
  const isSkillsInView = useInView(skillsRef, { amount: 0.2, once: true });

  return (
    <section className="text-[#f0edf8] py-12 px-4 xl:px-16" id="about">
      {/* ── Section heading ── */}
      <h2 className="font-heading text-3xl font-bold text-[#f0edf8] tracking-tight mb-8">
        About
      </h2>

      {/* ── Bio cards row ── */}
      <div
        ref={bioRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
      >
        {BIO_SECTIONS.map((section, i) => (
          <BioCard
            key={section.id}
            heading={section.heading}
            text={section.text}
            delay={i * 0.12}
            isInView={isBioInView}
          />
        ))}
      </div>

      {/* ── Skills ── */}
      <div ref={skillsRef}>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
          <SkillGroup
            label="Languages"
            skills={LANGUAGES}
            baseDelay={0}
            isInView={isSkillsInView}
          />

          {/* Divider */}
          <div className="hidden sm:block w-px bg-[#3d2b6b] mx-8 self-stretch" aria-hidden="true" />

          <SkillGroup
            label="Tools & Frameworks"
            skills={TOOLS}
            baseDelay={0.1}
            isInView={isSkillsInView}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
