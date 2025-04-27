import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import React from "react";

export const Community = ({
  tag,
  heading,
  activeMembersText,
  image,
  peoples,
  discordLink,
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

          <motion.div
            className="rounded-2xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <BackgroundGradient className="rounded-[22px] p-2 lg:p-2 bg-white dark:bg-zinc-900">
              <img
                src={image}
                alt={tag}
                className="object-cover w-full rounded-2xl"
              />
            </BackgroundGradient>
          </motion.div>
        </div>
        <div className="text-center">
          <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={peoples} />
          </div>
          <a href={discordLink} target="_blank">
            <div className="ml-3 mt-2 text-gray-400 hover:text-gray-500 text-md font-semibold tracking-wide hover:underline cursor-pointer">
              {activeMembersText}
            </div>
          </a>
        </div>
      </main>
    </section>
  );
};
