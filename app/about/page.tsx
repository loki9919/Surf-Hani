import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | The Cove Surf House',
  description: 'Learn about The Cove Surf House story, our mission, and the passionate team dedicated to creating unforgettable surf and cultural experiences in Tamraght, Morocco.',
}

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
              <div className="w-full h-96 bg-gradient-to-br from-gold to-terracotta rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Founder Story Photo</span>
                </div>
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
            {/* Team Member Placeholders */}
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="card overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-ocean to-gold">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Team Photo {member}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Member {member}</h3>
                  <p className="text-terracotta font-medium mb-3">Role Title</p>
                  <p className="text-gray-600">
                    Brief bio and background information will be added here. 
                    Each team member brings unique skills and local knowledge.
                  </p>
                </div>
              </div>
            ))}
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
          <a
            href="/contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-ocean hover:bg-gray-100"
          >
            <span>Get in Touch</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
} 