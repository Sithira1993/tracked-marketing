"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background with fallbacks */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)",
          backgroundColor: "#7c3aed", // Fallback for older browsers
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.2) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white order-1 lg:order-1"
          >
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                🚀 Now accepting early access signups
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Order tracking
              <br />
              <span className="text-cyan-200">infrastructure</span>
              <br />
              <span className="text-cyan-200">to grow your</span>
              <br />
              <span className="text-pink-200">revenue</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Give your clients visibility—with zero extra steps. Keep clients
              in the loop without calls or disputes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6"
                asChild
              >
                <Link href="#pricing">
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm md:text-base">No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm md:text-base">
                  No login required for clients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Mobile-first design
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Multiple Sophisticated Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full order-2 lg:order-2"
          >
            {/* Main Dashboard Screen */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 left-0 w-full max-w-[280px] md:max-w-sm lg:max-w-md bg-white rounded-xl shadow-2xl p-4 md:p-6 z-30 lg:transform"
              style={{ transform: "rotate(-2deg) translateX(-10px)" }}
            >
              {/* Browser Bar */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                <div className="flex gap-1">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-gray-100 rounded px-2 md:px-3 py-1 text-xs text-gray-600">
                    tracked.lk/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                    Live Orders
                  </h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-blue-50 rounded-lg p-2 md:p-3">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">
                        24
                      </div>
                      <div className="text-xs text-blue-600">Active</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 md:p-3">
                      <div className="text-xl md:text-2xl font-bold text-green-600">
                        12
                      </div>
                      <div className="text-xs text-green-600">Completed</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-xs md:text-sm">
                    Recent Activity
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-xs">
                        Order #ABC123 milestone updated
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="text-xs">
                        Payment received for #DEF456
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Interface - Hidden on small screens, repositioned on medium+ */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute top-16 lg:top-20 right-0 w-36 md:w-40 lg:w-48 bg-gray-900 rounded-xl shadow-2xl overflow-hidden z-20"
              style={{ transform: "rotate(8deg) translateX(10px)" }}
            >
              {/* Phone Frame */}
              <div className="bg-gray-900 p-1 rounded-xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-black text-white px-2 md:px-3 py-1 text-xs flex justify-between items-center">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 md:w-4 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-purple-600 text-white p-2 md:p-3">
                    <h3 className="font-bold text-xs md:text-sm">
                      Field Scanner
                    </h3>
                  </div>

                  {/* Scan Interface */}
                  <div className="p-2 md:p-3 space-y-2 md:space-y-3">
                    <div className="bg-gray-100 rounded-lg p-2 md:p-3 text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <div className="text-white text-xs">QR</div>
                      </div>
                      <div className="text-xs font-medium">Scan to Update</div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <div className="text-xs font-medium text-gray-900">
                        Order #ABC123
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        In Progress
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Client Tracking View - Repositioned for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-0 left-0 md:left-8 w-[280px] md:w-72 lg:w-80 bg-white rounded-xl shadow-2xl p-3 md:p-5 z-25"
              style={{ transform: "rotate(3deg)" }}
            >
              {/* Browser Bar */}
              <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 ml-2">
                  tracked.lk/status/ABC123
                </div>
              </div>

              {/* Client View */}
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    Order #ABC123
                  </h3>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    75% Complete
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4"></div>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Order placed</div>
                      <div className="text-xs text-gray-500">
                        Dec 20, 9:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">
                        Materials sourced
                      </div>
                      <div className="text-xs text-gray-500">
                        Dec 21, 2:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-blue-600">
                        In production
                      </div>
                      <div className="text-xs text-blue-600">Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Analytics Card - Hidden on mobile and small tablets */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="hidden lg:block absolute top-24 xl:top-32 right-8 xl:right-12 w-48 xl:w-56 bg-white rounded-lg shadow-xl p-4 z-10"
              style={{ transform: "rotate(-5deg)" }}
            >
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">
                  Revenue Insights
                </h4>

                {/* Mini Chart */}
                <div className="h-12 xl:h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-2 flex items-end justify-between">
                  <div
                    className="w-2 bg-green-400 rounded-t"
                    style={{ height: "60%" }}
                  ></div>
                  <div
                    className="w-2 bg-green-500 rounded-t"
                    style={{ height: "80%" }}
                  ></div>
                  <div
                    className="w-2 bg-blue-400 rounded-t"
                    style={{ height: "40%" }}
                  ></div>
                  <div
                    className="w-2 bg-blue-500 rounded-t"
                    style={{ height: "90%" }}
                  ></div>
                  <div
                    className="w-2 bg-purple-400 rounded-t"
                    style={{ height: "70%" }}
                  ></div>
                  <div
                    className="w-2 bg-purple-500 rounded-t"
                    style={{ height: "100%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">
                      LKR 2.4M
                    </div>
                    <div className="text-xs text-gray-500">This month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-600 font-medium">
                      +23%
                    </div>
                    <div className="text-xs text-gray-500">vs last month</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Invoice Management - Hidden on mobile and small tablets */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="hidden lg:block absolute bottom-12 xl:bottom-16 right-0 xl:right-4 w-56 xl:w-64 bg-white rounded-lg shadow-xl p-4 z-15"
              style={{ transform: "rotate(6deg)" }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900 text-sm">Invoices</h4>
                  <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                    3 Pending
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                    <div>
                      <div className="text-xs font-medium">#INV-001</div>
                      <div className="text-xs text-gray-500">Order #ABC123</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold">LKR 45,000</div>
                      <div className="bg-green-100 text-green-800 text-xs px-1 rounded">
                        Paid
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                    <div>
                      <div className="text-xs font-medium">#INV-002</div>
                      <div className="text-xs text-gray-500">Order #DEF456</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold">LKR 28,500</div>
                      <div className="bg-orange-100 text-orange-800 text-xs px-1 rounded">
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
