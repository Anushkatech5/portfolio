import React from 'react';

const techLinks = [
  { name: 'C', href: 'https://docs.microsoft.com/en-us/cpp/?view=msvc-170', imgSrc: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg' },
  { name: 'Dart', href: 'https://dart.dev/', imgSrc: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg' },
  { name: 'Git', href: 'https://git-scm.com/', imgSrc: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg' },
  { name: 'Java', href: 'https://www.oracle.com/java/', imgSrc: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg' },
  // Add other tech stack items with links here
];

const TechStackBox = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-1/4 left-1/4 w-1/2 bg-white rounded-lg shadow-lg p-6 z-50">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4">Tech Stack Links</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {techLinks.map((tech, index) => (
          <a key={index} href={tech.href} target="_blank" rel="noreferrer">
            <img src={tech.imgSrc} alt={tech.name} className="w-12 h-12 mx-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStackBox;
