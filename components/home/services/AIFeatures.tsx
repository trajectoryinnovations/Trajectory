"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Integration",
    description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Process and analyze data in real-time for immediate insights and faster decision making"
  },
  {
    icon: Shield,
    title: "Secure Implementation",
    description: "Enterprise-grade security measures to protect your AI models and sensitive data"
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with our advanced analytics solutions"
  }
];

export default function AIFeatures() {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Powered by Advanced AI
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI-driven solutions help businesses automate processes, gain insights,
          and stay ahead of the competition
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <feature.icon className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}