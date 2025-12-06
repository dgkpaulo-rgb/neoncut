import React from 'react';
import Button from './ui/Button';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024453-354056aafa98?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-block mb-4 px-4 py-1 border border-neon-cyan/30 rounded-full bg-neon-cyan/5 backdrop-blur-sm animate-pulse-slow">
          <span className="text-neon-cyan text-xs font-display tracking-[0.2em] uppercase">
            Produção & Edição de Vídeo High-End
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight tracking-tighter">
          TRANSFORMO SUAS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">
            IDEIAS EM CINEMA
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Edição profissional, storytelling, motion design e ritmo perfeito para seus vídeos. 
          Eleve seu conteúdo para o próximo nível.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" glow onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar Orçamento
          </Button>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-float">
        <div className="w-64 p-4 border border-white/10 bg-black/50 backdrop-blur-md rounded-lg">
          <div className="flex items-center gap-3 mb-2">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="h-1 w-20 bg-gray-700 rounded-full"></div>
          </div>
          <div className="h-16 w-full bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent rounded opacity-50"></div>
        </div>
      </div>

      <div className="absolute top-1/4 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
         <div className="w-16 h-16 border border-neon-purple/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(188,19,254,0.3)]">
            <span className="font-display text-neon-purple font-bold">4K</span>
         </div>
      </div>

    </section>
  );
};

export default Hero;