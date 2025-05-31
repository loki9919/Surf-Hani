'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import useTranslation from '@/hooks/useTranslation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.activities'), path: '/activities' },
    { name: t('navigation.gallery'), path: '/gallery' },
  ]

  // For non-home pages, always show a background for better visibility
  const shouldShowBackground = !isHomePage || isScrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowBackground
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                    pathname === item.path
                      ? shouldShowBackground
                        ? 'text-ocean'
                        : 'text-white'
                      : shouldShowBackground
                        ? 'text-gray-600 hover:text-ocean'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                    pathname === item.path
                      ? 'scale-x-100'
                      : ''
                  } ${
                    shouldShowBackground ? 'bg-ocean' : 'bg-white'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/booking"
              className={`btn-primary text-sm px-6 py-2 transition-all duration-200 ${
                shouldShowBackground
                  ? 'bg-ocean text-white hover:bg-ocean/90'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              {t('navigation.book')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                shouldShowBackground
                  ? 'text-gray-600 hover:text-ocean hover:bg-gray-100'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  pathname === item.path
                    ? 'text-ocean bg-ocean/10'
                    : 'text-gray-600 hover:text-ocean hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link
                href="/booking"
                className="block w-full text-center bg-ocean text-white px-4 py-2 rounded-md font-medium hover:bg-ocean/90 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.book')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 