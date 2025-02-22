import React from 'react';
import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Scissors className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-2xl font-bold text-white">ELITE CUTS</span>
          </div>
          <p className="text-gray-400 text-center mb-8">
            Premium grooming services for the modern gentleman.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Elite Cuts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;