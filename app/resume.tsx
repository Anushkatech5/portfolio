import React from 'react';
import ResumeImage from '../components/ui/ResumeImage';

const Resume: React.FC = () => {
    return (
        <section id="resume" className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">My Resume</h2>
                <ResumeImage />
            </div>
        </section>
    );
};

export default Resume;
