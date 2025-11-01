import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  icon = null,
  className = '',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600',
    secondary: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-orange-500 hover:to-amber-500',
    cute: 'bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-purple-400 hover:to-pink-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400',
    ghost: 'text-blue-600 hover:bg-blue-600/10 dark:text-blue-400 dark:hover:bg-blue-400/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-10 py-4 text-xl',
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-full font-semibold
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-4 focus:ring-blue-600/20
        disabled:opacity-50 disabled:cursor-not-allowed
        shadow-lg hover:shadow-xl
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      {...props}
    >
      {/* Effet de brillance */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="relative flex items-center justify-center gap-2">
        {icon && <span className="text-current">{icon}</span>}
        {children}
      </div>
    </motion.button>
  );
};

export default Button;