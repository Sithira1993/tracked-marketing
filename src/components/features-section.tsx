"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Eye,
  DollarSign,
  Smartphone,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Real-Time Transparency",
    description: "Clients see progress live without calling or emailing",
    details: "Single URL (tracked.lk/status/…), no login required",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Milestone-Linked Invoicing",
    description: "Invoice only what's done—reduces payment disputes",
    details: "Configurable stages tied to billing",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Scanning",
    description: "Field teams update status instantly—even offline",
    details: "QR/barcode scan + photo proof",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Manual-Payment Workflow",
    description: "SMEs stay in control of cash flow",
    details: "No mandatory gateway fees",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Zero-Touch Setup",
    description: "Up and running in minutes",
    details: "Pure web experience—no installs",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: CheckCircle,
    title: "Zero-Friction Experience",
    description: "No installs, no passwords, no barriers",
    details: "Just a link—that's it",
    color: "from-teal-500 to-blue-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Core Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A fully integrated
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              suite of tracking
            </span>
            <br />
            and invoicing tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your operations, improve client
            satisfaction, and accelerate cash flow—all in one platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-3 text-base">
                      {feature.description}
                    </CardDescription>
                    <p className="text-sm text-gray-500 font-medium">
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why SMEs choose tracked.lk
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50%
                </div>
                <p className="text-gray-600">Fewer client follow-ups</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  3x
                </div>
                <p className="text-gray-600">Faster payment processing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  90%
                </div>
                <p className="text-gray-600">Reduction in billing disputes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
