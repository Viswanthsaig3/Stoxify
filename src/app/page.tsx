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
        {/* Hero Section - Dark Navy */}
        <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
          <Hero />
        </section>
        
        {/* Features Section - White */}
        <section className="bg-white">
          <Features />
        </section>
        
        {/* About Section - Dark Navy (Hero Style) */}
        <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
          <About />
        </section>
        
        {/* Community Section - White */}
        <section className="bg-white">
          <Community />
        </section>
        
        {/* Pricing Section - Dark Navy (Hero Style) */}
        <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
          <Pricing />
        </section>
        
        {/* Testimonials Section - White */}
        <section className="bg-white">
          <Testimonials />
        </section>
        
        {/* Footer Section - Dark Navy */}
        <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
          <Footer />
        </section>
      </main>
    </>
  )
}