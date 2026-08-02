"use client";
import React, { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import TabButton from "./util/TabButton";
import TabContent from "./util/TabContent";
import { TAB_DATA } from "@/constants";

// Filter out the Experience tab — it now has its own dedicated section
const ABOUT_TABS = TAB_DATA.filter((t) => t.id !== "experience");

const AboutSection = () => {
  const [tab, setTab] = useState("current");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true,
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#f0edf8]" id="about">
      <div
        ref={ref}
        className="md:grid md:grid-cols-2 gap-8 items-start py-6 px-4 xl:gap-16 sm:py-12 xl:px-16"
      >
        {/* Images */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-2"
        >
          <Image
            src="/images/about-image.webp"
            width={500}
            height={500}
            alt="Patrick coding"
            className="border border-[#3d2b6b] w-full"
          />
          <Image
            src="/images/about-image-2.webp"
            width={500}
            height={500}
            alt="Patrick at work"
            className="border border-[#3d2b6b] w-full"
          />
        </motion.div>

        {/* Text + tabs */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="font-heading text-3xl font-bold mb-6 text-[#f0edf8] tracking-tight">
            About Patrick Zhou
          </h2>
          <p className="text-[#8b82a8] text-base lg:text-lg leading-relaxed">
            I&apos;m passionate about creating and problem solving across many
            fields of software development. As an avid scripter, I enjoy
            automating things with code and have a wealth of experience in
            designing and writing Python scripts. My current passion is{" "}
            <span className="text-primary-400">game development</span>: I am
            currently developing{" "}
            <span className="text-[#f0edf8]">Project Starhaven</span>, a
            narrative-driven isometric space colony city builder, and have
            experience in game development with both Unity and Godot.
          </p>
          <p className="text-[#8b82a8] text-base lg:text-lg leading-relaxed mt-4">
            Outside of tech, I&apos;m a tennis and fitness enthusiast, and a
            huge{" "}
            <span className="text-primary-400">sci-fi and space nerd</span>.
            Thriving off an interdisciplinary approach to creating and
            problem-solving, I&apos;m always seeking to incorporate my hobbies
            and communities into the projects I create.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-row flex-wrap gap-0 mt-10 border-b border-[#3d2b6b]">
            {ABOUT_TABS.map((data) => (
              <TabButton
                key={data.id}
                selectTab={() => handleTabChange(data.id)}
                active={tab === data.id}
              >
                {data.title}
              </TabButton>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-6">
            <TabContent
              items={ABOUT_TABS.find((data) => data.id === tab)?.content ?? []}
              selectedTab={tab}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
