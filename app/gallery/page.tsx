import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | The Cove Surf House',
  description: 'Explore our photo gallery showcasing life at The Cove Surf House in Tamraght, Morocco.',
}

export default function Gallery() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Gallery</h1>
          <p className="text-xl leading-relaxed">
            Discover the beauty of life at The Cove Surf House through our photo gallery.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card p-8">
            <h2 className="heading-md text-ocean mb-4">Follow Our Journey</h2>
            <p className="text-gray-600 mb-6">
              For the latest photos, follow us on Instagram @thecovesurfhouse
            </p>
            <a
              href="https://instagram.com/thecovesurfhouse"
              className="btn-primary"
            >
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-lg text-ocean mb-12 text-center">Photo Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({length: 12}, (_, i) => (
              <div key={i} className="card overflow-hidden aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-ocean to-terracotta">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Photo {i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 