import React, { useState, useRef } from 'react';
import { 
  FileText, 
  MessageSquare, 
  Phone, 
  Ticket, 
  Home, 
  Star, 
  Grid3X3,
  FileType
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShiningText } from './ui/shining-text';
import { MagicText } from './ui/magic-text';

const features = [
  {
    title: "Tecnología práctica",
    description: "No aplicamos IA por moda. Resolvemos problemas concretos: automatización, eficiencia y captación."
  },
  {
    title: "Enfoque personalizado",
    description: "Soluciones a medida. Adaptamos la tecnología a tu cultura, procesos y objetivos únicos."
  },
  {
    title: "Acompañamiento integral",
    description: "Desde el diagnóstico hasta la implementación. No solo entregamos tecnología, aseguramos el éxito."
  },
  {
    title: "Resultados medibles",
    description: "Transformamos datos en decisiones. Optimizamos tiempos y reducimos fricción operativa."
  },
  {
    title: "Ventaja competitiva",
    description: "Convierte la tecnología en tu mayor activo para un crecimiento sostenible."
  }
];

const FeatureItem = ({ 
  active, 
  title, 
  description, 
  isLast,
  onClick
}: { 
  active: boolean; 
  title: string; 
  description: string; 
  isLast: boolean;
  onClick: () => void;
  key?: React.Key;
}) => {
  return (
    <div className="flex gap-6 relative group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-[-12px] w-[1px] bg-neutral-200 dark:bg-neutral-800" />
      )}
      
      {/* Bullet Point */}
      <div className={cn(
        "relative z-10 w-2.5 h-2.5 mt-2 rounded-[1px] flex-shrink-0 transition-all duration-500",
        active ? "bg-black dark:bg-white scale-125 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-neutral-300 dark:bg-neutral-800 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-700"
      )} />
      
      {/* Content */}
      <div className="pb-0 transition-all duration-500 w-full">
        <h3 
          className={cn(
            "text-xl font-medium leading-tight transition-colors duration-300 cursor-pointer py-1",
            active ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400"
          )}
          onClick={onClick}
        >
          {title}
        </h3>
        <div className={cn(
          "grid transition-all duration-500 ease-in-out",
          active ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0 mb-2"
        )}>
          <div className="overflow-hidden">
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md pt-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  color = "blue",
  className 
}: { 
  icon: any; 
  title: string; 
  subtitle?: React.ReactNode; 
  color?: "blue" | "green" | "orange" | "purple" | "grey";
  className?: string;
}) => {
  const colorStyles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    grey: "bg-neutral-800/50 text-neutral-400 border-neutral-700/50",
  };

  return (
    <div className={cn(
      "p-3 rounded-lg border backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider shadow-lg transition-colors duration-300",
      "bg-white/80 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800",
      className
    )}>
      <div className="flex items-center gap-2 mb-2 text-neutral-500 dark:text-neutral-400">
        <div className={cn("p-1 rounded bg-neutral-100 dark:bg-neutral-800", colorStyles[color].split(' ')[1])}>
          <Icon size={12} />
        </div>
        <span className="font-semibold text-black dark:text-white">{title}</span>
      </div>
      <div className="text-neutral-500 dark:text-neutral-500 leading-tight">
        {subtitle}
      </div>
    </div>
  );
};

export function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const featureCount = features.length;
    // Map scroll progress to index with a bit of buffer
    const index = Math.min(
      Math.floor(latest * featureCount),
      featureCount - 1
    );
    setActiveFeature(index);
  });

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-white dark:bg-black relative transition-colors duration-300"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full px-4 md:px-8 lg:px-12">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-16 leading-[1.1] text-black dark:text-white">
              <ShiningText>
                De la promesa<br />a la práctica
              </ShiningText>
            </h2>
            
            <div className="flex flex-col relative">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  active={activeFeature === index} 
                  title={feature.title} 
                  description={feature.description}
                  isLast={index === features.length - 1}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[800px] bg-neutral-100 dark:bg-neutral-950/50 rounded-3xl border border-neutral-200 dark:border-neutral-900 p-8 flex flex-col items-center overflow-hidden transition-all duration-500">
            
            {/* Background Grid/Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-200/50 dark:from-neutral-900/50 via-white dark:via-black to-white dark:to-black opacity-50" />
            
            {/* Diagram Container */}
            <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center gap-8">
              
              {/* Top Row Inputs */}
              <div className="flex justify-center gap-4 w-full">
                <InputCard 
                  icon={Grid3X3} 
                  title="DATOS DE NEGOCIO" 
                  color="green"
                  className="w-40 h-24"
                  subtitle={
                    <div className="grid grid-cols-4 gap-1 mt-2 opacity-50">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-3 bg-neutral-700 rounded-[1px]" />
                      ))}
                    </div>
                  }
                />
                <InputCard 
                  icon={FileType} 
                  title="INFORMES.PDF" 
                  color="orange"
                  className="w-40 h-24 relative overflow-hidden"
                  subtitle={
                    <div className="mt-2">
                      <div className="text-white text-xs normal-case font-sans font-bold leading-none">Cambio de<br/>tendencia</div>
                      <div className="absolute right-[-10px] bottom-[-10px] w-16 h-16 bg-orange-900/20 rounded-full blur-xl" />
                    </div>
                  }
                />
              </div>

              {/* Middle Row Inputs */}
              <div className="flex justify-center gap-4 w-full">
                <InputCard 
                  icon={Star} 
                  title="FEEDBACK" 
                  color="blue"
                  className="w-40"
                  subtitle={
                    <div className="space-y-1">
                      <div>PROBLEMAS DETECTADOS</div>
                      <div>MEJORAS PENDIENTES</div>
                      <div className="flex text-blue-500 gap-0.5 mt-1">
                        <Star size={8} fill="currentColor" />
                        <Star size={8} fill="currentColor" />
                        <Star size={8} fill="currentColor" />
                        <Star size={8} />
                        <Star size={8} />
                      </div>
                    </div>
                  }
                />
                <InputCard 
                  icon={Phone} 
                  title="LLAMADAS" 
                  color="green"
                  className="w-40"
                  subtitle={
                    <div className="space-y-1 opacity-70">
                      <div>TIPO: GRABACIÓN</div>
                      <div>TAMAÑO: 7 MB</div>
                      <div>FECHA: 17 JUL 2025</div>
                    </div>
                  }
                />
                <InputCard 
                  icon={Ticket} 
                  title="TICKETS SOPORTE" 
                  color="grey"
                  className="w-40"
                  subtitle={
                    <div className="space-y-1.5 mt-1">
                      <div className="bg-neutral-800 px-1.5 py-0.5 rounded text-[8px]">SOPORTE - CNV_B609FNE</div>
                      <div className="bg-neutral-800 px-1.5 py-0.5 rounded text-[8px]">SOPORTE - CNV_B609FNE</div>
                    </div>
                  }
                />
              </div>

              {/* Connecting Lines (SVG) */}
              <div className="relative h-16 w-full">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                   {/* Lines from middle row to center */}
                   <path d="M 100 0 L 100 20 L 256 20 L 256 64" stroke="#333" strokeWidth="1" fill="none" />
                   <path d="M 256 0 L 256 64" stroke="#333" strokeWidth="1" fill="none" />
                   <path d="M 412 0 L 412 20 L 256 20 L 256 64" stroke="#333" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Central Node */}
              <div className="relative z-20 flex items-center gap-3 bg-neutral-900 border border-neutral-800 pl-1 pr-4 py-1 rounded-md">
                <div className="w-6 h-6 bg-purple-500 rounded-[2px] shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-[1px]" />
                </div>
                <span className="text-xs font-mono text-neutral-300 tracking-wider">PROCESANDO IA</span>
                
                {/* Line to bottom */}
                <div className="absolute left-4 top-full h-12 w-[1px] bg-neutral-800" />
              </div>

              {/* Bottom Output Card */}
              <div className="mt-8 w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 backdrop-blur-md relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />
                
                <div className="flex items-center gap-2 text-neutral-500 text-sm mb-6">
                  <Home size={14} />
                  <span>Inicio</span>
                  <span className="text-neutral-700">/</span>
                  <span>Rendimiento y Valor</span>
                </div>

                <h3 className="text-3xl font-semibold text-white mb-8">Informe Estratégico</h3>

                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-neutral-400">Resumen</h4>
                  <div className="h-px w-full bg-neutral-800" />
                  <MagicText 
                    text="Este informe destaca las prioridades clave para el crecimiento..." 
                    className="text-neutral-600 text-lg"
                    progress={scrollYProgress}
                  />
                  {/* Fade out effect */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
