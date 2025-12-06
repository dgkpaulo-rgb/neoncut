import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'process', 'testimonials', 'contact'];
      
      // Default to hero if at top
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-cyan selection:text-black">
      <Navbar activeSection={activeSection} />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        {/* Portfolio removed as requested */}
        <div id="process">
          <Process />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        {/* Pricing removed as requested */}
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;