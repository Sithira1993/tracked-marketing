"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  Zap,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real app, this would integrate with payment processing
    alert(
      `Thanks for your interest! We&apos;ll contact you at ${email} with payment details.`
    );
    setIsLoading(false);
    setEmail("");
  };

  const features = [
    "Unlimited orders and milestones",
    "Real-time client tracking links",
    "Mobile QR/barcode scanning",
    "Photo and note attachments",
    "Invoice management system",
    "Offline-first mobile support",
    "Custom milestone builder",
    "Multi-user team access",
    "Email notifications",
    "Priority customer support",
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
            <Sparkles className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the first 1000 businesses to transform their client experience.
            Special launch pricing available for early adopters.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden shadow-2xl border-0">
              {/* Special Offer Banner */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">Early Adopter Special</span>
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Pricing Info */}
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="text-5xl font-bold text-gray-900">
                        LKR 1,000
                      </div>
                      <div className="text-gray-500">
                        <div className="text-lg line-through">LKR 2,000</div>
                        <div className="text-sm">per month</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        <Users className="mr-1 h-3 w-3" />
                        50% OFF
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="mr-1 h-3 w-3" />
                        First 4 years
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                      <strong>Limited to first 1000 users only.</strong> After 4
                      years, pricing returns to standard LKR 2,000/month.
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                      <Shield className="h-4 w-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Everything included:
                    </h3>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signup Form */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-gray-600">
                      Join hundreds of SMEs already using tracked.lk
                    </p>
                  </div>

                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your business email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 text-lg"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <>
                          Start your trial{" "}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By signing up, you agree to our Terms of Service and Privacy
                    Policy
                  </p>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-purple-200">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          847
                        </div>
                        <div className="text-xs text-gray-600">
                          Early adopters
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          153
                        </div>
                        <div className="text-xs text-gray-600">
                          Spots remaining
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently asked questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  What happens after 4 years?
                </h4>
                <p className="text-gray-600 text-sm">
                  Your pricing will automatically adjust to the standard rate of
                  LKR 2,000/month. You&apos;ll receive advance notice and can
                  cancel anytime.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Can I cancel anytime?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, you can cancel your subscription at any time. No
                  long-term contracts or hidden fees. Your data remains
                  accessible for 30 days after cancellation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
