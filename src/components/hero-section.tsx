"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    setMounted(true);
    // Generate particle data only on client
    const particleData = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      duration: Math.random() * 10 + 20,
    }));
    setParticles(particleData);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)",
          backgroundColor: "#7c3aed", // Fallback
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)",
            "linear-gradient(225deg, #2563eb 0%, #06b6d4 50%, #7c3aed 100%)",
            "linear-gradient(315deg, #06b6d4 0%, #7c3aed 50%, #2563eb 100%)",
            "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating animated overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 30%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mesh pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
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
            <motion.div
              className="mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                className="text-white border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(15px) saturate(180%)",
                  WebkitBackdropFilter: "blur(15px) saturate(180%)",
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  🚀
                </motion.span>
                Now accepting early access signups
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Order tracking
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                infrastructure
              </motion.span>
              <br />
              <span className="text-cyan-200">to grow your</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-pink-200 via-pink-300 to-purple-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                revenue
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Give your clients visibility—with zero extra steps. Keep clients
              in the loop without calls or disputes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="text-gray-900 hover:scale-105 text-lg px-8 py-6 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                }}
                asChild
              >
                <Link href="#pricing">
                  Get started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                "No setup fees",
                "No login required for clients",
                "Mobile-first design",
              ].map((text, index) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <span className="text-sm md:text-base">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Glass Effect Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full order-2 lg:order-2"
          >
            {/* Main Dashboard Screen with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{
                opacity: 1,
                rotate: -2,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-0 left-0 w-full max-w-[280px] md:max-w-sm lg:max-w-md z-30 lg:transform"
              style={{
                transform: "rotate(-2deg) translateX(-10px)",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(25px) saturate(180%)",
                WebkitBackdropFilter: "blur(25px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                boxShadow: `
                   0 25px 50px -12px rgba(0, 0, 0, 0.4),
                   0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                   0 1px 0 rgba(255, 255, 255, 0.3) inset,
                   0 8px 32px rgba(0, 0, 0, 0.12)
                 `,
              }}
            >
              <div className="p-4 md:p-6">
                {/* Browser Bar with Glow */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200/50">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  <div className="flex-1 text-center">
                    <div
                      className="rounded px-2 md:px-3 py-1 text-xs text-gray-600"
                      style={{
                        background: "rgba(240, 240, 240, 0.7)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      tracked.lk/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content with Glass Cards */}
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                      Live Orders
                    </h3>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <motion.div
                        className="rounded-lg p-2 md:p-3"
                        style={{
                          background: "rgba(219, 234, 254, 0.8)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="text-xl md:text-2xl font-bold text-blue-600"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(59, 130, 246, 0)",
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                              "0 0 0px rgba(59, 130, 246, 0)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          24
                        </motion.div>
                        <div className="text-xs text-blue-600">Active</div>
                      </motion.div>
                      <motion.div
                        className="rounded-lg p-2 md:p-3"
                        style={{
                          background: "rgba(220, 252, 231, 0.8)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="text-xl md:text-2xl font-bold text-green-600"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(34, 197, 94, 0)",
                              "0 0 10px rgba(34, 197, 94, 0.5)",
                              "0 0 0px rgba(34, 197, 94, 0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                          }}
                        >
                          12
                        </motion.div>
                        <div className="text-xs text-green-600">Completed</div>
                      </motion.div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-xs md:text-sm">
                      Recent Activity
                    </h4>
                    <div className="space-y-2">
                      <motion.div
                        className="flex items-center gap-2 rounded p-2"
                        style={{
                          background: "rgba(249, 250, 251, 0.8)",
                          backdropFilter: "blur(10px)",
                        }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <div className="text-xs">
                          Order #ABC123 milestone updated
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 rounded p-2"
                        style={{
                          background: "rgba(249, 250, 251, 0.8)",
                          backdropFilter: "blur(10px)",
                        }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                        />
                        <div className="text-xs">
                          Payment received for #DEF456
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Interface with Enhanced Glass Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 8 }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 8,
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="hidden md:block absolute top-16 lg:top-20 right-0 w-36 md:w-40 lg:w-48 rounded-xl overflow-hidden z-20"
              style={{
                transform: "rotate(8deg) translateX(10px)",
                background: "rgba(17, 24, 39, 0.2)",
                backdropFilter: "blur(25px) saturate(150%)",
                WebkitBackdropFilter: "blur(25px) saturate(150%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                   0 25px 50px -12px rgba(0, 0, 0, 0.6),
                   0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                   0 8px 32px rgba(0, 0, 0, 0.2)
                 `,
              }}
            >
              <div className="p-1">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Status Bar */}
                  <div className="bg-black text-white px-2 md:px-3 py-1 text-xs flex justify-between items-center">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <motion.div
                        className="w-3 md:w-4 h-2 bg-white rounded-sm"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* App Header */}
                  <div
                    className="text-white p-2 md:p-3"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    }}
                  >
                    <h3 className="font-bold text-xs md:text-sm">
                      Field Scanner
                    </h3>
                  </div>

                  {/* Scan Interface */}
                  <div className="p-2 md:p-3 space-y-2 md:space-y-3">
                    <div
                      className="rounded-lg p-2 md:p-3 text-center"
                      style={{
                        background: "rgba(243, 244, 246, 0.8)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-lg mx-auto mb-2 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #a855f7, #ec4899)",
                          boxShadow: "0 8px 25px -8px rgba(168, 85, 247, 0.4)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 8px 25px -8px rgba(168, 85, 247, 0.4)",
                            "0 8px 25px -8px rgba(168, 85, 247, 0.8)",
                            "0 8px 25px -8px rgba(168, 85, 247, 0.4)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="text-white text-xs font-bold">QR</div>
                      </motion.div>
                      <div className="text-xs font-medium">Scan to Update</div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <div className="text-xs font-medium text-gray-900">
                        Order #ABC123
                      </div>
                      <motion.div
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: "rgba(220, 252, 231, 0.9)",
                          color: "#166534",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(34, 197, 94, 0)",
                            "0 0 8px rgba(34, 197, 94, 0.3)",
                            "0 0 0px rgba(34, 197, 94, 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        In Progress
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional screens can be enhanced similarly... */}
            {/* Client Tracking View - Repositioned for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 3,
                x: [0, -5, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.7,
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-0 left-0 md:left-8 w-[280px] md:w-72 lg:w-80 rounded-xl p-3 md:p-5 z-25"
              style={{
                transform: "rotate(3deg)",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.25),
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset
                `,
              }}
            >
              {/* Browser Bar */}
              <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-gray-200/50">
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
                  <motion.div
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(219, 234, 254, 0.9)",
                      color: "#1e40af",
                      border: "1px solid rgba(59, 130, 246, 0.2)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 8px rgba(59, 130, 246, 0.3)",
                        "0 0 0px rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    75% Complete
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full rounded-full h-2"
                  style={{ background: "rgba(229, 231, 235, 0.8)" }}
                >
                  <motion.div
                    className="h-2 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #ec4899)",
                      width: "75%",
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Order placed</div>
                      <div className="text-xs text-gray-500">
                        Dec 20, 9:00 AM
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">
                        Materials sourced
                      </div>
                      <div className="text-xs text-gray-500">
                        Dec 21, 2:30 PM
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <motion.div
                      className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 10px rgba(59, 130, 246, 0.6)",
                          "0 0 0px rgba(59, 130, 246, 0)",
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-blue-600">
                        In production
                      </div>
                      <div className="text-xs text-blue-600">Now</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
