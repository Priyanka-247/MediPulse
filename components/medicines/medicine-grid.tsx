"use client"

import { useState } from "react"
import MedicineCard from "./medicine-card"

// Mock data - In real app, this would come from Firebase/API
const mockMedicines = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    brand: "Cipla",
    price: 25.5,
    originalPrice: 30.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Pain Relief",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.5,
    reviews: 1250,
    description: "Effective pain relief and fever reducer",
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    brand: "Sun Pharma",
    price: 85.0,
    originalPrice: 95.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Antibiotics",
    prescriptionRequired: true,
    inStock: true,
    rating: 4.3,
    reviews: 890,
    description: "Antibiotic for bacterial infections",
  },
  {
    id: "3",
    name: "Vitamin D3 60K",
    brand: "Dr. Reddy's",
    price: 120.0,
    originalPrice: 140.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Vitamins",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.7,
    reviews: 2100,
    description: "Vitamin D3 supplement for bone health",
  },
  {
    id: "4",
    name: "Metformin 500mg",
    brand: "Lupin",
    price: 45.0,
    originalPrice: 50.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Diabetes Care",
    prescriptionRequired: true,
    inStock: true,
    rating: 4.4,
    reviews: 1580,
    description: "Diabetes medication for blood sugar control",
  },
  {
    id: "5",
    name: "Cetirizine 10mg",
    brand: "Aurobindo",
    price: 18.0,
    originalPrice: 22.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Allergy",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.2,
    reviews: 750,
    description: "Antihistamine for allergy relief",
  },
  {
    id: "6",
    name: "Omeprazole 20mg",
    brand: "Torrent",
    price: 65.0,
    originalPrice: 75.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Digestive Health",
    prescriptionRequired: true,
    inStock: false,
    rating: 4.6,
    reviews: 1320,
    description: "Proton pump inhibitor for acid reflux",
  },
]

export default function MedicineGrid() {
  const [medicines, setMedicines] = useState(mockMedicines)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {medicines.length} medicines</p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-2/3 mb-2"></div>
              <div className="bg-gray-200 h-6 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      )}

      {medicines.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No medicines found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  )
}
