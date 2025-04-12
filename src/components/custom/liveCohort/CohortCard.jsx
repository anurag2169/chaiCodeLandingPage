import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar1, Clock } from "lucide-react";

export const CohortCard = ({
  title,
  description,
  videoEmbedUrl,
  currentPrice,
  originalPrice,
  buyLink,
  tags,
  startDate,
  duration,
  savePercent,
}) => {
  return (
    <div className="rounded-xl pb-4 w-full bg-gray-900/50 transition-transform duration-300 hover:hover:-translate-y-2 hover:shadow-md cursor-pointer">
      <div className="relative">
        <div className="h-54">
          <iframe
            src={videoEmbedUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-full rounded-t-xl"
          ></iframe>
        </div>
        <div className="absolute bottom-2 mx-4 flex gap-2">
          {tags &&
            tags.map((tag, index) => (
              <div
                key={index}
                className="border rounded-md  border-orange-400 bg-black/75 p-1 px-2 text-xs"
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
      <section className="p-5 flex flex-col">
        <div className="text-red-500 font-normal tracking-wider inline-flex gap-2 mb-1 text-sm items-center">
          <span className="inline-block bg-red-500 bg-opacity-50 rounded-full h-2 w-2 flex items-center justify-center animate-pulse">
            <span
              className="bg-red-500 rounded-full h-1 w-1"
              aria-hidden="true"
            ></span>
          </span>
          LIVE
        </div>
        <h3 className="text-xl font-bold mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
        <div className="flex gap-14 my-4">
          <div className="text-xs text-gray-200/75 inline-flex gap-2 items-center">
            <span>
              <Calendar1 className="w-4 h-4 text-primary" />
            </span>
            {startDate}
          </div>
          <div className="text-xs text-gray-200/75 inline-flex gap-2 items-center">
            <span>
              <Clock className="w-4 h-4 text-primary" />
            </span>
            {duration}
          </div>
        </div>
        <div className="">
          <span className="text-xl font-bold text-white">{currentPrice}</span>
          <span className="text-sm text-gray-500 line-through ml-2">
            {originalPrice}
          </span>
        </div>
        <div className="text-xs text-primary my-2">Save {savePercent}</div>
        <Button className=" cursor-pointer mt-2 transition-transform duration-300 hover:scale-95">
          <a href={buyLink}>Learn More</a>
        </Button>
      </section>
    </div>
  );
};
