"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import CheckoutForm from "@/components/checkout/checkout-form"
import OrderSummary from "@/components/checkout/order-summary"
import PrescriptionUpload from "@/components/checkout/prescription-upload"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to continue</h2>
            <p className="text-gray-600 mb-8">You need to be signed in to place an order</p>
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some medicines to proceed with checkout</p>
            <Link href="/medicines">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const hasPrescriptionItems = items.some((item) => item.prescriptionRequired)

  const steps = [
    { id: 1, name: "Delivery Details", completed: currentStep > 1 },
    { id: 2, name: "Prescription Upload", completed: currentStep > 2, required: hasPrescriptionItems },
    { id: 3, name: "Payment", completed: currentStep > 3 },
    { id: 4, name: "Confirmation", completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step.completed
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.completed ? "✓" : step.id}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    currentStep === step.id ? "font-semibold text-blue-600" : "text-gray-600"
                  }`}
                >
                  {step.name}
                  {step.required && !step.completed && <span className="text-red-500">*</span>}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${step.completed ? "bg-green-500" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && <CheckoutForm onNext={() => setCurrentStep(hasPrescriptionItems ? 2 : 3)} />}
            {currentStep === 2 && hasPrescriptionItems && (
              <PrescriptionUpload onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />
            )}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <label className="flex items-center">
                      <input type="radio" name="payment" value="card" className="mr-3" defaultChecked />
                      <span>Credit/Debit Card</span>
                    </label>
                  </div>
                  <div className="border rounded-lg p-4">
                    <label className="flex items-center">
                      <input type="radio" name="payment" value="upi" className="mr-3" />
                      <span>UPI Payment</span>
                    </label>
                  </div>
                  <div className="border rounded-lg p-4">
                    <label className="flex items-center">
                      <input type="radio" name="payment" value="cod" className="mr-3" />
                      <span>Cash on Delivery</span>
                    </label>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button variant="outline" onClick={() => setCurrentStep(hasPrescriptionItems ? 2 : 1)}>
                    Back
                  </Button>
                  <Button onClick={() => router.push("/order-confirmation")} className="flex-1">
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
