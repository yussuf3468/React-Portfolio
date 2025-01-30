import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, review, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white/90 backdrop-blur-md border border-gray-300 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center max-w-sm min-h-[280px] md:min-h-[320px]"
    >
      {/* Decorative Quote Icon */}
      <span className="absolute top-4 left-4 text-5xl text-gray-300 opacity-30">“</span>

      {/* Image */}
      <motion.img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-4 border-cyan-500 shadow-md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-gray-800">{name}</h3>

      {/* Review Text */}
      <p className="mt-3 text-sm text-gray-600 italic px-3">{review}</p>

      {/* Decorative Line */}
      <div className="w-12 h-1 bg-cyan-400 mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default TestimonialCard;
