import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/myphoto.jpg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 pt-20 md:pt-20 lg:pt-24 transition-all duration-500 bg-white text-black">
      {/* Left Side - Introduction */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mb-8 md:mb-0"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Yussuf Muse - Full-Stack Developer & Innovator
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          I am a passionate Full-Stack Developer with a knack for creating seamless user experiences.
          My expertise spans across front-end and back-end technologies, enabling me to bring ideas to life.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          I have extensive experience in working with modern web development frameworks and tools like React, Node.js, and more.
          I thrive on solving complex problems and continuously improving my skills to stay updated with the latest industry trends.
        </p>
        {/* <p className="text-base md:text-lg text-gray-600 mb-6">
          My goal is to build high-quality web applications that provide value to users and businesses alike. Let's collaborate and create something amazing together!
        </p> */}
        <div className="flex gap-4">
          <Button className="px-6 py-3 bg-black text-white">
            Explore
          </Button>
          <Button highlight={true} className="border px-6 py-3 border-black text-black">
            Contact
          </Button>
        </div>
      </motion.div>

      {/* Right Side - Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center w-full md:w-auto"
      >
        <div className="w-full md:w-[400px] h-auto bg-gray-300 border border-gray-400 flex items-center justify-center">
          <img src={myImage} alt="Yussuf Muse" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;