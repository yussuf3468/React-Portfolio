import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/myphoto.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 text-gray-900 dark:bg-gray-800 dark:text-white px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-500">About Me</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          I am <span className="font-semibold text-cyan-400">Yussuf Muse</span>, a passionate Full-Stack Developer with a deep love for solving complex problems and building meaningful applications. My journey in technology started from curiosity and has evolved into a mission to create impactful digital solutions.
        </p>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 mt-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={myImage}
            alt="Yussuf Muse"
            className="w-64 h-64 md:w-80 md:h-80 rounded-[15px] shadow-lg object-cover border-4 border-cyan-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-3xl font-semibold text-cyan-500 mb-4">My Journey</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey into web development started with a deep curiosity about how things work. I have honed my skills in front-end frameworks like <span className="text-cyan-400">React</span> and back-end technologies like <span className="text-cyan-400">Node.js, Express, and MongoDB</span>. I thrive on problem-solving and pushing my limits to build applications that are both functional and visually stunning.
          </p>

          <h3 className="text-3xl font-semibold text-cyan-500 mt-6 mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Git & GitHub", "REST APIs", "Authentication", "SQL", "Java"].map(
              (skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-cyan-400 text-white rounded-lg shadow-md text-sm md:text-base"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>

          <h3 className="text-3xl font-semibold text-cyan-500 mt-6 mb-4">Beyond Coding</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am deeply fascinated by human behavior, problem-solving, and the pursuit of knowledge in multiple fields, including mathematics and the nature of reality. I believe in continuous learning and self-improvement. My ultimate goal is to reach my highest potential and make a lasting impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
