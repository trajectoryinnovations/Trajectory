"use client";

import { motion } from "framer-motion";
import { Category } from "@/lib/types";
import { TechnologyCard } from "./technology-card";

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <div className="space-y-4">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-sm font-bold text-gray-600 tracking-wider flex items-center gap-2"
      >
        {category.title}
        <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
      </motion.h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {category.items.map((tech, index) => (
          <TechnologyCard 
            key={tech.name}
            technology={tech}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}