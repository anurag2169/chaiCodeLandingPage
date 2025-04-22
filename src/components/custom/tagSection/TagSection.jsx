import { InfiniteMovingTags } from "@/components/ui/infinite-moving-tags";
import React from "react";

export const TagSection = ({
  heading = "Topics Cloud",
  subHeading = "You can find videos and courses on topics and much more",
  tags,
}) => {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-4 md:gap-12 overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
            {heading}
          </span>
        </h2>
        <p className="text-sm md:text-md font-thin">{subHeading}</p>
      </div>

      <div className="">
        <InfiniteMovingTags
          items={tags.tagsOne}
          direction="left"
          speed="slow"
          className=""
        />
        <InfiniteMovingTags
          items={tags.tagsTwo}
          direction="right"
          speed="slow"
          className="w-full my-4"
        />
        <InfiniteMovingTags
          items={tags.tagsThree}
          direction="left"
          speed="slow"
          className="w-full"
        />
      </div>
    </section>
  );
};
