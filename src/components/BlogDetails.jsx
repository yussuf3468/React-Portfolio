import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blogData"; // Import updated blog data

const BlogDetails = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div className="text-center text-red-500 text-2xl">Blog post not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-100 object-cover rounded-lg shadow-md"
        />

        <h1 className="text-4xl font-bold text-cyan-500 mt-6 text-center">{blogPost.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
          {blogPost.date} • {blogPost.readTime}
        </p>

        {/* Updated content container with code block styling */}
        <div
          className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 prose 
                    dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 
                    prose-pre:rounded-xl prose-pre:p-4 max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;