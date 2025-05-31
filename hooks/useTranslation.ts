'use client'

import { useState, useEffect } from 'react'

type TranslationKeys = {
  [key: string]: any
}

const useTranslation = () => {
  const [translations, setTranslations] = useState<TranslationKeys>({})
  const [locale, setLocale] = useState<string>('en')
  const [isLoading, setIsLoading] = useState(true)

  // Load initial locale from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') || 'en'
      setLocale(savedLocale)
    }
  }, [])

  // Load translations when locale changes
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true)
      try {
        let translationModule
        if (locale === 'fr') {
          translationModule = await import('../locales/fr/common.json')
        } else {
          translationModule = await import('../locales/en/common.json')
        }
        
        setTranslations(translationModule.default || translationModule)
        console.log(`Loaded ${locale} translations:`, translationModule.default || translationModule)
      } catch (error) {
        console.error('Error loading translations:', error)
        // Fallback to English
        try {
          const fallback = await import('../locales/en/common.json')
          setTranslations(fallback.default || fallback)
        } catch (fallbackError) {
          console.error('Error loading fallback translations:', fallbackError)
          setTranslations({})
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [locale])

  const t = (key: string): string => {
    if (isLoading || Object.keys(translations).length === 0) {
      return key // Return key while loading
    }

    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key
  }

  const changeLanguage = (newLocale: string) => {
    console.log(`Switching language to: ${newLocale}`)
    setLocale(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  return {
    t,
    locale,
    changeLanguage,
    isLoading
  }
}

export default useTranslation 