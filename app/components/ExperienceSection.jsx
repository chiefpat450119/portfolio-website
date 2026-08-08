"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import experienceJson from "@/content/data/experience.json";

const EXPERIENCE_DATA = experienceJson.experience;

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section id="experience" className="py-12 px-4 xl:px-16">
      <h2 className="font-heading text-3xl font-bold text-slate-200 tracking-tight mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative">
        {/* ── Desktop spine ── */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-900"
          aria-hidden="true"
        />
        {/* ── Mobile spine ── */}
        <div
          className="block md:hidden absolute left-5 top-0 bottom-0 w-px bg-blue-900"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-14">
          {EXPERIENCE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="relative">

                {/* ══ Desktop layout ══ */}
                <div className="hidden md:grid md:grid-cols-2">

                  {isLeft ? (
                    <>
                      {/* Card — left side */}
                      <motion.div
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
                        transition={{ duration: 0.5, delay: index * 0.12 }}
                        className="pr-14 flex justify-end"
                      >
                        <ExperienceCard item={item} />
                      </motion.div>

                      {/* Date label — right of spine */}
                      <motion.div
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.12 + 0.15 }}
                        className="pl-14 flex items-start pt-3"
                      >
                        <DateLabel period={item.period} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Date label — left of spine */}
                      <motion.div
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.12 + 0.15 }}
                        className="pr-14 flex items-start justify-end pt-3"
                      >
                        <DateLabel period={item.period} alignRight />
                      </motion.div>

                      {/* Card — right side */}
                      <motion.div
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
                        transition={{ duration: 0.5, delay: index * 0.12 }}
                        className="pl-14"
                      >
                        <ExperienceCard item={item} />
                      </motion.div>
                    </>
                  )}
                </div>

                {/* ── Desktop connector dot ── */}
                <div
                  className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-3 h-3 bg-primary-600 border-2 border-primary-400 z-10"
                  aria-hidden="true"
                />

                {/* ══ Mobile layout ══ */}
                <div className="block md:hidden">
                  {/* Date label above card */}
                  <motion.div
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.12 }}
                    className="pl-12 mb-2"
                  >
                    <span className="font-heading text-[10px] tracking-widest text-slate-400 uppercase">
                      {item.period}
                    </span>
                  </motion.div>

                  {/* Connector dot — mobile */}
                  <div
                    className="absolute left-5 top-6 -translate-x-1/2 w-3 h-3 bg-primary-600 border-2 border-primary-400 z-10"
                    aria-hidden="true"
                  />

                  <motion.div
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
                    className="pl-12"
                  >
                    <ExperienceCard item={item} />
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ── Date label shown on the spine ────────────────────────────────────────────
const DateLabel = ({ period, alignRight = false }) => (
  <div className={`flex flex-col gap-0.5 ${alignRight ? "items-end" : "items-start"}`}>
    {period.split("–").map((part, i) => (
      <span
        key={i}
        className="font-heading text-[10px] tracking-widest text-slate-400 uppercase leading-tight"
      >
        {part.trim()}
      </span>
    ))}
  </div>
);

// ── Card: collapsed by default, reveals details on hover ─────────────────────
const ExperienceCard = ({ item }) => (
  <div className="group bg-gray-900 border border-blue-900 hover:border-primary-600 transition-colors duration-200 cursor-default w-full">

    {/* Always visible ─────────────────────── */}
    <div className="p-5 pb-4">
      <h3 className="text-slate-200 font-semibold text-base leading-snug">
        {item.role}
      </h3>
      <p className="text-primary-400 text-sm font-medium mt-1">
        {item.company}
      </p>
      <p className="text-slate-400 text-xs mt-0.5">{item.location}</p>


    </div>

    {/* Revealed on hover ───────────────────── */}
    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-72 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      <div className="px-5 pb-5">
        <div className="h-px bg-blue-900 mb-4" />

        {item.bullets && item.bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="text-slate-400 text-sm flex gap-2 leading-snug">
                <span className="text-primary-600 flex-shrink-0 mt-0.5">—</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-slate-200 text-xs px-2 py-0.5 bg-blue-900 border border-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>

  </div>
);

export default ExperienceSection;
