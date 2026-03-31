import React from 'react';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Server, 
  Globe, 
  Database,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import SystemGlobe from './ui/system-globe';

const Badge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg text-neutral-300 text-xs font-medium hover:border-neutral-700 transition-colors cursor-default">
    <Icon size={14} className="text-neutral-400" />
    <span>{text}</span>
  </div>
);

const UserCard = ({ 
  image, 
  name, 
  role, 
  className 
}: { 
  image: string; 
  name: string; 
  role: string; 
  className?: string; 
}) => (
  <div className={cn(
    "flex items-center gap-3 p-3 bg-neutral-900/90 border border-neutral-800 rounded-lg backdrop-blur-sm shadow-xl w-64",
    className
  )}>
    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-medium text-white">{name}</span>
      <span className="text-[10px] text-neutral-500">{role}</span>
    </div>
  </div>
);

export function SystemOfRecordSection() {
  return (
    <section className="w-full bg-black py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 relative">
          {/* Globe Background Effect (Right Side) */}
          <div className="absolute right-[-25%] top-[-40%] w-[900px] h-[900px] pointer-events-none opacity-100 mix-blend-screen">
             <SystemGlobe />
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6">
              Sistema Central
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
              La fuente única<br />de verdad
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-md leading-relaxed">
              La inteligencia colectiva de tu organización—unificando producto, ventas, marketing y experiencia de cliente.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#roi"
                className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
              >
                Agendar cita
              </a>
              <button className="px-6 py-3 bg-neutral-900 text-white border border-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
                Prueba nuestra demo
              </button>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Width Card: Trust */}
          <div className="md:col-span-2 bg-[#0A0A0A] border border-neutral-800 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/50 via-transparent to-transparent opacity-50" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="max-w-md">
                <h3 className="text-xl font-medium text-white mb-4">Construido para confianza a escala</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  El marco de Cumplimiento y Seguridad de IlustricIA cubre SOC 2 Tipo II, ISO 27001, HIPAA, GDPR y más—además de acceso empresarial vía Servidor MCP.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Badge icon={Shield} text="SOC 2 Type II" />
                <Badge icon={FileCheck} text="HIPAA" />
                <Badge icon={Lock} text="ISO 27001" />
                <Badge icon={Server} text="ISO 42001" />
                <Badge icon={Globe} text="GDPR & CCPA" />
                <Badge icon={Database} text="MCP Server" />
              </div>
            </div>
          </div>

          {/* Left Card: Best Practices */}
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-2xl p-8 h-[500px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-neutral-900/30 via-transparent to-transparent opacity-50" />
            
            {/* Visuals Area */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              {/* Abstract Cards Stack */}
              <div className="relative w-full h-full max-w-[300px] mx-auto mt-12">
                
                {/* Back Card */}
                <div className="absolute top-0 right-0 w-48 h-32 bg-neutral-900 border border-neutral-800 rounded-lg transform rotate-6 opacity-60 z-10 flex items-center justify-center overflow-hidden">
                   <div className="grid grid-cols-4 gap-1 p-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-sm ${[0, 5, 10, 15].includes(i) ? 'bg-blue-500' : 'bg-neutral-800'}`} />
                      ))}
                   </div>
                </div>

                {/* Middle Card */}
                <div className="absolute top-12 left-4 w-56 h-40 bg-neutral-900 border border-neutral-800 rounded-lg transform -rotate-3 z-20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 border border-neutral-700 rounded-full opacity-50" />
                     <div className="w-16 h-16 border border-neutral-700 rounded-full opacity-50 absolute" />
                     <div className="w-32 h-12 border border-neutral-700 rounded-[100%] opacity-50 absolute transform rotate-12" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral-800 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="User" />
                    </div>
                    <div className="h-2 w-20 bg-neutral-800 rounded" />
                  </div>
                </div>

                {/* Front Card */}
                <div className="absolute top-32 left-12 w-64 h-24 bg-neutral-900 border border-neutral-800 rounded-lg transform rotate-2 z-30 shadow-2xl flex items-center p-4 gap-3">
                   <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" alt="User" />
                   </div>
                   <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-2 w-24 bg-neutral-700 rounded" />
                      <div className="h-2 w-16 bg-neutral-800 rounded" />
                   </div>
                </div>

              </div>
            </div>

            <div className="relative z-10 mt-8">
              <h3 className="text-xl font-medium text-white mb-3">Best practices, built in</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Utilize our templates and standardization features to ensure consistency across your teams and bring order to your workflows.
              </p>
            </div>
          </div>

          {/* Right Card: Privacy */}
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-2xl p-8 h-[500px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/30 via-transparent to-transparent opacity-50" />
            
            {/* Visuals Area */}
            <div className="relative flex-1 w-full">
              
              {/* Chat Interface */}
              <div className="w-full max-w-sm mx-auto bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 mt-8">
                <div className="flex gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-700 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="User" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-neutral-400 mb-1">Participant 1</div>
                    <div className="text-sm text-neutral-300 bg-neutral-800/50 p-2 rounded-lg rounded-tl-none inline-block">
                      My name is Jane Smith, and I'm a big fan of your app I love it. My email is <span className="bg-white text-black px-1 rounded text-xs font-bold select-none">[redacted]</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-neutral-700 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" alt="Interviewer" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-neutral-400 mb-1">Interviewer</div>
                    <div className="text-sm text-neutral-300 bg-neutral-800/50 p-2 rounded-lg rounded-tl-none inline-block">
                      Thanks for giving us those details...
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Call Overlay */}
              <div className="absolute bottom-0 right-[-20px] w-48 h-32 bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-2xl">
                <div className="relative w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" 
                    alt="Video" 
                    className="w-full h-full object-cover"
                  />
                  {/* Privacy Blur Effect on Left Half */}
                  <div className="absolute inset-y-0 left-0 w-1/2 backdrop-blur-md bg-neutral-900/20" />
                </div>
              </div>

            </div>

            <div className="relative z-10 mt-8">
              <h3 className="text-xl font-medium text-white mb-3">Privacy without friction</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Granular permission controls and redaction let you hide sensitive data and tailor access by role, team, or external vendor.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
