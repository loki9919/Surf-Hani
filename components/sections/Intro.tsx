'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="heading-lg text-ocean mb-8">
              Your Gateway to
              <span className="text-terracotta block"> Moroccan Surf Culture</span>
            </h2>
            
            <p className="text-body-lg text-gray-600 mb-6">
              Nestled in the charming coastal village of Tamraght, The Cove Surf House offers 
              more than just accommodation—it's your portal to authentic Moroccan experiences 
              and world-class surfing.
            </p>
            
            <p className="text-body text-gray-600 mb-10">
              From sunrise surf sessions to traditional tagine cooking workshops, every moment 
              here is designed to connect you with the ocean, the culture, and yourself.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-ocean/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-ocean/20 group-hover:scale-110">
                  <svg className="w-7 h-7 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">Ocean Front Location</h3>
                  <p className="text-body-sm text-gray-600">Steps from perfect surf breaks</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                  <svg className="w-7 h-7 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.09 6.26L20 9l-5.91 4.26L16.18 20 12 16.27 7.82 20l2.09-6.74L4 9l5.91-.74L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">Local Experiences</h3>
                  <p className="text-body-sm text-gray-600">Authentic cultural immersion</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-terracotta/20 group-hover:scale-110">
                  <svg className="w-7 h-7 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">All Skill Levels</h3>
                  <p className="text-body-sm text-gray-600">Beginner to advanced surf lessons</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-dune/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-dune/20 group-hover:scale-110">
                  <svg className="w-7 h-7 text-dune" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm text-gray-900 mb-2">Prime Location</h3>
                  <p className="text-body-sm text-gray-600">Heart of Tamraght village</p>
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
                    <h4 className="text-white font-bold text-lg mb-2">Tamraght Beach</h4>
                    <p className="text-white/90 text-sm">Perfect waves, all year round</p>
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