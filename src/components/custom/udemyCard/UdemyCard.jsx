import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Globe, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UdemyCard = ({
  ratingText,
  title,
  description,
  authorName,
  authorLink,
  lastUpdated,
  language,
  ratings,
  learners,
  videoSrc,
  price,
  originalPrice,
  discount,
  buyLink,
}) => {
  return (
    <Card>
      <CardContent className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="w-full flex flex-col gap-4">
          <div>
            <div className="border-2 rounded-xl p-1 px-2 mb-1 inline-flex items-center gap-2 shadow-sm shadow-gray-500/25">
              <span className="font-bold text-md md:text-xl bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
                {ratingText}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
            <p className="text-sm md:text-md font-thin mt-1">{description}</p>
          </div>
          <p className="text-sm font-semibold">
            Created by{" "}
            <span className="underline text-primary/75 cursor-pointer">
              <a href={authorLink} target="_blank" rel="noopener noreferrer">
                {authorName}
              </a>
            </span>
          </p>
          <div className="flex flex-col gap-2">
            <div className="inline-flex gap-2 items-center text-sm">
              <Calendar className="w-5" />
              <span>Last updated {lastUpdated}</span>
            </div>
            <div className="inline-flex gap-2 items-center text-sm">
              <Globe className="w-5" />
              <span>{language}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 text-sm md:text-md md:gap-10">
            <div className="inline-flex gap-2 items-center">
              <Star className="w-5" />
              <span>{ratings} ratings</span>
            </div>
            <div className="inline-flex gap-2 items-center">
              <Users className="w-5" />
              <span>{learners} learners</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:p-2 flex flex-col gap-4">
          <div>
            <iframe
              width="560"
              height="315"
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full rounded-xl"
            ></iframe>
          </div>
          <div>
            <div className="inline-flex gap-2 items-center">
              <span className="text-xl font-bold">{price}</span>
              <span className="text-sm text-gray-400/75 line-through">
                {originalPrice}
              </span>
              <span>|</span>
              <div className="text-md font-normal text-gray-300">
                {discount}
              </div>
            </div>
            <a href={buyLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full mt-2 cursor-pointer  transition-transform duration-300 hover:scale-95">
                Buy Now
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
