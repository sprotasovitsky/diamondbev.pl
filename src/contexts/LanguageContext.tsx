import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translation data structure
const translations = {
  pl: {
    'nav.home': 'Strona główna',
    'nav.about': 'O nas',
    'nav.services': 'Usługi',
    'nav.contact': 'Kontakt',
    'hero.title': 'DiamondBev.pl',
    'hero.subtitle': 'Produkcja i Dostawa Napojów',
    'hero.description': 'Specjalizujemy się w produkcji i dostawie wysokiej jakości napojów alkoholowych i bezalkoholowych. Oferujemy kompleksowe rozwiązania dla branży napojowej.',
    'hero.cta.services': 'Poznaj nasze usługi',
    'hero.cta.contact': 'Skontaktuj się z nami',
    'services.title': 'Nasze Usługi',
    'services.subtitle': 'Oferujemy szeroką gamę usług w branży napojowej',
    'about.title': 'O Firmie DiamondBev.pl',
    'about.subtitle': 'Specjalizacja w Produkcji i Dostawie Napojów',
    'contact.title': 'Skontaktuj się z nami',
    'contact.subtitle': 'Jesteśmy tutaj, aby pomóc Ci rozwijać Twój biznes w branży napojowej',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'DiamondBev.pl',
    'hero.subtitle': 'Beverage Production & Supply',
    'hero.description': 'We specialize in the production and supply of high-quality alcoholic and non-alcoholic beverages. We offer comprehensive solutions for the beverage industry.',
    'hero.cta.services': 'Discover our services',
    'hero.cta.contact': 'Contact us',
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a wide range of services in the beverage industry',
    'about.title': 'About DiamondBev.pl',
    'about.subtitle': 'Specializing in Beverage Production & Supply',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you grow your business in the beverage industry',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  useEffect(() => {
    // Get language from localStorage or default to Polish
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};