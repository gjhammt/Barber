import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <Pricing />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;