import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import { useLanguage } from './LanguageContext';

const SmartGlassBadge = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-b from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative backdrop-blur-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="w-10 h-10 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:text-orange-500 transition-colors duration-500">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">{title}</div>
        <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{subtitle}</div>
      </div>
    </div>
  </div>
);

export function FooterCtaSection() {
  const { t } = useLanguage();

  useEffect(() => {
    (function (C: any, A, L) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "reunion-de-informacion-ilustric-ia", {origin:"https://app.cal.com"});

      Cal.ns["reunion-de-informacion-ilustric-ia"]("inline", {
        elementOrSelector:"#my-cal-inline-reunion-de-informacion-ilustric-ia",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "agendar-citas/reunion-de-informacion-ilustric-ia",
      });

      Cal.ns["reunion-de-informacion-ilustric-ia"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  return (
    <section id="agendar" className="w-full bg-transparent py-20 px-4 md:px-8 relative overflow-hidden">
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
          className="mb-12 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border border-black/10 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <motion.div 
              className="absolute inset-0 w-2 h-2 rounded-full bg-orange-500"
              animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 tracking-[0.15em] uppercase">
            {t.footerCta.status}
          </span>
        </motion.div>

        {/* High-End Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-black to-neutral-600 dark:from-[#F8FAFC] dark:to-[#94A3B8] bg-clip-text text-transparent"
        >
          {t.footerCta.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-slate-400 max-w-2xl mb-16 font-light leading-relaxed"
        >
          {t.footerCta.subtitle}
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
            title={t.footerCta.pillars.diagnosis.title} 
            subtitle={t.footerCta.pillars.diagnosis.subtitle} 
          />
          <SmartGlassBadge 
            icon={CheckCircle2} 
            title={t.footerCta.pillars.risk.title} 
            subtitle={t.footerCta.pillars.risk.subtitle} 
          />
          <SmartGlassBadge 
            icon={Zap} 
            title={t.footerCta.pillars.support.title} 
            subtitle={t.footerCta.pillars.support.subtitle} 
          />
        </motion.div>

        {/* Cal.com Inline Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl mx-auto min-h-[700px]"
        >
          <div 
            style={{ width: "100%", height: "700px", overflow: "scroll" }} 
            id="my-cal-inline-reunion-de-informacion-ilustric-ia"
          ></div>
        </motion.div>

        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-xs text-slate-500 font-medium tracking-wide"
        >
          {t.footerCta.footerText}
        </motion.p>

      </div>
    </section>
  );
}
