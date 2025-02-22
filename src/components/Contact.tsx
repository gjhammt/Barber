import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-amber-500" />
                  <p>123 Barber Street, New York, NY 10001</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-amber-500" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-amber-500" />
                  <p>info@elitecuts.com</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-3 text-amber-500" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-gray-900 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-black rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-black rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  className="w-full bg-black rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black py-3 rounded-md font-semibold hover:bg-amber-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;