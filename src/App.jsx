import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About } from './components';
import LoaderFallback from './components/LoaderFallback'; // Importation du nouveau composant

// Chargement paresseux des composants moins critiques
const Tech = lazy(() => import('./components/Tech'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <Suspense fallback={<LoaderFallback />}>
          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
            <Tech />
          </div>

          <Projects />

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div>
          <div className="relative z-0">
            <Contact />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;