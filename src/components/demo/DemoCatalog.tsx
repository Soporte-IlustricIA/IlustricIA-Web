import React, { useState, useRef } from 'react';
import { Utensils, Stethoscope, Scissors, ArrowRight, Phone, ArrowDownRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const DEMOS = [
  {
    id: 'agent_7401knfk53nwf6q89cpbtrgxt859',
    title: 'Asistente para Restaurantes',
    description: 'Reservas, carta, alérgenos y consultas de horario con respuesta inmediata para comensales.',
    category: 'Restaurantes',
    icon: Utensils
  },
  {
    id: 'agent_3801kn4qtcm1e6wb3gh9kwzwagzd',
    title: 'Asistente para Clínicas',
    description: 'Citas, recordatorios y primeras consultas orientadas sin sustituir el criterio médico.',
    category: 'Clínicas',
    icon: Stethoscope
  },
  {
    id: 'agent_1901km5ad4pffrpv6dqaxefrrkmr',
    title: 'Asistente para Peluquería',
    description: 'Reservas de sillón, servicios y disponibilidad para salones y barberías.',
    category: 'Peluquería',
    icon: Scissors
  }
];

export function DemoCatalog() {
  const [activeAgentId, setActiveAgentId] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const handleOpenDemo = (agentId: string) => {
    setActiveAgentId(agentId);
    setTimeout(() => {
      widgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const activeDemo = DEMOS.find(d => d.id === activeAgentId);

  return (
    <section className="py-32 bg-transparent" id="demos">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-on-surface dark:text-white">Catálogo de Asistentes Especializados</h2>
            <p className="text-on-surface-variant dark:text-neutral-400">Selecciona el ecosistema que mejor se adapte a las necesidades de tu arquitectura empresarial.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMOS.map((demo) => (
            <div 
              key={demo.id} 
              className={cn(
                "group bg-surface-container-lowest dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 border border-outline-variant/10 dark:border-white/10 demo-card",
                activeAgentId === demo.id && "active"
              )}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high dark:bg-neutral-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <demo.icon size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-secondary-container dark:bg-neutral-800 text-on-secondary-container dark:text-neutral-400">
                  {demo.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-on-surface dark:text-white">{demo.title}</h3>
              <p className="text-on-surface-variant dark:text-neutral-400 text-sm mb-8 leading-relaxed">{demo.description}</p>
              <button 
                onClick={() => handleOpenDemo(demo.id)}
                className="w-full cursor-pointer py-3 bg-surface-container-high dark:bg-neutral-800 text-on-surface dark:text-white font-bold text-sm rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2"
              >
                Abrir demo <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 scroll-mt-24" id="fixed-demos-widget" ref={widgetRef}>
          <p className="text-xs uppercase tracking-widest text-outline mb-4">
            Demo interactiva {activeDemo && `· ${activeDemo.category}`}
          </p>
          <div className="relative rounded-xl border border-outline-variant/20 dark:border-white/10 bg-surface-container-lowest dark:bg-neutral-900/50 backdrop-blur-sm p-5 md:p-6">
            {activeAgentId ? (
              <div className="min-h-[220px] flex flex-col">
                <div className="flex items-start gap-4 max-w-xl">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface dark:text-white">
                      Widget activo{activeDemo && ` · ${activeDemo.category}`}
                    </p>
                    <p className="text-xs text-on-surface-variant dark:text-neutral-400 mt-1">
                      Pulsa <span className="font-semibold">«Pruébame»</span> en la esquina inferior derecha para iniciar la conversación.
                    </p>
                    <div className="hidden md:flex items-center gap-1 text-[11px] text-outline dark:text-neutral-500 mt-3">
                      <ArrowDownRight size={12} />
                      <span>Abajo a la derecha de este panel</span>
                    </div>
                  </div>
                </div>
                {/* @ts-ignore */}
                <elevenlabs-convai agent-id={activeAgentId} />
              </div>
            ) : (
              <p className="text-sm text-on-surface-variant dark:text-neutral-400">
                Pulsa «Abrir demo» en una tarjeta para cargar el widget de ElevenLabs.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
