"use client"

import { useWishlist } from "@/contexts/wishlist-context"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      prescriptionRequired: item.prescriptionRequired,
    })

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  const handleRemoveFromWishlist = (id: string, name: string) => {
    removeFromWishlist(id)
    toast({
      title: "Removed from wishlist",
      description: `${name} removed from your wishlist.`,
    })
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/medicines" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Medicines
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          </div>

          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
            <Link href="/medicines">
              <Button>Browse Medicines</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/medicines" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Medicines
          </Link>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist ({items.length})</h1>
            {items.length > 0 && (
              <Button
                variant="outline"
                onClick={clearWishlist}
                className="text-red-600 hover:text-red-700 bg-transparent"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </button>

                {/* Discount Badge */}
                {item.originalPrice > item.price && (
                  <Badge className="absolute top-2 left-2 bg-green-500">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <Badge variant="outline" className="mb-2 text-xs">
                  {item.category}
                </Badge>

                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">by {item.brand}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">₹{item.price.toFixed(2)}</span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through ml-2">₹{item.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => handleAddToCart(item)} disabled={!item.inStock} className="flex-1" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
