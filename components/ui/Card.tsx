import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  link,
  buttonText,
}) => {
  const transformItem = (
    translateX?: number | string,
    translateY?: number | string,
    translateZ?: number | string,
    rotateX?: number | string,
    rotateY?: number | string,
    rotateZ?: number | string
  ) => {
    return [
      translateX !== undefined ? `translateX(${translateX})` : "",
      translateY !== undefined ? `translateY(${translateY})` : "",
      translateZ !== undefined ? `translateZ(${translateZ})` : "",
      rotateX !== undefined ? `rotateX(${rotateX})` : "",
      rotateY !== undefined ? `rotateY(${rotateY})` : "",
      rotateZ !== undefined ? `rotateZ(${rotateZ})` : "",
    ].join(" ");
  };

  return (
    <div className="bg-gray-50 relative group dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border shadow-lg max-w-sm mx-auto">
      <div
        style={{ transform: transformItem(undefined, undefined, "50px") }}
        className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
      >
        {title}
      </div>
      <p
        style={{ transform: transformItem(undefined, undefined, "60px") }}
        className="text-neutral-500 text-sm dark:text-neutral-300 mb-4"
      >
        {description}
      </p>
      <div
        style={{ transform: transformItem(undefined, undefined, "100px") }}
        className="w-full mb-4"
      >
        <Image
          src={imageUrl}
          height="300"
          width="300"
          className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
          alt="thumbnail"
        />
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={link}
          target="__blank"
          style={{ transform: transformItem(undefined, undefined, "20px") }}
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </Link>
        <button
          style={{ transform: transformItem(undefined, undefined, "20px") }}
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
