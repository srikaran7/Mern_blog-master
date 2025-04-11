// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 text-sm py-4 mt-10">
      <p>© {new Date().getFullYear()} <span className="font-semibold text-blue-600">My Blog</span>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
