import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, review, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center max-w-sm transition-transform hover:scale-105"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>

      {/* Review Text */}
      <p className="mt-2 text-sm text-gray-600">{review}</p>
    </motion.div>
  );
};

export default TestimonialCard;
