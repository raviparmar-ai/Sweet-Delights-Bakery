
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-pink-600 serif">Sweet Delights</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-pink-600 transition">Home</a>
            <a href="#menu" className="text-gray-600 hover:text-pink-600 transition">Our Cakes</a>
            <a href="#ai-assistant" className="text-gray-600 hover:text-pink-600 transition font-medium">AI Recommender</a>
            <a href="#about" className="text-gray-600 hover:text-pink-600 transition">About</a>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition shadow-lg shadow-pink-200">
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-50 px-4 py-4 space-y-4">
          <a href="#home" className="block text-gray-600 text-lg">Home</a>
          <a href="#menu" className="block text-gray-600 text-lg">Our Cakes</a>
          <a href="#ai-assistant" className="block text-gray-600 text-lg">AI Recommender</a>
          <a href="#about" className="block text-gray-600 text-lg">About</a>
          <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-xl">Order Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
