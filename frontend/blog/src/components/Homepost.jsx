// src/components/Homepost.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Homepost = ({ post }) => {
  return (
    <div className="relative w-full h-[450px] mb-10 rounded overflow-hidden shadow-lg">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
        <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold uppercase w-fit mb-2">
          {post.category || 'News'}
        </span>
        <h2 className="text-3xl font-bold text-white mb-2">{post.title}</h2>
        <p className="text-sm text-gray-300">
          By {post.author || 'Admin'} • {new Date(post.createdAt).toDateString()}
        </p>
        <Link
          to={`/post/${post._id}`}
          className="text-blue-400 hover:text-blue-200 mt-4 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default Homepost;
