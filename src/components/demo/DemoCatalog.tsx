import React, { useState, useRef } from 'react';
import { Scale, Stethoscope, Scissors, ArrowRight, Phone, ArrowDownRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../LanguageContext';

const DEMO_AGENTS = [
  { id: 'agent_3701kpxfmaecerna4xxhy0bs074s', key: 'clinics', icon: Stethoscope },
  { id: 'agent_4101kevghc95evg9e975pzgqg89f', key: 'law', icon: Scale },
  { id: 'agent_1901km5ad4pffrpv6dqaxefrrkmr', key: 'salon', icon: Scissors }
] as const;

export function DemoCatalog() {
  const { t } = useLanguage();
  const [activeAgentId, setActiveAgentId] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const demos = DEMO_AGENTS.map((agent) => ({
    ...agent,
    ...t.demo.catalog.items[agent.key]
  }));

  const handleOpenDemo = (agentId: string) => {
    setActiveAgentId(agentId);
    setTimeout(() => {
      widgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const activeDemo = demos.find(d => d.id === activeAgentId);

  return (
    <section className="py-32 bg-transparent" id="demos">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-on-surface dark:text-white">{t.demo.catalog.title}</h2>
            <p className="text-on-surface-variant dark:text-neutral-400">{t.demo.catalog.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
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
                {t.demo.catalog.openDemo} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 scroll-mt-24" id="fixed-demos-widget" ref={widgetRef}>
          <p className="text-xs uppercase tracking-widest text-outline mb-4">
            {t.demo.catalog.interactiveDemo} {activeDemo && `· ${activeDemo.category}`}
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
                      {t.demo.catalog.widgetActive}{activeDemo && ` · ${activeDemo.category}`}
                    </p>
                    <p className="text-xs text-on-surface-variant dark:text-neutral-400 mt-1">
                      {t.demo.catalog.pressPrefix} <span className="font-semibold">{t.demo.catalog.tryMeLabel}</span> {t.demo.catalog.pressSuffix}
                    </p>
                    <div className="hidden md:flex items-center gap-1 text-[11px] text-outline dark:text-neutral-500 mt-3">
                      <ArrowDownRight size={12} />
                      <span>{t.demo.catalog.bottomRight}</span>
                    </div>
                  </div>
                </div>
                {/* @ts-ignore */}
                <elevenlabs-convai agent-id={activeAgentId} />
              </div>
            ) : (
              <p className="text-sm text-on-surface-variant dark:text-neutral-400">
                {t.demo.catalog.emptyState}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
