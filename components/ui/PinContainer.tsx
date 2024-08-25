import React from "react";

interface PinContainerProps {
  title: string;
  link: string;
  children: React.ReactNode;
}

const PinContainer: React.FC<PinContainerProps> = ({ title, link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative' }}
    >
      <div className="relative p-4">
        {children}
        <h3 className="text-white font-bold text-lg mt-2">{title}</h3>
      </div>
    </a>
  );
};

export default PinContainer;
