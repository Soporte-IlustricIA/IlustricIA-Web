import { Marquee } from "./marquee"

const Logos = {
  claude: () => (
    <div className="group flex items-center gap-3 cursor-default transition-all duration-500">
      <svg 
        viewBox="0 0 24 24" 
        className="h-7 w-7 fill-[#94A3B8] group-hover:fill-[#D97757] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(217,119,87,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L10.3 1.7L12 3.4L13.7 1.7L12 0ZM12 6.8L10.3 8.5L12 10.2L13.7 8.5L12 6.8ZM12 13.6L10.3 15.3L12 17L13.7 15.3L12 13.6ZM12 20.4L10.3 22.1L12 23.8L13.7 22.1L12 20.4ZM5.2 6.8L3.5 8.5L5.2 10.2L6.9 8.5L5.2 6.8ZM18.8 6.8L17.1 8.5L18.8 10.2L20.5 8.5L18.8 6.8ZM5.2 13.6L3.5 15.3L5.2 17L6.9 15.3L5.2 13.6ZM18.8 13.6L17.1 15.3L18.8 17L20.5 15.3L18.8 13.6Z" />
      </svg>
      <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-white transition-colors duration-500">Claude</span>
    </div>
  ),
  openai: () => (
    <div className="group flex items-center gap-3 cursor-default transition-all duration-500">
      <svg 
        viewBox="0 0 24 24" 
        className="h-7 w-7 fill-[#94A3B8] group-hover:fill-[#10a37f] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(16,163,127,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.05 6.05 0 0 0-4.75-3.12 5.99 5.99 0 0 0-5.4 2.42 5.99 5.99 0 0 0-5.4-2.42 6.05 6.05 0 0 0-4.75 3.12 5.98 5.98 0 0 0-.51 4.91 5.98 5.98 0 0 0 2.42 5.4 5.98 5.98 0 0 0-.51 4.91 6.05 6.05 0 0 0 4.75 3.12 5.99 5.99 0 0 0 5.4-2.42 5.99 5.99 0 0 0 5.4 2.42 6.05 6.05 0 0 0 4.75-3.12 5.98 5.98 0 0 0 .51-4.91 5.98 5.98 0 0 0-2.42-5.4zm-10.28 11.44a4.43 4.43 0 0 1-2.25-.61l.06-.04 4.6-2.66a.91.91 0 0 0 .46-.79v-5.51l1.94 1.12v5.67a4.45 4.45 0 0 1-4.81 4.82zm-6.82-3.35a4.43 4.43 0 0 1-.61-2.25l.04.06 2.66 4.6a.91.91 0 0 0 .79.46h5.51l-1.12-1.94h-2.45a4.45 4.45 0 0 1-4.82-4.8zm-1.12-10.28a4.43 4.43 0 0 1 .61-2.25l-.04.06 2.66 4.6a.91.91 0 0 0 .79.46v5.51l1.94-1.12v-2.45a4.45 4.45 0 0 1 4.81 4.82zm10.28-1.12a4.43 4.43 0 0 1 2.25.61l-.06.04-4.6 2.66a.91.91 0 0 0-.46.79v5.51l-1.94-1.12v-5.67a4.45 4.45 0 0 1 4.81-4.82zm6.82 3.35a4.43 4.43 0 0 1 .61 2.25l-.04-.06-2.66-4.6a.91.91 0 0 0-.79-.46h-5.51l1.12 1.94h2.45a4.45 4.45 0 0 1 4.82 4.8zm1.12 10.28a4.43 4.43 0 0 1-.61 2.25l.04-.06-2.66-4.6a.91.91 0 0 0-.79-.46v-5.51l-1.94 1.12v2.45a4.45 4.45 0 0 1-4.81 4.82z" />
      </svg>
      <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-white transition-colors duration-500">OpenAI</span>
    </div>
  ),
  supabase: () => (
    <div className="group flex items-center gap-3 cursor-default transition-all duration-500">
      <svg 
        viewBox="0 0 24 24" 
        className="h-7 w-7 fill-[#94A3B8] group-hover:fill-[#3ECF8E] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(62,207,142,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.362 9.354H12V.347L2.638 14.646H12v9.007l9.362-14.299z" />
      </svg>
      <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-white transition-colors duration-500">Supabase</span>
    </div>
  ),
  n8n: () => (
    <div className="group flex items-center gap-3 cursor-default transition-all duration-500">
      <svg 
        viewBox="0 0 24 24" 
        className="h-7 w-7 fill-[#94A3B8] group-hover:fill-[#FF6D5A] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,109,90,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2zm-4 4h2v6H7zm8 0h2v6h-2z" />
      </svg>
      <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-white transition-colors duration-500">n8n</span>
    </div>
  ),
  python: () => (
    <div className="group flex items-center gap-3 cursor-default transition-all duration-500">
      <svg 
        viewBox="0 0 24 24" 
        className="h-7 w-7 fill-[#94A3B8] group-hover:fill-[#3776AB] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(55,118,171,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.97 0C9.19 0 7.26 1.21 7.26 3.38v2.14h4.78v.67H5.15C2.37 6.19.44 7.4.44 9.57v3.38c0 2.17 1.93 3.38 4.71 3.38h1.44v-2.03c0-2.17 1.93-3.38 4.71-3.38h4.78V5.52c0-2.17-1.93-3.38-4.71-3.38H9.93c0-2.17 1.93-3.38 4.71-3.38h1.44V0h-4.11zm-2.38 1.52c.43 0 .78.35.78.78s-.35.78-.78.78-.78-.35-.78-.78.35-.78.78-.78zm7.16 6.31v2.03c0 2.17-1.93 3.38-4.71 3.38H7.26v5.39c0 2.17 1.93 3.38 4.71 3.38h4.11c2.78 0 4.71-1.21 4.71-3.38v-2.14h-4.78v-.67h6.89c2.78 0 4.71-1.21 4.71-3.38V9.57c0-2.17-1.93-3.38-4.71-3.38h-1.44zm-2.38 13.25c.43 0 .78.35.78.78s-.35.78-.78.78-.78-.35-.78-.78.35-.78.78-.78z" />
      </svg>
      <span className="text-[#94A3B8] font-medium tracking-tight group-hover:text-white transition-colors duration-500">Python</span>
    </div>
  ),
};


export function MarqueeDemo() {
  const arr = [Logos.claude, Logos.openai, Logos.supabase, Logos.n8n, Logos.python]

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-[0.4em] text-[#94A3B8] uppercase opacity-60">
          Stack Tecnológico de Vanguardia
        </span>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#94A3B8]/20 to-transparent" />
      </div>
      
      <Marquee className="[--duration:50s]" pauseOnHover>
        {arr.map((Logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit flex items-center justify-start px-12"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

