"use client"

import { useState } from "react"
import { Search, Filter, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MedicineSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("relevance")

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search medicines, brands, or symptoms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <SortAsc className="h-5 w-5 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>

        {/* Filter Button (Mobile) */}
        <Button variant="outline" className="md:hidden bg-transparent">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Pain Relief", "Cold & Flu", "Diabetes", "Blood Pressure", "Vitamins", "Antibiotics"].map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
