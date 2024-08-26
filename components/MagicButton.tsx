"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  showIconOnHover = false,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  showIconOnHover?: boolean;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[1px] focus:outline-none group ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative ${
          showIconOnHover ? "" : "bg-transparent"
        }`}
      >
        {showIconOnHover && (
          <span className="absolute inset-0 bg-transparent transition-colors duration-500 ease-in-out group-hover:bg-white group-hover:bg-opacity-10" />
        )}

        {showIconOnHover && (
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <FaGithub className="text-white text-2xl" />
          </span>
        )}

        <span
          className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
          px-7 text-white backdrop-blur-3xl gap-2 transition-opacity duration-500 ease-in-out ${
            showIconOnHover ? "group-hover:opacity-0" : ""
          } 
          text-[18px] md:text-[18px] sm:text-[4vw]`} // Adjusted text size
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
