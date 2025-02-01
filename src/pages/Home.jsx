import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import myImage from "../assets/images/myphoto.jpg";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { projects } from "../data/blogData";
import abdimaliPhoto from '../assets/images/abdimalikPhoto.jpg';
import mohamedPhoto from '../assets/images/mohamedPhoto.jpg';

const techStack = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
];

const testimonials = [
  {
    name: "Alice Johnson",
    review: "Yussuf is an amazing developer! His attention to detail and creativity are unmatched.",
    image: myImage,
  },
  {
    name: "Abdimali Mohamed",
    review: "Working with Yussuf was a pleasure! His skills in React and Node.js are top-notch.",
    image: abdimaliPhoto,
  },
  {
    name: "Mohamed Hassan",
    review: "Professional, efficient, and innovative. Yussuf delivers high-quality work every time.",
    image: mohamedPhoto,
  },
];

const SliderVarient = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    },
  },
};

const HomePage = ({ darkMode }) => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create vertical motion values for different elements
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yTech = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 pt-20 lg:pt-24 mt-10 sm:mt-20 md:mt-0 transition-all duration-500 dark:bg-gray-900 dark:text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mb-8 md:mb-0"
          style={{ y: yHeading }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building Smart, Scalable & Innovative Web Experiences 🚀
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            I'm a Full-Stack Developer passionate about creating seamless, high-performance applications
            using React, Node.js, and the latest web technologies.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            With a strong focus on efficiency and user experience, I bring ideas to life through clean, scalable,
            and future-proof code.
          </p>
          <div className="flex gap-4 mt-6">
            <Link to="/projects">
              <Button className="px-4 py-3 bg-black text-white dark:bg-white dark:text-black">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button highlight={true} className="px-6 py-3 text-black dark:text-white border">
                Hire Me
              </Button>
            </Link>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full md:w-auto"
          style={{ y: yImage }}
        >
          <div className="w-full md:w-[400px] h-auto flex items-center justify-center">
            <img src={myImage} alt="Yussuf Muse" className="w-full h-auto object-cover rounded-[10px]" />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center mt-4 relative overflow-hidden">
        <motion.div
          variants={SliderVarient}
          animate="animate"
          initial="initial"
          className="absolute top-[40%] left-0 w-full whitespace-nowrap text-[2rem] md:text-[3rem] font-bold text-gray-400 dark:text-gray-600 opacity-20"
          style={{ y: yTech }}
        >
          Yussuf Muse - Full-Stack Developer & Innovator &nbsp; Yussuf Muse - Full-Stack Developer & Innovator
        </motion.div>

        <h2 className="text-3xl font-bold text-cyan-500 mb-6 relative z-10">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {techStack.map((tech, index) => (
            <motion.div key={index} className="relative">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-cyan-300 text-white rounded-lg shadow-sm text-md"
              >
                {tech}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-cyan-500 mb-6">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} darkMode={darkMode} />
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-cyan-500 mb-6">What People Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} darkMode={darkMode} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-cyan-500 mb-6">Let's Work Together</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Ready to collaborate on exciting projects? Let's build something amazing.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <Button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;