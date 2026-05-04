"use client";
import React, { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import TabButton from "./util/TabButton";
import TabContent from "./util/TabContent";
import { TAB_DATA } from "@/constants";

const AboutSection = () => {
  const [tab, setTab] = useState("current");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div
        ref={ref}
        className="md:grid md:grid-cols-2 gap-8 items-center py-6 px-4 xl:gap-16 sm:py-12 xl:px-16"
      >
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.0 }}
          className="flex flex-col"
        >
          <Image
            src="/images/about-image.webp"
            width={500}
            height={500}
            alt="about image"
            className="py-4"
          />
          <Image
            src="/images/about-image-2.webp"
            width={500}
            height={500}
            alt="about image"
            className="py-4"
          />
        </motion.div>
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            About Patrick Zhou
          </h2>
          <p className="text-base lg:text-lg">
            I&apos;m passionate about creating and problem solving in many fields of software development. As an avid scripter, I enjoy automating things with code and have a wealth of experience in designing and writing Python scripts. My current passion is game development: I am currently developing Project Starhaven, a narrative-driven isometric space colony city builder, and have experience in game development with both Unity and Godot. 
            <br />
            <br />
            Outside of tech, I&apos;m a tennis and fitness enthusiast, and a huge sci-fi and space nerd. Thriving off an interdiscplinary approach to creating and problem-solving, I am always seeking to incorporate my hobbies and my communities into the projects I create, including Project Starhaven and a freelance tennis coaching platform I cofounded. Check out my other projects in the Projects section below!
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((data) => (
              <TabButton
                key={data.id}
                selectTab={() => handleTabChange(data.id)}
                active={tab === data.id}
              >
                {data.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <TabContent
              items={TAB_DATA.find((data) => data.id === tab).content}
              selectedTab={tab}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
