'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean via-ocean/90 to-terracotta">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 wave-animation"
          viewBox="0 0 1200 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
        
        {/* Floating Surfboard */}
        <div className="absolute top-1/4 right-1/4 w-16 h-4 surfboard-animation">
          <svg viewBox="0 0 64 16" fill="none" className="w-full h-full">
            <ellipse cx="32" cy="8" rx="30" ry="6" fill="rgba(255,255,255,0.2)" />
            <ellipse cx="32" cy="8" rx="28" ry="4" fill="rgba(239,142,47,0.3)" />
          </svg>
        </div>

        {/* Sun */}
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gold/30 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="heading-xl text-white mb-6">
            Where Ocean Meets
            <span className="block text-gold">Adventure</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your perfect wave at The Cove Surf House. Experience authentic Moroccan coastal culture, 
            world-class surf breaks, and unforgettable adventures in the heart of Tamraght.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Book Your Stay</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/activities"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Explore Activities</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero 