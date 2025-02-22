import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = {
  haircuts: [
    { name: 'Classic Cut', price: 30, description: 'Traditional haircut with styling' },
    { name: 'Fade & Blend', price: 35, description: 'Modern fade with precise blending' },
    { name: 'Senior Cut', price: 25, description: 'Specialized service for seniors' },
    { name: 'Kids Cut', price: 20, description: 'Gentle styling for children' }
  ],
  beardcare: [
    { name: 'Beard Trim', price: 25, description: 'Shape and maintain your beard' },
    { name: 'Luxury Shave', price: 35, description: 'Hot towel treatment with straight razor' },
    { name: 'Beard Design', price: 40, description: 'Custom beard styling and shaping' },
    { name: 'Color & Gray Coverage', price: 45, description: 'Professional beard coloring' }
  ],
  packages: [
    { name: 'Complete Package', price: 75, description: 'Haircut, beard trim, and hot towel service' },
    { name: 'Groom Special', price: 90, description: 'Full grooming package with facial treatment' },
    { name: 'VIP Experience', price: 120, description: 'Premium service with complimentary drinks' },
    { name: 'Father & Son', price: 45, description: 'Special package for two generations' }
  ]
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('haircuts');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const tabs = [
    { id: 'haircuts', label: 'Haircuts' },
    { id: 'beardcare', label: 'Beard Care' },
    { id: 'packages', label: 'Packages' }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Pricing</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>

          <div className="flex justify-center space-x-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6"
        >
          {services[activeTab as keyof typeof services].map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 flex justify-between items-center group hover:bg-gray-800 transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
              <div className="text-2xl font-bold text-amber-500 group-hover:scale-110 transition-transform">
                ${service.price}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;