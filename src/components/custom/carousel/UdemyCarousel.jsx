import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UdemyCard } from "../udemyCard/UdemyCard";
import Autoplay from "embla-carousel-autoplay";

export const UdemyCarousel = ({ udemyCourses }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="w-full h-full">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full h-full"
      >
        <CarouselContent>
          {udemyCourses.map((course, index) => (
            <CarouselItem key={index}>
              <UdemyCard {...course} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
};
