import Hero from "../components/Home/Hero"
import Features from "../components/Home/Features"
import HowItWorks from "../components/Home/HowItWorks"
import CTA from "../components/Home/CTA"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}
