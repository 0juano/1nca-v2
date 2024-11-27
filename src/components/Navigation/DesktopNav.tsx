import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import type { Translations } from '../../types/translations';

interface DesktopNavProps {
  t: Translations;
  language: string;
  toggleLanguage: () => void;
}

export function DesktopNav({ t, language, toggleLanguage }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex w-full px-12 py-8 justify-between items-center">
      <a href="/" className="text-white hover:text-[#DBC078] transition-colors">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <img 
            src="/assets/logo-1n.png" 
            alt="1NCA Logo" 
            className="h-16 w-auto object-contain"
          />
        </motion.div>
      </a>
      <div className="flex items-center space-x-12 text-base">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-[#DBC078] transition-colors">{t.nav.whyChooseUs}</a>
        <a href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')} className="text-white hover:text-[#DBC078] transition-colors">{t.nav.ourPhilosophy}</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-white hover:text-[#DBC078] transition-colors">{t.nav.services}</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-[#DBC078] transition-colors">{t.nav.contact}</a>
        <button onClick={toggleLanguage} className="flex items-center space-x-1 text-white hover:text-[#DBC078] transition-colors">
          <Globe size={20} />
          <span>{language === 'en' ? 'ESP' : 'ENG'}</span>
        </button>
      </div>
    </div>
  );
}