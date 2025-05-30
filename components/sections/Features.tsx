'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
      title: "Expert Surf Instruction",
      description: "Learn from certified local surf instructors who know these breaks like the back of their hand.",
      color: "ocean"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: "Cozy Accommodation",
      description: "Comfortable rooms with authentic Moroccan design, all just steps from the beach.",
      color: "terracotta"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.27 5.82 21 7 13.87 2 9l6.91-1.74L12 2z"/>
        </svg>
      ),
      title: "Cultural Experiences",
      description: "Immerse yourself in local culture through cooking classes, music sessions, and village tours.",
      color: "gold"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      ),
      title: "Adventure Activities",
      description: "Horseback riding on the beach, hiking in the Atlas Mountains, and exploring hidden coves.",
      color: "dune"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="heading-lg text-ocean mb-6">
            Everything You Need for the
            <span className="text-terracotta"> Perfect Surf Trip</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beginner-friendly lessons to advanced coaching, cultural immersion to adventure activities—
            we've designed every experience to create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card p-6 text-center scroll-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${feature.color}/10 flex items-center justify-center text-${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="heading-sm text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <Link
            href="/activities"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Explore All Activities</span>
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