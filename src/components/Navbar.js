import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-green-700 p-4 shadow-lg fixed w-full z-20 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-semibold tracking-wider">Plant Care</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('upload')} className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out">
              Plant Health Detection
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('recommendations')} className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out">
              Care Recommendations
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
