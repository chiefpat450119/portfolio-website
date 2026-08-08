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
  },
  {
    metric: "Hackathons",
    value: "6",
  },
  {
    metric: "Years Experience",
    value: "4",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* Stats row */}
      <div className="bg-gray-900 border border-blue-900 py-6 px-8 mx-2 sm:mx-12 flex flex-col sm:flex-row items-center justify-evenly gap-6 sm:gap-0">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-slate-200 text-4xl font-bold font-sans flex flex-row items-baseline">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-slate-200 text-4xl font-bold font-sans"
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
            <p className="text-slate-400 text-sm mt-1 tracking-wide">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>

      {/* GitHub calendar */}
      <div className="bg-gray-900 border border-blue-900 flex flex-col gap-3 justify-center items-center px-6 mt-4 md:mx-12 md:mt-6 py-6 md:py-8">
        <p className="font-heading text-xs tracking-widest text-slate-400 uppercase">
          Activity Log
        </p>
        <GitHubCalendar
          username="chiefpat450119"
          colorScheme="dark"
          theme={{
            dark: ["#0f172a", "#1e3a8a", "#1e40af", "#3b82f6", "#60a5fa"],
          }}
        />
      </div>
    </div>
  );
};

export default AchievementsSection;
