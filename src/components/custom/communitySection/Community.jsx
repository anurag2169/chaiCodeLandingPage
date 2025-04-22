import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import React from "react";

export const Community = ({
  title = "Community",
  heading = "Join our community where creativity thrives",
  btnText = "80,000 Active coders in Discord",
  image = "https://hiteshchoudhary.b-cdn.net/coding-hero-v2/hc-laptop.png",
  imgAlt = "community",
}) => {
  return (
    <section className="border border-orange-200/50 rounded-3xl px-5 shadow shadow-orange-800 w-[95%] mx-auto md:w-[80%] md:mx-auto flex items-center justify-center flex-col gap-4 md:gap-18 py-10 md:py-10 my-12">
      <div className="flex items-center justify-center md:flex-row flex-col gap-10 md:gap-20">
        <div className="flex items-center md:items-start flex-col">
          <div className="mb-10 border border-orange-300 p-2 md:p-4 rounded-full w-54 text-center font-bold text-xl tracking-wide shadow shadow-orange-500/75">
            {title}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-center md:text-left">
            <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
              {heading}
            </span>
          </h2>
        </div>

        <div className="w-full mx-4  rounded-2xl h-80">
          <img
            src={image}
            alt={imgAlt}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <Button className="py-5 cursor-pointer text-md md:text-lg bg-primary border border-orange-200 shadow shadow-orange-400  px-10 h-14 rounded-full transition-transform duration-300 hover:scale-110">
        {btnText}
      </Button>
    </section>
  );
};
