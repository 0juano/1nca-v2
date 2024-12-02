import React from 'react';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import type { Translations } from '../../types/translations';

interface NavigationProps {
  t: Translations;
  language: string;
  toggleLanguage: () => void;
  onAboutClick: () => void;
}

export function Navigation({ t, language, toggleLanguage, onAboutClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#222831]/90 backdrop-blur-sm">
      <MobileNav t={t} toggleLanguage={toggleLanguage} onAboutClick={onAboutClick} />
      <DesktopNav t={t} language={language} toggleLanguage={toggleLanguage} onAboutClick={onAboutClick} />
    </nav>
  );
}