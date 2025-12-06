import React from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-3">Investimento</h2>
           <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
             ESCOLHA SEU <span className="text-neon-purple">PLANO</span>
           </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-white/10 bg-dark-card p-8 rounded-2xl flex flex-col hover:border-white/30 transition-colors">
            <h4 className="text-xl font-display font-bold text-gray-300 mb-2">Básico</h4>
            <div className="text-3xl font-bold text-white mb-6">Reels / TikTok</div>
            <p className="text-gray-400 text-sm mb-8">Ideal para vídeos curtos e dinâmicos para redes sociais.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['Até 1 minuto', 'Legendas Dinâmicas', 'Cortes Rápidos', 'Trilha Sonora Viral', '1 Revisão'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-neon-cyan mr-3" /> {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Selecionar</Button>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative border border-neon-cyan bg-dark-surface p-8 rounded-2xl flex flex-col shadow-[0_0_30px_rgba(0,243,255,0.1)] transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-neon-cyan text-black text-xs font-bold px-3 py-1 uppercase rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <h4 className="text-xl font-display font-bold text-neon-cyan mb-2 text-glow">Profissional</h4>
            <div className="text-3xl font-bold text-white mb-6">YouTube Video</div>
            <p className="text-gray-400 text-sm mb-8">Edição completa com storytelling para retenção máxima.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['Até 10-15 minutos', 'Storytelling Avançado', 'Color Grading', 'Sound Design Completo', 'Motion Graphics Básico', '2 Revisões'].map((item, i) => (
                <li key={i} className="flex items-center text-white text-sm">
                  <Check className="w-4 h-4 text-neon-cyan mr-3" /> {item}
                </li>
              ))}
            </ul>
            <Button variant="primary" glow className="w-full">Selecionar</Button>
          </div>

          {/* Premium Plan */}
          <div className="border border-white/10 bg-dark-card p-8 rounded-2xl flex flex-col hover:border-neon-purple/50 transition-colors">
            <h4 className="text-xl font-display font-bold text-neon-purple mb-2">CineMax</h4>
            <div className="text-3xl font-bold text-white mb-6">Cinematic / Ad</div>
            <p className="text-gray-400 text-sm mb-8">Produção de alto nível para comerciais e trailers.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['Duração Personalizada', 'Edição Cinematográfica', 'Color Grading Avançado', 'VFX & Efeitos Especiais', 'Mixagem Surround 5.1', 'Revisões Ilimitadas'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-neon-purple mr-3" /> {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-neon-purple text-neon-purple hover:bg-neon-purple/10">Selecionar</Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;