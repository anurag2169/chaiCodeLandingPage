import React from "react";
import { UdemyCarousel } from "../carousel/UdemyCarousel";
import { motion } from "framer-motion";
export const CoursesSection = ({
  heading = "Udemy",
  subHeading = "Not only in India, we are global leaders in tech education",
  courses,
}) => {
  return (
    <section className="w-full flex items-center flex-col gap-4 md:gap-8 pb-10">
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

      <div className="w-[90%] lg:w-[80%]">
        <UdemyCarousel udemyCourses={courses} />
      </div>
    </section>
  );
};
