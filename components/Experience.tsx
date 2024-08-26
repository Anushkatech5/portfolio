"use client";

import React, { useState, useEffect, useRef } from "react";
import { ThreeDCardDemo } from "./3d-CardEffect";
import useDragScroll from "./useDragScroll";

// Example experience data
export const experience = [
  {
    title: "Amazon ML Summer School - Mentee",
    description:
      "Participated in the Amazon ML Summer School, gaining hands-on experience with various Machine Learning topics and practical projects.",
    imageSrc: "/amazon.png",
    link: "https://drive.google.com/file/d/1MTEhmUZif6bMAjoLdU6D0U_XRSflp4dm/view?usp=sharing",
    buttonText: "View Certificate",
  },
  {
    title: "Rising India - HR and Tech Intern",
    description:
      "Worked with IITs and IIMs on recruitment and hiring processes. Designed an Android app front-end using Figma, creating an engaging and user-friendly interface. Developed solutions to enhance app functionality.",
    imageSrc: "/RisingIndia.png",
    link: "https://drive.google.com/file/d/1QEO63SwlREOwCZfr4rjDo4DI5TqZwsu6/view?usp=sharing",
    buttonText: "View Certificate",
  },
  {
    title: "iVolunteer - Graphic Designer and Website Developer",
    description:
      "Enhanced support for underprivileged children through design skills for NGOs. Developed website to effectively convey the NGO's mission.",
    imageSrc: "/image.png",
    link: "https://drive.google.com/file/d/1aryOwHMwe9Yluwr7s3ZOzoXk_0iQl1KO/view?usp=sharing",
    buttonText: "View Certificate",
  },
  {
    title: "go dutch - Brand Ambassador and Program Manager",
    description:
      "Built relationships and set goals for teams while managing various program tasks. Ensured successful execution and high performance across initiatives.",
    imageSrc: "/go.png",
    link: "https://drive.google.com/file/d/1p3XjFEVJKVm3zKskb6H5ZRyqy0M9Gk45/view?usp=sharing",
    buttonText: "View Certificate",
  },
];

const Experience = () => {
  const { containerRef, onMouseDown, onMouseMove, onMouseUp } = useDragScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = container.current;

    const handleScroll = () => {
      if (containerElement) {
        setIsScrolling(true);
        clearTimeout((containerElement as any).scrollTimeout);

        (containerElement as any).scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Hide scrollbar 1 second after scrolling stops
      }
    };

    if (containerElement) {
      containerElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("scroll", handleScroll);
        clearTimeout((containerElement as any).scrollTimeout);
      }
    };
  }, [container]);

  return (
    <div className="py-10" id="experience">
      <h1 className="heading mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div
        className={`overflow-hidden relative mt-4 sm:mt-6 md:mt-8 lg:mt-12 scroll-container ${isScrolling ? "show-scrollbar" : ""}`}
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="flex space-x-6 pb-4">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <ThreeDCardDemo
                title={exp.title}
                description={exp.description}
                imageSrc={exp.imageSrc}
                link={exp.link}
                buttonText={exp.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
