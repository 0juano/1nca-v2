import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, GraduationCap, Globe2, TrendingUp, Quote } from 'lucide-react';
import type { Translations } from '../types/translations';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export function AboutUsModal({ isOpen, onClose, t }: AboutUsModalProps) {
  const institutions = [
    {
      name: 'PGIM Fixed Income',
      logo: '/assets/pgim_fixed_income_logo.jpeg',
      alt: 'PGIM Fixed Income Logo'
    },
    {
      name: 'Seatown Holdings',
      logo: '/assets/seatown-logo.jpeg',
      alt: 'Seatown Holdings Logo'
    },
    {
      name: 'DA Capital',
      logo: '/assets/da-capital-logo.jpg',
      alt: 'DA Capital Logo'
    }
  ];

  const expertise = [
    { icon: Building2, key: 'fixedIncome' },
    { icon: GraduationCap, key: 'cfa' },
    { icon: Globe2, key: 'global' },
    { icon: TrendingUp, key: 'portfolio' }
  ] as const;

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-6 sm:p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#222831]">{t.aboutUs.title}</h2>
              
              {/* Professional Summary */}
              <div className="mb-12">
                <p className="text-lg sm:text-xl mb-8 text-[#222831]">
                  <a 
                    href="https://www.linkedin.com/in/juanmanuelotero/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#DBC078] hover:text-[#222831] transition-colors"
                  >
                    Juan Otero
                  </a>{' '}
                  {t.aboutUs.summary}
                </p>
              </div>

              {/* Expertise Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {expertise.map(({ icon: Icon, key }) => (
                  <div key={key} className="flex items-start space-x-4">
                    <Icon className="text-[#DBC078] w-6 h-6 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#222831]">{t.aboutUs.expertise[key].title}</h3>
                      <p className="text-gray-600">{t.aboutUs.expertise[key].text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-[#DBC078]">{t.aboutUs.testimonials.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {t.aboutUs.testimonials.items.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg relative"
                    >
                      <Quote className="text-[#DBC078] w-8 h-8 mb-4 opacity-50" />
                      <blockquote className="text-lg mb-4 text-[#222831]">
                        {testimonial.quote}
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-bold text-[#222831]">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        {testimonial.company && (
                          <p className="text-sm text-gray-600">{testimonial.company}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institutional Experience */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-[#DBC078]">{t.aboutUs.institutionalBackground}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {institutions.map((institution, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-center h-24 bg-gray-50 rounded-lg p-4"
                    >
                      <img 
                        src={institution.logo} 
                        alt={institution.alt}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 