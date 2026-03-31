import { Marquee } from "./marquee"

const LogoItem = ({ src, name }: { src: string; name: string }) => (
  <div className="group flex items-center gap-3 cursor-default transition-all duration-500">
    <div className="relative h-7 w-7 flex items-center justify-center">
      <img 
        src={src} 
        alt={name}
        referrerPolicy="no-referrer"
        className="h-full w-full object-contain filter grayscale invert opacity-50 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
      />
    </div>
    <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-white transition-colors duration-500">{name}</span>
  </div>
);

export function MarqueeDemo() {
  const items = [
    { name: "Claude", src: "https://upload.wikimedia.org/wikipedia/commons/4/47/Claude_AI_logo.svg" },
    { name: "OpenAI", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Supabase", src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Supabase_logo.svg" },
    { name: "n8n", src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/N8n_logo.svg" },
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  ];

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-[0.4em] text-[#94A3B8] uppercase opacity-60">
          Stack Tecnológico de Vanguardia
        </span>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#94A3B8]/20 to-transparent" />
      </div>
      
      <Marquee className="[--duration:50s]" pauseOnHover>
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-full w-fit flex items-center justify-start px-12"
          >
            <LogoItem {...item} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
