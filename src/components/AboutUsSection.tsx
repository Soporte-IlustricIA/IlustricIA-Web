import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-black dark:bg-black py-24 px-4 md:px-8 relative overflow-hidden transition-colors duration-500">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500 font-semibold">
                Nuestra Esencia
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white dark:text-white leading-tight">
                Transformamos el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">feedback</span> en innovación tangible.
              </h3>
            </div>
            
            <p className="text-lg text-neutral-400 dark:text-neutral-400 leading-relaxed max-w-xl">
              En IlustricIA, no solo implementamos tecnología; forjamos soluciones estratégicas que nacen de la escucha activa. Nuestra misión es cerrar la brecha entre los datos y la ejecución, convirtiendo cada interacción con el cliente en una oportunidad de crecimiento operativo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Target size={18} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white dark:text-white font-medium mb-1">Visión Estratégica</h4>
                  <p className="text-sm text-neutral-500">Miramos más allá del código para entender tu negocio.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Zap size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white dark:text-white font-medium mb-1">Ejecución Ágil</h4>
                  <p className="text-sm text-neutral-500">Resultados medibles en semanas, no en meses.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-neutral-800/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-blue-500/10 rounded-full" />
              
              {/* Center Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-3xl rounded-3xl border border-white/5 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                  <Users size={64} className="text-white opacity-80" strokeWidth={1} />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-500" size={20} />
                  <div className="text-xs">
                    <div className="text-white font-bold">Confianza Total</div>
                    <div className="text-neutral-500">Acompañamiento Real</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 p-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Zap className="text-orange-500" size={20} />
                  <div className="text-xs">
                    <div className="text-white font-bold">Innovación</div>
                    <div className="text-neutral-500">Basada en Datos</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
