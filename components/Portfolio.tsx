import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: '1', title: 'Cyberpunk City Trailer', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/id/122/800/450' },
    { id: '2', title: 'Tech Review 2024', category: 'YouTube', thumbnailUrl: 'https://picsum.photos/id/3/800/450' },
    { id: '3', title: 'Fashion Week Reels', category: 'Reels', thumbnailUrl: 'https://picsum.photos/id/106/400/700' },
    { id: '4', title: 'Energy Drink Ad', category: 'Comercial', thumbnailUrl: 'https://picsum.photos/id/96/800/450' },
    { id: '5', title: 'Gaming Highlights', category: 'Motion', thumbnailUrl: 'https://picsum.photos/id/203/800/450' },
    { id: '6', title: 'Travel Vlog Japan', category: 'YouTube', thumbnailUrl: 'https://picsum.photos/id/164/800/450' },
  ];

  const categories = ['All', 'YouTube', 'Reels', 'Comercial', 'Cinematic', 'Motion'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'Cinematic' && p.category === 'Motion'));

  return (
    <section className="py-24 bg-dark-bg" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-3">Portfolio</h2>
             <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
               TRABALHOS <span className="text-neon-purple">RECENTES</span>
             </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-neon-cyan text-black shadow-[0_0_10px_rgba(0,243,255,0.5)]' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer border border-white/5 ${project.category === 'Reels' ? 'row-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`w-full h-full bg-gray-800 ${project.category === 'Reels' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                 <h4 className="text-2xl font-display font-bold text-white">{project.title}</h4>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-neon-cyan/90 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                    <Play className="w-6 h-6 text-black fill-current ml-1" />
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Simple Modal for Video Player */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-5xl bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
             <div className="aspect-video bg-black flex items-center justify-center">
                {/* Simulated Video Player */}
                <div className="text-center">
                  <Play className="w-20 h-20 text-white/20 mx-auto mb-4" />
                  <p className="text-gray-500">Video Player Placeholder for {selectedProject.title}</p>
                </div>
             </div>
             <div className="p-6 bg-dark-card flex justify-between items-center">
               <div>
                  <h3 className="text-xl font-display font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedProject.category}</p>
               </div>
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded font-bold uppercase text-xs"
               >
                 Fechar
               </button>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;