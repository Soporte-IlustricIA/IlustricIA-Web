import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

import { useLanguage } from './LanguageContext';

export function FaqSection() {
  const { t } = useLanguage();
  const faqs = t.faqs.items;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-[#29ABE2] font-bold mb-4">
              {t.faqs.badge}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white">
              {t.faqs.title}
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-black/10 dark:border-white/10"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 flex items-center justify-between text-left group transition-colors"
              >
                <span className={`text-lg md:text-xl font-medium transition-colors ${activeIndex === index ? 'text-[#29ABE2]' : 'text-black dark:text-white group-hover:text-[#29ABE2]'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-[#29ABE2]" />
                  ) : (
                    <Plus className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-[#29ABE2]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-black/60 dark:text-white/60 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-center"
        >
          <p className="text-black/70 dark:text-white/70 mb-4">
            {t.faqs.moreQuestions}
          </p>
          <a
            href="#roi"
            className="inline-flex items-center gap-2 text-[#29ABE2] font-bold hover:underline underline-offset-4 transition-all"
          >
            {t.faqs.contactUs}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
