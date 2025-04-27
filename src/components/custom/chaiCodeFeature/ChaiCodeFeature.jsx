import React from "react";
import { FeatureGrid } from "./FeatureGrid";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const ChaiCodeFeature = ({ heading, subheading, items, cta }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
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
          className="text-sm md:text-md font-thin pt-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {subheading}
        </motion.p>
      </div>

      <div className="py-10">
        <FeatureGrid items={items} />
      </div>
      <div>
        <a href={cta.link} target={cta.target} rel="noopener noreferrer">
          <Button className="py-5 cursor-pointer bg-primary border w-52 h-14 rounded-full transition-transform duration-300 hover:scale-110">
            {cta.text}
          </Button>
        </a>
      </div>
    </section>
  );
};
