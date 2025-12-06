import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ricardo Silva',
      role: 'YouTuber Tech',
      content: 'A edição elevou meu canal a outro nível. A retenção dos vídeos aumentou 40% desde que começamos a parceria.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Ana Costa',
      role: 'Influencer Fitness',
      content: 'Entrega super rápida e criatividade nos cortes. Meus Reels nunca tiveram tanto engajamento!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Agência Stark',
      role: 'Diretor de Marketing',
      content: 'Profissionalismo impecável. O vídeo comercial superou nossas expectativas e da nossa diretoria.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-3">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            O QUE DIZEM OS <span className="text-neon-purple">CLIENTES</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-dark-card border border-white/5 p-8 rounded-xl relative group hover:border-neon-cyan/30 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-neon-cyan/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-neon-cyan/50" />
                <div>
                  <h4 className="font-display font-bold text-white">{review.name}</h4>
                  <span className="text-xs text-neon-cyan uppercase tracking-wider">{review.role}</span>
                </div>
              </div>
              
              <p className="text-gray-400 italic leading-relaxed">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;