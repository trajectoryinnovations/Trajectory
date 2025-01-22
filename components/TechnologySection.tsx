"use client";

import { motion } from "framer-motion";
import { TechnologySectionProps } from "@/lib/types";
import { CategorySection } from "./category-section";
import { TechnologyCard } from "./technology-card";

export default function TechnologySection({ title, categories, items }: TechnologySectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-50"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold text-blue-900">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
      </div>

      <div className="space-y-8">
        {categories ? (
          categories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))
        ) : items ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.map((tech, index) => (
              <TechnologyCard 
                key={tech.name}
                technology={tech}
                index={index}
              />
            ))}
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}