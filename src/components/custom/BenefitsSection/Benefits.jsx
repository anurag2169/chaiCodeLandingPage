"use client";
import {
  BookAIcon,
  Building2Icon,
  Code2Icon,
  IndianRupeeIcon,
  Sparkles,
  User2Icon,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import WorldMap from "@/components/ui/world-map";

export function Benefits({
  heading = "Key Benefits of Cohorts",
  subHeading = "Cohorts are best way to learn because you finish the course in a timely manner",
}) {
  return (
    <>
      <section className="w-full flex items-center justify-center flex-col gap-4 md:gap-12 pb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-1">
            <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
              {heading}
            </span>
          </h2>
          <p className="text-sm md:text-md font-thin">{subHeading}</p>
        </div>
        <div className="w-[80%]">
          <ul className="w-full grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
            <GridItem
              icon={
                <User2Icon className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Taught by Professionals"
              description="Our cohorts are being taught by top industry experts and educators"
            />
            <GridItem
              icon={
                <Building2Icon className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Coding hostels"
              description="There is nothing like late night discussion with fellow learners and solving bugs"
            />
            <GridItem
              icon={
                <IndianRupeeIcon className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Bounties"
              description="Earn rewards, from Cash to MacBook. Keeps you motivated to work hard"
            />
            <GridItem
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Peer Code Reviews"
              description="With Our internal tools like Masterji, every code assignment gets feedback to improve your code"
            />
            <GridItem
              icon={
                <Code2Icon className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Leet Lab"
              description="Our In-hourse built LeetCode style platform that helps you to understand foundation of programming language"
            />
            <GridItem
              icon={
                <BookAIcon className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Revision classes"
              description="We have so many peer classes by fellow learners that you get so many chances to learn that topic"
            />
          </ul>
          <div className=" relative h-full rounded-2xl border mt-4 p-2 md:rounded-3xl md:p-3">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
              <div className="relative flex flex-col md:flex-row flex-1 justify-between items-center gap-4">
                <div className="w-full rounded-xl">
                  <WorldMap
                    lineColor="oklch(0.705 0.213 47.604)"
                    dots={[
                      {
                        start: {
                          lat: 64.2008,
                          lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                          lat: 34.0522,
                          lng: -118.2437,
                        }, // Los Angeles
                      },
                      {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                      },
                      {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                      },
                      {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      },
                      {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                      },
                      {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                      },
                      {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -50.2921, lng: 150.8219 }, // Nairobi
                      },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <div className="space-y-3">
                    <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                      Alumni Network and job listings
                    </h3>
                    <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                      The alumni Network that you always wished for in your
                      college. We have a dedicated platform where students get
                      to know each other, do projects, make agencies and join
                      Hackathons. Our HR team also post regular job updates that
                      you can apply directly whenever you are ready
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
