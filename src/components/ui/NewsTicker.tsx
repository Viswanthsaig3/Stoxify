'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Bitcoin, TrendingUpIcon } from 'lucide-react'

interface MarketData {
  symbol: string
  price: string
  change: string
  changePercent: string
  isPositive: boolean
  type: 'stock' | 'crypto' | 'forex'
  displayName: string
}

interface NewsItem {
  text: string
  type: 'market' | 'news'
  data?: MarketData
}

export default function NewsTicker() {
  const [marketData, setMarketData] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch real-time market data
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const data: NewsItem[] = []

        // Fetch Crypto data from CoinGecko (free API)
        try {
          const cryptoResponse = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana,dogecoin&vs_currencies=usd&include_24hr_change=true'
          )
          const cryptoData = await cryptoResponse.json()

          const cryptoSymbols = [
            { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
            { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
            { id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
            { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
            { id: 'solana', symbol: 'SOL', name: 'Solana' },
            { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin' }
          ]

          cryptoSymbols.forEach(crypto => {
            if (cryptoData[crypto.id]) {
              const price = cryptoData[crypto.id].usd
              const change24h = cryptoData[crypto.id].usd_24h_change || 0
              const isPositive = change24h >= 0

              data.push({
                type: 'market',
                text: '',
                data: {
                  symbol: crypto.symbol,
                  displayName: crypto.name,
                  price: price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 }),
                  change: `${isPositive ? '+' : ''}${change24h.toFixed(2)}%`,
                  changePercent: `${change24h.toFixed(2)}%`,
                  isPositive,
                  type: 'crypto'
                }
              })
            }
          })
        } catch (error) {
          // Silently handle crypto API error in production
          if (process.env.NODE_ENV === 'development') {
            console.log('Crypto API error:', error)
          }
        }

        // Fetch Forex data from Fixer.io alternative (free tier)
        try {
          const forexResponse = await fetch(
            'https://api.exchangerate-api.com/v4/latest/USD'
          )
          const forexData = await forexResponse.json()

          if (forexData.rates) {
            const forexPairs = [
              { pair: 'USD/INR', rate: forexData.rates.INR, symbol: 'USDINR' },
              { pair: 'EUR/USD', rate: 1 / forexData.rates.EUR, symbol: 'EURUSD' },
              { pair: 'GBP/USD', rate: 1 / forexData.rates.GBP, symbol: 'GBPUSD' },
              { pair: 'USD/JPY', rate: forexData.rates.JPY, symbol: 'USDJPY' }
            ]

            forexPairs.forEach(forex => {
              // Simulate change (in real app, you'd compare with previous data)
              const simulatedChange = (Math.random() - 0.5) * 2
              const isPositive = simulatedChange >= 0

              data.push({
                type: 'market',
                text: '',
                data: {
                  symbol: forex.symbol,
                  displayName: forex.pair,
                  price: forex.rate.toFixed(4),
                  change: `${isPositive ? '+' : ''}${simulatedChange.toFixed(4)}`,
                  changePercent: `${simulatedChange.toFixed(2)}%`,
                  isPositive,
                  type: 'forex'
                }
              })
            })
          }
        } catch (error) {
          // Silently handle forex API error in production
          if (process.env.NODE_ENV === 'development') {
            console.log('Forex API error:', error)
          }
        }

        // Add some market news
        const newsItems = [
          'Global markets show mixed signals amid economic uncertainty',
          'Cryptocurrency adoption continues to grow worldwide',
          'Central banks maintain cautious monetary policy stance',
          'Tech stocks lead market recovery in Asian markets',
          'Oil prices stabilize after recent volatility',
          'Gold maintains safe-haven appeal amid market turbulence'
        ]

        newsItems.forEach(newsText => {
          data.push({
            type: 'news',
            text: newsText
          })
        })

        setMarketData(data)
        setLoading(false)
      } catch (error) {
        // Handle general error
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching market data:', error)
        }
        setLoading(false)
      }
    }

    fetchMarketData()

    // Refresh data every 30 seconds
    const interval = setInterval(fetchMarketData, 30000)

    return () => clearInterval(interval)
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case 'crypto':
        return <Bitcoin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
      case 'forex':
        return <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
      default:
        return <TrendingUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
    }
  }

  const getCurrencySymbol = (type: string) => {
    switch (type) {
      case 'crypto':
        return '$'
      case 'forex':
        return ''
      default:
        return '₹'
    }
  }

  if (loading) {
    return (
      <div className="relative bg-gradient-to-r from-midnightblue-950/95 via-black/90 to-midnightblue-900/95 border-y border-blue-500/20 backdrop-blur-sm overflow-hidden">
        <div className="py-4 flex items-center justify-center">
          <div className="flex items-center gap-2 text-blue-200">
            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Loading market data...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-gradient-to-r from-midnightblue-950/95 via-black/90 to-midnightblue-900/95 border-y border-blue-500/20 backdrop-blur-sm overflow-hidden">
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>

      {/* Scrolling content */}
      <div className="relative py-3 sm:py-4">
        <motion.div
          className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
          animate={{
            x: [0, -3000]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 80,
              ease: "linear"
            }
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...marketData, ...marketData, ...marketData].map((item, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12">
              {item.type === 'market' && item.data ? (
                <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="flex items-center gap-2">
                    {getIcon(item.data.type)}
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {item.data.symbol}
                    </span>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {getCurrencySymbol(item.data.type)}{item.data.price}
                    </span>
                  </div>

                  <div className={`flex items-center gap-1 ${item.data.isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                    {item.data.isPositive ? (
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span className="text-xs sm:text-sm font-medium">
                      {item.data.change}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-blue-200 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-light">{item.text}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-midnightblue-950 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-midnightblue-950 to-transparent pointer-events-none"></div>
    </div>
  )
}