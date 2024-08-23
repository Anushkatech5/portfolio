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
        <p className="text-neutral-700 md:mt-8 my-4 text-center text-sm md:text-base">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:guptaanushka024@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-14 md:flex-row flex-col justify-between items-center">
        <p className="md:text-sm text-xs md:font-normal font-light">
          Copyright © 2024 Anushka
        </p>

        <div className="flex items-center md:gap-2 gap-4">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-8 h-8 cursor-pointer flex justify-center items-center saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-neutral-300"
            >
              <img src={profile.img} alt={profile.id} width={16} height={16} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
