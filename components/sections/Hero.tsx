'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import useTranslation from '@/hooks/useTranslation'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t, locale, isLoading } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/images/hostel-room.jpg`}
          alt="Cozy hostel room at The Cove Surf House"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean/85 via-ocean/70 to-terracotta/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles with subtle animation */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gold/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-terracotta/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Multi-Layered Animated Waves */}
        <div className="wave-container absolute bottom-0 left-0 w-full h-32">
          {/* Wave Layer 1 - Slowest, most prominent */}
          <svg 
            className="absolute bottom-0 left-0 w-[200%] h-32 text-white/8 wave-layer-1"
            viewBox="0 0 1200 120" 
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,58.7C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>

          {/* Wave Layer 2 - Medium speed, reverse direction */}
          <svg 
            className="absolute bottom-0 left-0 w-[200%] h-32 text-ocean/15 wave-layer-2"
            viewBox="0 0 1200 120" 
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,90.7C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>

          {/* Wave Layer 3 - Fast speed */}
          <svg 
            className="absolute bottom-0 left-0 w-[200%] h-32 text-white/6 wave-layer-3"
            viewBox="0 0 1200 120" 
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,122.7C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>

          {/* Wave Layer 4 - Ultra slow, background layer */}
          <svg 
            className="absolute bottom-0 left-0 w-[200%] h-32 text-terracotta/10 wave-layer-4"
            viewBox="0 0 1200 120" 
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,16L48,21.3C96,27,192,37,288,32C384,27,480,5,576,5.3C672,5,768,27,864,42.7C960,59,1056,69,1152,64C1248,59,1344,37,1392,26.7L1440,16L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>

          {/* Wave Layer 5 - Drift effect, subtle */}
          <svg 
            className="absolute bottom-0 left-0 w-[200%] h-32 text-gold/8 wave-layer-5"
            viewBox="0 0 1200 120" 
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,48L48,53.3C96,59,192,69,288,64C384,59,480,37,576,37.3C672,37,768,59,864,74.7C960,91,1056,101,1152,96C1248,91,1344,69,1392,58.7L1440,48L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Simplified Logo - No Text */}
            <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center">
                <div className="hero-logo-container bg-white/15 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/20 transition-all duration-300">
                  <Logo 
                    size="lg" 
                    className="drop-shadow-lg transform scale-150 sm:scale-175 md:scale-200" 
                    showText={false}
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Text Content with Better Layout */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="heading-xl text-white mb-4 max-w-5xl mx-auto leading-tight">
                <span className="block font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {t('hero.title')}
                </span>
                <span className="block text-gold font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                  {t('hero.subtitle')}
                </span>
              </h1>
            </div>

            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4">
                {t('hero.description')}
              </p>
            </div>

            {/* Enhanced CTA Buttons with Better Mobile Layout */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto px-4">
                <Link
                  href="/booking"
                  className="w-full sm:w-auto btn-primary text-lg px-10 py-5 inline-flex items-center justify-center space-x-3 shadow-2xl transform transition-all duration-300 hover:shadow-terracotta/25 min-w-[250px]"
                >
                  <span className="font-semibold">{t('hero.cta')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/activities"
                  className="w-full sm:w-auto btn-secondary text-lg px-10 py-5 inline-flex items-center justify-center space-x-3 shadow-2xl transform transition-all duration-300 hover:shadow-ocean/25 min-w-[250px]"
                >
                  <span className="font-semibold">{t('navigation.activities')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 