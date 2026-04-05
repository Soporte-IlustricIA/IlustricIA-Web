import { Marquee } from "./marquee"

const LogoItem = ({ src, name }: { src: string; name: string }) => {
  const isLarge = name === "Python" || name === "n8n" || name === "OpenAI";
  const isOpenAI = name === "OpenAI";
  
  return (
    <div className="group flex items-center gap-4 cursor-default transition-all duration-500">
      <div className={`relative flex items-center justify-center ${isLarge ? 'h-12 w-12' : 'h-8 w-8'}`}>
        <img 
          src={src} 
          alt={name}
          referrerPolicy="no-referrer"
          className={`h-full w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${
            isOpenAI 
              ? 'dark:invert dark:brightness-200 dark:opacity-80' 
              : 'dark:invert'
          }`}
        />
      </div>
      <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors duration-500">{name}</span>
    </div>
  );
};

export function MarqueeDemo() {
  const items = [
    { name: "Claude", src: "/images/claude.webp" },
    { name: "OpenAI", src: "/images/openai.webp" },
    { name: "Supabase", src: "/images/supabase.webp" },
    { name: "n8n", src: "/images/n8n.webp" },
    { name: "Python", src: "/images/python.webp" },
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
