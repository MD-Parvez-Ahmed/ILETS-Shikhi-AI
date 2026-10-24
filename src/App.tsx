import AIFeedback from './components/AIFeedback'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import LearningJourney from './components/LearningJourney'
import Navbar from './components/Navbar'
import ProgressDashboard from './components/ProgressDashboard'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-navy-950">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-3 font-semibold text-navy-950 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <LearningJourney />
        <Features />
        <HowItWorks />
        <AIFeedback />
        <ProgressDashboard />
        <WhyChooseUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
