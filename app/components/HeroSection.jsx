"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#f0edf8] mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-heading font-extrabold tracking-tight">
            Hi, I&apos;m Patrick
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary-500 mb-6 min-h-[1.5em]">
            <TypeAnimation
              sequence={[
                "game developer",
                1200,
                "sci-fi enthusiast",
                1200,
                "explorer of galaxies",
                1200,
                "tennis player",
                1200,
                "space colony builder",
                1400,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </div>
          <p className="text-[#8b82a8] text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
            Fourth year computer science student at the University of British
            Columbia with an intense passion for learning, creating, and
            problem-solving. Whether it&apos;s at a hackathon, on the tennis
            court, or in the depths of a sci-fi universe — I&apos;m always
            building something.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors duration-150 rounded-sm"
            >
              Contact Me
            </Link>
            <a
              href="/resume/Patrick_Zhou_resume_May_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold transition-colors duration-150 rounded-sm"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-4 place-self-center mt-10 lg:mt-0"
        >
          <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] xl:w-[340px] xl:h-[340px]">
            {/* Outer square border frame — geometric, no glow */}
            <div className="absolute inset-0 border-2 border-primary-600 rounded-sm" />
            {/* Inner offset border for depth */}
            <div className="absolute inset-[8px] border border-[#3d2b6b] rounded-sm" />
            <Image
              src="/images/pfp.jpg"
              alt="Patrick Zhou"
              className="absolute inset-[10px] object-cover"
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1280px) 260px, 340px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
