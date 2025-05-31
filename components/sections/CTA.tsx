'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useTranslation from '@/hooks/useTranslation'

const CTA = () => {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding gradient-sunset relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-32 wave-animation"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,58.7C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
        
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-white/10 animate-float" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="heading-lg text-white mb-6 leading-tight">
            {t('cta.title')}
            <span className="block text-gold">{t('cta.subtitle')}</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/booking"
              className="bg-white text-ocean px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 inline-flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <span>{t('cta.bookButton')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            
            <Link
              href="/gallery"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/30 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 inline-flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <span>{t('cta.galleryButton')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{t('cta.stats.guests.number')}</div>
              <div className="text-sm">{t('cta.stats.guests.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{t('cta.stats.rating.number')}</div>
              <div className="text-sm">{t('cta.stats.rating.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{t('cta.stats.support.number')}</div>
              <div className="text-sm">{t('cta.stats.support.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA 