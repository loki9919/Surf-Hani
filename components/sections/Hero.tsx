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
        {/* Sophisticated Animated Waves - Bottom Layer */}
        <div className="absolute bottom-0 left-0 w-full h-96 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ 
              animation: 'gentle-wave 12s ease-in-out infinite',
              transform: 'translateZ(0)',
            }}
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L30,112C60,128,120,160,180,186.7C240,213,300,235,360,224C420,213,480,171,540,170.7C600,171,660,213,720,213.3C780,213,840,171,900,149.3C960,128,1020,128,1080,144C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160V320H1410C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V96Z"
              fill="rgba(255,255,255,0.08)"
            />
          </svg>
        </div>

        {/* Second Wave Layer */}
        <div className="absolute bottom-0 left-0 w-full h-80 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ 
              animation: 'gentle-wave 8s ease-in-out infinite reverse',
              transform: 'translateZ(0)',
              animationDelay: '-2s'
            }}
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160L30,149.3C60,139,120,117,180,128C240,139,300,181,360,202.7C420,224,480,224,540,208C600,192,660,160,720,149.3C780,139,840,149,900,154.7C960,160,1020,160,1080,154.7C1140,149,1200,139,1260,144C1320,149,1380,171,1410,181.3L1440,192V320H1410C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V160Z"
              fill="rgba(239,142,47,0.12)"
            />
          </svg>
        </div>

        {/* Third Wave Layer */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ 
              animation: 'gentle-wave 15s ease-in-out infinite',
              transform: 'translateZ(0)',
              animationDelay: '-4s'
            }}
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,224L30,208C60,192,120,160,180,149.3C240,139,300,149,360,170.7C420,192,480,224,540,234.7C600,245,660,235,720,213.3C780,192,840,160,900,144C960,128,1020,128,1080,149.3C1140,171,1200,213,1260,218.7C1320,224,1380,192,1410,176L1440,160V320H1410C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V224Z"
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

          {/* Additional Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏄‍♂️", title: "Surf Lessons", desc: "Expert instructors" },
              { icon: "🏨", title: "Cozy Hostel", desc: "Comfortable stays" },
              { icon: "🌅", title: "Ocean Views", desc: "Breathtaking sunsets" }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="heading-sm mb-2">{feature.title}</h3>
                <p className="text-body-sm text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 