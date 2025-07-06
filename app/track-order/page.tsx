"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Clock, Package, CheckCircle, Truck } from "lucide-react"
import OrderTrackingMap from "@/components/tracking/order-tracking-map"

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("")
  const [orderData, setOrderData] = useState<any>(null)

  const handleTrackOrder = () => {
    // Mock order data - In real app, fetch from Firebase
    setOrderData({
      id: orderId || "MP123456789",
      status: "out_for_delivery",
      estimatedTime: "8 minutes",
      items: [
        { name: "Paracetamol 500mg", quantity: 2 },
        { name: "Vitamin D3 60K", quantity: 1 },
      ],
      deliveryAgent: {
        name: "Rajesh Kumar",
        phone: "+91 98765 43210",
        rating: 4.8,
      },
      timeline: [
        { status: "Order Placed", time: "2:30 PM", completed: true },
        { status: "Order Confirmed", time: "2:32 PM", completed: true },
        { status: "Preparing Order", time: "2:35 PM", completed: true },
        { status: "Out for Delivery", time: "2:40 PM", completed: true, current: true },
        { status: "Delivered", time: "Expected by 2:55 PM", completed: false },
      ],
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600">Enter your order ID to track your medicine delivery in real-time</p>
        </div>

        {/* Order ID Input */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Enter your order ID (e.g., MP123456789)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button onClick={handleTrackOrder} size="lg">
              Track Order
            </Button>
          </div>
        </div>

        {orderData && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Status */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Order Status</h2>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Truck className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Out for Delivery</p>
                    <p className="text-sm text-gray-600">Arriving in {orderData.estimatedTime}</p>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">
                    Your order is on the way! Our delivery partner will reach you shortly.
                  </p>
                </div>
              </div>

              {/* Delivery Agent */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Delivery Partner</h2>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{orderData.deliveryAgent.name}</p>
                    <p className="text-sm text-gray-600">Rating: ⭐ {orderData.deliveryAgent.rating}</p>
                    <p className="text-sm text-blue-600">{orderData.deliveryAgent.phone}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Order Items</h2>
                <div className="space-y-3">
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-900">{item.name}</span>
                      <span className="text-gray-600">x{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Timeline */}
            <div className="lg:col-span-2 space-y-6">
              {/* Live Map */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Live Tracking</h2>
                <OrderTrackingMap />
              </div>

              {/* Order Timeline */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Order Timeline</h2>
                <div className="space-y-4">
                  {orderData.timeline.map((step: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-green-500 text-white"
                            : step.current
                              ? "bg-blue-500 text-white"
                              : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : step.current ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          <div className="w-2 h-2 bg-current rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            step.current ? "text-blue-600" : step.completed ? "text-green-600" : "text-gray-600"
                          }`}
                        >
                          {step.status}
                        </p>
                        <p className="text-sm text-gray-500">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {!orderData && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Order ID to Track</h3>
            <p className="text-gray-600">You can find your order ID in the confirmation email or SMS we sent you</p>
          </div>
        )}
      </div>
    </div>
  )
}
