'use client';

import { useEffect } from 'react';

interface LanguageToggleProps {
  locale: 'en' | 'ko';
  setLocale: (locale: 'en' | 'ko') => void;
}

export default function LanguageToggle({ locale, setLocale }: LanguageToggleProps) {
  // Persist choice
  useEffect(() => {
    try {
      window.localStorage.setItem('82major-locale', locale);
    } catch {}
  }, [locale]);

  return (
    <div className="fixed top-6 right-6 z-[60] pointer-events-auto">
      <div className="flex items-center gap-0 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#262626] rounded-full p-1 shadow-2xl">
        <button
          onClick={() => setLocale('en')}
          className={`px-4 py-1.5 text-xs tracking-wider font-semibold rounded-full transition-all duration-200 ${
            locale === 'en'
              ? 'bg-[#FD3737] text-white shadow-lg shadow-[#FD3737]/30'
              : 'text-[#B8B8C0] hover:text-[#FAFAFA]'
          }`}
          aria-label="English"
          aria-pressed={locale === 'en'}
        >
          EN
        </button>
        <button
          onClick={() => setLocale('ko')}
          className={`px-4 py-1.5 text-xs tracking-wider font-semibold rounded-full transition-all duration-200 ${
            locale === 'ko'
              ? 'bg-[#FD3737] text-white shadow-lg shadow-[#FD3737]/30'
              : 'text-[#B8B8C0] hover:text-[#FAFAFA]'
          }`}
          aria-label="한국어"
          aria-pressed={locale === 'ko'}
        >
          KO
        </button>
      </div>
    </div>
  );
}
