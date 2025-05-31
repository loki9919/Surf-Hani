'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useTranslation from '@/hooks/useTranslation'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      title: t('features.surfLessons.title'),
      description: t('features.surfLessons.description'),
      color: "ocean",
      bgColor: "bg-ocean/10",
      textColor: "text-ocean"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: t('features.accommodation.title'),
      description: t('features.accommodation.description'),
      color: "terracotta",
      bgColor: "bg-terracotta/10",
      textColor: "text-terracotta"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.27 5.82 21 7 13.87 2 9l6.91-1.74L12 2z"/>
        </svg>
      ),
      title: t('features.localCulture.title'),
      description: t('features.localCulture.description'),
      color: "gold",
      bgColor: "bg-gold/10",
      textColor: "text-gold"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.5 10.5L12 8L9.5 10.5L12 13L14.5 10.5ZM12 2L2 12L12 22L22 12L12 2ZM12 4.8L19.2 12L12 19.2L4.8 12L12 4.8Z"/>
        </svg>
      ),
      title: t('intro.experience3.title'),
      description: t('intro.experience3.description'),
      color: "dune",
      bgColor: "bg-dune/10",
      textColor: "text-dune"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="heading-lg text-ocean mb-8">
            {t('features.title')}
          </h2>
          <p className="text-body-lg text-gray-600 max-w-4xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group card p-8 text-center scroll-fade-in hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${feature.bgColor} flex items-center justify-center ${feature.textColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {feature.icon}
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-body-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-20 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <Link
            href="/activities"
            className="btn-primary text-lg px-10 py-5 inline-flex items-center space-x-3 shadow-2xl"
          >
            <span>{t('features.cta')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features 