import { Button } from "@/components/ui/button";
import React from "react";

export const FreeApiSection = ({
  title,
  heading,
  description,
  btnText,
  btnLink,
  btnTarget,
  videoLink,
}) => {
  return (
    <section className="w-[95%] mx-auto md:w-[80%] md:mx-auto flex items-center justify-center flex-col gap-4 md:gap-10">
      <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-center md:text-left">
        <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
          {title}
        </span>
      </h2>
      <div className="flex items-center justify-center md:flex-row flex-col gap-10 md:gap-20">
        <div className="flex items-center md:items-start flex-col ">
          <h2 className="w-[80%] text-3xl lg:text-5xl font-bold mb-2 text-center md:text-left">
            {heading}
          </h2>
          <p className="w-[80%] text-center md:text-left mt-2 text-gray-300">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-[130%]">
          <iframe
            height="264"
            src={videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full rounded-xl"
          ></iframe>
        </div>
      </div>
      <div>
        <a href={btnLink} target={btnTarget} rel="noopener noreferrer">
          <Button className="py-5 cursor-pointer bg-primary border w-56 h-14 rounded-full transition-transform duration-300 hover:scale-110">
            {btnText}
          </Button>
        </a>
      </div>
    </section>
  );
};
