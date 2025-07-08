'use client'

import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const pricingPlans = [
  {
    name: "Learner",
    duration: "3 Months",
    price: 2999,
    originalPrice: 4999,
    popular: false,
    icon: Zap,
    iconColor: "text-blue-400",
    gradient: "from-blue-500/10 to-blue-600/10",
    features: [
      "Basic educational content",
      "Weekly market analysis (educational)",
      "Email support",
      "Access to community forum",
      "Basic risk management education",
      "Mobile app access"
    ]
  },
  {
    name: "Scholar",
    duration: "6 Months",
    price: 4999,
    originalPrice: 8999,
    popular: true,
    icon: Star,
    iconColor: "text-yellow-400",
    gradient: "from-yellow-500/10 to-yellow-600/10",
    features: [
      "Advanced educational content",
      "Daily market analysis (educational)",
      "Priority support",
      "Live educational sessions",
      "Advanced risk management education",
      "Personal learning mentor",
      "Mobile app access",
      "Weekly learning progress review"
    ]
  },
  {
    name: "Expert Learner",
    duration: "12 Months",
    price: 7999,
    originalPrice: 14999,
    popular: false,
    icon: Crown,
    iconColor: "text-purple-400",
    gradient: "from-purple-500/10 to-purple-600/10",
    features: [
      "Premium educational content",
      "Real-time market education alerts",
      "24/7 support",
      "Daily live educational sessions",
      "Portfolio analysis education",
      "One-on-one educational mentorship",
      "Educational API access",
      "Exclusive learning strategies",
      "Custom risk analysis education",
      "Priority community access"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 scroll-mt-16">
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary-400/10 blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent-400/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-primary-400/10 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display text-white mb-8 leading-tight">
            Learning Membership{' '}
            <span className="bg-gradient-to-r from-secondary-400 via-secondary-500 to-accent-400 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body font-light leading-relaxed">
            Choose your level of access to our educational trading ecosystem. Each plan unlocks exclusive learning benefits and personalized educational support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 glass hover:shadow-xl ${plan.popular ? 'ring-2 ring-secondary-500/50' : ''}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${plan.gradient} border border-white/20 mb-4`}>
                    <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="text-gray-300 mb-4 font-premium">
                    {plan.duration}
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl text-gray-400 line-through">
                      ₹{plan.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-4xl font-bold text-white">
                      ₹{plan.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="text-secondary-400 font-semibold">
                    Save ₹{(plan.originalPrice - plan.price).toLocaleString()}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-4 font-semibold font-premium text-lg transition-all duration-500 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white shadow-2xl shadow-secondary-500/25 hover:shadow-secondary-500/50 border border-secondary-400/20' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  {plan.popular ? 'Join Learning Community' : 'Select Plan'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-secondary-400" />
            <span className="text-white font-medium font-premium">30-Day Money Back Guarantee</span>
          </div>
          
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-body">
            We&apos;re confident in our educational platform. If you&apos;re not satisfied within 30 days, we&apos;ll refund your money. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  )
}