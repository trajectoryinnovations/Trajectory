"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  // { label: "AI Models Deployed", value: 500, suffix: "+" },
  // { label: "Data Points Processed", value: 1, suffix: "B+" },
  { label: "Accuracy Rate", value: 99, suffix: "%" },
  { label: "Client Success Rate", value: 95, suffix: "%" }
];

export default function FloatingMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} index={index} />
      ))}
    </div>
  );
}

function MetricCard({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
    >
      <div className="text-3xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-blue-200">{label}</div>
    </motion.div>
  );
}