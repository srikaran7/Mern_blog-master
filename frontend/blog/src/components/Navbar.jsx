import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-orange-500 tracking-wide">
          My Blog
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/create" className="hover:text-orange-500 transition">Create</Link>
          <Link to="/myblogs" className="hover:text-orange-500 transition">My Blogs</Link>
          <Link to="/profile" className="hover:text-orange-500 transition">Profile</Link>
          <Link to="/login" className="hover:text-orange-500 transition">Login</Link>
          <Link to="/register" className="hover:text-orange-500 transition">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
