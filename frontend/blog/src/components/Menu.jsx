// src/components/Menu.jsx
import React from 'react';

const Menu = () => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul className="space-y-1">
        <li><a href="#" className="text-blue-600 hover:underline">Technology</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Programming</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Lifestyle</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Travel</a></li>
      </ul>
    </div>
  );
};

export default Menu;
