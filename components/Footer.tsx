"use client";
import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[80px] md:mb-5" id="contact">
      <div className="flex py-40 flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-2xl md:text-3xl">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-00 md:mt-8 my-4 text-center text-sm md:text-base">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>
        <div className="flex flex-col items-center">
          <a href="mailto:guptaanushka024@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="text-[10px]" // Explicitly setting font size to 10px
            />
          </a>
          <div className="flex mt-10 gap-8">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 cursor-pointer flex justify-center items-center saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-neutral-300"
              >
                <img src={profile.img} alt={profile.id} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <p className="md:text-sm text-xs md:font-normal font-light text-center">
          Copyright © 2024 Anushka
        </p>
      </div>
    </footer>
  );
};

export default Footer;
