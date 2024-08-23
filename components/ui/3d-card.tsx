"use client";
import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
  containerClassName,
}) => (
  <div className={`${containerClassName} ${className}`}>
    {children}
  </div>
);

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}

export const CardItem: React.FC<CardItemProps> = ({
  as: Component = "div",
  translateX,
  translateY,
  translateZ,
  rotateX,
  rotateY,
  rotateZ,
  className,
  ...props
}) => {
  const transform = [
    translateX !== undefined ? `translateX(${translateX})` : "",
    translateY !== undefined ? `translateY(${translateY})` : "",
    translateZ !== undefined ? `translateZ(${translateZ})` : "",
    rotateX !== undefined ? `rotateX(${rotateX})` : "",
    rotateY !== undefined ? `rotateY(${rotateY})` : "",
    rotateZ !== undefined ? `rotateZ(${rotateZ})` : "",
  ].join(" ");

  return (
    <Component className={className} style={{ transform }} {...props} />
  );
};
