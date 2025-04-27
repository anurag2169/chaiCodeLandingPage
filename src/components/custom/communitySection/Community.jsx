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
    <section className="w-[95%] mx-auto md:w-[80%] md:mx-auto">
      <div className="mx-auto md:mx-0 mb-8 border border-orange-300 p-2 md:p-4 rounded-full w-54 text-center font-bold text-xl tracking-wide shadow shadow-orange-500/75">
        {tag}
      </div>
      <main className="flex items-center md:items-start justify-center flex-col gap-10 md:gap-4">
        <div className="flex items-center justify-center md:flex-row flex-col gap-4 md:gap-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-center md:text-left">
            <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
              {heading}
            </span>
          </h2>

          <div className="rounded-2xl">
            <img
              src={image}
              alt={tag}
              className="object-contain w-full rounded-2xl"
            />
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
      </main>
    </section>
  );
};
