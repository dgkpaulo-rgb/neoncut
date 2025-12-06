import React from 'react';
import Button from './ui/Button';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-black relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-3">Vamos trabalhar juntos?</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black text-white mb-6 leading-none">
              VAMOS CRIAR ALGO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">ÉPICO</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Pronto para transformar seu material bruto em uma obra-prima? Preencha o formulário ou me chame nas redes.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/5511978396684" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-black transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-display text-lg">+55 (11) 97839-6684</span>
              </a>
              
              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-purple group-hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-display text-lg">@neoncut.studio</span>
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-display text-lg">contato@neoncut.com</span>
              </a>
            </div>
          </div>

          <div className="bg-dark-card border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
             {/* Neon decorative line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan"></div>

             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Nome</label>
                   <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all" placeholder="Seu nome" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                   <input type="email" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all" placeholder="seu@email.com" />
                 </div>
               </div>
               
               <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Tipo de Projeto</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-cyan focus:outline-none transition-all appearance-none">
                    <option>Selecione uma opção...</option>
                    <option>YouTube Video</option>
                    <option>Reels / TikTok</option>
                    <option>Comercial</option>
                    <option>Outro</option>
                  </select>
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Mensagem</label>
                 <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all" placeholder="Conte mais sobre seu projeto..."></textarea>
               </div>

               <Button variant="primary" glow className="w-full py-4 text-lg">
                 Quero Editar Meu Vídeo Agora
               </Button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;