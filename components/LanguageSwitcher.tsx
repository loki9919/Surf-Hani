'use client'

import { useState, useEffect } from 'react'
import useTranslation from '@/hooks/useTranslation'

const LanguageSwitcher = () => {
  const { locale, changeLanguage, isLoading } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    console.log('LanguageSwitcher mounted with locale:', locale)
  }, [])

  useEffect(() => {
    console.log('LanguageSwitcher locale changed to:', locale)
  }, [locale])

  const handleToggle = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en'
    console.log('Toggle clicked - switching from', locale, 'to', newLocale)
    changeLanguage(newLocale)
  }

  if (!isMounted) {
    return (
      <div className="w-16 h-8 bg-white/20 rounded-full animate-pulse"></div>
    )
  }

  return (
    <div className="flex items-center">
      <div className="relative">
        <button
          onClick={handleToggle}
          disabled={isLoading}
          className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 will-change-auto"
          role="switch"
          aria-checked={locale === 'fr'}
          aria-label="Toggle language"
        >
          {/* Sliding indicator */}
          <div 
            className={`absolute top-1 bottom-1 w-6 rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out will-change-transform ${
              locale === 'fr' ? 'translate-x-8' : 'translate-x-1'
            }`}
          >
          </div>

          {/* Left label - EN */}
          <span className={`absolute left-2 text-xs font-bold font-comfortaa transition-colors duration-300 select-none ${
            locale === 'en' ? 'text-gray-800' : 'text-white/80'
          }`}>
            EN
          </span>

          {/* Right label - FR */}
          <span className={`absolute right-2 text-xs font-bold font-comfortaa transition-colors duration-300 select-none ${
            locale === 'fr' ? 'text-gray-800' : 'text-white/80'
          }`}>
            FR
          </span>
        </button>
      </div>
      
      {/* Debug info - remove this in production */}
      {process.env.NODE_ENV === 'development' && (
        <span className="ml-2 text-xs text-white/60 min-w-[60px]">
          {locale} {isLoading ? '(loading)' : ''}
        </span>
      )}
    </div>
  )
}

export default LanguageSwitcher 