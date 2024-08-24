"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils/cn";

import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/MagicButton";

// BentoGrid component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem component
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "guptaanushka024@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleTechStackToggle = () => {
    setShowTechStack(!showTechStack);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none",
        className
      )}
      onClick={togglePopup}
      style={{
        cursor: 'pointer',
      }}
    >
      {/* Existing content here */}

      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
      )}

      <div className={cn(titleClassName, "relative p-5 lg:p-10")}>
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
          {title}
        </div>

        {id === 2 && <GridGlobe />}

        {/* Tech Stack list div */}
        {id === 3 && (
          <div
            className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 cursor-pointer group-hover:cursor-pointer"
            onClick={handleTechStackToggle}
          >
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            <div className={cn("absolute -bottom-5 right-0", { block: copied })}>
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>

      {/* Tech Stack Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0d1b2a] bg-opacity-90 z-50" onClick={() => setShowPopup(false)}>
          <div className="relative p-4 bg-darkBlue rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-lg font-bold"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <div className="grid grid-cols-5 gap-4">
              {leftLists.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img
                    src={`/path-to-your-tech-images/${item}.png`} // Replace with actual paths
                    alt={item}
                    className="w-12 h-12"
                  />
                  <span className="text-white mt-2">{item}</span>
                </div>
              ))}
              {rightLists.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img
                    src={`/path-to-your-tech-images/${item}.png`} // Replace with actual paths
                    alt={item}
                    className="w-12 h-12"
                  />
                  <span className="text-white mt-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};