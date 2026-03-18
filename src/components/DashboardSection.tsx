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
  GraduationCap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GlowingShadow } from './ui/glowing-shadow';

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
        
        {/* Main Dashboard Visual */}
        <div className="relative mb-32 mx-auto max-w-5xl">
          
          {/* Background Card: Support Trends */}
          <div className="w-full bg-white dark:bg-[#0A0A0A] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl dark:shadow-none overflow-hidden relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-4">
                <Menu size={18} className="text-neutral-400 dark:text-neutral-500" />
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-500">
                    <Sparkles size={12} />
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">Gestión de Procesos</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex bg-neutral-100 dark:bg-neutral-900 rounded-lg p-1 border border-neutral-200 dark:border-neutral-800">
                  <button className="px-3 py-1 rounded-md bg-white dark:bg-neutral-800 text-xs font-medium text-black dark:text-white shadow-sm">Métricas</button>
                  <button className="px-3 py-1 rounded-md text-xs font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">Datos</button>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>5 activos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckSquare size={12} />
                    <span>2 fuentes</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500">
                  <Share size={16} />
                  <Filter size={16} />
                  <MoreHorizontal size={16} />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 overflow-x-auto">
              <FilterBadge active>Automatización <span className="ml-1 opacity-50 bg-blue-500/20 px-1 rounded">5</span></FilterBadge>
              <FilterBadge icon={Calendar} active>Ene 2025 - Jun 2025</FilterBadge>
              <FilterBadge>Semanal</FilterBadge>
              <FilterBadge icon={BarChart2}>ROI</FilterBadge>
              <FilterBadge icon={User}>Cliente</FilterBadge>
              <span className="text-xs text-neutral-400 dark:text-neutral-600 ml-2">Añadir filtro</span>
            </div>

            {/* Chart Area */}
            <div className="p-6 relative">
              <div className="h-48 flex items-end justify-between gap-1 pb-8 border-b border-neutral-200 dark:border-neutral-800 relative">
                {/* Y-Axis Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="w-full h-px bg-neutral-200/50 dark:bg-neutral-800/30" />
                  <div className="w-full h-px bg-neutral-200/50 dark:bg-neutral-800/30" />
                  <div className="w-full h-px bg-neutral-200/50 dark:bg-neutral-800/30" />
                  <div className="w-full h-px bg-neutral-200/50 dark:bg-neutral-800/30" />
                </div>
                
                {/* Y-Axis Labels */}
                <div className="absolute right-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-neutral-400 dark:text-neutral-600 font-mono py-1">
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                </div>

                {/* Bars - Simulated Random Data */}
                {/* Jan */}
                <div className="flex items-end h-full pt-10 gap-0.5">
                  <ChartBar height="40%" color="bg-green-500" delay={0} />
                  <ChartBar height="60%" color="bg-purple-500" delay={1} />
                  <ChartBar height="30%" color="bg-blue-500" delay={2} />
                  <ChartBar height="50%" color="bg-orange-500" delay={3} />
                </div>
                {/* Feb */}
                <div className="flex items-end h-full pt-10 gap-0.5">
                  <ChartBar height="20%" color="bg-green-500" delay={4} />
                  <ChartBar height="70%" color="bg-orange-500" delay={5} />
                  <ChartBar height="40%" color="bg-blue-500" delay={6} />
                </div>
                {/* Mar */}
                <div className="flex items-end h-full pt-10 gap-0.5">
                  <ChartBar height="30%" color="bg-blue-500" delay={7} />
                  <ChartBar height="20%" color="bg-green-500" delay={8} />
                </div>
                {/* Apr */}
                <div className="flex items-end h-full pt-10 gap-0.5">
                  <ChartBar height="50%" color="bg-orange-500" delay={9} />
                  <ChartBar height="60%" color="bg-purple-500" delay={10} />
                  <ChartBar height="40%" color="bg-blue-500" delay={11} />
                  <ChartBar height="30%" color="bg-green-500" delay={12} />
                </div>
                {/* May */}
                <div className="flex items-end h-full pt-10 gap-0.5">
                  <ChartBar height="20%" color="bg-green-500" delay={13} />
                  <ChartBar height="40%" color="bg-orange-500" delay={14} />
                </div>
                {/* Jun */}
                <div className="flex items-end h-full pt-10 gap-0.5">
                  <ChartBar height="30%" color="bg-blue-500" delay={15} />
                  <ChartBar height="20%" color="bg-purple-500" delay={16} />
                </div>
              </div>
              
              {/* X-Axis Labels */}
              <div className="flex justify-between px-2 mt-2 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                <span>Ene</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>May</span>
                <span>Jun</span>
              </div>

              {/* List Content */}
              <div className="mt-8 space-y-1">
                <div className="flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500 px-2 mb-2">
                  <span>4 procesos optimizados con 606 puntos de datos</span>
                  <div className="flex items-center gap-2">
                    <Search size={14} />
                    <Plus size={14} />
                    <span>Unir</span>
                    <MoreHorizontal size={14} />
                  </div>
                </div>
                
                <ListItem checked title="Automatización de atención al cliente" value="$150,000" count={204} change="+3%" />
                <ListItem checked title="Optimización de flujo de ventas" value="$121,000" count={178} change="+1%" />
                <ListItem checked title="Automatización industrial de procesos" value="$81,450" count={124} change="-0.5%" />
                <div className="opacity-30">
                  <ListItem title="Análisis predictivo de inventario" value="$45,000" count={98} change="+12%" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card: Discovery Call */}
          <div className="absolute -right-12 top-24 w-[400px] bg-white dark:bg-[#111] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden">
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-black dark:text-white text-sm font-medium">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                Consultoría Estratégica
              </div>
              <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500">
                <MoreHorizontal size={16} />
                <Share size={16} />
                <MoreHorizontal size={16} />
              </div>
            </div>
            
            <div className="p-4">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden mb-4 group">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" 
                  alt="Video call participant" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Chat Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                    alt="Consultora" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-black dark:text-white">Consultora IlustricIA</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Perfecto. Para empezar, analicemos dónde están los cuellos de botella en vuestros procesos actuales.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4 opacity-50">
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Cliente</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Features Grid */}
        <div className="mt-32">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
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
              <GlowingShadow>
                <FeatureColumn 
                  icon={Sparkles}
                  color="text-orange-500"
                  title="Asistentes y Chatbots"
                  description="Atención al cliente 24/7 en Web y WhatsApp con flujos conversacionales personalizados."
                />
              </GlowingShadow>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow>
                <FeatureColumn 
                  icon={LayoutGrid}
                  color="text-neutral-500"
                  title="Desarrollo Web"
                  description="Páginas modernas y marketplaces orientados a conversión y resultados medibles."
                />
              </GlowingShadow>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow>
                <FeatureColumn 
                  icon={Settings}
                  color="text-blue-500"
                  title="Consultoría y Automatización"
                  description="Evaluación de necesidades, automatizaciones industriales y planes de implementación por fases."
                />
              </GlowingShadow>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <GlowingShadow>
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
