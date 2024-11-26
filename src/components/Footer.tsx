import React from 'react';
import type { Translations } from '../types/translations';

interface FooterProps {
  t: Translations;
  role?: string;
}

export function Footer({ t, role }: FooterProps) {
  return (
    <footer className="bg-white text-[#222831] py-8 sm:py-12" role={role}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
        <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic mb-4">
          {t.footer.quote}
        </blockquote>
        <p className="text-sm sm:text-base md:text-lg">{t.footer.author}</p>
      </div>
    </footer>
  );
}