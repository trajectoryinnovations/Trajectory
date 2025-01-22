"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Link from "next/link";
interface ServiceDetailsProps {
  service: {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    benefits: string[];
    caseStudies: Array<{
      title: string;
      description: string;
      results: string[];
    }>;
  };
  onClose: () => void;
}

export default function ServiceDetails({ service, onClose }: ServiceDetailsProps) {
  const [activeTab, setActiveTab] = useState('overview');


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b px-6">
          <div className="flex space-x-6">
            {['overview', 'features', 'case studies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 200px)' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
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
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'case studies' && (
              <motion.div
                key="case-studies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {service.caseStudies.map((study, index) => (
                  <div key={index} className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600">{study.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Key Results:</h4>
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50">
          <Link href="/contact" passHref>
            <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}