"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Truck, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function CartSummary() {
  const { items } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 500 ? 0 : 50
  const tax = subtotal * 0.05 // 5% tax
  const total = subtotal + deliveryFee + tax

  const hasPrescriptionItems = items.some((item) => item.prescriptionRequired)

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">{deliveryFee === 0 ? "FREE" : `₹${deliveryFee.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">₹{tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-bold text-blue-600">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <div className="flex items-center space-x-2 text-green-700 mb-2">
          <Clock className="h-4 w-4" />
          <span className="font-medium">15-minute delivery</span>
        </div>
        <p className="text-sm text-green-600">Your order will be delivered within 15 minutes</p>
      </div>

      {/* Prescription Warning */}
      {hasPrescriptionItems && (
        <div className="bg-orange-50 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-2 text-orange-700 mb-2">
            <Shield className="h-4 w-4" />
            <span className="font-medium">Prescription Required</span>
          </div>
          <p className="text-sm text-orange-600">
            Some items require prescription. Please upload your prescription during checkout.
          </p>
        </div>
      )}

      {/* Free Delivery Info */}
      {deliveryFee > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-2 text-blue-700 mb-2">
            <Truck className="h-4 w-4" />
            <span className="font-medium">Free Delivery</span>
          </div>
          <p className="text-sm text-blue-600">Add ₹{(500 - subtotal).toFixed(2)} more for free delivery</p>
        </div>
      )}

      <Link href="/checkout">
        <Button className="w-full" size="lg">
          Proceed to Checkout
        </Button>
      </Link>

      <div className="mt-4 text-center">
        <Link href="/medicines" className="text-blue-600 hover:underline text-sm">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
