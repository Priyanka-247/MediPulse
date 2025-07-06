"use client"

import { useCart } from "@/contexts/cart-context"
import { Clock, Shield, Truck } from "lucide-react"

export default function OrderSummary() {
  const { items } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 500 ? 0 : 50
  const tax = subtotal * 0.05
  const total = subtotal + deliveryFee + tax

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* Items */}
      <div className="space-y-3 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">{item.name}</p>
              <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
            </div>
            <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="space-y-2 mb-6 border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-blue-600">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Delivery Promise */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-green-600">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-medium">15-minute delivery guaranteed</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-600">
          <Shield className="h-4 w-4" />
          <span className="text-sm">Licensed pharmacy verified</span>
        </div>
        <div className="flex items-center space-x-2 text-purple-600">
          <Truck className="h-4 w-4" />
          <span className="text-sm">Live order tracking</span>
        </div>
      </div>
    </div>
  )
}
