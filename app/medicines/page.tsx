import { Suspense } from "react"
import MedicineFilters from "@/components/medicines/medicine-filters"
import MedicineGrid from "@/components/medicines/medicine-grid"
import MedicineSearch from "@/components/medicines/medicine-search"
import Loading from "../loading"

export default function MedicinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Medicines</h1>
          <p className="text-gray-600">Find the medicines you need from our extensive catalog</p>
        </div>

        <MedicineSearch />

        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <MedicineFilters />
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<Loading />}>
              <MedicineGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
