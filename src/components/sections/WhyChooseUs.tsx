import React from 'react';
import { motion } from 'framer-motion';
import type { Translations } from '../../types/translations';

interface WhyChooseUsProps {
  t: Translations;
  opacity: any;
}

export function WhyChooseUs({ t, opacity }: WhyChooseUsProps) {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-12">{t.whyChooseUs.title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16">
            {t.whyChooseUs.subtitle}
          </p>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[#DBC078]">{t.whyChooseUs.relevantExperience.title}</h3>
              <ul className="text-base sm:text-lg md:text-xl text-gray-600 space-y-2 sm:space-y-4">
                {t.whyChooseUs.relevantExperience.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[#DBC078]">{t.whyChooseUs.clearPhilosophy.title}</h3>
              <ul className="text-base sm:text-lg md:text-xl text-gray-600 space-y-2 sm:space-y-4">
                {t.whyChooseUs.clearPhilosophy.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}