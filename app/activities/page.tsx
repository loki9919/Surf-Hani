'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Activities() {
  const activities = [
    {
      title: "Surf Lessons",
      description: "Learn to surf with our certified local instructors who know every break along the coast. From complete beginners to advanced surfers looking to improve technique.",
      features: ["Beginner to advanced levels", "Professional equipment included", "Small group sizes", "Safety-first approach"],
      duration: "2-3 hours",
      icon: "🏄‍♂️",
      color: "ocean",
      backgroundImage: "surf.png"
    },
    {
      title: "Horseback Riding",
      description: "Experience the magic of riding along pristine beaches at sunset, with views of the Atlas Mountains in the distance. A truly unforgettable way to connect with nature.",
      features: ["Beach and countryside routes", "Sunset rides available", "All skill levels welcome", "Professional guides"],
      duration: "1-2 hours",
      icon: "🐎",
      color: "terracotta",
      backgroundImage: "horse.png"
    },
    {
      title: "Hiking Tours",
      description: "Explore the stunning landscapes surrounding Tamraght, from coastal cliffs to Atlas Mountain foothills. Discover hidden waterfalls and traditional Berber villages.",
      features: ["Multiple difficulty levels", "Local guide included", "Traditional lunch", "Transportation provided"],
      duration: "Half or full day",
      icon: "🥾",
      color: "dune",
      backgroundImage: "hiking.png"
    },
    {
      title: "Cooking Workshops",
      description: "Master the art of traditional Moroccan cuisine with local families. Learn to prepare tagines, couscous, and other authentic dishes using age-old recipes.",
      features: ["Hands-on cooking experience", "Traditional recipes", "Local family hosts", "Market visit included"],
      duration: "3-4 hours",
      icon: "👨‍🍳",
      color: "gold",
      backgroundImage: "cooking.png"
    },
    {
      title: "Music & Dance Sessions",
      description: "Immerse yourself in Moroccan culture through traditional music and dance. Learn basic rhythms on traditional instruments and enjoy authentic performances.",
      features: ["Traditional instruments", "Local musicians", "Interactive sessions", "Cultural stories"],
      duration: "2 hours",
      icon: "🎵",
      color: "terracotta",
      backgroundImage: "DJ.jpg"
    },
    {
      title: "Evening Fire Camps",
      description: "End your days with magical evenings around the fire on the beach. Share stories, enjoy traditional tea, and watch the stars appear over the Atlantic.",
      features: ["Beachside location", "Traditional mint tea", "Storytelling", "Stargazing"],
      duration: "2-3 hours",
      icon: "🔥",
      color: "ocean",
      backgroundImage: "fire.png"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Activities & Experiences</h1>
          <p className="text-xl leading-relaxed">
            Dive into authentic Moroccan culture and adventure. From world-class surf breaks to 
            traditional cooking workshops, every experience is designed to create lasting memories.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={activity.title} className="card overflow-hidden group hover:shadow-2xl transition-all duration-300 relative min-h-[500px]">
                {/* Background Image or Gradient */}
                {activity.backgroundImage ? (
                  <div className="absolute inset-0">
                    <Image
                      src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/${activity.backgroundImage}`}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                  </div>
                ) : (
                  <div className={`absolute inset-0 ${
                    activity.color === 'ocean' ? 'bg-gradient-to-br from-ocean to-ocean/80' :
                    activity.color === 'terracotta' ? 'bg-gradient-to-br from-terracotta to-terracotta/80' :
                    activity.color === 'dune' ? 'bg-gradient-to-br from-dune to-dune/80' :
                    activity.color === 'gold' ? 'bg-gradient-to-br from-gold to-gold/80' : 'bg-gradient-to-br from-gray-600 to-gray-700'
                  }`}></div>
                )}

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mr-4">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="heading-md text-white">{activity.title}</h3>
                        <p className="text-white/80 font-medium">{activity.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/90 mb-6 leading-relaxed">{activity.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {activity.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/booking?activity=${encodeURIComponent(activity.title)}`}
                    className="w-full bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 inline-flex items-center justify-center border border-white/30"
                  >
                    Book This Experience
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-ocean text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Book your activities now and get ready for an unforgettable experience in Tamraght. 
            Our team is here to help you create the perfect itinerary.
          </p>
          <Link
            href="/booking"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-ocean hover:bg-gray-100"
          >
            <span>Book Your Experience</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
} 