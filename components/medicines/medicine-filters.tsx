"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const filterCategories = [
  {
    title: "Category",
    options: ["Pain Relief", "Cold & Flu", "Diabetes Care", "Heart Health", "Vitamins", "Antibiotics", "Skin Care"],
  },
  {
    title: "Brand",
    options: ["Cipla", "Sun Pharma", "Dr. Reddy's", "Lupin", "Aurobindo", "Torrent"],
  },
  {
    title: "Price Range",
    options: ["Under ₹50", "₹50 - ₹100", "₹100 - ₹200", "₹200 - ₹500", "Above ₹500"],
  },
  {
    title: "Prescription Required",
    options: ["Prescription Required", "Over the Counter"],
  },
  {
    title: "Form",
    options: ["Tablet", "Capsule", "Syrup", "Injection", "Cream/Ointment", "Drops"],
  },
]

export default function MedicineFilters() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Category", "Price Range"])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const handleFilterChange = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || []
      const updated = current.includes(option) ? current.filter((item) => item !== option) : [...current, option]

      return { ...prev, [category]: updated }
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

      <div className="space-y-4">
        {filterCategories.map((category) => (
          <div key={category.title} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection(category.title)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-medium text-gray-900">{category.title}</span>
              {expandedSections.includes(category.title) ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>

            {expandedSections.includes(category.title) && (
              <div className="mt-3 space-y-2">
                {category.options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFilters[category.title]?.includes(option) || false}
                      onChange={() => handleFilterChange(category.title, option)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Apply Filters
      </button>
    </div>
  )
}
