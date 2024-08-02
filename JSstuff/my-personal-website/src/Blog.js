import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostPreview = ({ id, title, date, excerpt }) => (
  <div className="blog-post bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 transition duration-300 hover:shadow-lg">
    <h3 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
    <p className="mb-4 text-gray-700 dark:text-gray-300">{excerpt}</p>
    <Link to={`/blog/${id}`} className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-200 font-semibold">Read more →</Link>
  </div>
);

const Blog = ({ darkMode }) => {
  const blogPosts = [
    {
      id: 1,
      title: "An empty blog",
      date: "July 25, 2024",
      excerpt: "An empty blog because I haven't made anything yet"
    },
    
  ];

  return (
    <div className={`blog ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 min-h-screen py-10`}>
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">Research Blog</h2>
      <div className="blog-posts max-w-2xl mx-auto">
        {blogPosts.map((post) => (
          <BlogPostPreview key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;