"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Truck, ArrowRight, Package } from "lucide-react";

const businessTypes = [
  {
    icon: Building2,
    title: "Construction & Contracting",
    description:
      "From project planning to final delivery, keep clients informed with real-time progress updates and milestone-based billing.",
    features: [
      "Project milestone tracking",
      "Site photo documentation",
      "Material delivery updates",
      "Progress-based invoicing",
    ],
    companies: ["BuildMax", "ConstructCorp", "ProBuild"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Package,
    title: "Manufacturing & Production",
    description:
      "Track production stages from raw materials to finished goods with comprehensive visibility for your B2B clients.",
    features: [
      "Production stage tracking",
      "Quality control checkpoints",
      "Inventory management",
      "Batch-specific invoicing",
    ],
    companies: ["ManuTech", "ProduceCorp", "Factory Plus"],
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Give your customers complete visibility into their shipments from warehouse to doorstep with real-time tracking.",
    features: [
      "Real-time location tracking",
      "Delivery confirmation photos",
      "Route optimization updates",
      "Proof of delivery",
    ],
    companies: ["QuickShip", "FastTrack", "DeliveryPro"],
    color: "from-green-600 to-emerald-600",
  },
];

export function BusinessTypesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Industries We Serve
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support for any business type
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From construction companies to delivery services, successful
            businesses across industries grow and scale with tracked.lk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            return (
              <motion.div
                key={business.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group-hover:-translate-y-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${business.color}`}
                  ></div>
                  <CardHeader className="pb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${business.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {business.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {business.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {business.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Trusted by:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {business.companies.map((company, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-center group-hover:bg-gray-50 transition-colors"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              And many more industries
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                "Equipment Rental",
                "IT Services",
                "Event Management",
                "Food Production",
                "Textile Manufacturing",
                "Automotive Services",
              ].map((industry) => (
                <Badge key={industry} variant="outline" className="px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whatever your business type, if you work with clients who need
              visibility into your process, tracked.lk can streamline your
              operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
