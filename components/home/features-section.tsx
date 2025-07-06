import { Clock, Shield, MapPin, Bot, Bell, CreditCard, Upload, Search, Truck } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "15-Minute Delivery",
    description: "Lightning-fast delivery using our hyperlocal network and smart routing algorithms.",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Upload,
    title: "Prescription Upload",
    description: "Upload prescriptions and get auto-validation from licensed pharmacists.",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Search,
    title: "Smart Medicine Search",
    description: "Search by medicine name, symptoms, or health conditions with AI-powered suggestions.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: MapPin,
    title: "Live Order Tracking",
    description: "Real-time tracking with Google Maps integration showing delivery path and ETA.",
    color: "text-red-600 bg-red-100",
  },
  {
    icon: Bot,
    title: "AI Pharmacy Assistant",
    description: "24/7 virtual assistant for medicine queries, dosage information, and health tips.",
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    icon: Bell,
    title: "Refill Reminders",
    description: "Smart reminders via SMS/email for recurring prescriptions and medicine refills.",
    color: "text-orange-600 bg-orange-100",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with Stripe/Razorpay integration for safe transactions.",
    color: "text-teal-600 bg-teal-100",
  },
  {
    icon: Shield,
    title: "Licensed & Verified",
    description: "All medicines sourced from licensed distributors with quality assurance.",
    color: "text-gray-600 bg-gray-100",
  },
  {
    icon: Truck,
    title: "Temperature Controlled",
    description: "Special handling for temperature-sensitive medicines and vaccines.",
    color: "text-cyan-600 bg-cyan-100",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MediPulse?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare delivery with our comprehensive platform designed for speed, safety, and
            convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
