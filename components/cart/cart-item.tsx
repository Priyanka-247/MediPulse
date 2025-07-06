"use client"

import Image from "next/image"
import { Minus, Plus, Trash2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

interface CartItemProps {
  item: {
    id: string
    name: string
    price: number
    image: string
    quantity: number
    prescriptionRequired: boolean
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center space-x-4">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} width={80} height={80} className="rounded-lg" />

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          {item.prescriptionRequired && (
            <div className="flex items-center mt-1">
              <AlertCircle className="h-4 w-4 text-orange-500 mr-1" />
              <span className="text-xs text-orange-600">Prescription Required</span>
            </div>
          )}
          <p className="text-lg font-bold text-gray-900 mt-2">₹{item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={() => handleQuantityChange(item.quantity - 1)}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-medium w-8 text-center">{item.quantity}</span>
          <Button variant="outline" size="sm" onClick={() => handleQuantityChange(item.quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-right">
          <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-700 mt-2"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
