
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Upload from './components/Upload';
import Recommendations from './components/Recommendations';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <Upload />
        <Recommendations />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default App;
