import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/Plant7.jpg';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-title',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      '.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.7 }
    );
    gsap.fromTo(
      '.hero-button',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  const handleGetStarted = () => {
    const recommendationsSection = document.getElementById('recommendations');
    if (recommendationsSection) {
      recommendationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 p-10 rounded-lg w-4/6 mx-auto backdrop-blur-sm bg-white bg-opacity-30">
        <h2 className="hero-title text-5xl md:text-6xl text-white font-bold tracking-wide text-shadow">
          Welcome to the Plant Care App
        </h2>
        <p className="hero-subtitle text-lg md:text-xl text-gray-300 mt-4">
          Your ultimate guide to keeping your plants healthy and happy!
        </p>
        <button onClick={handleGetStarted} className="hero-button mt-6 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
