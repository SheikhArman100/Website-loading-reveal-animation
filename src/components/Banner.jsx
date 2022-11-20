/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
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
      className="relative flex flex-col px-[4rem] pt-[8rem] sm:px-[0rem] sm:pt-[4rem] md:px-[1rem] lg:px-[3rem]"
      variants={banner}
    >
      {/* ---------------Top---------------------- */}
      <div className="mx-16 flex items-center justify-between  md:mx-2">
        <div className="ml-[14rem] md:ml-[0rem] lg:ml-[5rem]">
          <AnimatedLetters title="dream" />
        </div>
        <motion.p
          className="mr-[20rem] w-[20rem] text-[1.4rem] font-semibold leading-[2.4rem] text-gray-300 sm:text-[1.2rem] md:mr-[0rem] md:w-[16rem] lg:mr-[3.5rem]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
        >
          Experience the technology of the future today-Entertainemnt
        </motion.p>
      </div>
      {/* ------------------Middle-------------------------- */}
      <div className={`marquee pt-[8rem] ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className="marquee__inner"
        >
          <AnimatedLetters title="work hard" disabled />
          <AnimatedLetters title="work hard" />
          <AnimatedLetters title="work hard" disabled />
          <AnimatedLetters title="work hard" disabled />
        </motion.div>
      </div>

      {/* ------------------------Bottom---------------------------- */}
      <div className="absolute mt-[26.5rem] flex w-full items-center  md:mt-[24rem] ">
        <motion.div
          className="ml-[10rem] flex h-[15rem] w-[15rem] items-center justify-center rounded-full bg-red-600 xs:h-[1rem] xs:w-[1rem] md:h-[12.5rem] md:w-[12.5rem] lg:ml-[8rem]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            Scroll
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            down
          </motion.span>
        </motion.div>
        <div className="absolute flex w-full justify-center">
          <AnimatedLetters title="drive" />
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedLetters({ title, disabled }) {
  return (
    <motion.span
      className="relative inline-block  whitespace-nowrap tracking-[-0.8rem] "
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.span
          className="text-[16rem] font-bold sm:text-[1.4rem] sm:font-semibold md:text-[13rem]"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
export default Banner;

git branch -M main
git remote add origin https://github.com/SheikhArman100/Website-loading-reveal-animation.git
git push -u origin main