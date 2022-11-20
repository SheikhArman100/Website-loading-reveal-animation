import { motion } from "framer-motion";
import React from "react";
import image1 from "../assets/image1_tiny.jpg";
import image3 from "../assets/image3_tiny.jpg";
import image4 from "../assets/image4_tiny.jpg";
import image5 from "../assets/image5_tiny.jpg";
import image6 from "../assets/image6_tiny.jpg";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

// eslint-disable-next-line react/prop-types
function Loader({ setLoading }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className="relative flex h-screen w-screen origin-center items-center justify-center"
    >
      <ImageConatiner
        name={image6}
        effect="absolute w-[600px] bottom-[6%] left-[14%] md:w-[400px] xs:left-[4%] xs:bottom-[20%] xs:w-[250px] sm:w-[400px] sm:left-[6%] sm:bottom-[16%]"
        variant={item}
        id="1"
      />
      <motion.div
        variants={itemMain}
        className="absolute w-[800px] object-fill xs:w-[300px] sm:w-[450px] md:w-[500px]"
      >
        <motion.img src={image3} alt="" id="2" layoutId="main-image" />
      </motion.div>

      <ImageConatiner
        name={image4}
        effect="absolute w-[450px] right-[10%] top-[8%] md:right-[12%] md:top-[12%] md:w-[350px] xs:top-[12%] xs:right-[4%] xs:w-[200px] sm:w-[300px] sm:right-[6%]"
        variant={item}
        id="3"
      />
      <ImageConatiner
        name={image5}
        effect="absolute w-[550px] right-[18%] bottom-[4%] md:w-[40%] md:max-w-[400px] xs:right-[6%] xs:bottom-[12%] xs:w-[250px] sm:w-[350px] sm:right-[6%] sm:bottom-[10%]"
        variant={item}
        id="4"
      />
      <ImageConatiner
        name={image1}
        effect="absolute w-[400px] left-[16%] top-[2%] md:w-[250px] xs:left-[2%] xs:top-[4%] xs:w-[200px] sm:w-[250px] sm:left-[6%]"
        variant={item}
        id="5"
      />
    </motion.div>
  );
}

// eslint-disable-next-line react/prop-types
function ImageConatiner({ name, effect, variant, id }) {
  return (
    <motion.div variants={variant} className={effect}>
      <img src={name} alt={id} />
    </motion.div>
  );
}

export default Loader;
