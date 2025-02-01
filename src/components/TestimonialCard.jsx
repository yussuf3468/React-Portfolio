import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, review, image, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative backdrop-blur-md border shadow-xl rounded-2xl p-6 flex flex-col items-center text-center max-w-sm min-h-[280px] md:min-h-[320px] 
        ${darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white/90 border-gray-300 text-gray-800"}`}
    >
      {/* Decorative Quote Icon */}
      <span className={`absolute top-4 left-4 text-5xl opacity-30 ${darkMode ? "text-gray-500" : "text-gray-300"}`}>“</span>

      {/* Image */}
      <motion.img
        src={image}
        alt={name}
        className={`w-28 h-28 rounded-full object-cover border-4 shadow-lg 
    ${darkMode ? "border-cyan-400" : "border-cyan-500"}`}
        whileHover={{ scale: 1.1 }} // Increases size on hover
        transition={{ duration: 0.3 }}
      />




      {/* Name */}
      <h3 className="mt-4 text-lg font-bold">{name}</h3>

      {/* Review Text */}
      <p className="mt-3 text-sm italic px-3">{review}</p>

      {/* Decorative Line */}
      <div className={`w-12 h-1 mt-4 rounded-full ${darkMode ? "bg-cyan-400" : "bg-cyan-500"}`}></div>
    </motion.div>
  );
};

export default TestimonialCard;
