import { motion } from "framer-motion";
import React from "react";
import image3 from "../assets/image3_tiny.jpg";
import Banner from "../components/Banner";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="relative flex  w-screen flex-col">
      <Header />
      <Banner />
      <motion.img
        src={image3}
        alt=""
        className="z-[-100] mx-auto  mt-[8rem] h-full w-[90%]"
        layoutId="main-image"
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
      />
    </div>
  );
}

export default HomePage;
