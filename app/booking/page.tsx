'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import useTranslation from '@/hooks/useTranslation'

function BookingForm() {
  const searchParams = useSearchParams()
  const activityFromUrl = searchParams.get('activity')
  const { t } = useTranslation()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    activity: activityFromUrl || '',
    message: ''
  })

  useEffect(() => {
    if (activityFromUrl) {
      setFormData(prev => ({
        ...prev,
        activity: activityFromUrl
      }))
    }
  }, [activityFromUrl])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hi! I'd like to book at The Cove Surf House:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.activity ? `Activity: ${formData.activity}` : ''}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}

Message: ${formData.message}

Thank you!`

    const whatsappUrl = `https://wa.me/212XXXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const activities = [
    t('activities.surfing.title'),
    t('activities.horseback.title'), 
    t('activities.hiking.title'),
    t('activities.cooking.title'),
    t('activities.musicDance.title'),
    t('activities.fishing.title')
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            {activityFromUrl ? `${t('navigation.book')} ${activityFromUrl}` : t('booking.hero.title')}
          </h1>
          <p className="text-xl leading-relaxed">
            {t('booking.hero.description')}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card p-8">
              <h2 className="heading-lg text-ocean mb-6">{t('booking.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.form.name')} {t('booking.form.required')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      placeholder={t('booking.form.name')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.form.email')} {t('booking.form.required')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      placeholder={t('booking.form.email')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    placeholder={t('booking.form.phone')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.form.activity')}
                  </label>
                  <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                  >
                    <option value="">{t('booking.form.activityDefault')}</option>
                    {activities.map((activity) => (
                      <option key={activity} value={activity}>
                        {activity}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 min-w-0">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.form.checkin')}
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.form.checkout')}
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.form.guests')}
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num > 1 ? t('booking.form.guestCountPlural') : t('booking.form.guestCount')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    placeholder={t('booking.form.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 inline-flex items-center justify-center space-x-2"
                >
                  <span>{t('booking.form.submit')}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="heading-md text-ocean mb-6">{t('booking.contact.title')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('booking.contact.description')}
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/212623789348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('booking.contact.whatsapp')}</h4>
                      <p className="text-gray-600">+212 623 789 348</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+212623789348"
                    className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('booking.contact.call')}</h4>
                      <p className="text-gray-600">+212 623 789 348</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:hello@thecovemorocco.com"
                    className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('booking.contact.email')}</h4>
                      <p className="text-gray-600">hello@thecovemorocco.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.google.com/maps/place/The+Cove+surf+house/@30.5148315,-9.6823865,16.5z/data=!4m9!3m8!1s0xdb3b3004e354607:0xad148f313b7867a!5m2!4m1!1i2!8m2!3d30.5146357!4d-9.6818656!16s%2Fg%2F11m71zfwzn?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('booking.contact.visit')}</h4>
                      <p className="text-gray-600">Tamraght, Agadir, Morocco</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Map Card */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="card map-card overflow-hidden">
            {/* Google Maps Embed */}
            <div className="relative h-80 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.956!2d-9.6818656!3d30.5146357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b3004e354607%3A0xad148f313b7867a!2sThe%20Cove%20surf%20house!5e0!3m2!1sen!2sma!4v1234567890&amp;z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cove Surf House Location"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Map Button */}
            <div className="p-6 bg-white">
              <a
                href="https://www.google.com/maps/place/The+Cove+surf+house/@30.5146357,-9.6818656,16z/data=!3m1!4b1!4m6!3m5!1s0xdb3b3004e354607:0xad148f313b7867a!8m2!3d30.5146357!4d-9.6818656!16s%2Fg%2F11m71zfwzn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary map-button text-center inline-flex items-center justify-center space-x-2 py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Open in Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Booking() {
  const { t } = useTranslation()

  return (
    <Suspense fallback={
      <div className="pt-16">
        <section className="section-padding bg-gradient-to-br from-ocean to-terracotta text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">{t('booking.hero.title')}</h1>
            <p className="text-xl leading-relaxed">Loading...</p>
          </div>
        </section>
      </div>
    }>
      <BookingForm />
    </Suspense>
  )
} 