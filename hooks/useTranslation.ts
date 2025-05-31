'use client'

import { useState, useEffect } from 'react'

// Import translations statically to ensure they work in production
import enTranslations from '../locales/en/common.json'
import frTranslations from '../locales/fr/common.json'

type TranslationKeys = {
  [key: string]: any
}

const translations = {
  en: enTranslations,
  fr: frTranslations
}

const useTranslation = () => {
  const [locale, setLocale] = useState<string>('en')
  const [isLoading, setIsLoading] = useState(true)

  // Load initial locale from localStorage
  useEffect(() => {
    setIsLoading(true)
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') || 'en'
      setLocale(savedLocale)
      console.log('Initial locale loaded:', savedLocale)
    }
    setIsLoading(false)
  }, [])

  const t = (key: string): string => {
    if (isLoading) {
      return key // Return key while loading
    }

    const currentTranslations = translations[locale as keyof typeof translations] || translations.en
    const keys = key.split('.')
    let value: any = currentTranslations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key} for locale: ${locale}`)
        return key // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key
  }

  const changeLanguage = (newLocale: string) => {
    console.log(`Switching language from ${locale} to: ${newLocale}`)
    setLocale(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
    
    // Force a small re-render to ensure components update
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 100)
  }

  return {
    t,
    locale,
    changeLanguage,
    isLoading
  }
}

export default useTranslation 