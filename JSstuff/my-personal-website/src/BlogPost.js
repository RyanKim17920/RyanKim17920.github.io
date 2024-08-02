import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = {
  1: {
    title: "An empty blog",
    date: "July 25, 2024",
    content: `
      <p>An empty blog because I haven't made anything yet</p>
    `
  },
};

const BlogPost = ({ darkMode }) => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={`blog-post ${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 min-h-screen py-10`}>
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 mb-4 inline-block">← Back to Blog</Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Posted on: {post.date}</p>
        <div className="prose dark:prose-invert lg:prose-xl max-w-none">
          <p className="text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;