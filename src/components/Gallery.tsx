import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    title: 'Classic Haircut'
  },
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    title: 'Beard Grooming'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    title: 'Hot Towel Shave'
  },
  {
    url: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=800&q=80',
    title: 'Premium Styling'
  },
  {
    url: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&w=800&q=80',
    title: 'Shop Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    title: 'Professional Tools'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;