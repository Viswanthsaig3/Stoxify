'use client'

import { useState, useEffect } from 'react'
import { Menu, X, TrendingUp, Home, Star, Users, DollarSign, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Features', icon: Star, href: '#features' },
    { name: 'About', icon: Users, href: '#about' },
    { name: 'Pricing', icon: DollarSign, href: '#pricing' },
    { name: 'Testimonials', icon: MessageCircle, href: '#testimonials' }
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-white border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold font-display tracking-wider">
                <span className="gradient-text">STOXIFY</span>
              </h1>
              <div className="flex items-center space-x-1 text-xs font-medium text-gray-600">
                <span>STOCKS</span>
                <span className="text-blue-500">•</span>
                <span>CRYPTO</span>
                <span className="text-green-500">•</span>
                <span>FOREX</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50"
                >
                  <item.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Join Community
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative group p-2"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white p-1 rounded-lg">
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-white border-t border-gray-200/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="pt-4">
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}