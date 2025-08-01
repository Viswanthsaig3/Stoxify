import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
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
  title: 'StoXify - India\'s Largest Trading Community',
  description: 'Join India\'s largest educational trading community focused on swing trading. Learn from experts with purely educational content and insights.',
  keywords: 'trading education, stock market learning, swing trading, India, community, educational content, trading analysis',
  authors: [{ name: 'StoXify Team' }],
  creator: 'StoXify',
  publisher: 'StoXify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://StoXify.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'StoXify - India\'s Largest Trading Community',
    description: 'Join India\'s largest educational trading community focused on swing trading. Learn from experts with purely educational content.',
    url: 'https://StoXify.com',
    siteName: 'StoXify',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StoXify - Trading Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StoXify - India\'s Largest Trading Community',
    description: 'Join India\'s largest educational trading community focused on swing trading. Learn from experts with purely educational content.',
    images: ['/images/og-image.jpg'],
    creator: '@StoXify',
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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="/images/StoXifyLogo.PNG" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrains.variable} font-sans antialiased bg-black-300`}>
        {children}
      </body>
    </html>
  )
}