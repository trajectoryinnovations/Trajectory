"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import ServiceDetails from './ServiceDetails';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image: string;
    features: string[];
    technologies: string[];
    benefits: string[];
    caseStudies: Array<{
      title: string;
      description: string;
      results: string[];
    }>;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
            {service.title}
          </h3>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">{service.description}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="grid grid-cols-2 gap-2">
              {service.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => setShowDetails(true)}
            className="mt-6 inline-flex items-center text-blue-600 font-medium"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </motion.div>

      {showDetails && (
        <ServiceDetails
          service={service}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}