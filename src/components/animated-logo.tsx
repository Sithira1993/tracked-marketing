"use client";

import { motion } from "framer-motion";

export function AnimatedLogo({
  className = "w-10 h-10",
}: {
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          fill="url(#gradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Progress Path */}
        <motion.path
          d="M8 20 L32 20"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Progress Dots */}
        <motion.circle
          cx="10"
          cy="20"
          r="3"
          fill="url(#dotGradient1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
        <motion.circle
          cx="20"
          cy="20"
          r="3"
          fill="url(#dotGradient2)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />
        <motion.circle
          cx="30"
          cy="20"
          r="3"
          fill="url(#dotGradient3)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        />

        {/* Tracking Lines */}
        <motion.path
          d="M10 14 L20 14 L30 14"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
        <motion.path
          d="M10 26 L20 26 L30 26"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        />

        {/* Central T Shape (subtle) */}
        <motion.path
          d="M18 12 L22 12 M20 12 L20 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* Gradient Definitions */}
        <defs>
          {/* Main background gradient */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#06b6d4", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Border gradient */}
          <linearGradient
            id="borderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#a855f7", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#0891b2", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Path gradient */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.6 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.2 }}
            />
          </linearGradient>

          {/* Line gradient */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.4 }}
            />
          </linearGradient>

          {/* Dot gradients */}
          <radialGradient id="dotGradient1" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#e2e8f0", stopOpacity: 1 }}
            />
          </radialGradient>

          <radialGradient id="dotGradient2" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
            />
          </radialGradient>

          <radialGradient id="dotGradient3" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#10b981", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#059669", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
