'use client'

import Link from 'next/link'
import Image from 'next/image'
import useTranslation from '@/hooks/useTranslation'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl leading-relaxed">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-ocean mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('about.story.paragraph1')}
                </p>
                <p>
                  {t('about.story.paragraph2')}
                </p>
                <p>
                  {t('about.story.paragraph3')}
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
            <h2 className="heading-lg text-ocean mb-6">{t('about.mission.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">{t('about.mission.authenticity.title')}</h3>
              <p className="text-gray-600">
                {t('about.mission.authenticity.description')}
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">{t('about.mission.community.title')}</h3>
              <p className="text-gray-600">
                {t('about.mission.community.description')}
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.09 6.26L20 9l-5.91 4.26L16.18 20 12 16.27 7.82 20l2.09-6.74L4 9l5.91-.74L12 2z"/>
                </svg>
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">{t('about.mission.excellence.title')}</h3>
              <p className="text-gray-600">
                {t('about.mission.excellence.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-ocean mb-6">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team.description')}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.team.surfInstructor.name')}</h3>
                <p className="text-terracotta font-medium mb-3">{t('about.team.surfInstructor.role')}</p>
                <p className="text-gray-600">
                  {t('about.team.surfInstructor.description')}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.team.cookingExpert.name')}</h3>
                <p className="text-terracotta font-medium mb-3">{t('about.team.cookingExpert.role')}</p>
                <p className="text-gray-600">
                  {t('about.team.cookingExpert.description')}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.team.ridingGuide.name')}</h3>
                <p className="text-terracotta font-medium mb-3">{t('about.team.ridingGuide.role')}</p>
                <p className="text-gray-600">
                  {t('about.team.ridingGuide.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding gradient-ocean text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">{t('about.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed">
            {t('about.cta.description')}
          </p>
          <Link
            href="/booking"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-ocean hover:bg-gray-100"
          >
            <span>{t('about.cta.button')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
} 