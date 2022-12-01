/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import image3 from "../assets/image3_tiny.jpg";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function Banner() {
  const [playMarquee, setPlayMarquee] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div
      className="relative mt-6 flex flex-col space-y-6 "
      variants={banner}
      initial="initial"
      animate="animate"
    >
      <div className="mx-2 flex items-center justify-between space-x-4 sm:mx-12 md:mx-[5rem] md:space-x-10 lg:mx-[6rem] xl:mx-[8rem]">
        <AnimatedLetters title="dream" />
        <motion.p
          className=" mt-4 flex w-full text-[0.6rem] leading-[0.7rem] text-gray-400 sm:max-w-[16rem] sm:text-[0.8rem] lg:text-[1rem] lg:leading-[1rem]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.4,
          }}
        >
          Experience the technology of the future today-Entertainemnt
        </motion.p>
      </div>
      <div
        className={`marquee h-full w-full md:py-4 lg:py-6 xl:py-8 ${
          playMarquee && "animate"
        }`}
      >
        <motion.div
          className="marquee__inner flex space-x-6 "
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
        >
          <AnimatedLetters title="workhard" disabled />
          <AnimatedLetters title="workhard" />
          <AnimatedLetters title="workhard" />
          <AnimatedLetters title="workhard" />
          <AnimatedLetters title="workhard" disabled />
        </motion.div>
      </div>

      <div className="relative flex h-full w-full flex-col">
        <div className="flex items-center">
          <motion.div
            className="ml-2 rounded-full bg-red-500 p-7 sm:ml-6 md:p-12 lg:ml-10 xl:ml-[4rem] xl:p-14"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.4,
              delay: 1,
            }}
          >
            <motion.p
              className="text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.8,
              }}
            >
              scroll
            </motion.p>
            <motion.p
              className="text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.8,
              }}
            >
              down
            </motion.p>
          </motion.div>
          <div className="absolute ml-5 flex w-full items-center justify-center">
            <AnimatedLetters title="drive" />
          </div>
        </div>
        <div className=" absolute top-12 z-[-100] aspect-[1/0.8] md:top-[4rem] md:aspect-[1/0.5] 2xl:top-[5rem]">
          <motion.img
            src={image3}
            alt=""
            className="h-full w-full object-fill"
            layoutId="main-image"
            transition={{
              ease: [0.6, 0.01, -0.05, 0.9],
              duration: 0.6,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedLetters({ title, disabled }) {
  return (
    <motion.h1
      className="relative flex whitespace-nowrap py-6 tracking-[-0.4rem] sm:py-7 "
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.p
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="h-full text-[5rem] font-bold sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem]"
          variants={letterAnimation}
        >
          {letter}
        </motion.p>
      ))}
    </motion.h1>
  );
}

export default Banner;
