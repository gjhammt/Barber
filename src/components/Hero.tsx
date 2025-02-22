import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2070&q=80"
          alt="Barber Shop Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Premium Grooming,{' '}
              <span className="text-amber-500">Timeless Style</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Est. 1995 • Award-Winning Barbers
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-black px-8 py-4 rounded-md text-lg font-semibold flex items-center justify-center mx-auto hover:bg-amber-600 transition-colors"
            >
              <Calendar className="mr-2" />
              Book Your Appointment
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1 h-8 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;