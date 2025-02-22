import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'John Smith',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=800&q=80',
    bio: '15+ years of experience in classic cuts and modern styles.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Michael Brown',
    role: 'Senior Stylist',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    bio: 'Specializing in contemporary men's hairstyles and beard grooming.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'David Wilson',
    role: 'Color Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in hair coloring and modern grooming techniques.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-black rounded-lg overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-amber-500 mb-4">{member.role}</p>
                <p className="text-gray-400 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.instagram} className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Instagram />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Twitter />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;