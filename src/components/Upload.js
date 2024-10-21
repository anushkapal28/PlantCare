import React from 'react';
import { FaLeaf, FaSeedling, FaSpa, FaPagelines } from 'react-icons/fa';

const Upload = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://plantai-e78arx6zfdnxqefapptjase.streamlit.app/'; 
  };

  return (
    <section id="upload" className="min-h-screen flex flex-col items-center justify-center bg-green-800 p-8 relative overflow-hidden">
      {/* Floating icons */}
      <div className="absolute top-5 left-5 text-green-400 opacity-50 ">
        <FaLeaf size={80} />
      </div>
      <div className="absolute bottom-10 left-10 text-green-300 opacity-50 ">
        <FaSeedling size={100} />
      </div>
      <div className="absolute top-20 right-10 text-green-500 opacity-50 ">
        <FaSpa size={120} />
      </div>
      <div className="absolute bottom-20 right-20 text-green-200 opacity-60 ">
        <FaPagelines size={110} />
      </div>
      <div className="absolute bottom-5 left-1/2 text-green-400 opacity-50 ">
        <FaLeaf size={70} />
      </div>

      {/* Main Upload Box */}
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-lg text-center z-10">
        <h2 className="text-4xl font-bold text-green-600 mb-6">Plant Health Detection</h2>
        <p className="text-lg text-gray-700 mb-6">
          Click the button below to analyze your plant's health status!
        </p>
        <button 
          onClick={handleButtonClick} 
          className="mt-4 bg-green-500 text-white py-4 px-10 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 text-2xl"
        >
          Analyze Plant
        </button>
      </div>
    </section>
  );
};

export default Upload;
