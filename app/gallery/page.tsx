'use client'

import Image from 'next/image'
import useTranslation from '@/hooks/useTranslation'

export default function Gallery() {
  const { t } = useTranslation()

  // Gallery images - numbered ones first, then others
  const galleryImages = [
    { src: '2.png', alt: 'Life at The Cove Surf House' },
    { src: '3.png', alt: 'Surf experiences and activities' },
    { src: '7.png', alt: 'Beautiful moments at our surf house' },
    { src: '8.png', alt: 'Authentic Moroccan experiences' },
    { src: '10.png', alt: 'Guest activities and adventures' },
    { src: 'waves.jpg', alt: 'Perfect waves at Tamraght Beach' },
    { src: 'surf_fograss.png', alt: 'Surfing adventures and experiences' },
    { src: 'fire.png', alt: 'Evening fire camps on the beach' },
    { src: 'hiking.png', alt: 'Hiking tours and mountain adventures' },
    { src: 'tea.png', alt: 'Traditional Moroccan tea culture' },
    { src: 'horse.png', alt: 'Horseback riding experiences' },
    { src: 'images/hostel-room.jpg', alt: 'Comfortable accommodation at The Cove' }
  ]

  return (
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">{t('gallery.hero.title')}</h1>
          <p className="text-xl leading-relaxed">
            {t('gallery.hero.description')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card p-8">
            <h2 className="heading-md text-ocean mb-4">{t('gallery.instagram.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('gallery.instagram.description')}
            </p>
            <a
              href="https://instagram.com/thecovesurfhouse"
              className="btn-primary"
            >
              {t('gallery.instagram.button')}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-lg text-ocean mb-12 text-center">{t('gallery.photoGallery.title')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <div key={i} className="card overflow-hidden aspect-square group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full relative">
                  <Image
                    src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/${image.src}`}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 