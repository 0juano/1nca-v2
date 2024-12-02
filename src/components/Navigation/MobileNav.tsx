import React from 'react';
import { Menu, Globe, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { scrollToSection } from '../../utils/scroll';
import type { Translations } from '../../types/translations';

interface MobileNavProps {
  t: Translations;
  toggleLanguage: () => void;
  onAboutClick: () => void;
}

export function MobileNav({ t, toggleLanguage, onAboutClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToSection(e, id);
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    setIsOpen(false);
    onAboutClick();
  };

  return (
    <div className="lg:hidden w-full px-4 py-4 flex justify-between items-center">
      <a href="/" className="text-white hover:text-[#DBC078] transition-colors">
        <img 
          src="/assets/logo-1n.png" 
          alt="1NCA Logo" 
          className="h-10 w-auto object-contain"
        />
      </a>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleLanguage} 
          className="text-white lg:hover:text-[#DBC078] active:text-[#DBC078] transition-colors touch-manipulation [@media(hover:none)]:hover:text-white"
          aria-label="Toggle language"
        >
          <Globe size={20} />
        </button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-[#DBC078]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="!bg-[#222831] border-l border-[#DBC078]/20 text-white"
            onClose={() => setIsOpen(false)}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="text-[#DBC078] hover:text-white -mr-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>
              <nav className="flex flex-col gap-8 pl-2">
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-lg text-white hover:text-[#DBC078] transition-colors"
                >
                  {t.nav.whyChooseUs}
                </a>
                <a
                  href="#philosophy"
                  onClick={(e) => handleNavClick(e, 'philosophy')}
                  className="text-lg text-white hover:text-[#DBC078] transition-colors"
                >
                  {t.nav.ourPhilosophy}
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-lg text-white hover:text-[#DBC078] transition-colors"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-lg text-white hover:text-[#DBC078] transition-colors"
                >
                  {t.nav.contact}
                </a>
                <button
                  onClick={handleAboutClick}
                  className="text-lg text-left text-white hover:text-[#DBC078] transition-colors"
                >
                  {t.nav.aboutUs}
                </button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}