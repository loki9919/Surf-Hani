'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Our Story</h1>
          <p className="text-xl leading-relaxed">
            Born from a passion for the ocean and a deep love for Moroccan culture, 
            The Cove Surf House is more than just a place to stay—it's a gateway to authentic experiences.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-ocean mb-6">
                Where It All Began
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  It started with a simple dream: to create a space where surfers from around the world 
                  could experience the raw beauty of Morocco's Atlantic coast while connecting deeply 
                  with local culture and community.
                </p>
                <p>
                  Nestled in the heart of Tamraght, a small fishing village that has become one of 
                  Morocco's premier surf destinations, The Cove Surf House was founded by a group of 
                  passionate surfers and local community members who saw the potential to bridge 
                  cultures through shared ocean experiences.
                </p>
                <p>
                  What makes us different is our commitment to authenticity. We're not just a hostel—
                  we're a cultural exchange hub where travelers become part of the local family, 
                  where surf lessons come with stories of the ocean's history, and where every meal 
                  is an invitation to discover Moroccan flavors.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/Founder_Story.png`}
                  alt="Founder Story - The beginning of The Cove Surf House"
                  fill
                  className="object-cover"
                />
                
                {/* Optional overlay for better visual effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ocean/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-ocean mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the power of the ocean to bring people together and the importance 
              of preserving local culture while sharing it with the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We provide genuine experiences that respect and celebrate local traditions, 
                ensuring every guest leaves with real cultural insights.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We're deeply connected to the Tamraght community, ensuring our guests' experiences 
                benefit local families and preserve the village's unique character.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.09 6.26L20 9l-5.91 4.26L16.18 20 12 16.27 7.82 20l2.09-6.74L4 9l5.91-.74L12 2z"/>
                </svg>
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                From surf instruction to accommodation, we maintain the highest standards while 
                keeping our warm, welcoming atmosphere that makes guests feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-ocean mb-6">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of local guides, surf instructors, and hospitality experts 
              are here to make your stay unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Surfing Team Member */}
            <div className="card overflow-hidden">
              <div className="w-full h-64 relative">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/surfing_team.png`}
                  alt="Surfing Instructor - Expert local surf guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Surf Instructor</h3>
                <p className="text-terracotta font-medium mb-3">Lead Surf Instructor</p>
                <p className="text-gray-600">
                  Born and raised in Tamraght, our lead instructor has been surfing these waters for over 15 years. 
                  Deep knowledge of local breaks and passion for teaching makes the perfect guide 
                  for surfers of all levels.
                </p>
              </div>
            </div>

            {/* Cooking Team Member */}
            <div className="card overflow-hidden">
              <div className="w-full h-64 relative">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/cooking_team.png`}
                  alt="Cooking Instructor - Traditional Moroccan cuisine expert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cooking Expert</h3>
                <p className="text-terracotta font-medium mb-3">Culinary Expert</p>
                <p className="text-gray-600">
                  Our culinary expert comes from a family of traditional Moroccan cooks. She shares authentic 
                  recipes passed down through generations, teaching guests the art of tagine, 
                  couscous, and other local specialties.
                </p>
              </div>
            </div>

            {/* Horseback Riding Team Member */}
            <div className="card overflow-hidden">
              <div className="w-full h-64 relative">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/horsing_team.png`}
                  alt="Horseback Riding Guide - Expert equestrian and local guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Riding Guide</h3>
                <p className="text-terracotta font-medium mb-3">Horseback Riding Guide</p>
                <p className="text-gray-600">
                  Our riding guide has been working with horses since childhood and knows every trail from 
                  the beach to the Atlas Mountains. A gentle approach ensures both beginners 
                  and experienced riders feel comfortable and safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding gradient-ocean text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Join Our Story?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Become part of The Cove Surf House family. Book your stay and create memories 
            that will last a lifetime in beautiful Tamraght.
          </p>
          <Link
            href="/booking"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-ocean hover:bg-gray-100"
          >
            <span>Get in Touch</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
} 