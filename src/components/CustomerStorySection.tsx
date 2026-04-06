import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from './LanguageContext';

export function CustomerStorySection() {
  const { t } = useLanguage();
  const images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
  ];
  const innovationContent = t.innovation.items.map((item: any, index: number) => ({
    ...item,
    image: images[index]
  }));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % innovationContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-[80vh] py-32 md:py-48 bg-transparent relative overflow-hidden flex items-center transition-colors duration-500">
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            src={innovationContent[currentIndex].image} 
            alt="Background" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Gradient Overlay for Text Readability - More transparent to show TechBackground */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent dark:from-black/60 dark:via-black/40 dark:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40 dark:from-black/40 dark:via-transparent dark:to-black/40 opacity-60 z-10" />
      </div>

      {/* ... (keep pixelated mask effects) */}
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full h-full flex flex-col justify-center">
        
        {/* Content Container */}
        <div className="max-w-2xl">
          
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl font-serif font-black text-black dark:text-white tracking-tight">
              {t.innovation.title}
            </h3>
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black dark:text-white tracking-tight mb-8 leading-[1.1]">
                {innovationContent[currentIndex].headline}
              </h2>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-xl">
                {innovationContent[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500">
            {innovationContent.map((_, idx) => (
              <span key={idx} className={cn("transition-colors duration-300", currentIndex === idx ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-500")}>
                0{idx + 1}
              </span>
            ))}
            
            {/* Progress Bar */}
            <div className="w-16 h-[2px] bg-neutral-200 dark:bg-neutral-800 relative">
               <motion.div 
                 className="absolute left-0 top-0 h-full bg-black dark:bg-white" 
                 animate={{ width: `${((currentIndex + 1) / innovationContent.length) * 100}%` }}
                 transition={{ duration: 0.5 }}
               /> 
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
