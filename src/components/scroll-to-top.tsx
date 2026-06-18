"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle params
  const size = 56;
  const strokeW = 3;
  const radius = (size - strokeW) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center"
        >
          {/* progress ring SVG */}
          <svg
            width={size}
            height={size}
            className="absolute inset-0 -rotate-90"
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(29,111,214,0.28)"
              strokeWidth={strokeW}
            />
            {/* progress */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="url(#scroll-grad)"
              strokeWidth={strokeW}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - dash}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
            <defs>
              <linearGradient id="scroll-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A1F44" />
                <stop offset="50%" stopColor="#1D6FD6" />
                <stop offset="100%" stopColor="#3FB8C4" />
              </linearGradient>
            </defs>
          </svg>

          {/* center circle */}
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(29,111,214,0.25)] dark:bg-dark-800 dark:shadow-[0_4px_20px_rgba(29,111,214,0.20)]">
            <ArrowUp className="h-4 w-4 text-[#1D6FD6]" strokeWidth={2.5} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
