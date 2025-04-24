import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";

export const Community = ({
  tag,
  heading,
  activeMembersText,
  image,
  peoples,
}) => {
  return (
    <section className="border border-orange-200/50 rounded-3xl px-5 shadow shadow-orange-800 w-[95%] mx-auto md:w-[80%] md:mx-auto flex items-center justify-center flex-col gap-4 md:gap-18 py-10 md:py-10 my-12">
      <div className="flex items-center justify-center md:flex-row flex-col gap-10 md:gap-20">
        <div className="flex items-center md:items-start flex-col">
          <div className="mb-10 border border-orange-300 p-2 md:p-4 rounded-full w-54 text-center font-bold text-xl tracking-wide shadow shadow-orange-500/75">
            {tag}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-center md:text-left">
            <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
              {heading}
            </span>
          </h2>
        </div>

        <div className="w-full mx-4  rounded-2xl h-80">
          <img src={image} alt={tag} className="h-full w-full object-contain" />
        </div>
      </div>
      <div className="text-center">
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={peoples} />
        </div>
        <div className="ml-3 mt-2 text-gray-400 text-md font-semibold tracking-wide">
          {activeMembersText}
        </div>
      </div>
    </section>
  );
};
