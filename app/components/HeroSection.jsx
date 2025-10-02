"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, I&apos;m Patrick,{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "a programmer",
                1000,
                "a scripter",
                1000,
                "a game developer",
                1000,
                "a tennis and fitness enthusiast",
                1250,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base lg:text-lg mb-6 xl:text-xl">
            Third year computer science student at the University of British
            Columbia with an intense passion for learning, creating and problem-solving.
            Whether it&apos;s at a hackathon, in the gym, or on the tennis court, I&apos;m
            always looking for opportunites to hone my skills and expand my horizons.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-700 hover:to-secondary-700 text-white"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-700 hover:to-secondary-700 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-6 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[175px] h-[175px] md:w-[225px] md:h-[225px] xl:w-[350px] xl:h-[350px] relative">
            <Image
              src="/images/pfp.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover h-full w-full"
              width={3580}
              height={6528}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
