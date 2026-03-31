import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 dark:border-white/10 bg-black/20 dark:bg-black/40 backdrop-blur-sm">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'light' ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'
        }`}
        title="Modo Claro"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'
        }`}
        title="Modo Oscuro"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
