import React, { useState } from 'react';
import { techStack } from '@/data/techStackData'; // Ensure this data exists

interface TechStackBoxProps {
  id: number;
  title?: string | React.ReactNode;
}

const TechStackBox: React.FC<TechStackBoxProps> = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to toggle the tech stack box */}
      <div
        className="cursor-pointer"
        onClick={toggleBox}
        onMouseEnter={(e) => (e.currentTarget.style.cursor = 'pointer')}
      >
        {title}
      </div>

      {/* Pop-up box with tech stack grid */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleBox}
        >
          <div
            className="bg-[#10132E] rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
          >
            <div className="flex justify-between mb-4">
              {/* Optional left and right lists */}
              <div className="mr-4">
                {/* Left list content here */}
              </div>
              <div className="text-center text-white text-lg font-semibold">
                Tech Stack
              </div>
              <div className="ml-4">
                {/* Right list content here */}
              </div>
            </div>

            {/* Scrollable grid container */}
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-gray-800 rounded-lg"
                  >
                    <img
                      src={tech.imgSrc}
                      alt={tech.name}
                      className="h-12 w-12 mb-2"
                    />
                    <span className="text-white text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Close button */}
            <div
              className="absolute top-4 right-4 cursor-pointer text-white"
              onClick={toggleBox}
            >
              &#x2715; {/* X mark */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechStackBox;
