import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center max-w-sm transition-transform"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl shadow-md"
      />

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600">{description}</p>

      {/* Link Button */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          View Project
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
