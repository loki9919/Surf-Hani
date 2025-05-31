'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useTranslation from '@/hooks/useTranslation'

const Intro = () => {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="heading-lg text-ocean mb-8">
              {t('intro.title')}
              <span className="text-terracotta block">{t('intro.subtitle')}</span>
            </h2>
            
            <p className="text-body-lg text-gray-600 mb-6">
              {t('intro.description1')}
            </p>
            
            <p className="text-body text-gray-600 mb-10">
              {t('intro.description2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-ocean/20 group-hover:scale-110 flex-shrink-0">
                  <svg className="w-8 h-8 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">{t('intro.features.oceanFront.title')}</h3>
                  <p className="text-body-sm text-gray-600">{t('intro.features.oceanFront.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110 flex-shrink-0">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">{t('intro.features.localExperiences.title')}</h3>
                  <p className="text-body-sm text-gray-600">{t('intro.features.localExperiences.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-terracotta/20 group-hover:scale-110 flex-shrink-0">
                  <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">{t('intro.features.allSkillLevels.title')}</h3>
                  <p className="text-body-sm text-gray-600">{t('intro.features.allSkillLevels.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-16 h-16 bg-dune/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-dune/20 group-hover:scale-110 flex-shrink-0">
                  <svg className="w-8 h-8 text-dune" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">{t('intro.features.primeLocation.title')}</h3>
                  <p className="text-body-sm text-gray-600">{t('intro.features.primeLocation.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element with Waves Image */}
          <div className={`scroll-slide-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Waves image */}
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/waves.jpg`}
                  alt="Beautiful waves at Tamraght Beach"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 via-transparent to-transparent"></div>
                
                {/* Enhanced bottom overlay with Tamraght Beach info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="text-white font-bold text-lg mb-2">{t('intro.imageCaption.title')}</h4>
                    <p className="text-white/90 text-sm">{t('intro.imageCaption.description')}</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-ocean/20 to-ocean/5 rounded-full animate-pulse-slow"></div>
              
              {/* Decorative wave elements */}
              <svg 
                className="absolute -bottom-4 -right-4 w-24 h-24 text-terracotta/20 animate-gentle-wave"
                viewBox="0 0 100 100" 
                fill="currentColor"
              >
                <path d="M10,50 Q30,20 50,50 T90,50 Q70,80 50,50 T10,50 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro 