import HeroSection from "./components/HeroSection"
import SpeedVisualization from "./components/SpeedVisualization"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SpeedVisualization />
      <FeaturesSection />
      <Footer />
      <div id="bottom"></div>
    </main>
  )
}

