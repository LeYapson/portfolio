import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';
import ThemeToggle from './ui/ThemeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed 
      top-0 z-20 transition-all duration-300
      ${scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
      }
      xxs:h-[12vh]`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
              Théau Yapi
            </h1>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium tracking-wider">
              Portfolio
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8 mt-2">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-blue-600 dark:hover:text-blue-400
                text-[16px] font-semibold font-poppins 
                uppercase tracking-[2px] cursor-pointer 
                transition-colors duration-300 relative`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
                {active === nav.title && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle Desktop */}
        <div className="hidden sm:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <motion.div
              className="p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
                absolute top-0 left-0 w-screen h-screen z-10"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <ThemeToggle />
                <motion.img
                  src={close}
                  alt="close"
                  className="w-[28px] h-[28px] object-contain cursor-pointer
                    text-gray-800 dark:text-gray-200"
                  onClick={() => setToggle(!toggle)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>

              {/* Mobile Navigation */}
              <ul className="list-none flex flex-col gap-8 items-center justify-center mt-20">
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${nav.id}`}
                      className={`${
                        active === nav.title 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-800 dark:text-gray-200'
                      } text-[32px] font-bold font-poppins 
                        uppercase tracking-[2px] cursor-pointer
                        hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.img
              src={menu}
              alt="menu"
              className="w-[30px] h-[30px] object-contain cursor-pointer
                filter dark:invert"
              onClick={() => setToggle(!toggle)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ouvrir le menu"
            />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
