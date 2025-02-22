import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Phone, Mail } from 'lucide-react';

const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="book-now" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Book Your Visit</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-black rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Make an Appointment</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Service</label>
                <select className="w-full bg-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Classic Cut</option>
                  <option>Beard Trim</option>
                  <option>Hot Towel Shave</option>
                  <option>Complete Package</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Preferred Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full bg-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black py-3 rounded-md font-semibold hover:bg-amber-600 transition-colors"
              >
                Book Appointment
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-4">
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

            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-amber-500" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-amber-500" />
                  <p>info@elitecuts.com</p>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Walk-Ins Welcome</h3>
              <p className="text-gray-400">
                While appointments are preferred, we welcome walk-in clients based on availability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;