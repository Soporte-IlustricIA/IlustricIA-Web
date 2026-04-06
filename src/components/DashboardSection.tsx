import React from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  Share, 
  MoreHorizontal, 
  Filter, 
  User, 
  Search, 
  FileText, 
  LayoutGrid, 
  Sparkles,
  BarChart2,
  Calendar,
  ChevronDown,
  Plus,
  CheckSquare,
  Square,
  Play,
  Settings,
  Database,
  Mic,
  Workflow,
  MessageSquare,
  Target,
  Globe,
  Users,
  Shield,
  Lightbulb,
  Code
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GlowingShadow } from './ui/glowing-shadow';
import { ShiningText } from './ui/shining-text';
import { SparklesCore } from './ui/sparkles';

import { useLanguage } from './LanguageContext';

// Helper for the chart bars
const ChartBar = ({ height, color, delay }: { height: string; color: string; delay: number }) => (
  <div 
    className={cn("w-1.5 rounded-t-sm mx-[1px]", color)} 
    style={{ height, opacity: 0.8 }} 
  />
);

const FilterBadge = ({ children, active = false, icon: Icon }: { children: React.ReactNode; active?: boolean; icon?: any }) => (
  <div className={cn(
    "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors",
    active 
      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" 
      : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
  )}>
    {Icon && <Icon size={12} />}
    {children}
    {active && <ChevronDown size={12} className="ml-1 opacity-50" />}
  </div>
);

const ListItem = ({ checked = false, title, value, count, change }: { checked?: boolean; title: string; value: string; count: number; change: string }) => (
  <div className="flex items-center gap-4 py-3 border-b border-neutral-200 dark:border-neutral-800/50 group hover:bg-neutral-100 dark:hover:bg-neutral-800/30 px-2 rounded transition-colors">
    <div className={cn("rounded-[4px] flex items-center justify-center transition-colors", checked ? "text-blue-500" : "text-neutral-300 dark:text-neutral-700")}>
      {checked ? <CheckSquare size={16} /> : <Square size={16} />}
    </div>
    <span className="text-sm text-neutral-700 dark:text-neutral-300 flex-1 truncate">{title}</span>
    
    {/* Progress bar visual */}
    <div className="w-24 h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
      <div className="h-full bg-blue-500/50 rounded-full" style={{ width: '60%' }} />
    </div>
    
    <div className="flex items-center gap-4 text-xs font-mono">
      <span className="text-neutral-500 dark:text-neutral-400 w-16 text-right">{value}</span>
      <span className="text-neutral-400 dark:text-neutral-500 w-8 text-right">{count}</span>
      <span className="text-green-600 dark:text-green-500 w-10 text-right">{change}</span>
    </div>
  </div>
);

const FeatureColumn = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "text-blue-500"
}: { 
  icon: any; 
  title: string; 
  description: string; 
  color?: string;
}) => (
  <div className="flex flex-col gap-4 p-6 rounded-xl transition-all duration-500 group/feature">
    <div className="flex items-center gap-2 mb-1">
      <div className={cn("p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 group-hover/feature:scale-110 transition-transform duration-300", color)}>
        <Icon size={24} />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <h3 className="text-xl font-semibold text-white group-hover/feature:text-orange-500 transition-colors duration-300">{title}</h3>
    </div>
    <p className="text-sm text-white/70 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

export function DashboardSection() {
  const { t } = useLanguage();

  const servicesList = [
    {
      icon: Mic,
      color: "text-orange-500",
      title: t.services.items.voice.title,
      description: t.services.items.voice.description
    },
    {
      icon: Workflow,
      color: "text-blue-500",
      title: t.services.items.automation.title,
      description: t.services.items.automation.description
    },
    {
      icon: MessageSquare,
      color: "text-green-500",
      title: t.services.items.chatbots.title,
      description: t.services.items.chatbots.description
    },
    {
      icon: Target,
      color: "text-red-500",
      title: t.services.items.funnels.title,
      description: t.services.items.funnels.description
    },
    {
      icon: Globe,
      color: "text-neutral-500",
      title: t.services.items.web.title,
      description: t.services.items.web.description
    },
    {
      icon: Users,
      color: "text-purple-500",
      title: t.services.items.crm.title,
      description: t.services.items.crm.description
    },
    {
      icon: Shield,
      color: "text-cyan-500",
      title: t.services.items.security.title,
      description: t.services.items.security.description
    },
    {
      icon: Lightbulb,
      color: "text-yellow-500",
      title: t.services.items.consulting.title,
      description: t.services.items.consulting.description
    },
    {
      icon: Code,
      color: "text-indigo-500",
      title: t.services.items.software.title,
      description: t.services.items.software.description
    }
  ];

  return (
    <section className="w-full bg-transparent py-16 px-4 md:px-8 overflow-hidden transition-colors duration-300 relative">
      {/* Top Gradient Fade from Hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-[#030712] to-transparent z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-orange-500 font-bold mb-4">
              {t.services.badge}
            </h2>
            
            <div className="h-[16rem] w-full relative flex flex-col items-center justify-center overflow-hidden rounded-md">
              {/* Core component as background */}
              <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                  id="tsparticlesdashboard"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#29ABE2"
                  speed={1}
                />
              </div>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white max-w-3xl mx-auto leading-tight relative z-20 text-center">
                {t.services.title}
              </h3>
              
              <div className="w-[40rem] h-2 relative z-10">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              </div>

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {servicesList.map((service, index) => (
              <motion.div 
                key={index} 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm"
              >
                <GlowingShadow className="h-full border border-neutral-800/50 rounded-2xl overflow-hidden bg-neutral-900/80 backdrop-blur-md hover:border-orange-500/30 transition-all duration-300">
                  <FeatureColumn 
                    icon={service.icon}
                    color={service.color}
                    title={service.title}
                    description={service.description}
                  />
                </GlowingShadow>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
