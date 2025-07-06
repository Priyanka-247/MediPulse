"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, X, CheckCircle, AlertCircle, Camera, Pill } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function UploadPrescriptionPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      const validFiles = files.filter((file) => {
        const isValidType = file.type.startsWith("image/") || file.type === "application/pdf"
        const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
        return isValidType && isValidSize
      })

      if (validFiles.length !== files.length) {
        toast({
          title: "Invalid files",
          description: "Some files were rejected. Please upload only images or PDFs under 5MB.",
          variant: "destructive",
        })
      }

      setUploadedFiles((prev) => [...prev, ...validFiles])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      const validFiles = files.filter((file) => {
        const isValidType = file.type.startsWith("image/") || file.type === "application/pdf"
        const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
        return isValidType && isValidSize
      })

      if (validFiles.length !== files.length) {
        toast({
          title: "Invalid files",
          description: "Some files were rejected. Please upload only images or PDFs under 5MB.",
          variant: "destructive",
        })
      }

      setUploadedFiles((prev) => [...prev, ...validFiles])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one prescription file.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Prescription uploaded successfully!",
        description: "Our pharmacist will verify your prescription and contact you shortly.",
      })
      router.push("/medicines")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Pill className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Prescription</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your prescription and get your medicines delivered to your doorstep
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Your Prescription
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Upload Area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors mb-6 ${
                    dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Drop your prescription files here</p>
                  <p className="text-gray-600 mb-4">or click to browse from your device</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="prescription-upload"
                  />
                  <label htmlFor="prescription-upload">
                    <Button variant="outline" className="cursor-pointer bg-transparent">
                      <Camera className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </label>
                  <p className="text-xs text-gray-500 mt-2">Supported formats: JPG, PNG, PDF (Max 5MB each)</p>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-3">Uploaded Files ({uploadedFiles.length})</h3>
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <button onClick={() => removeFile(index)} className="p-1 hover:bg-gray-200 rounded">
                              <X className="h-4 w-4 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={uploadedFiles.length === 0 || isUploading}
                  className="w-full"
                  size="lg"
                >
                  {isUploading ? "Uploading..." : "Upload Prescription"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Guidelines Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Prescription Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ensure prescription is clearly visible and readable
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Include doctor's name, signature, and date
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Prescription should be less than 30 days old
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Upload separate images for multiple prescriptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Avoid blurry or dark images
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle>What happens next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Upload Prescription</p>
                      <p className="text-sm text-gray-600">Upload clear images of your prescription</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Pharmacist Verification</p>
                      <p className="text-sm text-gray-600">Our licensed pharmacist will verify your prescription</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Order Confirmation</p>
                      <p className="text-sm text-gray-600">We'll call you to confirm your order and delivery details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fast Delivery</p>
                      <p className="text-sm text-gray-600">Get your medicines delivered within 15 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Having trouble uploading your prescription? Our team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Call:</strong> 1800-123-4567
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Email:</strong> support@medipulse.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
