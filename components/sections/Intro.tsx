'use client'

import { useEffect, useRef, useState } from 'react'

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="heading-lg text-ocean mb-6">
              Your Gateway to
              <span className="text-terracotta"> Moroccan Surf Culture</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nestled in the charming coastal village of Tamraght, The Cove Surf House offers 
              more than just accommodation—it's your portal to authentic Moroccan experiences 
              and world-class surfing.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From sunrise surf sessions to traditional tagine cooking workshops, every moment 
              here is designed to connect you with the ocean, the culture, and yourself.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ocean Front Location</h3>
                  <p className="text-gray-600">Steps from perfect surf breaks</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.09 6.26L20 9l-5.91 4.26L16.18 20 12 16.27 7.82 20l2.09-6.74L4 9l5.91-.74L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Experiences</h3>
                  <p className="text-gray-600">Authentic cultural immersion</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">All Skill Levels</h3>
                  <p className="text-gray-600">Beginner to advanced surf lessons</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-dune/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-dune" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Prime Location</h3>
                  <p className="text-gray-600">Heart of Tamraght village</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`scroll-slide-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Placeholder for main image */}
              <div className="w-full h-96 bg-gradient-to-br from-ocean to-terracotta rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Main Photo Coming Soon</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ocean/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro 