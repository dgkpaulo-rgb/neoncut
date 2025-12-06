import React from 'react';
import { Video } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <Video className="w-6 h-6 text-neon-cyan" />
            <span className="font-display text-xl font-bold tracking-tighter text-white">
              NEON<span className="text-neon-cyan">CUT</span>
            </span>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NeonCut Studio. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors text-sm">Termos</a>
            <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors text-sm">Privacidade</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;