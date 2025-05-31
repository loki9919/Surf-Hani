'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

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
      <div className="absolute inset-0 z-5">
        {/* Horizontal Moving Waves - Bottom Layer */}
        <div className="absolute bottom-0 left-0 w-full h-96 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{ 
              animation: 'gentle-wave 20s linear infinite',
              transform: 'translateZ(0)',
            }}
            viewBox="0 0 2880 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L60,112C120,128,240,160,360,186.7C480,213,600,235,720,224C840,213,960,171,1080,170.7C1200,171,1320,213,1440,213.3C1560,213,1680,171,1800,149.3C1920,128,2040,128,2160,144C2280,160,2400,192,2520,197.3C2640,203,2760,181,2820,170.7L2880,160V320H2820C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V96Z"
              fill="rgba(255,255,255,0.08)"
            />
          </svg>
        </div>

        {/* Second Horizontal Wave Layer */}
        <div className="absolute bottom-0 left-0 w-full h-80 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{ 
              animation: 'gentle-wave-reverse 15s linear infinite',
              transform: 'translateZ(0)',
            }}
            viewBox="0 0 2880 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,202.7C840,224,960,224,1080,208C1200,192,1320,160,1440,149.3C1560,139,1680,149,1800,154.7C1920,160,2040,160,2160,154.7C2280,149,2400,139,2520,144C2640,149,2760,171,2820,181.3L2880,192V320H2820C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V160Z"
              fill="rgba(239,142,47,0.12)"
            />
          </svg>
        </div>

        {/* Third Horizontal Wave Layer */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{ 
              animation: 'gentle-wave 25s linear infinite',
              transform: 'translateZ(0)',
            }}
            viewBox="0 0 2880 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,224L60,208C120,192,240,160,360,149.3C480,139,600,149,720,170.7C840,192,960,224,1080,234.7C1200,245,1320,235,1440,213.3C1560,192,1680,160,1800,144C1920,128,2040,128,2160,149.3C2280,171,2400,213,2520,218.7C2640,224,2760,192,2820,176L2880,160V320H2820C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V224Z"
              fill="rgba(255,255,255,0.06)"
            />
          </svg>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/3 right-1/6 w-20 h-6 surfboard-animation opacity-40">
          <svg viewBox="0 0 80 24" fill="none" className="w-full h-full">
            <ellipse cx="40" cy="12" rx="38" ry="10" fill="rgba(255,255,255,0.3)" />
            <ellipse cx="40" cy="12" rx="35" ry="7" fill="rgba(239,142,47,0.4)" />
            <ellipse cx="40" cy="12" rx="30" ry="4" fill="rgba(255,255,255,0.2)" />
          </svg>
        </div>

        {/* Animated Sun with Rays */}
        <div className="absolute top-16 right-16 w-24 h-24">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 animate-pulse-slow"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/30 to-gold/10"></div>
            <div className="absolute inset-4 rounded-full bg-gold/20"></div>
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              top: `${25 + Math.random() * 50}%`,
              left: `${15 + Math.random() * 70}%`,
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Content - Better Positioning */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="heading-xl text-white mb-8 drop-shadow-2xl max-w-4xl mx-auto">
            Where Ocean Meets
            <span className="block text-gold bg-gradient-to-r from-gold to-terracotta bg-clip-text text-transparent font-black">
              Adventure
            </span>
          </h1>
          
          <p className="text-body-lg text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Discover your perfect wave at The Cove Surf House. Experience authentic Moroccan coastal culture, 
            world-class surf breaks, and unforgettable adventures in the heart of Tamraght.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/booking"
              className="btn-primary text-lg px-10 py-5 inline-flex items-center space-x-3 shadow-2xl transform transition-all duration-300 hover:shadow-terracotta/25"
            >
              <span>Book Your Stay</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/activities"
              className="btn-secondary text-lg px-10 py-5 inline-flex items-center space-x-3 shadow-2xl transform transition-all duration-300 hover:shadow-ocean/25"
            >
              <span>Explore Activities</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 