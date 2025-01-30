import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Branding & Signature */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold neon-text"
          >
            Yussuf Muse ✦
          </motion.h2>
          <p className="text-gray-400 text-sm">
            Crafting Digital Experiences with Passion & Precision.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          {[
            { name: "Home", path: "/" },
            { name: "About Me", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="relative text-gray-400 hover:text-cyan-400 after:content-[''] after:block after:w-0 after:h-1 after:bg-gradient-to-r from-blue-400 to-purple-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              <Link to={link.path}>{link.name}</Link>
            </motion.div>
          ))}
        </div>


        {/* Social Media & Contact */}
        <div className="flex space-x-6 mt-8 md:mt-0">
          {[
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" },
            { icon: FaInstagram, link: "https://instagram.com" },
            { icon: FaGithub, link: "https://github.com" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Icon className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Yussuf Muse. All Rights Reserved.
          <span className="text-blue-400 animate-pulse"> 💙 </span>
        </p>
      </div>

      {/* Back to Top Button */}
      <motion.a
        href="#"
        className="absolute bottom-5 right-5 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        whileHover={{ y: -5 }}
      >
        ⬆
      </motion.a>
    </footer>
  );
};

export default Footer;
