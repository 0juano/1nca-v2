import { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import type { Translations } from '../types/translations';

export function useTranslation() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [t, setT] = useState<Translations>(translations.es);

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'es' : 'en');
  };

  return { t, language, toggleLanguage };
}