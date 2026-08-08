"use client";
import React from "react";
import dynamic from "next/dynamic";
import GitHubCalendar from "react-github-calendar";

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* GitHub calendar */}
      <div className="bg-gray-900 border border-blue-900 flex flex-col gap-3 justify-center items-center px-6 md:mx-12 py-6 md:py-8">
        <p className="font-heading text-base tracking-widest text-slate-400 uppercase">
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
