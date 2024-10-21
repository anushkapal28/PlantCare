import React from 'react';
import { FaLeaf, FaSeedling, FaHeart, FaHandsHelping } from 'react-icons/fa'; 
import aboutImage from '../assets/Plant6.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-around bg-white p-12">
      <div className="max-w-lg text-center lg:text-left mb-12 lg:mb-0">
        <h2 className="text-5xl font-bold text-green-700 mb-6">About Us</h2>
        <p className="text-lg text-gray-800 mb-6">
          We are dedicated to helping plant lovers take the best care of their greenery. From beginners to experts, 
          we provide personalized tips and tools to ensure your plants thrive in any environment.
        </p>
        <div className="flex justify-center lg:justify-start space-x-8 mt-6">
          <div className="text-center">
            <FaHeart size={40} className="text-red-500 mb-2" />
            <p className="text-lg text-gray-700">Passionate</p>
          </div>
          <div className="text-center">
            <FaHandsHelping size={40} className="text-blue-500 mb-2" />
            <p className="text-lg text-gray-700">Supportive</p>
          </div>
        </div>
        <button className="mt-8 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>

      <div className="flex items-center justify-center">
        <img 
          src={aboutImage} 
          alt="About us illustration" 
          className="rounded-lg shadow-lg max-w-xs lg:max-w-md"
        />
      </div>
    </section>
  );
};

export default About;
