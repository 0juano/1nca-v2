import React from 'react';
import { motion } from 'framer-motion';
import type { Translations } from '../../types/translations';
import { Building2, GraduationCap, Globe2, TrendingUp, Quote } from 'lucide-react';

interface AboutUsProps {
  t: Translations;
}

export function AboutUs({ t }: AboutUsProps) {
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

  return (
    <section id="about" className="min-h-[80vh] lg:min-h-screen bg-white text-[#222831] relative overflow-hidden pt-20 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-12">{t.aboutUs.title}</h2>
          
          {/* Professional Summary */}
          <div className="mb-12">
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              <a 
                href="https://www.linkedin.com/in/juanmanuelotero/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#DBC078] hover:text-[#222831] transition-colors"
              >
                Juan Otero
              </a>{' '}
              is an investor with over 15 years of experience, specializing in emerging markets, fixed income and corporate analysis. Former Principal at PGIM Fixed Income and Senior Analyst at Temasek's Seatown Holdings.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {expertise.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-start space-x-4">
                <Icon className="text-[#DBC078] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.aboutUs.expertise[key].title}</h3>
                  <p className="text-gray-600">{t.aboutUs.expertise[key].text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-[#DBC078]">{t.aboutUs.testimonials.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.aboutUs.testimonials.items.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors relative"
                >
                  <Quote className="text-[#DBC078] w-8 h-8 mb-4 opacity-50" />
                  <blockquote className="text-lg mb-4">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    {testimonial.company && (
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Institutional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-[#DBC078]">{t.aboutUs.institutionalBackground}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {institutions.map((institution, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center h-24 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <img 
                    src={institution.logo} 
                    alt={institution.alt}
                    className="max-h-full w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 