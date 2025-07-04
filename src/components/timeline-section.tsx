"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Calendar,
  Rocket,
  CheckCircle,
  Brain,
  CreditCard,
  Sparkles,
  Clock,
  Zap,
} from "lucide-react";

const timelineItems = [
  {
    date: "August 2025",
    title: "Beta Launch",
    icon: Rocket,
    status: "upcoming",
    description:
      "Early access for waitlist members with core tracking features",
    features: [
      "Order milestone tracking",
      "Real-time client dashboards",
      "Mobile QR scanning",
      "Basic invoice management",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    date: "December 2025",
    title: "Stable Version Launch",
    icon: CheckCircle,
    status: "upcoming",
    description: "Full-featured platform with enterprise-grade reliability",
    features: [
      "Advanced reporting & analytics",
      "Multi-team collaboration",
      "Custom milestone templates",
      "API integrations",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    date: "2026",
    title: "AI Integration",
    icon: Brain,
    status: "planned",
    description: "Smart automation and predictive insights powered by AI",
    features: [
      "Predictive delivery estimation",
      "Auto photo recognition for progress",
      "Smart milestone recommendations",
      "Intelligent anomaly detection",
      "Auto-generated status summaries",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "2027",
    title: "Automated Payment Gateways",
    icon: CreditCard,
    status: "planned",
    description: "Seamless payment processing with intelligent automation",
    features: [
      "Auto-triggered milestone payments",
      "Multi-currency support",
      "Smart payment routing",
      "Automated reconciliation",
      "Fraud detection & prevention",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export function TimelineSection() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700">
            <Calendar className="mr-2 h-4 w-4" />
            Product Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our journey ahead
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beta launch to AI-powered automation - see what&apos;s coming
            and be part of shaping the future of business tracking.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 to-orange-200 h-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-24">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-16`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-10 hidden lg:block"></div>

                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    } text-center lg:text-left`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        } justify-center`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge
                            variant={
                              item.status === "upcoming"
                                ? "default"
                                : "secondary"
                            }
                            className="mb-1"
                          >
                            {item.status === "upcoming" ? (
                              <Clock className="mr-1 h-3 w-3" />
                            ) : (
                              <Sparkles className="mr-1 h-3 w-3" />
                            )}
                            {item.status}
                          </Badge>
                          <div className="text-sm text-gray-500 font-medium">
                            {item.date}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm mb-3">
                          Key Features:
                        </h4>
                        {item.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.2 + idx * 0.1,
                            }}
                            viewport={{ once: true }}
                            className={`flex items-center gap-2 ${
                              isEven ? "lg:justify-end" : "lg:justify-start"
                            } justify-center`}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Be part of the journey
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our waitlist today and help shape the future of business
              tracking. Your feedback will directly influence our development
              roadmap.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Beta access guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Lifetime early bird pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Direct founder access</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
