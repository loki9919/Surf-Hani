import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  fallback: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'The Cove Surf House | Beach & Surf Lifestyle Hostel in Tamraght',
  description: 'Experience the ultimate beach and surf lifestyle at The Cove Surf House in Tamraght, Morocco. Surf lessons, horseback riding, hiking tours, and authentic Moroccan experiences.',
  keywords: 'surf hostel, Morocco, Tamraght, surf lessons, beach hostel, surfing, Morocco travel',
  authors: [{ name: 'The Cove Surf House' }],
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/Surf-Hani/logo.png' : '/logo.png',
    shortcut: process.env.NODE_ENV === 'production' ? '/Surf-Hani/logo.png' : '/logo.png',
    apple: process.env.NODE_ENV === 'production' ? '/Surf-Hani/logo.png' : '/logo.png',
  },
  openGraph: {
    title: 'The Cove Surf House | Beach & Surf Lifestyle Hostel',
    description: 'Experience the ultimate beach and surf lifestyle in Tamraght, Morocco',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: process.env.NODE_ENV === 'production' ? '/Surf-Hani/logo.png' : '/logo.png',
        width: 800,
        height: 600,
        alt: 'The Cove Surf House Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cove Surf House | Beach & Surf Lifestyle Hostel',
    description: 'Experience the ultimate beach and surf lifestyle in Tamraght, Morocco',
    images: [process.env.NODE_ENV === 'production' ? '/Surf-Hani/logo.png' : '/logo.png'],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 