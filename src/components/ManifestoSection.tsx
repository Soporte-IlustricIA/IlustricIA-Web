import React from 'react';
import { 
  Bot, 
  Globe, 
  LineChart, 
  Cpu, 
  MessageCircle, 
  Lightbulb 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { InteractiveFrostedGlassCard } from './ui/interactive-frosted-glass-card';
import { MagicText } from './ui/magic-text';

const IconCard = ({ 
  icon: Icon, 
  label 
}: { 
  icon: any; 
  label: string; 
}) => {
  return (
    <InteractiveFrostedGlassCard className="rounded-lg">
      <div className="flex flex-col items-center justify-center w-24 h-24 bg-neutral-900/50 border border-neutral-800 rounded-lg backdrop-blur-sm hover:bg-neutral-800/50 transition-colors duration-300 group cursor-default">
        <Icon 
          size={20} 
          className="text-neutral-400 mb-3 group-hover:text-white transition-colors duration-300" 
          strokeWidth={1.5}
        />
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
          {label}
        </span>
      </div>
    </InteractiveFrostedGlassCard>
  );
};

export function ManifestoSection() {
  return (
    <section className="w-full bg-black py-32 px-4 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start px-4 md:px-8">
        
        {/* Text Content */}
        <div className="space-y-12 mb-12 text-left w-full">
          <MagicText 
            className="text-3xl md:text-5xl leading-[1.2] tracking-tight"
            segments={[
              { text: "La IA no debe ser solo una promesa,", className: "text-white font-medium" },
              { text: "debe ser una ventaja competitiva real. Optimizamos tiempos y procesos internos.", className: "text-neutral-600" }
            ]}
          />

          <MagicText 
            className="text-3xl md:text-5xl leading-[1.2] tracking-tight"
            segments={[
              { text: "Mejoramos la toma de decisiones con datos —", className: "text-neutral-600" },
              { text: "reduciendo la fricción operativa para generar crecimiento.", className: "text-white font-medium" }
            ]}
          />

          <MagicText 
            className="text-3xl md:text-5xl leading-[1.2] tracking-tight text-white font-medium"
            text="IlustricIA transforma la tecnología en valor estratégico, con un acompañamiento claro, cercano y adaptado a ti."
          />
        </div>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-center gap-4 w-full mt-12">
          <IconCard icon={Bot} label="Chatbots" />
          <IconCard icon={Globe} label="Web Dev" />
          <IconCard icon={Lightbulb} label="Consulting" />
          <IconCard icon={Cpu} label="Automation" />
          <IconCard icon={MessageCircle} label="Social" />
          <IconCard icon={LineChart} label="Strategy" />
        </div>

      </div>
    </section>
  );
}
