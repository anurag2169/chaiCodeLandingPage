import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { motion } from "framer-motion";

export const Testimonials = ({
  title,
  heading,
  subHeading,
  btnText,
  btnLink,
  btnTarget,
  testimonials,
}) => {
  return (
    <section
      id="review"
      className="flex items-center flex-col gap-4 md:gap-8 pb-10"
    >
      <div className="border border-orange-300 p-2 md:p-4 rounded-full w-54 text-center font-bold text-xl tracking-wide shadow shadow-orange-500/75">
        {title}
      </div>
      <div className="text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
            {heading}
          </span>
        </motion.h2>
        <motion.p
          className="text-sm md:text-md font-thin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {subHeading}
        </motion.p>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col gap-10 antialiased items-center justify-center relative overflow-hidden rounded-md">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          className="w-full"
        />
      </div>
      <div>
        <a href={btnLink} target={btnTarget} rel="noopener noreferrer">
          <Button className="py-5 cursor-pointer bg-primary border w-52 h-14 rounded-full transition-transform duration-300 hover:scale-110">
            {btnText}
          </Button>
        </a>
      </div>
    </section>
  );
};
