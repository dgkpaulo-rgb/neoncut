import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: '01', title: 'Briefing', desc: 'Entendimento da sua visão, objetivos e estilo desejado.' },
    { number: '02', title: 'Montagem', desc: 'Seleção dos melhores takes e construção da narrativa (Storytelling).' },
    { number: '03', title: 'Efeitos & Cor', desc: 'Color Grading, transições, textos e motion graphics.' },
    { number: '04', title: 'Sound Design', desc: 'Mixagem de áudio, trilha sonora e efeitos sonoros imersivos.' },
    { number: '05', title: 'Entrega', desc: 'Renderização em alta qualidade e revisões finais.' },
  ];

  return (
    <section className="py-24 bg-dark-surface overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-3">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            MEU PROCESSO <span className="text-neon-purple">CRIATIVO</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-50 -translate-y-1/2 blur-sm"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-bg border-2 border-neon-cyan items-center justify-center z-10 shadow-[0_0_15px_rgba(0,243,255,0.5)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="bg-dark-card/50 border border-white/5 p-8 rounded-xl backdrop-blur-sm hover:bg-white/5 hover:border-neon-cyan/30 transition-all duration-300 lg:mt-12 lg:group-even:-mt-12 lg:group-even:transform lg:group-even:translate-y-[calc(-100%-3rem)]">
                  <div className="text-4xl font-display font-black text-white/5 mb-4 group-hover:text-neon-cyan/20 transition-colors">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;