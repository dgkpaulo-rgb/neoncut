import React from 'react';
import { Scissors, Film, Zap, Aperture, Music, MonitorPlay } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Edição Completa',
      description: 'Cortes precisos, storytelling e montagem cinematográfica para vídeos longos.',
      iconName: 'scissors',
      price: 'A partir de R$ 500'
    },
    {
      id: '2',
      title: 'Color Grading',
      description: 'Correção de cor avançada para dar o look profissional e cinematográfico.',
      iconName: 'aperture',
    },
    {
      id: '3',
      title: 'Motion Graphics',
      description: 'Títulos animados, lower thirds e elementos visuais futuristas.',
      iconName: 'monitor',
    },
    {
      id: '4',
      title: 'Short Content',
      description: 'Edição dinâmica para Reels, TikTok e Shorts com legendas e efeitos virais.',
      iconName: 'zap',
    },
    {
      id: '5',
      title: 'Sound Design',
      description: 'Mixagem de áudio, efeitos sonoros (SFX) e trilha sonora impactante.',
      iconName: 'music',
    },
    {
      id: '6',
      title: 'Pacotes Mensais',
      description: 'Solução recorrente para criadores de conteúdo e canais ativos.',
      iconName: 'film',
    }
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'scissors': return <Scissors className="w-8 h-8" />;
      case 'film': return <Film className="w-8 h-8" />;
      case 'zap': return <Zap className="w-8 h-8" />;
      case 'aperture': return <Aperture className="w-8 h-8" />;
      case 'music': return <Music className="w-8 h-8" />;
      case 'monitor': return <MonitorPlay className="w-8 h-8" />;
      default: return <Film className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 bg-dark-surface relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-3">O que eu faço</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            SERVIÇOS <span className="text-outline-white">PREMIUM</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative p-8 bg-dark-card border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 rounded-xl overflow-hidden box-glow-hover"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-white/5 text-neon-cyan mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:text-white group-hover:bg-neon-cyan">
                  {getIcon(service.iconName)}
                </div>
                
                <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                   {service.price && (
                     <span className="text-xs font-mono text-neon-purple font-bold">{service.price}</span>
                   )}
                   <button className="text-sm font-bold text-white hover:text-neon-cyan uppercase tracking-wider flex items-center gap-1">
                     Contratar <span>→</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;