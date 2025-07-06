import { Suspense } from "react"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import HowItWorksSection from "@/components/home/how-it-works-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import Loading from "./loading"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </Suspense>
    </main>
  )
}
