'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Import translations statically to ensure they work in production
import enTranslations from '../locales/en/common.json'
import frTranslations from '../locales/fr/common.json'

type TranslationKeys = {
  [key: string]: any
}

type Locale = 'en' | 'fr'

interface TranslationContextType {
  t: (key: string) => string
  locale: Locale
  changeLanguage: (newLocale: Locale) => void
  isLoading: boolean
}

const translations = {
  en: enTranslations,
  fr: frTranslations
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

interface TranslationProviderProps {
  children: ReactNode
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  // Always start with English as the default
  const [locale, setLocale] = useState<Locale>('en')
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle initial load and localStorage - but only after English is established
  useEffect(() => {
    setIsMounted(true)
    
    // Delay localStorage check to ensure English renders first
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const savedLocale = localStorage.getItem('locale') as Locale
        // Only switch from English if a valid French locale is saved
        if (savedLocale === 'fr') {
          setLocale('fr')
        }
        // If savedLocale is anything else or doesn't exist, stay with English
      }
    }, 100) // Small delay to ensure English renders first

    return () => clearTimeout(timer)
  }, [])

  const t = (key: string): string => {
    // Always use English during SSR and until mounted, then use selected locale
    const currentLocale = isMounted ? locale : 'en'
    const currentTranslations = translations[currentLocale] || translations.en
    
    const keys = key.split('.')
    let value: any = currentTranslations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key} for locale: ${currentLocale}`)
        return key // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key
  }

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
    
    // Force re-render by triggering a state change
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 50)
  }

  const value: TranslationContextType = {
    t,
    locale,
    changeLanguage,
    isLoading
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
} 