import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      <div className="relative overflow-x-hidden selection:bg-yellow-600 selection:text-white pt-16 text-white">
        <div id='home'>
          <Home />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='technologies'>
          <Technologies />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
