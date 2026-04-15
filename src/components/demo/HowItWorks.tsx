import React from 'react';
import { MousePointerClick, MessageSquare, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      id: '01',
      icon: MousePointerClick,
      title: 'Selecciona una demo',
      description: 'Elige el asistente que mejor se adapte a tu flujo de trabajo actual.'
    },
    {
      id: '02',
      icon: MessageSquare,
      title: 'Interactúa en tiempo real',
      description: 'Pon a prueba las capacidades de respuesta y comprensión de la IA.'
    },
    {
      id: '03',
      icon: BarChart3,
      title: 'Analiza los resultados',
      description: 'Observa cómo la automatización optimiza la gestión de usuarios.'
    }
  ];

  return (
    <section className="py-32 bg-transparent" id="como-funciona">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">Proceso</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface dark:text-white">Cómo funciona</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Decorative Connector Line */}
          <div className="hidden md:block step-connector"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-surface-container-high dark:bg-neutral-800 border-4 border-surface dark:border-neutral-900 flex items-center justify-center mb-8 relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                  {step.id}
                </span>
                <step.icon className="text-primary" size={32} />
              </div>
              <h4 className="text-lg font-bold mb-3 text-on-surface dark:text-white">{step.title}</h4>
              <p className="text-on-surface-variant dark:text-neutral-400 text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
