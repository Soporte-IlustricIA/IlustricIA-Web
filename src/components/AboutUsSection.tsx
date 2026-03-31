import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Users, Target, Zap, ShieldCheck, Cpu, Rocket, Globe } from 'lucide-react';
import { ShiningText } from './ui/shining-text';
import { InteractiveFrostedGlassCard } from './ui/interactive-frosted-glass-card';

function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const coreValues = [
// ... (rest of the file)
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Innovación Pura",
    description: "Desarrollamos soluciones de IA que no solo resuelven problemas, sino que redefinen posibilidades."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Impacto Global",
    description: "Nuestra tecnología trasciende fronteras, conectando empresas con el futuro digital."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Velocidad y Eficiencia",
    description: "Optimizamos procesos para que tu negocio se mueva a la velocidad de la luz."
  }
];

const teamStats = [
  { label: "Proyectos IA", value: "150+" },
  { label: "Países", value: "12" },
  { label: "Expertos", value: "45" },
  { label: "Años de Innovación", value: "8" }
];

export function AboutUsSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#29ABE2 1px, transparent 1px), linear-gradient(90deg, #29ABE2 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29ABE2]/30 bg-[#29ABE2]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#29ABE2] font-bold">Quienes Somos</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Forjando el <ShiningText className="font-bold">ADN Digital</ShiningText> de la próxima generación.
            </h2>
            
            <p className="text-lg text-black/60 dark:text-white/60 mb-10 max-w-xl leading-relaxed">
              En <span className="text-[#29ABE2] font-semibold">IlustricIA</span>, no solo construimos software; diseñamos ecosistemas inteligentes. Somos un equipo de visionarios, ingenieros y creativos apasionados por la intersección entre la inteligencia artificial y la experiencia humana.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {teamStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-[#29ABE2]/20 pl-4"
                >
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#29ABE2] text-white rounded-sm font-bold tracking-tight hover:bg-[#29ABE2]/90 transition-colors shadow-[0_0_20px_rgba(41,171,226,0.3)] flex items-center gap-3"
            >
              Conoce al Equipo <Rocket className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right Side: Interactive Cards */}
          <div className="grid grid-cols-1 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <InteractiveFrostedGlassCard className="p-8 border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-sm hover:border-[#29ABE2]/30 transition-colors group">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-sm bg-[#29ABE2]/10 flex items-center justify-center text-[#29ABE2] group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-500">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{value.title}</h3>
                      <p className="text-black/50 dark:text-white/50 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </InteractiveFrostedGlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#29ABE2]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
