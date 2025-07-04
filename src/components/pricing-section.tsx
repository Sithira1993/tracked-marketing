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
  Shield,
  Sparkles,
  Gift,
  Calendar,
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
      `Thanks for joining the waitlist! We&apos;ll contact you at ${email} with payment details to secure your early bird spot.`
    );
    setIsLoading(false);
    setEmail("");
  };

  const waitlistBenefits = [
    "Priority access to beta launch",
    "50% off lifetime discount on subscription",
    "Exclusive onboarding support",
    "Direct feedback channel to founders",
    "Early feature previews and demos",
    "No-risk 60-day money-back guarantee",
    "Locked-in early bird pricing forever",
    "Free migration from existing tools",
    "Premium customer support",
    "Quarterly founder office hours",
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
            Early Access Waitlist
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join the early bird waitlist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be among the first businesses to transform client experience. Secure
            your spot with exclusive early bird benefits.
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
                  <span className="font-semibold">Early Bird Waitlist</span>
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Pricing Info */}
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="text-5xl font-bold text-gray-900">
                        LKR 2,000
                      </div>
                      <div className="text-gray-500">
                        <div className="text-sm">one-time</div>
                        <div className="text-sm">waitlist fee</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        <Gift className="mr-1 h-3 w-3" />
                        50% OFF Forever
                      </Badge>
                      <Badge variant="outline">
                        <Calendar className="mr-1 h-3 w-3" />
                        Beta: Aug 2025
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                      <strong>Secure your early bird benefits now.</strong> When
                      we launch, you&apos;ll get 50% off our subscription
                      pricing for life, plus exclusive perks.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        What happens next?
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Pay LKR 2,000 to secure your waitlist spot</li>
                        <li>• Get exclusive updates on development progress</li>
                        <li>• Receive beta access in August 2025</li>
                        <li>• Enjoy 50% off subscription when we launch</li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                      <Shield className="h-4 w-4" />
                      <span>60-day money-back guarantee</span>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Early bird benefits:
                    </h3>
                    <div className="space-y-3">
                      {waitlistBenefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
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
                      Ready to join the waitlist?
                    </h3>
                    <p className="text-gray-600">
                      Secure your early bird spot today
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
                          Join waitlist for LKR 2,000{" "}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By joining, you agree to our Terms of Service and Privacy
                    Policy
                  </p>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-purple-200">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          421
                        </div>
                        <div className="text-xs text-gray-600">
                          Waitlist members
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          579
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
                  What&apos;s the difference between waitlist and subscription?
                </h4>
                <p className="text-gray-600 text-sm">
                  The LKR 2,000 waitlist fee secures your early bird benefits.
                  When we launch, you&apos;ll pay a monthly subscription (50%
                  off for life) to use the platform.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Can I get a refund if I change my mind?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes! We offer a 60-day money-back guarantee. If you&apos;re
                  not satisfied with the beta experience, we&apos;ll refund your
                  waitlist fee completely.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  When will the product be ready?
                </h4>
                <p className="text-gray-600 text-sm">
                  Beta launch is scheduled for August 2025, with the stable
                  version launching in December 2025. Waitlist members get
                  priority access to all releases.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How much will the subscription cost?
                </h4>
                <p className="text-gray-600 text-sm">
                  Standard pricing will be announced closer to launch, but early
                  birds get 50% off for life. We estimate savings of LKR 1,000+
                  per month.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
