"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import heroData from "@/content/data/hero.json";

// Convert [{text, pause}] → flat TypeAnimation sequence array
const sequence = heroData.typeAnimationSequences.flatMap(({ text, pause }) => [
  text,
  pause,
]);

const HeroSection = () => {
  return (
    <section className="lg:py-16 px-4 xl:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center sm:text-left justify-self-start"
        >
          <h1 className="text-slate-200 mb-4 text-5xl sm:text-7xl lg:text-8xl lg:leading-tight font-heading font-extrabold tracking-tight">
            Hi, I&apos;m {heroData.name}
          </h1>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-6 min-h-[1.5em]">
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </div>
          <p className="text-slate-400 text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
            {heroData.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={heroData.ctaPrimary.href}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors duration-150 rounded-sm"
            >
              {heroData.ctaPrimary.label}
            </Link>
            <a
              href={heroData.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold transition-colors duration-150 rounded-sm"
            >
              {heroData.ctaSecondary.label}
            </a>
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-4 place-self-center mt-0 hidden lg:block"
        >
          <div className="relative w-[280px] h-[280px] xl:w-[340px] xl:h-[340px]">
            {/* Faint full outline */}
            <div className="absolute inset-0 border border-blue-900" />

            {/* Corner brackets — top-left */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500" />
            {/* top-right */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-500" />
            {/* bottom-left */}
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-500" />
            {/* bottom-right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-500" />

            {/* Photo — inset so brackets clearly overlap the edge */}
            <div className="absolute inset-3 overflow-hidden">
              <Image
                src="/images/pfp.jpg"
                alt="Patrick Zhou"
                className="object-cover"
                fill
                sizes="(max-width: 1280px) 280px, 340px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
