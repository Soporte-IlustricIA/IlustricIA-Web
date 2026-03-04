import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
];

export function CustomerStorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-[90vh] bg-black relative overflow-hidden flex items-center">
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            src={backgroundImages[currentIndex]} 
            alt="Background" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-10" />
      </div>

      {/* ... (keep pixelated mask effects) */}
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full h-full flex flex-col justify-center">
        
        {/* Content Container */}
        <div className="max-w-2xl">
          
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl font-serif font-black text-white tracking-tight">
              Innovación
            </h3>
          </div>

          {/* Static Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
            Cómo los insights de clientes impulsan la innovación de productos
          </h2>

          {/* Static Description */}
          <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-xl">
            Las marcas líderes, construidas durante décadas, dependen de una profunda comprensión del cliente. Utilizan IlustricIA para asegurar que cada producto se alinee con las necesidades del usuario, impulsando la lealtad a la marca y el liderazgo en el mercado.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-20">
            <button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
              Leer la historia
            </button>
            <button className="px-6 py-3 bg-white/10 text-white border border-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
              Todas las historias
            </button>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-neutral-500">
            {backgroundImages.map((_, idx) => (
              <span key={idx} className={cn("transition-colors duration-300", currentIndex === idx ? "text-white" : "text-neutral-500")}>
                0{idx + 1}
              </span>
            ))}
            
            {/* Progress Bar */}
            <div className="w-16 h-[2px] bg-neutral-800 relative">
               <motion.div 
                 className="absolute left-0 top-0 h-full bg-white" 
                 animate={{ width: `${((currentIndex + 1) / backgroundImages.length) * 100}%` }}
                 transition={{ duration: 0.5 }}
               /> 
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
