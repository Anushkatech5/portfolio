"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[1px] focus:outline-none group"  // Adjusted for conic-gradient border
      onClick={handleClick}
    >
      {/* Spinning conic-gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Main content of the button with overlay */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {/* Overlay with transparent background on hover */}
        <span className="absolute inset-0 bg-transparent transition-colors duration-500 ease-in-out group-hover:bg-white group-hover:bg-opacity-10" />

        {/* GitHub Icon that appears in the center on hover */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <FaGithub className="text-white text-2xl" />
        </span>

        {/* Button text and icon */}
        <span
          className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
            px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-opacity duration-500 ease-in-out group-hover:opacity-0 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </span>
    </button>
  );
};

export default MagicButton;
