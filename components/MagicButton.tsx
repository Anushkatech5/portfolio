"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  showIconOnHover = false, // New prop to control icon and background on hover
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  showIconOnHover?: boolean; // New prop
}) => {
  return (
    <button
  className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[1px] focus:outline-none group ${otherClasses}`}
  onClick={handleClick}
>
  {/* Spinning conic-gradient border */}
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

  {/* Main content of the button with overlay */}
  <span
    className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative ${
      showIconOnHover ? "" : "bg-transparent"
    }`}
  >
    {/* Overlay with transparent background on hover for specific buttons */}
    {showIconOnHover && (
      <span className="absolute inset-0 bg-transparent transition-colors duration-500 ease-in-out group-hover:bg-white group-hover:bg-opacity-10" />
    )}

    {/* GitHub Icon that appears in the center on hover for specific buttons */}
    {showIconOnHover && (
      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <FaGithub className="text-white text-2xl" />
      </span>
    )}

    {/* Button text and icon */}
    <span
  className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
    px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-opacity duration-500 ease-in-out ${
      showIconOnHover ? "group-hover:opacity-0" : ""
    }`}
  style={{ fontSize: '16px' }} // Inline style to adjust font size
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
