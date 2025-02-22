import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Gallery', 'Team', 'Pricing', 'Book Now', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Scissors className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-2xl font-bold text-white">ELITE CUTS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-white hover:text-amber-500 transition-colors ${
                  item === 'Book Now' ? 'px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md text-black' : ''
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-white hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;