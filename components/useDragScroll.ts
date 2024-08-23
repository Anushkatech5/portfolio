// components/useDragScroll.ts
"use client";

import { useRef, useState, useCallback } from 'react';

const useDragScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust the multiplier for sensitivity
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  }, [isDragging, startX, scrollLeft]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    containerRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};

export default useDragScroll;
