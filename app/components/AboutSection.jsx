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
            I&apos;m passionate about creating and problem solving in many
            fields of software development. As an avid scripter, I enjoy
            automating things with code and have a wealth of experience in
            designing and writing Python scripts. However, my current passion is
            game development; I submitted a winning game project at a hackathon
            and participated in GMTK Game Jam 2024, placing in the top 25% with
            my team.
            <br />
            <br />
            Outside of tech, I&apos;m a tennis and fitness enthusiast and
            currently work as an instructor at UBC Tennis Centre. Thriving off
            an interdiscplinary approach to creating and problem-solving, I am
            always seeking to incorporate my hobbies and my communities into the
            projects I create: I&apos;m currently designing a website for the
            freelance tennis coaching company I co-founded and looking to
            develop my own turn-based tennis game.
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
