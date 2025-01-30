import { motion } from "framer-motion";
import Chemist from '../assets/images/Chemist.png'
import Odyssey from '../assets/images/OdysseyTravel (1).png'
import Ecommerce from '../assets/images/Ecommerce.png'
import Skyline from '../assets/images/Skyline.png'
import TaskManager from '../assets/images/Skyline.png'
import Portfolio from '../assets/images/Portfolio.png'
import EastAfricaHorizons from '../assets/images/EastAfricaHorizons.png'

const projects = [
  {
    image: Chemist,
    title: "🧪 Chemist Website",
    tech: "HTML, CSS",
    type: "Beginner Project",
    description:
      "A static website designed for a pharmacy, helping me understand HTML structuring and CSS styling.",
  },
  {
    image: Odyssey,
    title: "🌍 Odyssey Travel (Full-Stack Web Application)",
    tech: "React, Node.js, Express.js, MongoDB, Multer, JWT Authentication",
    type: "Full-Stack Web Application",
    description:
      "A travel platform with user authentication, media uploads, and dynamic interactions.",
  },
  {
    image: Ecommerce,
    title: "🛒 E-Commerce Application",
    tech: "React, Node.js, Express.js, MongoDB",
    type: "Full-Stack Web Application",
    description:
      "An online shopping platform with a shopping cart, product search, and total price calculation.",
  },
  {
    image: Skyline,
    title: "🏡 Skyline Estates (Real Estate Website)",
    tech: "HTML, CSS",
    type: "Static Website",
    description:
      "A simple real estate website showcasing property listings and a contact form for inquiries.",
  },
  {
    image: Portfolio,
    title: "💼 Portfolio Website",
    tech: "React, Tailwind CSS, Framer Motion",
    type: "Personal Website",
    description:
    "My personal portfolio website featuring smooth animations, responsive design, and interactive elements.",
  },
  {
    image: EastAfricaHorizons,
    title: "🌍 East Africa Horizons (Travel Blog)",
    tech: "React, Tailwind CSS, Framer Motion",
    type: "Front-End Project",
    description:
    "A travel blog showcasing the beauty of East Africa with smooth page transitions and a clean UI.",
  },
  {
    image: TaskManager,
    title: "📋 Task Manager App",
    tech: "React, Firebase, Tailwind CSS",
    type: "Web Application",
    description:
      "A productivity tool allowing users to add, edit, and delete tasks with drag-and-drop functionality.",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      className={`py-16 px-6 pt-20 md:px-12 lg:px-24 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-cyan-500 mb-2"
        >
          My Projects 🚀
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Here are some of the projects I’ve worked on, showcasing my journey
          from simple static websites to advanced full-stack applications.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-200 text-gray-900"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-cyan-500">
              {project.title}
            </h2>
            <p className="text-sm mb-2">
              <span className="font-bold text-purple-500">Tech Used:</span>{" "}
              {project.tech}
            </p>
            <p className="text-sm mb-4">
              <span className="font-bold text-cyan-400">Type:</span>{" "}
              {project.type || "Project"}
            </p>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
