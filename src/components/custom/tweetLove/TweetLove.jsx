import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { TwitterCard } from "../twitterCard/TwitterCard";

export const TweetLove = ({ heading, subheading, tweets = [], cta }) => {
  return (
    <section className="w-full bg-gray-950 flex flex-col justify-center items-center gap-4 py-8">
      <div className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.span
            className="text-md font-thin block tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {subheading}
          </motion.span>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold "
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-orange-300 to-amber-600 text-transparent bg-clip-text">
              {heading}
            </span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="mx-6 md:mx-0 flex flex-col md:flex-row gap-6 py-5 md:py-8 flex-wrap justify-center">
        {tweets &&
          tweets.map(
            ({ tweetText, profileImage, name, handle, verified, index }) => (
              <TwitterCard
                key={index}
                name={name}
                tweetText={tweetText}
                profileImage={profileImage}
                handle={handle}
                verified={verified}
              />
            )
          )}
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
