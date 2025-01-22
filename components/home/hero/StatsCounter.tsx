"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  label: string;
  value: number;
  suffix?: string;
}

export default function StatsCounter({ label, value, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

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
    <div ref={ref} className="text-white">
      <div className="text-3xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}