'use client'

import Link from 'next/link'
import Image from 'next/image'
import useTranslation from '@/hooks/useTranslation'

export default function Activities() {
  const { t } = useTranslation()

  const getActivityFeatures = (activityKey: string) => {
    const features = (t as any)(`activities.${activityKey}.features`)
    return Array.isArray(features) ? features : []
  }

  const activities = [
    {
      title: t('activities.surfing.title'),
      description: t('activities.surfing.description'),
      features: getActivityFeatures('surfing'),
      duration: t('activities.surfing.duration'),
      icon: "🏄‍♂️",
      color: "ocean",
      backgroundImage: "surf.png"
    },
    {
      title: t('activities.horseback.title'),
      description: t('activities.horseback.description'),
      features: getActivityFeatures('horseback'),
      duration: t('activities.horseback.duration'),
      icon: "🐎",
      color: "terracotta",
      backgroundImage: "horse.png"
    },
    {
      title: t('activities.hiking.title'),
      description: t('activities.hiking.description'),
      features: getActivityFeatures('hiking'),
      duration: t('activities.hiking.duration'),
      icon: "🥾",
      color: "dune",
      backgroundImage: "hiking.png"
    },
    {
      title: t('activities.cooking.title'),
      description: t('activities.cooking.description'),
      features: getActivityFeatures('cooking'),
      duration: t('activities.cooking.duration'),
      icon: "👨‍🍳",
      color: "gold",
      backgroundImage: "cooking.png"
    },
    {
      title: t('activities.musicDance.title'),
      description: t('activities.musicDance.description'),
      features: getActivityFeatures('musicDance'),
      duration: t('activities.musicDance.duration'),
      icon: "🎵",
      color: "terracotta",
      backgroundImage: "DJ.jpg"
    },
    {
      title: t('activities.fishing.title'),
      description: t('activities.fishing.description'),
      features: getActivityFeatures('fishing'),
      duration: t('activities.fishing.duration'),
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
          <h1 className="heading-xl mb-6">{t('activities.hero.title')}</h1>
          <p className="text-xl leading-relaxed">
            {t('activities.hero.description')}
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
                      {activity.features.map((feature: string, featureIndex: number) => (
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
                    {t('activities.bookButton')}
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
          <h2 className="heading-lg mb-6">{t('activities.cta.title')}</h2>
          <p className="text-xl mb-8 leading-relaxed">
            {t('activities.cta.description')}
          </p>
          <Link
            href="/booking"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-ocean hover:bg-gray-100"
          >
            <span>{t('activities.cta.button')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
} 