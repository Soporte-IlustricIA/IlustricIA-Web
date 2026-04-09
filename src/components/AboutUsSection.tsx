import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Users, Target, Zap, ShieldCheck, Cpu, Rocket, Globe } from 'lucide-react';
import { InteractiveFrostedGlassCard } from './ui/interactive-frosted-glass-card';

import { useLanguage } from './LanguageContext';

function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function AboutUsSection() {
  const { t } = useLanguage();

  const teamStats = [
    { label: t.about.stats.projects, value: "+50" },
    { label: t.about.stats.countries, value: "2" },
    { label: t.about.stats.experts, value: "12" },
    { label: t.about.stats.years, value: "2" }
  ];

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden bg-transparent transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#29ABE2 1px, transparent 1px), linear-gradient(90deg, #29ABE2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29ABE2]/30 bg-[#29ABE2]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#29ABE2] font-bold">{t.about.badge}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-black dark:text-white flex flex-wrap items-center gap-x-2">
              <span>{t.about.title}</span>
              <span className="text-[#29ABE2]">ADN Digital</span>
              <span>{t.about.titleSuffix}</span>
            </h2>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl leading-relaxed">
              {t.about.description}
            </p>
          </motion.div>

          {/* Right Side: Statistics */}
          <motion.div 
            className="relative min-h-[400px] flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-8 md:gap-12 w-full max-w-md">
              {teamStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#29ABE2]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative border-l-2 border-[#29ABE2]/30 pl-6 py-2">
                    <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2 tracking-tighter">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-mono font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#29ABE2]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
