"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Technology } from "@/lib/types";

interface TechnologyCardProps {
  technology: Technology;
  index: number;
}

export function TechnologyCard({ technology, index }: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
      style={{ minHeight: "140px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex flex-col items-center justify-center gap-3 z-10">
        <div className="relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-300">
          <Image
            src={technology.logo}
            alt={technology.name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-900 transition-colors duration-300">
          {technology.name}
        </span>
      </div>
    </motion.div>
  );
}