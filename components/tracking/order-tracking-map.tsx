"use client"

import { useEffect, useState } from "react"
import { MapPin, Navigation } from "lucide-react"

export default function OrderTrackingMap() {
  const [deliveryLocation, setDeliveryLocation] = useState({ lat: 19.076, lng: 72.8777 })
  const [customerLocation] = useState({ lat: 19.0896, lng: 72.8656 })

  useEffect(() => {
    // Simulate delivery agent movement
    const interval = setInterval(() => {
      setDeliveryLocation((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Placeholder - In real app, use Google Maps */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Roads */}
            <path d="M0 150 L400 150" stroke="#666" strokeWidth="2" />
            <path d="M200 0 L200 300" stroke="#666" strokeWidth="2" />
            <path d="M100 75 L300 225" stroke="#666" strokeWidth="1" />

            {/* Buildings */}
            <rect x="50" y="100" width="40" height="40" fill="#ddd" />
            <rect x="120" y="80" width="30" height="60" fill="#ddd" />
            <rect x="300" y="120" width="50" height="50" fill="#ddd" />
          </svg>
        </div>
      </div>

      {/* Delivery Agent Location */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          left: `${(deliveryLocation.lng - 72.85) * 2000 + 200}px`,
          top: `${(19.09 - deliveryLocation.lat) * 2000 + 150}px`,
        }}
      >
        <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg animate-pulse">
          <Navigation className="h-4 w-4" />
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
          Delivery Agent
        </div>
      </div>

      {/* Customer Location */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          left: `${(customerLocation.lng - 72.85) * 2000 + 200}px`,
          top: `${(19.09 - customerLocation.lat) * 2000 + 150}px`,
        }}
      >
        <div className="bg-red-600 text-white p-2 rounded-full shadow-lg">
          <MapPin className="h-4 w-4" />
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
          Your Location
        </div>
      </div>

      {/* Route Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line
          x1={`${(deliveryLocation.lng - 72.85) * 2000 + 200}`}
          y1={`${(19.09 - deliveryLocation.lat) * 2000 + 150}`}
          x2={`${(customerLocation.lng - 72.85) * 2000 + 200}`}
          y2={`${(19.09 - customerLocation.lat) * 2000 + 150}`}
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
      </svg>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
        <p className="text-xs text-gray-600">Live Tracking</p>
        <p className="text-sm font-semibold text-green-600">ETA: 8 minutes</p>
      </div>
    </div>
  )
}
