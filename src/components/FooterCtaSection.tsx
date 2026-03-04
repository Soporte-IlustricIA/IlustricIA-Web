import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SmartGlassBadge = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-neutral-400 group-hover:text-orange-500 transition-colors duration-500">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">{title}</div>
        <div className="text-sm font-medium text-neutral-300">{subtitle}</div>
      </div>
    </div>
  </div>
);

export function FooterCtaSection() {
  return (
    <section className="w-full bg-black py-40 px-4 md:px-8 relative overflow-hidden">
      {/* Orbital Light Threads Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="threadGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#29ABE2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#29ABE2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="500"
            cy="500"
            r="300"
            fill="none"
            stroke="url(#threadGradient)"
            strokeWidth="0.5"
            initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 360, scale: 1.2, opacity: 1 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.ellipse
            cx="500"
            cy="500"
            rx="450"
            ry="200"
            fill="none"
            stroke="url(#threadGradient)"
            strokeWidth="0.5"
            initial={{ rotate: 45, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 405, scale: 1.1, opacity: 0.8 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.ellipse
            cx="500"
            cy="500"
            rx="200"
            ry="450"
            fill="none"
            stroke="url(#threadGradient)"
            strokeWidth="0.5"
            initial={{ rotate: -30, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 330, scale: 1.3, opacity: 0.6 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Forged Status Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <motion.div 
              className="absolute inset-0 w-2 h-2 rounded-full bg-orange-500"
              animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 tracking-[0.15em] uppercase">
            ESTADO OPERATIVO: DISPONIBLE | CONSULTA ESTRATÉGICA →
          </span>
        </motion.div>

        {/* High-End Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-[#F8FAFC] to-[#94A3B8] bg-clip-text text-transparent"
        >
          ¿Iniciamos la transformación de tu operativa?
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-16 font-light leading-relaxed"
        >
          Analicemos tu negocio en 20 minutos sin compromiso. Te mostramos cómo la Inteligencia Artificial genera una ventaja competitiva real.
        </motion.p>

        {/* Confidence Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20"
        >
          <SmartGlassBadge 
            icon={Clock} 
            title="DIAGNÓSTICO RÁPIDO" 
            subtitle="Solo 20 Minutos" 
          />
          <SmartGlassBadge 
            icon={CheckCircle2} 
            title="CERO RIESGO" 
            subtitle="Sin Compromiso" 
          />
          <SmartGlassBadge 
            icon={Zap} 
            title="ACOMPAÑAMIENTO REAL" 
            subtitle="Soluciones Prácticas" 
          />
        </motion.div>

        {/* Luxury CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          {/* Intense Background Glow */}
          <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <button className="relative overflow-hidden px-10 py-5 rounded-xl bg-[#001A3D] border border-white/10 shadow-2xl flex items-center gap-3 transition-transform duration-300 active:scale-95">
            {/* Data Flow Visualization Inside */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <motion.path
                  d="M0 30 Q50 10 100 30 T200 30"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: [0, 1, 0], pathOffset: [0, 0, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M0 40 Q50 20 100 40 T200 40"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: [0, 1, 0], pathOffset: [0, 0, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </svg>
            </div>

            <span className="relative z-10 text-sm font-bold tracking-[0.15em] text-white uppercase">
              RESERVAR SESIÓN ESTRATÉGICA
            </span>
            <ArrowRight size={18} className="relative z-10 text-orange-500 group-hover:translate-x-1 transition-transform" />
            
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </motion.div>

        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-xs text-slate-500 font-medium tracking-wide"
        >
          Te hablaremos de tecnología aplicada, no de tendencias. Hablarás con un estratega, no un comercial.
        </motion.p>

      </div>
    </section>
  );
}
