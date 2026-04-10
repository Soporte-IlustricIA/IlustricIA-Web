import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import SystemGlobe from './ui/system-globe';
import { Rocket, Calendar } from 'lucide-react';

import { useLanguage } from './LanguageContext';

export function SystemOfRecordSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-transparent py-20 px-4 md:px-8 relative overflow-x-clip">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 relative items-center min-h-[500px] lg:min-h-[600px]">
          <div className="flex flex-col justify-center z-10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6">
              {t.systemOfRecord.badge}
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-black dark:text-white tracking-tight mb-6 leading-[1.1]">
              {t.systemOfRecord.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-md leading-relaxed">
              {t.systemOfRecord.description}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <motion.a 
                href="#agendar"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-base font-bold hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-colors flex items-center gap-3 shadow-2xl"
              >
                <Calendar className="w-5 h-5" />
                {t.systemOfRecord.schedule}
              </motion.a>
              <motion.a 
                href="#agendar"
                whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-black dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-xl text-base font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-3"
              >
                <Rocket className="w-5 h-5 text-[#29ABE2]" />
                {t.systemOfRecord.demo}
              </motion.a>
            </div>
          </div>

          {/* Globe Column */}
          <div className="relative h-[450px] md:h-[500px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[1000px] lg:h-[1000px] pointer-events-none opacity-100 mix-blend-screen z-0 lg:translate-x-[15%] translate-x-0">
               <SystemGlobe />
            </div>
          </div>
        </div>

        {/* Bento Grid: Empty for now */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Future content goes here */}
        </div>
      </div>
    </section>
  );
}
