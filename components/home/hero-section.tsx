"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Truck, Star } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function HeroSection() {
  const { user } = useAuth()

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {user ? (
              <div className="mb-6">
                <p className="text-blue-600 font-medium">Welcome back, {user.name}!</p>
              </div>
            ) : null}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health,
              <span className="text-blue-600"> Delivered</span>
              <br />
              in Minutes
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get medicines delivered to your doorstep in just 15 minutes. Upload prescription, order online, and track
              your delivery in real-time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">15 min delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">100% Genuine</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-700">Free delivery</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-700">4.8★ rated</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/upload-prescription">
                <Button size="lg" className="w-full sm:w-auto">
                  Upload Prescription
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/medicines">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Browse Medicines
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by 50,000+ customers</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15min</div>
                  <div className="text-xs text-gray-500">Avg Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.8%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/medicine-delivery-boy.png"
                alt="Medicine delivery boy on scooter"
                width={512}
                height={512}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Order Confirmed</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <div className="text-sm font-medium">Delivered in</div>
                  <div className="text-lg font-bold text-blue-600">12 mins</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl transform rotate-3 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
