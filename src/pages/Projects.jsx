import { motion } from "framer-motion";

const projects = [
  {
    image: "path/to/chemist-screenshot.jpg",
    title: "🧪 Chemist Website",
    tech: "HTML, CSS",
    type: "Beginner Project",
    description:
      "A static website designed for a pharmacy, helping me understand HTML structuring and CSS styling.",
  },
  {
    image: "path/to/odyssey-screenshot.jpg",
    title: "🌍 Odyssey Travel (Full-Stack Web Application)",
    tech: "React, Node.js, Express.js, MongoDB, Multer, JWT Authentication",
    type: "Full-Stack Web Application",
    description:
      "A travel platform with user authentication, media uploads, and dynamic interactions.",
  },
  {
    image: "path/to/ecommerce-screenshot.jpg",
    title: "🛒 E-Commerce Application",
    tech: "React, Node.js, Express.js, MongoDB",
    type: "Full-Stack Web Application",
    description:
      "An online shopping platform with a shopping cart, product search, and total price calculation.",
  },
  {
    image: "path/to/skyline-screenshot.jpg",
    title: "🏡 Skyline Estates (Real Estate Website)",
    tech: "HTML, CSS",
    type: "Static Website",
    description:
      "A simple real estate website showcasing property listings and a contact form for inquiries.",
  },
  {
    image: "path/to/taskmanager-screenshot.jpg",
    title: "Task Manager App",
    tech: "React, Firebase, Tailwind CSS",
    description:
      "A productivity tool allowing users to add, edit, and delete tasks with drag-and-drop functionality.",
  },
  {
    image: "path/to/portfolio-screenshot.jpg",
    title: "Portfolio Website",
    tech: "React, Tailwind CSS, Framer Motion",
    description:
      "My personal portfolio website featuring smooth animations, responsive design, and interactive elements.",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 pt-20 md:px-12 lg:px-24 bg-gray-800 text-gray-100">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-cyan-300 mb-2"
        >
          My Projects 🚀
        </motion.h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on, showcasing my journey from simple static websites to advanced full-stack applications.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-cyan-300">
              {project.title}
            </h2>
            <p className="text-sm text-gray-200 mb-2">
              <span className="font-bold text-purple-300">Tech Used:</span> {project.tech}
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <span className="font-bold text-cyan-200">Type:</span> {project.type}
            </p>
            <p className="text-gray-200">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
