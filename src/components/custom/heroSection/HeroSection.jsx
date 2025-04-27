import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const HeroSection = ({
  title,
  heading,
  description,
  cta,
  videoLink,
}) => {
  return (
    <section className=" w-full flex flex-col gap-6 justify-center items-center py-10 md:py-18 relative overflow-hidden">
      <Spotlight />
      <motion.div
        className="border border-orange-200 rounded-full p-3  flex justify-center gap-2 items-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <span>
          <Users />
        </span>
        <span>{title}</span>
      </motion.div>
      <div className="flex flex-col gap-2 justify-center items-center w-[90%] md:w-[70%] text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold dark:text-white text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
        >
          {heading}
        </motion.h1>
        <p className="mt-4 font-normal text-sm md:text-md  text-base text-neutral-300 max-w-2xl text-center mx-auto">
          {description}
        </p>
      </div>
      <div className="py-4">
        <a href={cta.link} target="_blank">
          <Button
            size="lg"
            className="cursor-pointer rounded-full py-6 transition-transform duration-300 hover:scale-110"
          >
            {cta.text}
          </Button>
        </a>
      </div>
      <motion.div
        className="w-[90%] lg:w-[60%]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <BackgroundGradient className=" rounded-[22px] p-2 lg:p-4 bg-white dark:bg-zinc-900">
          <iframe
            src={videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl shadow-xl w-full h-[240px] md:h-[400px]"
          ></iframe>
        </BackgroundGradient>
      </motion.div>
    </section>
  );
};
