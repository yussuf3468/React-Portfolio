import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/10 px-6 py-4 flex justify-between items-center shadow-lg"
    >
      <Link to="/" className="text-2xl font-bold tracking-wider relative">
        <motion.span
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text 
               drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] hover:drop-shadow-[0_0_20px_rgba(192,132,252,1)]"
        >
          Yussuf Muse
        </motion.span>
      </Link>


      <div className="hidden md:flex space-x-6 text-lg">
        {['Home', 'Projects', 'About', 'Blog', 'Contact'].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // 👈 Check if it's "Home"
            className="relative group text-gray-800"
          >
            <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              {item}
            </motion.span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>


      <div className="flex items-center space-x-4">
        {/* Download CV Button */}
        <a href="/cv" className="px-2 py-2 text-lg bg-gray-800 text-white rounded-lg">
          Download CV
        </a>
        {/* Contact Button visible on larger screens */}
        <a href="/contact" className="hidden md:inline-block px-6 py-2 text-lg bg-cyan-400 text-white rounded-lg">
          Contact
        </a>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
            <span className="block w-8 h-1 bg-gray-800 mb-1"></span>
            <span className="block w-8 h-1 bg-gray-800 mb-1"></span>
            <span className="block w-8 h-1 bg-gray-800"></span>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden">
          {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`} className="text-gray-800 text-lg">
              {item}
            </Link>
          ))}
          {/* Contact Button inside the Mobile Menu */}
          <a href="/contact" className="px-6 py-2 text-lg bg-cyan-400 text-white rounded-lg md:hidden">
            Contact
          </a>
        </motion.div>
      )}

    </motion.nav>
  );
};

export default Navbar;