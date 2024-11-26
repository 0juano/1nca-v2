import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input, Textarea } from './ui/form';
import { useRateLimit } from '../hooks/useRateLimit';
import type { Translations } from '../types/translations';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
}

export function ConsultationForm({ isOpen, onClose, t }: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize rate limiting with 3 attempts per hour
  const { isBlocked, remainingTime, incrementAttempt, attemptsLeft } = useRateLimit({
    maxAttempts: 3,
    timeWindow: 3600000 // 1 hour in milliseconds
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.email) {
      newErrors.email = t.form.validation.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.form.validation.emailInvalid;
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = t.form.validation.phoneInvalid;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Check if rate limited
    if (isBlocked) {
      const minutes = Math.ceil(remainingTime / 60000);
      setSubmitError(`Too many attempts. Please try again in ${minutes} minutes.`);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        to_email: 'juan@onenorth.capital',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      // Increment attempt count only on successful submission
      incrementAttempt();
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(t.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-form-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <h3 id="consultation-form-title" className="text-2xl font-bold text-[#222831] mb-6">{t.form.title}</h3>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <p className="text-green-600 font-medium">{t.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md">
                {submitError}
              </div>
            )}

            {/* Show attempts remaining if less than 2 */}
            {attemptsLeft < 2 && !isBlocked && (
              <div className="p-3 bg-yellow-100 text-yellow-700 rounded-md">
                {`You have ${attemptsLeft} submission${attemptsLeft === 1 ? '' : 's'} remaining.`}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.name}
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder={t.form.placeholders.name}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.email}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder={t.form.placeholders.email}
                error={errors.email}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.phone}
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder={t.form.placeholders.phone}
                error={errors.phone}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.message}
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder={t.form.placeholders.message}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isBlocked}
              className="w-full bg-[#DBC078] text-[#222831] hover:bg-[#DBC078]/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.form.sending : t.form.submit}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}