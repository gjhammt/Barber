import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Beard, Spray } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Scissors className="w-12 h-12" />,
    title: 'Classic Cut',
    description: 'Precision haircut tailored to your style and face shape.',
    price: '$30'
  },
  {
    icon: <Beard className="w-12 h-12" />,
    title: 'Beard Trim',
    description: 'Expert beard shaping and maintenance for the perfect look.',
    price: '$25'
  },
  {
    icon: <Spray className="w-12 h-12" />,
    title: 'Hot Towel Shave',
    description: 'Traditional hot towel service with premium products.',
    price: '$35'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 p-8 rounded-lg text-center hover:bg-black/70 transition-colors cursor-pointer group"
            >
              <div className="text-amber-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <span className="text-3xl font-bold text-amber-500">{service.price}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;