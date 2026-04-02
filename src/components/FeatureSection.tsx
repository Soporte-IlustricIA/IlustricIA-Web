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
import DataCoreVisualization from './ui/data-core-visualization';

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
            
            {/* Three.js Visualization Background */}
            <DataCoreVisualization />

            {/* Tech Connection Lines (SVG Layer) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid meet">
                {/* Connection from Top Left Card to Center */}
                <motion.path
                  d="M 120 220 L 120 300 L 200 300 L 200 380"
                  stroke="url(#neonGradient1)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                {/* Connection from Top Right Card to Center */}
                <motion.path
                  d="M 280 220 L 280 300 L 200 300 L 200 380"
                  stroke="url(#neonGradient1)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
                {/* Connection from Center to Bottom Card */}
                <motion.path
                  d="M 200 420 L 200 540"
                  stroke="url(#neonGradient2)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Data Packets (Moving Dots with Glow) */}
                <g>
                  <motion.circle r="3" fill="#00f2ff" filter="url(#glow)">
                    <animateMotion
                      path="M 120 220 L 120 300 L 200 300 L 200 380"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>
                  <motion.circle r="3" fill="#00f2ff" filter="url(#glow)">
                    <animateMotion
                      path="M 280 220 L 280 300 L 200 300 L 200 380"
                      dur="3s"
                      begin="1.5s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>
                  <motion.circle r="4" fill="#ff00ff" filter="url(#glow)">
                    <animateMotion
                      path="M 200 420 L 200 540"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>
                </g>

                {/* Connection Ports (Glowing Dots at endpoints) */}
                <circle cx="120" cy="220" r="4" fill="#00f2ff" className="animate-pulse" />
                <circle cx="280" cy="220" r="4" fill="#00f2ff" className="animate-pulse" />
                <circle cx="200" cy="380" r="4" fill="#a855f7" className="animate-pulse" />
                <circle cx="200" cy="420" r="4" fill="#a855f7" className="animate-pulse" />
                <circle cx="200" cy="540" r="4" fill="#ff00ff" className="animate-pulse" />

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00f2ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff00ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ff00ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Diagram Container */}
            <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center gap-8 h-full justify-center">
              
              {/* Floating Input Cards */}
              <motion.div 
                className="flex flex-wrap justify-center gap-4 w-full"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <InputCard 
                  icon={Grid3X3} 
                  title="DATOS DE NEGOCIO" 
                  color="green"
                  className="w-40 h-24 backdrop-blur-md border-emerald-500/30 dark:border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-shadow duration-500"
                  subtitle={
                    <div className="grid grid-cols-4 gap-1 mt-2 opacity-50">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-3 bg-emerald-500/30 rounded-[1px]" />
                      ))}
                    </div>
                  }
                />
                <InputCard 
                  icon={FileType} 
                  title="INFORMES.PDF" 
                  color="orange"
                  className="w-40 h-24 relative overflow-hidden backdrop-blur-md border-orange-500/30 dark:border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:shadow-[0_0_25px_rgba(249,115,22,0.2)] transition-shadow duration-500"
                  subtitle={
                    <div className="mt-2">
                      <div className="text-white text-xs normal-case font-sans font-bold leading-none">Cambio de<br/>tendencia</div>
                      <div className="absolute right-[-10px] bottom-[-10px] w-16 h-16 bg-orange-500/20 rounded-full blur-xl" />
                    </div>
                  }
                />
              </motion.div>

              {/* Central Processing Node */}
              <motion.div 
                className="relative z-20 flex items-center gap-3 bg-neutral-900/90 backdrop-blur-xl border border-purple-500/40 pl-1 pr-4 py-1 rounded-md"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(168,85,247,0.3)",
                    "0 0 50px rgba(168,85,247,0.6)",
                    "0 0 20px rgba(168,85,247,0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-6 h-6 bg-purple-500 rounded-[2px] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-[1px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <span className="text-[10px] font-mono text-purple-200 tracking-wider font-bold">PROCESANDO IA</span>
              </motion.div>

              {/* Bottom Output Card */}
              <motion.div 
                className="w-full bg-neutral-900/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                style={{
                  y: useScroll({ target: containerRef }).scrollYProgress.get() * 50
                }}
              >
                {/* Animated neon scanline */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] blur-[1px]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="flex items-center gap-2 text-cyan-500/70 text-[10px] uppercase tracking-widest mb-4 font-bold">
                  <Home size={12} className="text-cyan-400" />
                  <span>RESULTADO OPERATIVO</span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Estrategia de Crecimiento</h3>

                <div className="space-y-3">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
                  <MagicText 
                    text="Optimizando la captación de leads mediante flujos de IA..." 
                    className="text-cyan-100/60 text-sm leading-relaxed font-light"
                    progress={scrollYProgress}
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
