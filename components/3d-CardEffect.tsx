import React from "react";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  buttonText: string;
}

export const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({
  title,
  description,
  imageSrc,
  link,
  buttonText,
}) => {
  return (
    <div className="transform transition-transform duration-500 hover:scale-105 shadow-lg rounded-xl bg-black-200 p-4 w-[24rem] sm:w-[28rem] lg:w-[32rem]">
      {/* Title (Designation) */}
      <div className="text-xl font-bold-200 text-white-600 text-center mb-2">
        {title}
      </div>

      {/* Company Name */}
      <div className="text-md text-white-100 text-center mb-4">
        {description}
      </div>

      {/* Image */}
      <div className="relative w-full h-36 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transform scale-75" // Apply a zoom-out effect
        />
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
