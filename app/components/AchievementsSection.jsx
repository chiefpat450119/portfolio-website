"use client";
import React from "react";
import dynamic from "next/dynamic";
import GitHubCalendar from "react-github-calendar";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
    icon: "🎮",
  },
  {
    metric: "Hackathons",
    value: "6",
    icon: "⚡",
  },
  {
    metric: "Years Experience",
    value: "4",
    postfix: "+",
    icon: "🚀",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* Stats row */}
      <div className="bg-[#1a1425] border border-[#3d2b6b] py-6 px-8 mx-2 sm:mx-12 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                {achievement.icon}
              </span>
              <h2 className="text-[#f0edf8] text-4xl font-bold font-heading flex flex-row items-baseline">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-[#f0edf8] text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
            </div>
            <p className="text-[#8b82a8] text-sm mt-1 tracking-wide">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>

      {/* GitHub calendar */}
      <div className="bg-[#1a1425] border border-[#3d2b6b] flex flex-col gap-3 justify-center items-center px-6 mt-4 md:mx-12 md:mt-6 py-6 md:py-8">
        <p className="font-heading text-xs tracking-widest text-[#8b82a8] uppercase">
          Activity Log
        </p>
        <GitHubCalendar
          username="chiefpat450119"
          colorScheme="dark"
          theme={{
            dark: ["#1a1425", "#3d2b6b", "#6d28d9", "#8b5cf6", "#a78bfa"],
          }}
        />
      </div>
    </div>
  );
};

export default AchievementsSection;
