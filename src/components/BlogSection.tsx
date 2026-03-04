import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

const BlogCard = ({ 
  image, 
  title, 
  tags, 
  className,
  imageClassName
}: { 
  image: React.ReactNode; 
  title: string; 
  tags: string[]; 
  className?: string;
  imageClassName?: string;
}) => (
  <div className={cn("flex flex-col group cursor-pointer", className)}>
    <div className={cn("rounded-lg overflow-hidden border border-neutral-800 mb-6 transition-transform duration-300 group-hover:-translate-y-1", imageClassName)}>
      {image}
    </div>
    <h3 className="text-xl font-medium text-white mb-4 leading-snug group-hover:text-neutral-300 transition-colors">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export function BlogSection() {
  return (
    <section className="w-full bg-black py-32 px-4 md:px-8 border-t border-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Infraestructura de IA en la que puedes confiar
          </h2>
          <button className="px-4 py-2 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors self-start md:self-auto">
            Ver todos los blogs
          </button>
        </div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          
          {/* Left Column - Large Card */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <BlogCard 
              image={
                <div className="w-full aspect-[16/10] bg-[#0055FF] p-8 flex items-center justify-center relative overflow-hidden">
                  {/* Typography Pattern */}
                  <div className="text-white/90 font-mono text-xs leading-relaxed opacity-80 select-none">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk<br/>
                    Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu<br/>
                    Vv Ww Xx Yy Zz 0123456789<br/>
                    !@#$%^&*()_+-=[]{};':",./&lt;&gt;?`~
                  </div>
                  {/* Faint background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                </div>
              }
              title="El equipo y visión detrás de la evolución de marca de IlustricIA"
              tags={['[EQUIPO]']}
              className="lg:max-w-xl"
            />
          </motion.div>

          {/* Right Column - Two Smaller Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            
            {/* Card 2 */}
            <BlogCard 
              image={
                <div className="w-full aspect-[4/3] bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
                  {/* Globe Grid Effect */}
                  <div className="absolute inset-0 opacity-40">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#555" strokeWidth="0.5" />
                      <path d="M100,20 Q160,100 100,180" fill="none" stroke="#555" strokeWidth="0.5" />
                      <path d="M100,20 Q40,100 100,180" fill="none" stroke="#555" strokeWidth="0.5" />
                      <path d="M20,100 Q100,160 180,100" fill="none" stroke="#555" strokeWidth="0.5" />
                      <path d="M20,100 Q100,40 180,100" fill="none" stroke="#555" strokeWidth="0.5" />
                    </svg>
                  </div>
                  {/* Dots */}
                  <div className="absolute inset-0 flex items-center justify-center gap-1">
                     <div className="w-1 h-1 bg-blue-500 rounded-full" />
                     <div className="w-1 h-1 bg-orange-500 rounded-full" />
                     <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                  <div className="absolute top-4 left-4 text-white font-medium text-lg">
                    Lanzamiento Otoño 25
                  </div>
                </div>
              }
              title="Presentando el lanzamiento de IlustricIA: Agentes IA, Dashboards y más"
              tags={['[ACTUALIZACIÓN]', '[IA]']}
            />

            {/* Card 3 */}
            <BlogCard 
              image={
                <div className="w-full aspect-[4/3] bg-neutral-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500" 
                    alt="Dashboard" 
                    className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {/* UI Elements overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1 w-1/3 bg-orange-500 rounded-full mb-2" />
                    <div className="h-1 w-1/2 bg-neutral-700 rounded-full" />
                  </div>
                </div>
              }
              title="Cómo potenciar tu estrategia de producto con inteligencia de clientes"
              tags={['[PRODUCTO]', '[IA]']}
            />

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
