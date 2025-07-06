"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart, Heart, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { useToast } from "@/hooks/use-toast"

interface Medicine {
  id: string
  name: string
  brand: string
  price: number
  originalPrice: number
  image: string
  category: string
  prescriptionRequired: boolean
  inStock: boolean
  rating: number
  reviews: number
  description: string
}

interface MedicineCardProps {
  medicine: Medicine
}

export default function MedicineCard({ medicine }: MedicineCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()
  const [imageError, setImageError] = useState(false)

  const isWishlisted = isInWishlist(medicine.id)

  const handleAddToCart = () => {
    if (!medicine.inStock) return

    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      image: medicine.image,
      quantity: 1,
      prescriptionRequired: medicine.prescriptionRequired,
    })

    toast({
      title: "Added to cart",
      description: `${medicine.name} has been added to your cart.`,
    })
  }

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(medicine.id)
      toast({
        title: "Removed from wishlist",
        description: `${medicine.name} removed from your wishlist.`,
      })
    } else {
      addToWishlist(medicine)
      toast({
        title: "Added to wishlist",
        description: `${medicine.name} added to your wishlist.`,
      })
    }
  }

  const discountPercentage = Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100)

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <Image
          src={imageError ? "/placeholder.svg?height=200&width=300&text=Medicine" : medicine.image}
          alt={medicine.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={() => setImageError(true)}
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-green-500">{discountPercentage}% OFF</Badge>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "text-red-500 fill-current" : "text-gray-400"}`} />
        </button>

        {/* Stock Status */}
        {!medicine.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Category */}
        <Badge variant="outline" className="mb-2 text-xs">
          {medicine.category}
        </Badge>

        {/* Medicine Name & Brand */}
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{medicine.name}</h3>
        <p className="text-sm text-gray-600 mb-2">by {medicine.brand}</p>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{medicine.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">{medicine.rating}</span>
          </div>
          <span className="text-sm text-gray-500 ml-2">({medicine.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold text-gray-900">₹{medicine.price.toFixed(2)}</span>
          {medicine.originalPrice > medicine.price && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{medicine.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Prescription Required Warning */}
        {medicine.prescriptionRequired && (
          <div className="flex items-center mb-3 p-2 bg-orange-50 rounded-lg">
            <AlertCircle className="h-4 w-4 text-orange-500 mr-2" />
            <span className="text-xs text-orange-700">Prescription Required</span>
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!medicine.inStock}
          className="w-full"
          variant={medicine.inStock ? "default" : "secondary"}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {medicine.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  )
}
