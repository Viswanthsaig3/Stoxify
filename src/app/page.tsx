import Navbar from '@/components/Navbar'
import Hero from '@/components/hero/Hero'
import Features from '@/components/features/Features'
import About from '@/components/about/About'
import Community from '@/components/community/Community'
import Pricing from '@/components/pricing/Pricing'
import Testimonials from '@/components/testimonials/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section - Premium Dark Blue Gradient */}
        <section className="bg-premium-gradient">
          <Hero />
        </section>
        
        {/* Features Section - Clean White with Blue Accents */}
        <section className="bg-white-100">
          <Features />
        </section>
        
        {/* About Section - Dark Midnight Blue */}
        <section className="bg-gradient-to-br from-midnightblue-400 via-midnightblue-200 to-slateblue-300">
          <About />
        </section>
        
        {/* Community Section - Light Blue Background */}
        <section className="bg-gradient-to-br from-aliceblue-100 to-white-100">
          <Community />
        </section>
        
        {/* Pricing Section - Premium Blue Gradient */}
        <section className="bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900">
          <Pricing />
        </section>
        
        {/* Testimonials Section - Clean White */}
        <section className="bg-white-100">
          <Testimonials />
        </section>
        
        {/* Footer Section - Deep Midnight */}
        <section className="bg-gradient-to-br from-black-1000 via-midnightblue-500 to-midnightblue-100">
          <Footer />
        </section>
      </main>
    </>
  )
}