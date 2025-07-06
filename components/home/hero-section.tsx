"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Upload, MapPin, Clock, Shield, Truck, Heart } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Order Medicines Online.
                <span className="text-blue-600"> Delivered in 15 Minutes.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted medical partner — right when you need it most. Get medicines delivered to your doorstep
                with our hyperlocal delivery network.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by medicine name or health issue..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-0 focus:ring-0 focus:outline-none"
                  />
                </div>
                <Button size="lg" className="px-8">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link href="/medicines">
                <Button variant="outline" size="lg" className="flex items-center space-x-2 bg-transparent">
                  <Search className="h-5 w-5" />
                  <span>Browse Catalog</span>
                </Button>
              </Link>
              <Link href="/upload-prescription">
                <Button variant="outline" size="lg" className="flex items-center space-x-2 bg-transparent">
                  <Upload className="h-5 w-5" />
                  <span>Upload Prescription</span>
                </Button>
              </Link>
              <Link href="/track-order">
                <Button variant="outline" size="lg" className="flex items-center space-x-2 bg-transparent">
                  <MapPin className="h-5 w-5" />
                  <span>Track Order</span>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-green-600">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">15 Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Licensed Pharmacy</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
                <Truck className="h-5 w-5" />
                <span className="font-semibold">Live Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Animation */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">How it works</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Search or upload prescription</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <span className="text-gray-700">Add to cart & checkout</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <span className="text-gray-700">Get delivered in 15 minutes</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg text-center">
                  <p className="font-semibold">🚀 Over 10,000+ medicines available</p>
                  <p className="text-sm opacity-90">Serving 50+ cities across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
