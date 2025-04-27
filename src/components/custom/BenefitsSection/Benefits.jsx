"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function Benefits({
  heading = "Key Benefits of Cohorts",
  subHeading = "Cohorts are best way to learn because you finish the course in a timely manner",
  gridItems,
  alumniNetwork,
}) {
  return (
    <>
      <section className="w-full flex items-center justify-center flex-col gap-4 md:gap-12 pb-10">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
              {heading}
            </span>
          </motion.h2>
          <motion.p
            className="text-sm md:text-md font-thin"
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
        <div className="w-[80%]">
          <ul className="w-full grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
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
                    dots={alumniNetwork.locations}
                  />
                </div>
                <div className="w-full">
                  <div className="space-y-3">
                    <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                      {alumniNetwork.heading}
                    </h3>
                    <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                      {alumniNetwork.subheading}
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
