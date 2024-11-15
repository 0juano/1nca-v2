import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, DollarSign } from 'lucide-react';
import type { Translations } from '../../types/translations';

interface ServicesProps {
  t: Translations;
}

export function Services({ t }: ServicesProps) {
  const getIcon = (index: number) => {
    switch (index % 4) {
      case 0: return <CheckCircle className="text-[#DBC078] mt-1" />;
      case 1: return <Users className="text-[#DBC078] mt-1" />;
      case 2: return <TrendingUp className="text-[#DBC078] mt-1" />;
      case 3: return <DollarSign className="text-[#DBC078] mt-1" />;
      default: return <CheckCircle className="text-[#DBC078] mt-1" />;
    }
  };

  return (
    <section id="services" className="min-h-[80vh] lg:min-h-screen bg-white text-[#222831] relative overflow-hidden pt-20 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-12">{t.services.title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16">
            {t.services.subtitle}
          </p>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:gap-12">
            {t.services.items.map((service, index) => (
              <div key={index} className="space-y-2 sm:space-y-4">
                <div className="flex items-start space-x-4">
                  {getIcon(index)}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}