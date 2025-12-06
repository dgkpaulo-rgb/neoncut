import React, { useState } from 'react';
import { Menu, X, Video } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#about', id: 'about' },
    { name: 'Serviços', href: '#services', id: 'services' },
    { name: 'Processo', href: '#process', id: 'process' },
    { name: 'Contato', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Video className="w-8 h-8 text-neon-cyan" />
            <span className="font-display text-2xl font-bold tracking-tighter text-white">
              NEON<span className="text-neon-cyan text-glow">CUT</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-sans font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-neon-cyan text-glow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-5 py-2 border border-neon-cyan/50 text-neon-cyan font-display text-xs font-bold uppercase tracking-widest hover:bg-neon-cyan hover:text-black transition-all duration-300"
              >
                Orçamento
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-card border-b border-white/10 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'text-neon-cyan bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
               href="#contact"
               onClick={() => setIsMobileMenuOpen(false)}
               className="block w-full text-center mt-4 px-5 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 font-display font-bold uppercase"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;