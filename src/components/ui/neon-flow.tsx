import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/src/lib/utils";
import { useTheme } from "../ThemeProvider";

// Helper for random colors
const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({ 
  children, 
  className,
  enableClickInteraction = true 
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;
      // Sin efecto WebGL para quienes piden reducir movimiento
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      try {
        // We use the specific build from the CDN as it contains the exact effect requested
        // Using native dynamic import which works in modern browsers
        // @ts-ignore
        const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = module.default;

        if (!mounted) return;

        // Determine background color based on theme
        const effectiveTheme = theme === 'system' 
          ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
          : theme;
        
        const bgColor = effectiveTheme === 'dark' ? 0x000000 : 0xffffff;

        const app = TubesCursor(canvasRef.current, {
          background: effectiveTheme === 'dark' ? 0x000000 : 0xffffff,
          transparent: true,
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 100, // Reduced from 200
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
            }
          }
        });

        // Force canvas background to be transparent if the library allows it
        if (canvasRef.current) {
          canvasRef.current.style.backgroundColor = 'transparent';
        }

        // La libreria fuerza pixelRatio=2 (min=max=2). En pantallas tactiles
        // lo capamos a 1.5: en un movil DPR3 eso es ~44% menos pixeles que
        // renderizar, imperceptible en un efecto difuso con bloom.
        if (window.matchMedia('(pointer: coarse)').matches && app.three) {
          app.three.minPixelRatio = 1;
          app.three.maxPixelRatio = 1.5;
          app.three.resize?.();
        }

        tubesRef.current = app;
        setIsLoaded(true);

        cleanup = () => {
          // The library returns { three, tubes, dispose() }: dispose() stops the
          // render loop and releases the renderer. Without it, every re-init
          // (theme change) stacks an extra WebGL loop on the same canvas.
          try {
            app.dispose?.();
          } catch (e) {
            console.error("Error disposing TubesCursor:", e);
          }
          if (tubesRef.current === app) tubesRef.current = null;
        };

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, [theme]); // Re-initialize when theme changes

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    
    tubesRef.current.tubes.setColors(colors);
    tubesRef.current.tubes.setLightsColors(lightsColors);
  };

  return (
    <div 
      className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-transparent transition-colors duration-500", className)}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

// Default export
export default TubesBackground;
