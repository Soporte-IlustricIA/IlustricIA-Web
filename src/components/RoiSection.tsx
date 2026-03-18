import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';

const steps = [
  {
    id: 1,
    title: "Sentido Práctico",
    description: "La IA no es una moda, es una herramienta. Resolvemos problemas concretos: desde automatizar tareas hasta mejorar la captación de clientes.",
    cx: 300, cy: 350
  },
  {
    id: 2,
    title: "Soluciones a Medida",
    description: "Tu empresa es única. Diseñamos plataformas digitales y sistemas de IA adaptados a tu cultura, ritmo y objetivos específicos.",
    cx: 450, cy: 150
  },
  {
    id: 3,
    title: "Acompañamiento Real",
    description: "Estamos contigo en todo el proceso: desde el diagnóstico inicial y la consultoría estratégica hasta la integración final.",
    cx: 550, cy: 150
  },
  {
    id: 4,
    title: "Resultados Medibles",
    description: "Convertimos la tecnología en una ventaja competitiva real, optimizando la toma de decisiones y generando un crecimiento sostenible.",
    cx: 650, cy: 50
  }
];

export function RoiSection() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger exactly at center
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepId = Number(entry.target.getAttribute('data-step'));
          if (stepId) setActiveStep(stepId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select all trigger elements
    const triggers = document.querySelectorAll('.roi-scroll-trigger');
    triggers.forEach(trigger => observer.observe(trigger));

    return () => {
      triggers.forEach(trigger => observer.unobserve(trigger));
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white dark:bg-black h-[400vh] transition-colors duration-300">
      {/* Scroll Triggers - Invisible elements that trigger state changes */}
      <div className="absolute inset-0 pointer-events-none z-0 flex flex-col">
        {steps.map((step) => (
          <div 
            key={`trigger-${step.id}`}
            data-step={step.id}
            className="roi-scroll-trigger h-[100vh] w-full"
          />
        ))}
      </div>

      {/* Sticky Content Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Background Grid Dots */}
        <div className="absolute inset-0 z-0 dark:[--dot-color:#222] [--dot-color:#e5e5e5]" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--dot-color, #e5e5e5) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Graph Area */}
            <div className="lg:col-span-8 relative h-[500px] w-full">
              
              {/* SVG Graph */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* The Line */}
                <path 
                  d="M 0 400 L 200 200 L 300 350 L 450 150 L 550 150 L 650 50 L 800 0" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-neutral-200 dark:text-neutral-800"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Dynamic Points */}
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                
                return (
                  <motion.div
                    key={step.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: step.cx, top: step.cy }}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      opacity: isActive ? 1 : 0.3,
                      zIndex: isActive ? 20 : 10
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-sm flex items-center justify-center border transition-colors duration-500",
                      isActive 
                        ? "bg-orange-100 dark:bg-orange-900/40 border-orange-500/50 shadow-[0_0_25px_rgba(234,88,12,0.3)] dark:shadow-[0_0_25px_rgba(234,88,12,0.6)]" 
                        : "bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-900/20 shadow-none"
                    )}>
                      <div className={cn(
                        "w-3 h-3 rounded-sm flex items-center justify-center transition-colors duration-500",
                        isActive ? "bg-orange-500" : "bg-orange-300 dark:bg-orange-800/40"
                      )}>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-[1px] transition-colors duration-500",
                          isActive ? "bg-white" : "bg-orange-200 dark:bg-orange-700"
                        )} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Floating Card - Now Dynamic */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute left-0 top-[100px] w-[280px] bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 shadow-xl dark:shadow-2xl z-20"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                    Paso 0{activeStep}
                  </div>
                  <div className="text-3xl font-medium text-black dark:text-white mb-4 tracking-tight">
                    {steps[activeStep - 1].title}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {steps[activeStep - 1].description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Text Content (Right Side) - Also Dynamic */}
            <div className="lg:col-span-4 flex flex-col justify-end h-full pt-12 lg:pt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white mb-6 leading-tight">
                    {steps[activeStep - 1].title}
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-neutral-400 dark:text-neutral-500 mb-12 leading-tight">
                    {steps[activeStep - 1].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-1">
                <p className="text-black dark:text-white text-sm font-medium">¿Quieres ver el ROI completo de IlustricIA?</p>
                <a href="#" className="inline-flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors border-b border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white pb-0.5">
                  Descarga el estudio de impacto económico
                  <ArrowUpRight size={12} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-20 flex items-center gap-4 text-[10px] font-mono tracking-widest">
            {steps.map((step) => (
              <React.Fragment key={`pag-${step.id}`}>
                <span className={cn(
                  "transition-colors duration-300",
                  activeStep === step.id ? "text-black dark:text-white font-bold scale-110" : "text-neutral-300 dark:text-neutral-600"
                )}>
                  0{step.id}
                </span>
                {step.id < steps.length && (
                  <div className="w-16 h-[1px] bg-neutral-200 dark:bg-neutral-800 relative">
                    <motion.div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-black dark:bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: activeStep > step.id ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
