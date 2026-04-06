import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface OrbProps {
  className?: string;
  volumeMode?: 'manual' | 'auto';
  getInputVolume?: () => number;
  getOutputVolume?: () => number;
}

export function Orb({ className, getInputVolume, getOutputVolume }: OrbProps) {
  const [inputVolume, setInputVolume] = useState(0);
  const [outputVolume, setOutputVolume] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateVolumes = () => {
      if (getInputVolume) setInputVolume(getInputVolume());
      if (getOutputVolume) setOutputVolume(getOutputVolume());
      animationFrameId = requestAnimationFrame(updateVolumes);
    };

    updateVolumes();
    return () => cancelAnimationFrame(animationFrameId);
  }, [getInputVolume, getOutputVolume]);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 bg-[#29ABE2]/20 rounded-full blur-2xl"
        animate={{
          scale: 1 + inputVolume * 0.5 + outputVolume * 0.5,
          opacity: 0.2 + inputVolume * 0.3 + outputVolume * 0.3
        }}
      />

      {/* Main Orb */}
      <motion.div 
        className="relative w-full h-full rounded-full bg-gradient-to-br from-[#29ABE2] to-[#0071BC] flex items-center justify-center overflow-hidden shadow-lg"
        animate={{
          scale: 1 + inputVolume * 0.1 + outputVolume * 0.1,
        }}
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />

        {/* Visualizer Bars */}
        <div className="flex gap-1 items-center justify-center h-1/2 w-full px-4">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i} 
              className="w-1 bg-white/60 rounded-full"
              animate={{
                height: `${10 + (inputVolume + outputVolume) * 80 * (0.5 + Math.random() * 0.5)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
