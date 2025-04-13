import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export const Testimonials = ({testimonials}) => {
  return (
    <section className="flex items-center flex-col gap-4 md:gap-8 pb-10">
      <div className="border border-orange-300 p-2 md:p-4 rounded-full w-54 text-center font-bold text-xl tracking-wide shadow shadow-orange-500/75">
        Testimonials
      </div>
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-1">
          <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
            Our Students feedback
          </span>
        </h2>
        <p className="text-sm md:text-md font-thin">
          Explore the incredible advantages of enrolling in our courses and
          enhancing your skills.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col gap-10 antialiased items-center justify-center relative overflow-hidden rounded-md">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          className="w-full"
        />
      </div>
    </section>
  );
};


