import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800']
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains', 
  weight: ['300', '400', '500', '600', '700', '800'] 
})

export const metadata: Metadata = {
  title: 'Stoxify - India\'s Largest Trading Community',
  description: 'Join India\'s largest educational trading community focused on swing trading. Learn from experts with purely educational content and insights.',
  keywords: 'trading education, stock market learning, swing trading, India, community, educational content, trading analysis',
  authors: [{ name: 'Stoxify Team' }],
  creator: 'Stoxify',
  publisher: 'Stoxify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stoxify.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Stoxify - India\'s Largest Trading Community',
    description: 'Join India\'s largest educational trading community focused on swing trading. Learn from experts with purely educational content.',
    url: 'https://stoxify.com',
    siteName: 'Stoxify',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stoxify - Trading Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stoxify - India\'s Largest Trading Community',
    description: 'Join India\'s largest educational trading community focused on swing trading. Learn from experts with purely educational content.',
    images: ['/images/og-image.jpg'],
    creator: '@stoxify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrains.variable} font-sans antialiased bg-black-300`}>
        {children}
      </body>
    </html>
  )
}