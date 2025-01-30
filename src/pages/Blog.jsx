import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogData"; // Import blog posts from a separate file

const Blog = () => {
  return (
    <div className="min-h-screen mt-5 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 md:px-20 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-500">Yussuf's Blog</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Insights, Tutorials, and Stories from a Web Developer's Journey.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-500">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">{post.summary}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="block mt-4 text-cyan-500 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
