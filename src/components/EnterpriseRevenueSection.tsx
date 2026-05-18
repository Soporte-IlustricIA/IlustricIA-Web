import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

function Counter({ value, duration = 2 }: { value: number, duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [inView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const tabs = [
  {
    id: 'ramp',
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-bold text-xl tracking-tight">ramp</span>
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16.5c0 .3-.2.5-.5.5h-17c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h17c.3 0 .5.2.5.5v9zM4.5 8v7.5h15V8h-15z" opacity=".2"/>
          <path d="M12 14.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
          <path d="M21 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1zM3 7v10h18V7H3z"/>
          <path d="M18 10h-2v4h2v-4zM8 10H6v4h2v-4z"/>
        </svg>
      </div>
    )
  },
  {
    id: 'wsp',
    logo: (
      <div className="flex items-center gap-1 opacity-50 grayscale">
        <span className="font-serif italic text-2xl font-bold tracking-tighter">WSP</span>
      </div>
    )
  },
  {
    id: 'scai',
    logo: (
      <div className="flex items-center gap-1 opacity-50 grayscale">
        <span className="font-mono text-xl font-black tracking-widest">SCAI</span>
      </div>
    )
  }
];

export function EnterpriseRevenueSection() {
  const [activeTab, setActiveTab] = useState('ramp');

  return (
    <section className="w-full bg-neutral-50 dark:bg-[#0A0A0A] text-black dark:text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl leading-[1.1] tracking-tight">
              <span className="font-serif italic text-[#C5A87E] block mb-2">Transformando</span>
              <span className="font-serif">el futuro empresarial</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
              IlustricIA es una agencia especializada en el desarrollo de soluciones de IA y automatización para empresas que buscan eficiencia, escalabilidad y una ventaja competitiva real.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/10 dark:border-white/10 rounded-sm overflow-hidden bg-white dark:bg-black/40 max-w-6xl mx-auto shadow-xl dark:shadow-none">
          {/* Left Column: Testimonial */}
          <div className="lg:col-span-5 p-10 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C5A87E] text-xs font-bold uppercase tracking-[0.2em] block mb-8 opacity-80">
                Ventaja competitiva real
              </span>
              <blockquote className="text-2xl md:text-3xl font-serif leading-tight mb-12 text-black/90 dark:text-white/90">
                "Integramos tecnología de última generación para reducir tiempos y maximizar el rendimiento."
              </blockquote>
              <div>
                <p className="font-medium text-lg">IlustricIA</p>
                <p className="text-black/40 dark:text-white/40 text-sm">Agencia de Automatización</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-12 border-t border-black/10 dark:border-white/10"
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-serif text-black dark:text-white">
                    <Counter value={70} />%
                  </div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-black/40 dark:text-white/40 font-medium leading-tight">
                    Reducción de tiempos
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-serif text-black dark:text-white">
                    <Counter value={3} />x
                  </div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-black/40 dark:text-white/40 font-medium leading-tight">
                    Eficiencia aumentada
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-serif text-black dark:text-white">
                    <Counter value={85} />%
                  </div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-black/40 dark:text-white/40 font-medium leading-tight">
                    Mejora en experiencia
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Video/Tabs */}
          <div className="lg:col-span-7 flex flex-col bg-black/5 dark:bg-black/20">
            {/* Tabs */}
            <div className="flex border-b border-black/10 dark:border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 py-5 flex justify-center items-center transition-all duration-300 border-r last:border-r-0 border-black/10 dark:border-white/10",
                    activeTab === tab.id ? "bg-black/5 dark:bg-white/5 text-[#C5A87E]" : "hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <div className={cn(
                    "transition-all duration-300 scale-90",
                    activeTab === tab.id ? "opacity-100 grayscale-0 text-[#C5A87E]" : "opacity-30 grayscale"
                  )}>
                    {tab.logo}
                  </div>
                </button>
              ))}
            </div>

            {/* Video Area */}
            <div className="relative aspect-video overflow-hidden group cursor-pointer bg-neutral-200 dark:bg-neutral-900">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Video Thumbnail"
                className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full border border-[#C5A87E]/30 bg-[#C5A87E]/5 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C5A87E]/15 transition-all duration-500"
                >
                  <Play className="w-6 h-6 text-[#C5A87E] fill-[#C5A87E]/20 ml-1" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
