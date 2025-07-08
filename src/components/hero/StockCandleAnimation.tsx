'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CandleData {
  id: number
  open: number
  high: number
  low: number
  close: number
  color: 'green' | 'red'
  height: number
}

export function StockCandleAnimation() {
  const [candles, setCandles] = useState<CandleData[]>([])

  useEffect(() => {
    // Generate initial candle data
    const generateCandles = () => {
      const newCandles: CandleData[] = []
      let basePrice = 100
      
      for (let i = 0; i < 12; i++) {
        const variation = (Math.random() - 0.5) * 10
        const open = basePrice + variation
        const close = open + (Math.random() - 0.5) * 8
        const high = Math.max(open, close) + Math.random() * 4
        const low = Math.min(open, close) - Math.random() * 4
        
        newCandles.push({
          id: i,
          open,
          high,
          low,
          close,
          color: close > open ? 'green' : 'red',
          height: Math.abs(close - open) * 2 + 20
        })
        
        basePrice = close
      }
      
      setCandles(newCandles)
    }

    generateCandles()
    
    // Update candles periodically
    const interval = setInterval(() => {
      generateCandles()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="text-secondary-400/30">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Stock Candles */}
      <div className="relative flex items-end justify-center space-x-1 h-64 w-full max-w-lg">
        {candles.map((candle, index) => (
          <motion.div
            key={candle.id}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="relative flex flex-col items-center"
          >
            {/* Candle Wick */}
            <motion.div
              className={`w-0.5 ${candle.color === 'green' ? 'bg-secondary-400' : 'bg-red-400'}`}
              style={{ height: `${Math.abs(candle.high - candle.low) * 1.5}px` }}
              initial={{ height: 0 }}
              animate={{ height: `${Math.abs(candle.high - candle.low) * 1.5}px` }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            />
            
            {/* Candle Body */}
            <motion.div
              className={`w-4 ${
                candle.color === 'green' 
                  ? 'bg-gradient-to-t from-secondary-600 to-secondary-400' 
                  : 'bg-gradient-to-t from-red-600 to-red-400'
              } rounded-sm shadow-lg`}
              style={{ height: `${candle.height}px` }}
              initial={{ height: 0 }}
              animate={{ height: `${candle.height}px` }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            />
            
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 w-4 ${
                candle.color === 'green' 
                  ? 'bg-secondary-400/20' 
                  : 'bg-red-400/20'
              } rounded-sm blur-sm`}
              style={{ height: `${candle.height}px` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 + 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Trend Line */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <svg width="100%" height="100%" className="text-secondary-400/60">
          <motion.path
            d="M 50,200 Q 150,150 250,120 T 450,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>
      </motion.div>

      {/* Floating Price Labels */}
      <div className="absolute top-4 right-4 space-y-2">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="glass px-3 py-1 rounded-lg"
        >
          <div className="text-secondary-400 text-sm font-mono">
            ₹{(Math.random() * 1000 + 5000).toFixed(2)}
          </div>
          <div className="text-xs text-gray-400">Current Price</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="glass px-3 py-1 rounded-lg"
        >
          <div className="text-secondary-400 text-sm font-mono">
            +{(Math.random() * 5 + 1).toFixed(2)}%
          </div>
          <div className="text-xs text-gray-400">Day Change</div>
        </motion.div>
      </div>

      {/* Volume Bars */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-secondary-400/30 rounded-t"
            style={{ height: `${Math.random() * 20 + 10}px` }}
            initial={{ height: 0 }}
            animate={{ height: `${Math.random() * 20 + 10}px` }}
            transition={{ duration: 0.3, delay: i * 0.1 + 1 }}
          />
        ))}
      </div>
    </div>
  )
}