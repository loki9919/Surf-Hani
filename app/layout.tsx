import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  title: 'The Cove Surf House | Beach & Surf Lifestyle Hostel in Tamraght',
  description: 'Experience the ultimate beach and surf lifestyle at The Cove Surf House in Tamraght, Morocco. Surf lessons, horseback riding, hiking tours, and authentic Moroccan experiences.',
  keywords: 'surf hostel, Morocco, Tamraght, surf lessons, beach hostel, surfing, Morocco travel',
  authors: [{ name: 'The Cove Surf House' }],
  openGraph: {
    title: 'The Cove Surf House | Beach & Surf Lifestyle Hostel',
    description: 'Experience the ultimate beach and surf lifestyle in Tamraght, Morocco',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 