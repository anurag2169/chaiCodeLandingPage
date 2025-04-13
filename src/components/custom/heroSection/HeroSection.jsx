import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Users } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section className=" w-full flex flex-col gap-6 justify-center items-center py-10 md:py-18 relative overflow-hidden">
      <Spotlight />
      <div className="border border-orange-200 rounded-full p-3  flex justify-center gap-2 items-center">
        <span>
          <Users />
        </span>
        <span>Trusted by 1.5M Code Learners</span>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-[90%] md:w-[70%] text-center">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-center">
          Consistency and Community Learning for coding courses
        </h1>
        <p className="mt-4 font-normal text-sm md:text-md  text-base text-neutral-300 max-w-2xl text-center mx-auto">
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, peer learning peer code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </p>
      </div>
      <div className="py-4">
        <Button
          size="lg"
          className="cursor-pointer rounded-lg py-6 transition-transform duration-300 hover:scale-110"
        >
          Check all Live Cohorts
        </Button>
      </div>
      <div className="w-[90%] lg:w-[60%]">
        <BackgroundGradient className=" rounded-[22px] p-2 lg:p-4 bg-white dark:bg-zinc-900">
            <iframe
              src="https://www.youtube.com/embed/QIFhevCENrU?si=tcJ1ZkUGU0FSQKUN&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl shadow-xl w-full h-[240px] md:h-[400px]"
            ></iframe>
        </BackgroundGradient>
      </div>
    </section>
  );
};
