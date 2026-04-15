import React from 'react';
import { Rocket } from 'lucide-react';
import { TubesBackground } from '../ui/neon-flow';
import { useTheme } from '../ThemeProvider';

export function DemoHero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <TubesBackground key={theme} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent backdrop-blur-[1px]"></div>
      </TubesBackground>

      {/* Particle/Light Effects */}
      <div className="absolute right-0 bottom-0 w-1/2 h-2/3 z-10 hidden md:block pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="light-arc absolute top-1/4 left-0 w-full h-[1px] rotate-[15deg]"></div>
          <div className="light-arc absolute top-1/3 left-0 w-full h-[1px] rotate-[-5deg] opacity-50"></div>
          
          {/* Mock Phone */}
          <div className="absolute bottom-20 right-20 w-[280px] h-[560px] bg-on-surface rounded-[40px] border-[8px] border-surface-container-highest shadow-2xl overflow-hidden rotate-[-5deg] pointer-events-auto">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center">
                <img 
                  alt="Logo IlustricIA" 
                  className="mx-auto mb-4 h-24 w-24 rounded-sm object-cover" 
                  src="/images/logo.png" 
                />
                <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full mb-2"></div>
                <div className="h-1 w-16 bg-primary/20 mx-auto rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%]">
              <a 
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-center text-xs font-bold text-on-primary shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all" 
                href="#crea-tu-asistente"
              >
                <Rocket size={14} />
                <span>Crear mi propio asistente</span>
              </a>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/30 border border-primary/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary badge-dot"></span>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">IlustricIA Demos Live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface dark:text-white leading-none mb-6 fade-up">
            Prueba nuestros <br/><span className="text-primary">asistentes</span>
          </h1>
          <p className="text-xl text-on-surface-variant dark:text-white/80 leading-relaxed mb-10 max-w-lg fade-up" style={{ animationDelay: '0.1s' }}>
            Experimenta el futuro de la atención automatizada con nuestras demos interactivas diseñadas para sectores estratégicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-up" style={{ animationDelay: '0.2s' }}>
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" 
              href="#demos"
            >
              Ver demos
            </a>
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-surface-container-high dark:bg-neutral-800 text-on-surface dark:text-white font-bold rounded-lg hover:bg-surface-container-highest dark:hover:bg-neutral-700 transition-all md:hidden" 
              href="#crea-tu-asistente"
            >
              Crear mi propio asistente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
