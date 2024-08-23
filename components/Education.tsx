"use client";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Released the beta version of the Aceternity Design System.
          </p>
        </div>
      ),
    },
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started development on Aceternity Pro, including advanced features and integrations.
          </p>
        </div>
      ),
    },
    {
      title: "Mid 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Designed the initial prototype of Aceternity UI and received positive feedback.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="py-50" id="education">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h1 className="heading mb-24 mt-20 text-center">
          My
          <span className="text-purple"> Education</span>
        </h1>
      </div>
      <div className="overflow-hidden relative mt-24">
        <Timeline data={data} />
      </div>
    </div>
  );
}
