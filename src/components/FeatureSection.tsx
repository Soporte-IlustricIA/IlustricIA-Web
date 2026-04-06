import React, { useState, useRef } from 'react';
import { 
  FileText, 
  MessageSquare, 
  Phone, 
  Ticket, 
  Star
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from 'framer-motion';
import { ShiningText } from './ui/shining-text';

import { useLanguage } from './LanguageContext';

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
    <div className="flex gap-4 md:gap-6 relative group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[3.5px] md:left-[5px] top-3 bottom-[-12px] w-[1px] bg-neutral-200 dark:bg-neutral-800" />
      )}
      
      {/* Bullet Point */}
      <div className={cn(
        "relative z-10 w-2 h-2 md:w-2.5 md:h-2.5 mt-2 rounded-[1px] flex-shrink-0 transition-all duration-500",
        active ? "bg-black dark:bg-white scale-125 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-neutral-300 dark:bg-neutral-800 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-700"
      )} />
      
      {/* Content */}
      <div className="pb-0 transition-all duration-500 w-full">
        <h3 
          className={cn(
            "text-base md:text-xl font-medium leading-tight transition-colors duration-300 cursor-pointer py-1",
            active ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400"
          )}
          onClick={onClick}
        >
          {title}
        </h3>
        <div className={cn(
          "grid transition-all duration-500 ease-in-out",
          active ? "grid-rows-[1fr] opacity-100 mb-1 md:mb-4" : "grid-rows-[0fr] opacity-0 mb-0.5 md:mb-2"
        )}>
          <div className="overflow-hidden">
            <p className="text-[13px] md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md pt-1 md:pt-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function FeatureSection() {
  const { t } = useLanguage();
  const features = t.features.items;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to feature index with a bit of buffer at start/end
  const featureIndex = useTransform(scrollYProgress, [0, 1], [0, features.length - 1], { clamp: true });
  
  useMotionValueEvent(featureIndex, "change", (latest: number) => {
    const roundedIndex = Math.round(latest);
    if (roundedIndex !== activeFeature) {
      setActiveFeature(roundedIndex);
    }
  });

  return (
    <section 
      id="roi"
      ref={containerRef} 
      className="relative w-full z-30"
      style={{ height: "200vh" }}
    >
      <div 
        className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-center overflow-hidden z-40 py-2 lg:py-0"
      >
        <div className="w-full h-full flex items-center justify-center overflow-y-auto lg:overflow-visible">
          <div className="max-w-[95vw] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-20 items-center w-full px-4 md:px-8 lg:px-12 py-1 lg:py-0">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-2 lg:mb-8 leading-[1.1] text-black dark:text-white">
              <ShiningText>
                {t.features.title}
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

          {/* Right Column: ROI Visualization (Merged) */}
          <div className="lg:col-span-8 relative w-full h-[240px] md:h-[450px] lg:h-[600px] p-2 md:p-8 flex flex-col items-center overflow-hidden transition-all duration-500">
            
            {/* Background Grid Dots */}
            <div className="absolute inset-0 z-0 dark:[--dot-color:#1a1a1a] [--dot-color:#f0f0f0]" style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }} />

            {/* ROI Graph Component */}
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="pathGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* The ROI Path */}
                <motion.path 
                  d="M 50 400 L 200 300 L 350 300 L 550 150 L 750 50" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-neutral-200 dark:text-neutral-800"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Animated Progress Path */}
                <motion.path 
                  d="M 50 400 L 200 300 L 350 300 L 550 150 L 750 50" 
                  fill="none" 
                  stroke="#29ABE2" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#pathGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 0.224, 0.411, 0.722, 1][activeFeature]
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Glow effect for the progress path */}
                <motion.path 
                  d="M 50 400 L 200 300 L 350 300 L 550 150 L 750 50" 
                  fill="none" 
                  stroke="#29ABE2" 
                  strokeWidth="12"
                  strokeLinecap="round"
                  className="opacity-30 blur-xl"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 0.224, 0.411, 0.722, 1][activeFeature]
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Dynamic Points Mapping to Features - Moved inside SVG for perfect alignment */}
                {[
                  { cx: 50, cy: 400 },
                  { cx: 200, cy: 300 },
                  { cx: 350, cy: 300 },
                  { cx: 550, cy: 150 },
                  { cx: 750, cy: 50 }
                ].map((point, index) => {
                  const isActive = activeFeature === index;
                  const isCompleted = activeFeature > index;
                  
                  return (
                    <foreignObject 
                      key={index}
                      x={point.cx - 50} 
                      y={point.cy - 50} 
                      width="100" 
                      height="100"
                      className="overflow-visible"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <motion.div
                          className="relative"
                          animate={{
                            scale: isActive ? 1.4 : 1,
                            opacity: (isActive || isCompleted) ? 1 : 0.3,
                          }}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-500 relative",
                            isActive 
                              ? "bg-white dark:bg-black border-[#29ABE2] shadow-[0_0_40px_rgba(41,171,226,0.4)]" 
                              : isCompleted
                                ? "bg-[#29ABE2]/10 border-[#29ABE2]/40 shadow-[0_0_20px_rgba(41,171,226,0.2)]"
                                : "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                          )}>
                            {/* Active Pulse Effect */}
                            {isActive && (
                              <>
                                <motion.div 
                                  className="absolute inset-0 rounded-xl bg-[#29ABE2] opacity-20"
                                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div 
                                  className="absolute inset-[-2px] rounded-xl border border-[#29ABE2]/50"
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                              </>
                            )}
                            
                            <div className={cn(
                              "w-4 h-4 rounded-lg flex items-center justify-center transition-colors duration-500 relative z-10",
                              isActive || isCompleted ? "bg-[#29ABE2] shadow-[0_0_10px_rgba(41,171,226,0.8)]" : "bg-neutral-300 dark:bg-neutral-700"
                            )}>
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                          </div>
                          
                          {/* Floating Label for Active Point */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-40 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 shadow-xl z-50 pointer-events-none"
                              >
                                <div className="text-[9px] font-mono uppercase tracking-widest text-[#29ABE2] mb-1">{t.features.roi.label}</div>
                                <div className="text-xs font-bold text-black dark:text-white leading-tight">
                                  {features[index].title}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    </foreignObject>
                  );
                })}
              </svg>

              {/* Central ROI Metric Card */}
              <motion.div 
                className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-black dark:bg-white text-white dark:text-black p-2 md:p-6 rounded-xl md:rounded-2xl shadow-[0_0_40px_rgba(41,171,226,0.2)] z-30 border border-[#29ABE2]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-[6px] md:text-[10px] font-mono uppercase tracking-[0.2em] opacity-50 mb-0.5 md:mb-2">{t.features.roi.estimated}</div>
                <div className="text-lg md:text-4xl font-bold tracking-tighter mb-0.5 md:mb-2">
                  {activeFeature === 0 && "15%"}
                  {activeFeature === 1 && "32%"}
                  {activeFeature === 2 && "48%"}
                  {activeFeature === 3 && "74%"}
                  {activeFeature === 4 && "120%"}
                </div>
                <div className="text-[9px] md:text-xs font-medium opacity-70">{t.features.roi.efficiency}</div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
