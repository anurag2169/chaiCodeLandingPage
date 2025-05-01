import React from "react";
import { CohortCard } from "./CohortCard";
import { motion } from "framer-motion";

export const LiveCohort = ({ heading, subHeading, liveCohorts }) => {
  return (
    <section id="cohorts" className="w-full flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-3xl md:text-5xl font-bold "
        >
          <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
            {heading}
          </span>
        </motion.h2>
        <motion.p
          className="text-md font-thin my-1"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-12">
        {liveCohorts &&
          liveCohorts.map((cohort, index) => (
            <div key={index}>
              <CohortCard
                title={cohort.title}
                description={cohort.description}
                videoEmbedUrl={cohort.videoEmbedUrl}
                savePercent={cohort.savePercent}
                originalPrice={cohort.originalPrice}
                currentPrice={cohort.currentPrice}
                buyLink={cohort.buyLink}
                startDate={cohort.startDate}
                duration={cohort.duration}
                tags={cohort.tags}
              />
            </div>
          ))}
      </div>
    </section>
  );
};
