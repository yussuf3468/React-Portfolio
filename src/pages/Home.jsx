import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/myphoto.jpg";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard"; // Import Testimonial Card Component
import ProjectCard from "../components/ProjectCard";

const techStack = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
];

const projects = [
  {
    title: "Odyssey Travel",
    description: "A travel booking platform offering seamless trip planning.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "East Africa Horizons",
    description: "A travel blog showcasing East Africa's beauty.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Feastify",
    description: "A food delivery app connecting users to restaurants.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

// Testimonial Data
const testimonials = [
  {
    name: "Alice Johnson",
    review: "Yussuf is an amazing developer! His attention to detail and creativity are unmatched.",
    image: myImage, // Placeholder
  },
  {
    name: "James Smith",
    review: "Working with Yussuf was a pleasure! His skills in React and Node.js are top-notch.",
    image: myImage, // Placeholder
  },
  {
    name: "Sophia Lee",
    review: "Professional, efficient, and innovative. Yussuf delivers high-quality work every time.",
    image: myImage, // Placeholder
  },
];

const HomePage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 pt-20 lg:pt-24 transition-all duration-500">
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
          <div className="flex gap-4">
            <Button className="px-6 py-3 bg-black text-white">
              Explore
            </Button>
            <Button highlight={true} className="px-6 py-3 text-black">
              Contact
            </Button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full md:w-auto"
        >
          <div className="w-full md:w-[400px] h-auto flex items-center justify-center">
            <img src={myImage} alt="Yussuf Muse" className="w-full h-auto object-cover rounded-[10px]" />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-cyan-500 mb-6">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-cyan-400 text-white rounded-lg shadow-md text-lg"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-cyan-500 mb-6">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* <Button className="mt-6 bg-black text-white">View More</Button> */}
      </section>;

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-cyan-500 mb-6">What People Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
  <h2 className="text-3xl font-bold text-cyan-500 mb-6">Let's Work Together</h2>
  <p className="text-lg text-gray-600 mb-6">
    Ready to collaborate on exciting projects? Let's build something amazing.
  </p>
  <div className="flex justify-center">
    <Button className="px-6 py-3 bg-black text-white">Get In Touch</Button>
  </div>
</section>

    </div>
  );
};

export default HomePage;
