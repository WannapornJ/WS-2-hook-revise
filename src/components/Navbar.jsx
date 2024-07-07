// src/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-red-600 text-2xl font-bold">
          <a href="/">😶‍🌫️</a>
        </div>
        <a href="/calculator" className="hover:text-gray-400">
          Calculator
        </a>
        <a href="/counter" className="hover:text-gray-400">
          Counter
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
