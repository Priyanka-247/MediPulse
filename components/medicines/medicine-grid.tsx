"use client"

import { useState } from "react"
import MedicineCard from "./medicine-card"

// Sample medicine data with proper tablet images
const medicines = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    brand: "Crocin",
    price: 25.5,
    originalPrice: 30.0,
    image: "/placeholder.svg?height=200&width=300&text=Paracetamol+500mg",
    category: "Pain Relief",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.5,
    reviews: 1250,
    description: "Effective pain relief and fever reducer. Safe for adults and children above 6 years.",
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    brand: "Novamox",
    price: 85.0,
    originalPrice: 95.0,
    image: "/placeholder.svg?height=200&width=300&text=Amoxicillin+250mg",
    category: "Antibiotic",
    prescriptionRequired: true,
    inStock: true,
    rating: 4.3,
    reviews: 890,
    description: "Broad-spectrum antibiotic for bacterial infections. Prescription required.",
  },
  {
    id: "3",
    name: "Cetirizine 10mg",
    brand: "Zyrtec",
    price: 45.0,
    originalPrice: 50.0,
    image: "/placeholder.svg?height=200&width=300&text=Cetirizine+10mg",
    category: "Allergy",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.7,
    reviews: 2100,
    description: "Antihistamine for allergic reactions, hay fever, and skin allergies.",
  },
  {
    id: "4",
    name: "Omeprazole 20mg",
    brand: "Prilosec",
    price: 120.0,
    originalPrice: 140.0,
    image: "/placeholder.svg?height=200&width=300&text=Omeprazole+20mg",
    category: "Gastric",
    prescriptionRequired: true,
    inStock: false,
    rating: 4.4,
    reviews: 756,
    description: "Proton pump inhibitor for acid reflux and stomach ulcers.",
  },
  {
    id: "5",
    name: "Ibuprofen 400mg",
    brand: "Brufen",
    price: 35.0,
    originalPrice: 42.0,
    image: "/placeholder.svg?height=200&width=300&text=Ibuprofen+400mg",
    category: "Pain Relief",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.2,
    reviews: 1580,
    description: "Anti-inflammatory pain reliever for headaches, muscle pain, and arthritis.",
  },
  {
    id: "6",
    name: "Metformin 500mg",
    brand: "Glucophage",
    price: 65.0,
    originalPrice: 75.0,
    image: "/placeholder.svg?height=200&width=300&text=Metformin+500mg",
    category: "Diabetes",
    prescriptionRequired: true,
    inStock: true,
    rating: 4.6,
    reviews: 945,
    description: "Type 2 diabetes medication to control blood sugar levels.",
  },
  {
    id: "7",
    name: "Vitamin D3 1000IU",
    brand: "HealthKart",
    price: 180.0,
    originalPrice: 200.0,
    image: "/placeholder.svg?height=200&width=300&text=Vitamin+D3+1000IU",
    category: "Vitamins",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.8,
    reviews: 3200,
    description: "Essential vitamin for bone health and immune system support.",
  },
  {
    id: "8",
    name: "Aspirin 75mg",
    brand: "Disprin",
    price: 28.0,
    originalPrice: 32.0,
    image: "/placeholder.svg?height=200&width=300&text=Aspirin+75mg",
    category: "Cardiovascular",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.1,
    reviews: 670,
    description: "Low-dose aspirin for heart health and blood clot prevention.",
  },
  {
    id: "9",
    name: "Loratadine 10mg",
    brand: "Claritin",
    price: 55.0,
    originalPrice: 65.0,
    image: "/placeholder.svg?height=200&width=300&text=Loratadine+10mg",
    category: "Allergy",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.5,
    reviews: 1120,
    description: "Non-drowsy antihistamine for seasonal allergies and hives.",
  },
  {
    id: "10",
    name: "Simvastatin 20mg",
    brand: "Zocor",
    price: 95.0,
    originalPrice: 110.0,
    image: "/placeholder.svg?height=200&width=300&text=Simvastatin+20mg",
    category: "Cardiovascular",
    prescriptionRequired: true,
    inStock: true,
    rating: 4.3,
    reviews: 520,
    description: "Cholesterol-lowering medication to reduce heart disease risk.",
  },
  {
    id: "11",
    name: "Calcium Carbonate 500mg",
    brand: "Shelcal",
    price: 75.0,
    originalPrice: 85.0,
    image: "/placeholder.svg?height=200&width=300&text=Calcium+500mg",
    category: "Vitamins",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.4,
    reviews: 890,
    description: "Calcium supplement for bone and teeth health.",
  },
  {
    id: "12",
    name: "Dextromethorphan 15mg",
    brand: "Robitussin",
    price: 125.0,
    originalPrice: 140.0,
    image: "/placeholder.svg?height=200&width=300&text=Cough+Syrup",
    category: "Cough & Cold",
    prescriptionRequired: false,
    inStock: true,
    rating: 4.2,
    reviews: 445,
    description: "Cough suppressant for dry, non-productive cough relief.",
  },
]

export default function MedicineGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const totalPages = Math.ceil(medicines.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentMedicines = medicines.slice(startIndex, endIndex)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, medicines.length)} of {medicines.length} medicines
        </p>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>Sort by: Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Name: A to Z</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMedicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-2 border rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
