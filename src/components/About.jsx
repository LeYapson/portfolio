import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    className="group relative"
  >
    <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20">
      
      <motion.div 
        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        <img
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain filter brightness-0 invert"
        />
      </motion.div>

      <h3 className="text-gray-800 dark:text-white text-lg font-bold text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl pointer-events-none" />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.span>
            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
              INTRODUCTION
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-8 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            À propos de{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              moi
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed bg-white/40 dark:bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Passionné de <span className="font-semibold text-blue-600">développement logiciel</span> et de{' '}
            <span className="font-semibold text-purple-600">jeux vidéo</span>, je transforme les idées 
            en expériences digitales innovantes. Avec une expertise en React, C# et Python, 
            j'aime créer des solutions qui allient{' '}
            <span className="font-semibold text-pink-600">performance et créativité</span> 🚀
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Section des vraies technologies que vous maîtrisez */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            Mes technologies favorites
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', emoji: '⚛️', color: 'from-blue-400 to-blue-600' },
              { name: 'Python', emoji: '🐍', color: 'from-green-400 to-blue-500' },
              { name: 'Godot', emoji: '🎮', color: 'from-blue-500 to-purple-600' },
              { name: 'C#', emoji: '🔷', color: 'from-purple-500 to-blue-600' },
              { name: 'SQL', emoji: '🛢️', color: 'from-orange-400 to-red-500' },
              { name: 'Docker', emoji: '🐳', color: 'from-blue-400 to-cyan-500' }
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white backdrop-blur-sm rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                viewport={{ once: true }}
              >
                {tech.emoji} {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
