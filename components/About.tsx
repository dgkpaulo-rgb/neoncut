import React from 'react';
import { Award, Clock, Users, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Anos de Experiência', value: '5+', icon: Clock },
    { label: 'Projetos Entregues', value: '300+', icon: Award },
    { label: 'Clientes Satisfeitos', value: '120+', icon: Users },
    { label: 'Avaliação Média', value: '5.0', icon: Star },
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-purple/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-card aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
               {/* Placeholder for Editor's Photo */}
               <img 
                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop" 
                 alt="Editor Profile" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-2xl font-display font-bold text-white">Alex Editor</h3>
                  <p className="text-neon-cyan text-sm tracking-widest uppercase">Senior Video Editor</p>
               </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-4">Sobre Mim</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              NÃO APENAS CORTO VÍDEOS,<br/> EU CRIO <span className="text-neon-purple text-glow-purple">NARRATIVAS</span>.
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Sou editor profissional especializado em vídeos para YouTube, Reels, anúncios, trailers e conteúdo cinematográfico. 
              Meu foco não é apenas a técnica, mas o <span className="text-white font-medium">ritmo e a emoção</span>.
              Transformo horas de material bruto em peças de impacto visual que conectam sua mensagem ao público certo, retendo a atenção do primeiro ao último segundo.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 border border-white/5 bg-white/5 rounded-lg hover:border-neon-cyan/30 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-neon-cyan mb-2" />
                  <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;