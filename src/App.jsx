import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogDetails from "./components/BlogDetails";
import Cv from "./components/Cv";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Load dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply dark mode class and update localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* ✅ Pass as props */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/cv" element={<Cv darkMode={darkMode} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
