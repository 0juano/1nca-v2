import React from 'react';
import { motion } from 'framer-motion';
import type { Translations } from '../../types/translations';

interface OurPhilosophyProps {
  t: Translations;
}

export function OurPhilosophy({ t }: OurPhilosophyProps) {
  return (
    <section id="philosophy" className="min-h-[80vh] lg:min-h-screen bg-[#222831] text-white relative overflow-hidden pt-20 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-12">{t.ourPhilosophy.title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16">
            {t.ourPhilosophy.subtitle}
          </p>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[#DBC078]">{t.ourPhilosophy.personalAttention.title}</h3>
              <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                {t.ourPhilosophy.personalAttention.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[#DBC078]">{t.ourPhilosophy.provenMethodology.title}</h3>
              <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                {t.ourPhilosophy.provenMethodology.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}