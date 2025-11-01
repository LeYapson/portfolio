import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Projects } from './components';

const App = () => {
  return (
    <BrowserRouter>
      {/* Container principal avec le même fond que le Hero */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        
        {/* Motif de points sur tout le site */}
        <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Particules flottantes globales */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="fixed w-2 h-2 bg-blue-400/30 rounded-full pointer-events-none z-0"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 25}%`,
              animation: `float-${i % 3} ${4 + i * 0.3}s ease-in-out infinite`,
            }}
          />
        ))}

        <Navbar />
        
        <div className="relative z-10">
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;