import React from "react";
import { CohortCard } from "./CohortCard";

export const LiveCohort = ({ heading, subHeading, liveCohorts }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold ">
          <span className="bg-gradient-to-r from-orange-300 to-amber-500 text-transparent bg-clip-text">
            {heading}
          </span>
        </h2>
        <h4 className="font-thin text-xl my-2">{subHeading}</h4>
        <div className="border-2 mt-1 w-24 m-auto border-orange-400 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mx-12">
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
