import React, { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from './LanguageContext';

export function TestimonialSection() {
  const { t } = useLanguage();
  const avatars = [
    "/images/testimonio1.webp",
    "/images/testimonio2.webp"
  ];
  const testimonials = t.testimonials.items.map((item: any, index: number) => ({
    ...item,
    avatar: avatars[index]
  }));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleManualChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-transparent py-8 px-4 md:px-8 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {/* We create a grid using background gradients */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-24"
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0 mt-2">
               <div className="w-32 h-32 md:w-44 md:h-44 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-800">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className={cn(
                      "w-full h-full object-cover opacity-90 transition-transform duration-500",
                      testimonials[currentIndex].avatar.includes('testimonio1.webp') ? "scale-125" : "scale-100"
                    )}
                  />
               </div>
            </div>

            {/* Text */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white leading-[1.2] tracking-tight max-w-4xl">
              "{testimonials[currentIndex].quote}"
            </blockquote>
          </motion.div>
        </AnimatePresence>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-neutral-200 dark:border-neutral-900/50 pt-8 md:border-t-0 md:pt-0">
          
          {/* Author & Company */}
          <div className="flex items-center gap-6">
            {/* Company Logo (Text representation) */}
            <div className="text-3xl font-serif font-black text-black dark:text-white tracking-tight">
              {t.testimonials.client}
            </div>
            
            {/* Divider */}
            <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800" />
            
            {/* Details */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center h-full text-[10px] font-mono uppercase tracking-widest space-y-1.5"
              >
                <span className="text-black dark:text-white font-medium">{testimonials[currentIndex].role}</span>
                <span className="text-neutral-500">{testimonials[currentIndex].company}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-600">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => handleManualChange(idx)}
                className={cn(
                  "transition-colors duration-300 hover:text-black dark:hover:text-white",
                  currentIndex === idx ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-600"
                )}
              >
                0{idx + 1}
              </button>
            ))}
            
            {/* Progress Bar */}
            <div className="w-24 h-[1px] bg-neutral-200 dark:bg-neutral-800 relative flex items-center">
               {/* Active Indicator Square */}
               <motion.div 
                 className="absolute w-2 h-2 bg-black dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                 animate={{ left: `${(currentIndex / (testimonials.length - 1)) * 100}%` }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               /> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
