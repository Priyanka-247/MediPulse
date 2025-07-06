import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold">MediPulse</span>
                <p className="text-sm text-gray-400">15-Minute Lifeline</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted medical partner delivering medicines to your doorstep in under 15 minutes. Licensed,
              verified, and always available.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/medicines" className="text-gray-400 hover:text-white">
                  Browse Medicines
                </Link>
              </li>
              <li>
                <Link href="/upload-prescription" className="text-gray-400 hover:text-white">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-white">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/health-blog" className="text-gray-400 hover:text-white">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/medicines?category=pain-relief" className="text-gray-400 hover:text-white">
                  Pain Relief
                </Link>
              </li>
              <li>
                <Link href="/medicines?category=cold-flu" className="text-gray-400 hover:text-white">
                  Cold & Flu
                </Link>
              </li>
              <li>
                <Link href="/medicines?category=diabetes" className="text-gray-400 hover:text-white">
                  Diabetes Care
                </Link>
              </li>
              <li>
                <Link href="/medicines?category=vitamins" className="text-gray-400 hover:text-white">
                  Vitamins
                </Link>
              </li>
              <li>
                <Link href="/medicines?category=antibiotics" className="text-gray-400 hover:text-white">
                  Antibiotics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">support@medipulse.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  123 Healthcare Street,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MediPulse. All rights reserved. Licensed Pharmacy Registration: MH-12345
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-white text-sm">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
