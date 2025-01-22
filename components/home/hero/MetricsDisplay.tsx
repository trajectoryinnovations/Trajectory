"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Metric {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const metrics: Metric[] = [
  { label: "AI Models Deployed", value: 500, suffix: "+" },
  { label: "Data Points Processed", value: 1, suffix: "B+", prefix: ">" },
  { label: "Accuracy Rate", value: 99, suffix: "%" },
  { label: "Client Success Rate", value: 95, suffix: "%" }
];

export default function MetricsDisplay() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}

function MetricCard({ label, value, suffix, prefix }: Metric) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * value));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center"
    >
      <div className="text-3xl font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-blue-200">{label}</div>
    </motion.div>
  );
}