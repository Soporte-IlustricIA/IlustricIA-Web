import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface ShimmeringTextProps {
  text: string;
  className?: string;
}

export function ShimmeringText({ text, className }: ShimmeringTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-block overflow-hidden bg-neutral-200 dark:bg-neutral-800 bg-clip-text text-transparent",
        className
      )}
    >
      {/* Base Text */}
      <span className="opacity-30 text-black dark:text-white">{text}</span>

      {/* Shimmer Effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent bg-clip-text text-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: '50% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
}
