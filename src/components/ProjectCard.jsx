import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ id, title, description, image, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className={`backdrop-blur-lg border shadow-lg rounded-2xl p-6 flex flex-col items-center text-center max-w-sm transition-transform 
        ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white/80 border-gray-200 text-gray-800"}`}
    >
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl shadow-md" />

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm">{description}</p>

      {/* Link Button */}
      <Link to={`/blog/${id}`}>
        <button className={`mt-4 px-4 py-2 rounded-lg transition 
            ${darkMode ? "bg-cyan-600 text-white hover:bg-cyan-700" : "bg-cyan-500 text-white hover:bg-cyan-600"}`}>
          View Project
        </button>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
