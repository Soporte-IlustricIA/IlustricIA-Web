import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../translations';
import esData from '../i18n/es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

async function loadLanguage(lang: Language) {
  if (lang === 'en') {
    const m = await import('../i18n/en');
    return m.default;
  }
  if (lang === 'pt') {
    const m = await import('../i18n/pt');
    return m.default;
  }
  return esData;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [t, setT] = useState<any>(esData);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    let detected: Language = 'es';
    if (browserLang === 'en' || browserLang === 'pt') detected = browserLang as Language;

    const savedLang = localStorage.getItem('language') as Language;
    const targetLang: Language = (savedLang && ['en', 'pt', 'es'].includes(savedLang))
      ? savedLang
      : detected;

    if (targetLang !== 'es') {
      setLanguageState(targetLang);
      loadLanguage(targetLang).then(setT);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    loadLanguage(lang).then(setT);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
