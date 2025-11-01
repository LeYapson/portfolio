import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { shaq } from '../assets';
import Button from './ui/Button';

const Hero = () => {
  const [currentEmoji, setCurrentEmoji] = useState('👋');
  const emojis = ['👋', '🚀', '💻', '🎮', '✨', '🎯'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-hidden">
        <div className={`absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}>
          
          {/* Indicateur de scroll animé */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <motion.div 
              className="w-5 h-5 rounded-full bg-blue-600 sm:hidden"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600 to-amber-500 sm:hidden rounded-full"
              initial={{ height: 0 }}
              animate={{ height: 160 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="flex-1">
            {/* Salutation animée */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <motion.span
                key={currentEmoji}
                className="text-4xl"
                initial={{ rotate: -10, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 10, scale: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {currentEmoji}
              </motion.span>
              <span className="text-2xl font-semibold text-gray-800 dark:text-white 
                drop-shadow-sm bg-white/10 dark:bg-black/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                Salut, moi c'est Théau !
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              className="font-black text-gray-900 dark:text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2 font-poppins drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Développeur{' '}
              <motion.span
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-extrabold"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Créatif
              </motion.span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              className="mt-6 text-gray-700 dark:text-gray-100 text-lg max-w-lg leading-relaxed 
                bg-white/20 dark:bg-black/20 p-4 rounded-lg backdrop-blur-sm border 
                border-white/30 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Je transforme les idées en{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">expériences digitales</span>{' '}
              uniques. Passionné de technologie et de jeux vidéo 🎮
            </motion.p>

            {/* Boutons d'action */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const projectsElement = document.getElementById('projects');
                  if (projectsElement) {
                    projectsElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.error("L'élément avec l'ID 'projects' est introuvable.");
                  }
                }}
                icon="🚀"
                className="z-10"
              >
                Voir mes projets
              </Button>
              
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.error("L'élément avec l'ID 'contact' est introuvable.");
                  }
                }}
                icon="💬"
                className="z-10"
              >
                Contact
              </Button>
            </motion.div>

            {/* Tags de compétences flottants */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {['React', 'Node.js', 'C#', 'Python', 'Game Dev'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white/30 dark:bg-black/40 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 dark:text-white border border-white/50 dark:border-gray-600/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#about">
            <motion.div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-blue-600 dark:border-blue-400 flex justify-center items-start p-2 bg-white/20 dark:bg-black/40 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"
              />
            </motion.div>
          </a>
        </motion.div>

        {/* Image avec effets */}
        <motion.div
          className="absolute bottom-0 right-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            className="ml-[50vw] lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[70vw] sm:h-[90vh] md:h-[70vh] xl:h-[80vh] filter drop-shadow-2xl"
            src={shaq}
            alt="Théau Yapi"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Particules flottantes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
