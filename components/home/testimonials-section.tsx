import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "MediPulse saved my day when my daughter had a fever at midnight. Got the medicines delivered in just 12 minutes!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    text: "The prescription upload feature is amazing. The pharmacist verified everything and delivered exactly what I needed.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Dr. Anjali Patel",
    location: "Bangalore, India",
    rating: 5,
    text: "As a doctor, I appreciate their attention to prescription validation and medicine quality. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Amit Singh",
    location: "Pune, India",
    rating: 5,
    text: "The live tracking feature is incredible. I could see exactly where my delivery was and when it would arrive.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their MediPulse experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl relative">
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 px-8 py-4 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">15 min</div>
              <div className="text-sm text-gray-600">Avg Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">99.8%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
