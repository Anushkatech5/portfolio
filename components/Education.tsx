"use client";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Jul'22 - May'26",
      content: (
        <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg lg:text-l xl:text-xl font-normal mb-8">
          <strong className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Banasthali Vidyapith University</strong>
          <br />
          <br />
          Currently pursuing a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence.
          <br />
          <br />
          Current CGPA: 8.58
        </p>
      </div>
      ),
    },   

    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-8">
            <strong className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">D.A.V.P.S Sreshtha Vihar, Delhi</strong>
            <br />
            <br />
            CBSE, Senior Secondary: 84.6%
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-8">
            <strong className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">D.A.V.P.S Sreshtha Vihar, Delhi</strong>
            <br />
            <br />
            CBSE, Secondary: 91.2%
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="py-500" id="education">
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
