import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Activities & Experiences | The Cove Surf House',
  description: 'Discover amazing activities at The Cove Surf House: surf lessons, horseback riding, hiking tours, cooking workshops, music sessions, and fire camps in Tamraght, Morocco.',
}

export default function Activities() {
  const activities = [
    {
      title: "Surf Lessons",
      description: "Learn to surf with our certified local instructors who know every break along the coast. From complete beginners to advanced surfers looking to improve technique.",
      features: ["Beginner to advanced levels", "Professional equipment included", "Small group sizes", "Safety-first approach"],
      duration: "2-3 hours",
      icon: "🏄‍♂️",
      color: "ocean"
    },
    {
      title: "Horseback Riding",
      description: "Experience the magic of riding along pristine beaches at sunset, with views of the Atlas Mountains in the distance. A truly unforgettable way to connect with nature.",
      features: ["Beach and countryside routes", "Sunset rides available", "All skill levels welcome", "Professional guides"],
      duration: "1-2 hours",
      icon: "🐎",
      color: "terracotta"
    },
    {
      title: "Hiking Tours",
      description: "Explore the stunning landscapes surrounding Tamraght, from coastal cliffs to Atlas Mountain foothills. Discover hidden waterfalls and traditional Berber villages.",
      features: ["Multiple difficulty levels", "Local guide included", "Traditional lunch", "Transportation provided"],
      duration: "Half or full day",
      icon: "🥾",
      color: "dune"
    },
    {
      title: "Cooking Workshops",
      description: "Master the art of traditional Moroccan cuisine with local families. Learn to prepare tagines, couscous, and other authentic dishes using age-old recipes.",
      features: ["Hands-on cooking experience", "Traditional recipes", "Local family hosts", "Market visit included"],
      duration: "3-4 hours",
      icon: "👨‍🍳",
      color: "gold"
    },
    {
      title: "Music & Dance Sessions",
      description: "Immerse yourself in Moroccan culture through traditional music and dance. Learn basic rhythms on traditional instruments and enjoy authentic performances.",
      features: ["Traditional instruments", "Local musicians", "Interactive sessions", "Cultural stories"],
      duration: "2 hours",
      icon: "🎵",
      color: "terracotta"
    },
    {
      title: "Evening Fire Camps",
      description: "End your days with magical evenings around the fire on the beach. Share stories, enjoy traditional tea, and watch the stars appear over the Atlantic.",
      features: ["Beachside location", "Traditional mint tea", "Storytelling", "Stargazing"],
      duration: "2-3 hours",
      icon: "🔥",
      color: "ocean"
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
              <div key={activity.title} className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-${activity.color}/10 flex items-center justify-center text-3xl mr-4`}>
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="heading-md text-gray-900">{activity.title}</h3>
                      <p className="text-gray-500 font-medium">{activity.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {activity.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-${activity.color} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${activity.color} focus:ring-opacity-50`}>
                    Book This Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-ocean mb-6">Experience Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine multiple activities for the ultimate Moroccan surf and culture adventure. 
              Our packages offer better value and a more comprehensive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-white px-3 py-1 text-sm font-medium">
                Most Popular
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Surf & Culture</h3>
              <div className="text-3xl font-bold text-ocean mb-2">€150</div>
              <div className="text-gray-500 mb-6">per person / 3 days</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3 surf lessons
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cooking workshop
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Evening fire camp
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Equipment included
                </li>
              </ul>
              <button className="btn-primary w-full">Choose Package</button>
            </div>

            <div className="card p-8 text-center">
              <h3 className="heading-sm text-gray-900 mb-4">Adventure Seeker</h3>
              <div className="text-3xl font-bold text-ocean mb-2">€200</div>
              <div className="text-gray-500 mb-6">per person / 4 days</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2 surf lessons
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Horseback riding
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hiking tour
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Transportation
                </li>
              </ul>
              <button className="btn-secondary w-full">Choose Package</button>
            </div>

            <div className="card p-8 text-center">
              <h3 className="heading-sm text-gray-900 mb-4">Complete Experience</h3>
              <div className="text-3xl font-bold text-ocean mb-2">€300</div>
              <div className="text-gray-500 mb-6">per person / 7 days</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All activities included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  5 surf lessons
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All cultural experiences
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Best value
                </li>
              </ul>
              <button className="btn-primary w-full">Choose Package</button>
            </div>
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
          <a
            href="/contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-ocean hover:bg-gray-100"
          >
            <span>Book Your Experience</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
} 