"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// TODO: Move this to a separate file, Not urgent.
const TAB_DATA = [
  {
    title: "Current Involvement",
    id: "current",
    content: (
      <ul className="list-disc pl-2">
        <li>2nd Year BSc. @ UBC</li>
        <li>Tennis Instructor @ UBC Recreation</li>
        <li>Tutor @ Math Tutor Network</li>
        <li>GDSC UBC</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Next.js + React</li>
        <li>Java</li>
        <li>Jupyter</li>
        <li>R</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Tennis Instructor @ UBC Recreation, Vancouver</li>
        <li>Software Engineer Intern @ Project Flux, Singapore</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>NwPlus HackCamp 2023 Winner &#40;$100 prize&#41;</li>
        <li>Dean&apos;s Scholar @ UBC</li>
        <li>
          3x Best Overall Academic Achievement Award @ ACS International,
          Singapore
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("current");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            About Patrick Zhou
          </h2>
          <p className="text-base lg:text-lg">
            I am a lifelong learner with a passion for creating and for
            problem-solving, fueling my drive to apply my expertise towards
            creating impactful solutions to pertinent challenges both in my own
            life and in the communities I take part in. I thrive off an
            interdisciplinary approach to problem-solving and in diverse
            environments, which is why I make a deliberate effort to incorporate
            experience across various interests into my work. <br />
            I&apos;m currently an instructor at the UBC Tennis Centre while pursuing
            my degree and working on projects on the side. I&apos;d love to chat
            about tennis, tech, or anything in between!
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
            {TAB_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
