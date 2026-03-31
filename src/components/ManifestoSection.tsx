import React from 'react';
import { MagicText } from './ui/magic-text';

export function ManifestoSection() {
  return (
    <section className="w-full bg-neutral-50 dark:bg-black py-32 px-4 relative overflow-hidden transition-colors duration-300">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start px-4 md:px-8">
        
        {/* Text Content */}
        <div className="space-y-12 mb-12 text-left w-full">
          <MagicText 
            className="text-3xl md:text-5xl leading-[1.2] tracking-tight"
            segments={[
              { text: "La IA no debe ser solo una promesa,", className: "text-black dark:text-white font-medium" },
              { text: "debe ser una ventaja competitiva real. Optimizamos tiempos y procesos internos.", className: "text-neutral-500 dark:text-neutral-600" }
            ]}
          />

          <MagicText 
            className="text-3xl md:text-5xl leading-[1.2] tracking-tight"
            segments={[
              { text: "Mejoramos la toma de decisiones con datos —", className: "text-neutral-500 dark:text-neutral-600" },
              { text: "reduciendo la fricción operativa para generar crecimiento.", className: "text-black dark:text-white font-medium" }
            ]}
          />

          <MagicText 
            className="text-3xl md:text-5xl leading-[1.2] tracking-tight text-black dark:text-white font-medium"
            text="IlustricIA transforma la tecnología en valor estratégico, con un acompañamiento claro, cercano y adaptado a ti."
          />
        </div>

      </div>
    </section>
  );
}
