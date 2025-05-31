'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import useTranslation from '@/hooks/useTranslation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/activities', label: t('navigation.activities') },
    { href: '/gallery', label: t('navigation.gallery') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="group">
            <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-ocean transition-colors duration-200 font-medium font-display group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* Language Switcher */}
            <LanguageSwitcher />
            <Link
              href="/booking"
              className="btn-primary"
            >
              {t('navigation.booking')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-ocean hover:bg-gray-100 focus:outline-none transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-ocean hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium font-display"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Language Switcher */}
              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>
              <Link
                href="/booking"
                className="block w-full text-center px-4 py-3 bg-terracotta text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium font-display mt-4"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.booking')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 