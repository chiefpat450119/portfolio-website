"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutData from "@/content/data/about.json";

// ── Sub-components ────────────────────────────────────────────────────────────
const BioCard = ({ heading, text, delay, isInView }) => (
  <motion.div
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.55, delay }}
    className="bg-gray-900 border border-blue-900 border-l-[3px] border-l-primary-500 p-5 flex flex-col gap-2"
  >
    <h3 className="text-slate-200 font-semibold text-base">{heading}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

const SkillChip = ({ name, icon, delay, isInView }) => (
  <motion.div
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay }}
    className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-900 border border-blue-900 hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-150 cursor-default w-[88px]"
  >
    <i className={`${icon} text-4xl`} aria-hidden="true" />
    <span className="text-slate-200 text-[11px] text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

const SkillGroup = ({ label, skills, baseDelay, isInView }) => (
  <div className="flex flex-col items-start gap-1">
    <p className="font-heading text-sm tracking-widest text-primary-500 uppercase mb-4">
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
    <section className="text-slate-200 py-12 px-4 xl:px-16" id="about">
      {/* ── Section heading ── */}
      <h2 className="font-heading text-5xl font-bold text-slate-200 tracking-tight mb-8">
        About
      </h2>

      {/* ── Bio cards row ── */}
      <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {aboutData.bioSections.map((section, i) => (
          <BioCard
            key={section.heading}
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
            skills={aboutData.languages}
            baseDelay={0}
            isInView={isSkillsInView}
          />

          {/* Divider */}
          <div
            className="hidden sm:block w-px bg-blue-900 mx-8 self-stretch"
            aria-hidden="true"
          />

          <SkillGroup
            label="Tools & Frameworks"
            skills={aboutData.tools}
            baseDelay={0.1}
            isInView={isSkillsInView}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
