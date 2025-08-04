import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: 'pl' | 'en';
  onLanguageChange: (language: 'pl' | 'en') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-secondary-50"
        onClick={() => onLanguageChange(currentLanguage === 'pl' ? 'en' : 'pl')}
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="font-semibold uppercase">
          {currentLanguage}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;