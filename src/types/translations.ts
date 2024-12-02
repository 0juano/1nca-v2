export interface Translations {
  nav: {
    whyChooseUs: string;
    ourPhilosophy: string;
    services: string;
    contact: string;
    aboutUs: string;
  };
  hero: {
    subtitle: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    description: string;
    cta: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    relevantExperience: {
      title: string;
      items: string[];
    };
    clearPhilosophy: {
      title: string;
      items: string[];
    };
  };
  ourPhilosophy: {
    title: string;
    subtitle: string;
    personalAttention: {
      title: string;
      items: string[];
    };
    provenMethodology: {
      title: string;
      items: string[];
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    quote: string;
    author: string;
  };
  form: {
    title: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    validation: {
      emailRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
    };
  };
  aboutUs: {
    title: string;
    summary: string;
    expertise: {
      fixedIncome: {
        title: string;
        text: string;
      };
      cfa: {
        title: string;
        text: string;
      };
      global: {
        title: string;
        text: string;
      };
      portfolio: {
        title: string;
        text: string;
      };
    };
    institutionalBackground: string;
    testimonials: {
      title: string;
      items: Array<{
        quote: string;
        author: string;
        role: string;
        company?: string;
      }>;
    };
  };
}