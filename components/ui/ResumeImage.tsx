// file: components/ui/ResumeImage.tsx
import React from 'react';

const ResumeImage: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <a href="/Anushka Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View Resume
            </a>
        </div>
    );
};

export default ResumeImage;
