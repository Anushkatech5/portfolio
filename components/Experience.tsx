"use client";

import React from 'react';
import { ThreeDCardDemo } from './3d-CardEffect';
import useDragScroll from './useDragScroll';

const Experience = () => {
  const { containerRef, onMouseDown, onMouseMove, onMouseUp } = useDragScroll();

  return (
    <div className="py-50" id="experience">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div
        className="overflow-hidden relative mt-10"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="flex space-x-6 pb-4">
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <ThreeDCardDemo />
          </div>
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <ThreeDCardDemo />
          </div>
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <ThreeDCardDemo />
          </div>
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <ThreeDCardDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
