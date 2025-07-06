import { Search, ShoppingCart, Truck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search & Browse",
    description: "Search for medicines by name, symptoms, or upload your prescription for instant validation.",
    color: "bg-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "Add to Cart",
    description: "Add medicines to cart, get AI-powered suggestions, and proceed to secure checkout.",
    color: "bg-green-500",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Our delivery partner picks up your order and delivers it to your doorstep in 15 minutes.",
    color: "bg-purple-500",
  },
  {
    icon: CheckCircle,
    title: "Track & Receive",
    description: "Track your order in real-time and receive your medicines with proper verification.",
    color: "bg-orange-500",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How MediPulse Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your medicines delivered in just 4 simple steps. Our streamlined process ensures you get what you need,
            when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of customers who trust MediPulse for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Medicines
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Upload Prescription
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
