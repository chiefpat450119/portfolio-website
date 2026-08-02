"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE_DATA } from "@/constants";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section id="experience" className="py-12 px-4 xl:px-16">
      <h2 className="font-heading text-3xl font-bold text-[#f0edf8] tracking-tight mb-12">
        Experience
      </h2>

      <div ref={ref} className="relative">
        {/* Vertical spine */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#3d2b6b]"
          aria-hidden="true"
        />
        {/* Mobile spine — left aligned */}
        <div
          className="block md:hidden absolute left-4 top-0 bottom-0 w-px bg-[#3d2b6b]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-12">
          {EXPERIENCE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="relative md:grid md:grid-cols-2 md:gap-8">
                {/* Connector dot — desktop */}
                <div
                  className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 bg-primary-600 border-2 border-primary-400 z-10"
                  aria-hidden="true"
                />
                {/* Connector dot — mobile */}
                <div
                  className="block md:hidden absolute left-4 top-6 -translate-x-1/2 w-3 h-3 bg-primary-600 border-2 border-primary-400 z-10"
                  aria-hidden="true"
                />

                {/* Left column placeholder / card (desktop alternating) */}
                {isLeft ? (
                  <>
                    <motion.div
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -40 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hidden md:block md:col-start-1 md:pr-10 pl-4"
                    >
                      <ExperienceCard item={item} />
                    </motion.div>
                    <div className="hidden md:block md:col-start-2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:col-start-1" />
                    <motion.div
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hidden md:block md:col-start-2 md:pl-10 pr-4"
                    >
                      <ExperienceCard item={item} />
                    </motion.div>
                  </>
                )}

                {/* Mobile — always full width, indented past spine */}
                <motion.div
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="block md:hidden pl-10"
                >
                  <ExperienceCard item={item} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ item }) => (
  <div className="bg-[#1a1425] border border-[#3d2b6b] p-5 hover:border-primary-600 transition-colors duration-200">
    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
      <div>
        <h3 className="text-[#f0edf8] font-semibold text-base leading-snug">
          {item.role}
        </h3>
        <p className="text-primary-400 text-sm font-medium mt-0.5">
          {item.company}
        </p>
      </div>
      <div className="text-right">
        <p className="text-[#8b82a8] text-xs">{item.period}</p>
        <p className="text-[#8b82a8] text-xs">{item.location}</p>
      </div>
    </div>

    {item.bullets && item.bullets.length > 0 && (
      <ul className="list-none space-y-1 mb-4">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-[#8b82a8] text-sm flex gap-2">
            <span className="text-primary-600 mt-0.5 flex-shrink-0">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    )}

    {item.technologies && item.technologies.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-3">
        {item.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-[#f0edf8] text-xs px-2 py-0.5 bg-[#3d2b6b] border border-[#6d28d9]"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceSection;
