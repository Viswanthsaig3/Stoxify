'use client'

import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    location: "Bangalore",
    avatar: "RS",
    content: "Stoxify's educational content completely transformed my understanding of swing trading. The structured learning modules helped me grasp complex concepts easily. The community discussions are incredibly valuable for learning!",
    achievement: "Enhanced Knowledge",
    duration: "6 months",
    rating: 5,
    verified: true
  },
  {
    name: "Priya Patel",
    role: "Business Owner",
    location: "Mumbai",
    avatar: "PP",
    content: "The live educational sessions and mentorship helped me understand market psychology like never before. Best investment in my learning journey. The risk management education saved me from making costly mistakes.",
    achievement: "Deep Understanding",
    duration: "8 months",
    rating: 5,
    verified: true
  },
  {
    name: "Amit Kumar",
    role: "Chartered Accountant",
    location: "Delhi",
    avatar: "AK",
    content: "Professional educational approach with excellent learning strategies. The mentorship program accelerated my learning curve significantly. From a complete beginner to knowledgeable learner in just a few months.",
    achievement: "Skill Development",
    duration: "12 months",
    rating: 5,
    verified: true
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Manager",
    location: "Hyderabad",
    avatar: "SR",
    content: "The educational insights and learning materials have been incredibly comprehensive. The educational resources are top-notch, making complex trading concepts easy to understand. Highly recommend for serious learners.",
    achievement: "Concept Mastery",
    duration: "7 months",
    rating: 5,
    verified: true
  },
  {
    name: "Vikram Singh",
    role: "Doctor",
    location: "Pune",
    avatar: "VS",
    content: "Being a busy professional, I needed flexible learning options. Stoxify's educational content and structured modules allowed me to learn effectively without spending hours. The learning schedule works perfectly for professionals.",
    achievement: "Flexible Learning",
    duration: "4 months",
    rating: 5,
    verified: true
  },
  {
    name: "Meera Gupta",
    role: "IT Consultant",
    location: "Chennai",
    avatar: "MG",
    content: "The community aspect is what sets Stoxify apart. Learning from other experienced members and sharing educational insights has been invaluable. The platform's user-friendly interface makes learning enjoyable.",
    achievement: "Community Learning",
    duration: "10 months",
    rating: 5,
    verified: true
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-br from-white to-gray-50 scroll-mt-16">
      <div className="absolute inset-0 bg-gray-50/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Learning Stories from Our{' '}
            <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body font-medium">
            Discover how thousands of learners have enhanced their trading knowledge with Stoxify's comprehensive educational content and community support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full p-6 bg-white border border-gray-200 hover:border-secondary-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold font-display">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold font-display text-lg">{testimonial.name}</h3>
                      <p className="text-gray-700 text-sm font-body font-medium">{testimonial.role}</p>
                      <p className="text-gray-600 text-xs font-body">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {testimonial.verified && (
                      <Badge className="bg-secondary-50 text-secondary-700 border-secondary-200 font-body font-medium">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-secondary-400/40" />
                  <p className="text-gray-800 leading-relaxed pl-6 font-body font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary-600" />
                    <span className="text-secondary-700 font-bold font-display">{testimonial.achievement}</span>
                    <span className="text-gray-600 text-sm font-body font-medium">achievement</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700 text-sm font-body font-medium">{testimonial.duration}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-gray-900 mb-2">20,000+</div>
              <div className="text-gray-700 font-body font-medium">Happy Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-700 font-body font-medium">Students Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-gray-900 mb-2">95%</div>
              <div className="text-gray-700 font-body font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-gray-900 mb-2">4.8★</div>
              <div className="text-gray-700 font-body font-medium">Learning Rating</div>
            </div>
          </div>
          
          <div className="mt-8">
            <button className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold font-display px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 btn-hover-glow">
              Join Our Learning Community
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}