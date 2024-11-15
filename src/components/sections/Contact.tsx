import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ConsultationForm } from '../ConsultationForm';
import type { Translations } from '../../types/translations';

interface ContactProps {
  t: Translations;
}

export function Contact({ t }: ContactProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="min-h-[80vh] lg:min-h-screen bg-[#222831] text-white relative overflow-hidden pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-12">{t.contact.title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16">
            {t.contact.subtitle}
          </p>
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="w-full sm:w-auto bg-[#DBC078] text-[#222831] hover:bg-[#DBC078]/90 text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-12"
          >
            {t.contact.cta}
          </Button>
        </motion.div>
      </div>

      <ConsultationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        t={t}
      />
    </section>
  );
}