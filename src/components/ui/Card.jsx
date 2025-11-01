import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false,
  gradient = false,
  ...props 
}) => {
  return (
    <motion.div
      className={`
        relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg
        border border-gray-200 dark:border-gray-700
        overflow-hidden backdrop-blur-sm
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''}
        ${glow ? 'hover:animate-glow' : ''}
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { scale: 1.02 } : {}}
      {...props}
    >
      {/* Effet de brillance en arrière-plan */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-amber-500/5 pointer-events-none" />
      )}
      
      {children}
    </motion.div>
  );
};

export default Card;