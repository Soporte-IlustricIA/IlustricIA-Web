import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/ui/header-01';
import { Footer } from '../components/ui/footer-section';
import { TechBackground } from '../components/ui/TechBackground';
import { useLanguage } from '../components/LanguageContext';

interface LegalSection {
  title?: string;
  content: string | string[];
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen font-sans text-black dark:text-white transition-colors duration-300 relative">
      <TechBackground />
      <Header />
      
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="h-1 w-20 bg-[#29ABE2] rounded-full mb-4" />
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {lastUpdated}
            </p>
          </div>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="space-y-12">
              {sections && sections.map((section, index) => (
                <motion.section 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {section.title && (
                    <h2 className="text-2xl font-bold mb-6 text-black dark:text-white tracking-tight border-b border-neutral-200 dark:border-neutral-800 pb-2">
                      {section.title}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {Array.isArray(section.content) ? (
                      section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {section.content}
                      </p>
                    )}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
