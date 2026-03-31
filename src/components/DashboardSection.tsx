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
  Database
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GlowingShadow } from './ui/glowing-shadow';
import { ShiningText } from './ui/shining-text';

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
  <div className="flex flex-col gap-3 p-4 rounded-xl transition-opacity duration-500">
    <div className="flex items-center gap-2 mb-1">
      <Icon size={20} className={color} />
    </div>
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-medium text-black dark:text-white">{title}</h3>
    </div>
    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export function DashboardSection() {
  return (
    <section className="w-full bg-neutral-50 dark:bg-black py-24 px-4 md:px-8 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-orange-500 font-bold mb-4">
              Nuestros Servicios
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white max-w-3xl mx-auto leading-tight">
              Optimizamos cada engranaje de tu <ShiningText className="font-bold">Estructura Operativa</ShiningText>.
            </h3>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow className="h-full">
                <FeatureColumn 
                  icon={Sparkles}
                  color="text-orange-500"
                  title="Asistentes y Chatbots"
                  description="Atención al cliente 24/7 en Web y WhatsApp con flujos conversacionales personalizados."
                />
              </GlowingShadow>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow className="h-full">
                <FeatureColumn 
                  icon={LayoutGrid}
                  color="text-neutral-500"
                  title="Desarrollo Web"
                  description="Páginas modernas y marketplaces orientados a conversión y resultados medibles."
                />
              </GlowingShadow>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow className="h-full">
                <FeatureColumn 
                  icon={Settings}
                  color="text-blue-500"
                  title="Consultoría y Automatización"
                  description="Evaluación de necesidades, automatizaciones industriales y planes de implementación por fases."
                />
              </GlowingShadow>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow className="h-full">
                <FeatureColumn 
                  icon={FileText}
                  color="text-blue-400"
                  title="Gestión de Redes"
                  description="Estrategias de contenido coherentes con tu marca y medición de impacto continuo."
                />
              </GlowingShadow>
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
