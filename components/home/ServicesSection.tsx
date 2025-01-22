"use client";

import { motion } from "framer-motion";
import ServiceCard from "./services/ServiceCard";
import AIFeatures from "./services/AIFeatures";
import { Button } from "@/components/ui/button";
import { PlayCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "App Development",
    description: "Mobile and cross-platform solutions that transform ideas into powerful applications",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
    features: [
      "Native iOS & Android Development",
      "Cross-platform Solutions",
      "Progressive Web Apps",
      "Enterprise Solutions",
      "Real-time Sync",
      "Offline Functionality",
      "Custom API Integration",
      "Analytics Dashboard"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    benefits: [
      "Faster Time-to-Market",
      "Cross-Platform Compatibility",
      "Scalable Architecture",
      "Enhanced User Experience",
      "Cost-Effective Development",
      "Regular Updates & Support"
    ],
    caseStudies: [
      {
        title: "Enterprise Logistics App",
        description: "Developed a comprehensive logistics management app for a Fortune 500 company",
        results: [
          "40% reduction in delivery times",
          "60% improvement in route optimization",
          "90% user satisfaction rate",
          "$2M annual cost savings"
        ]
      }
    ]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    features: [
      "Predictive Analytics",
      "Computer Vision",
      "Natural Language Processing",
      "Machine Learning Models",
      "Deep Learning",
      "Neural Networks",
      "Automated Decision Making",
      "Pattern Recognition"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Azure AI"],
    benefits: [
      "Enhanced Decision Making",
      "Automated Processes",
      "Reduced Operational Costs",
      "Improved Accuracy",
      "Scalable Solutions",
      "Real-time Insights"
    ],
    caseStudies: [
      {
        title: "Retail Analytics Platform",
        description: "Implemented AI-driven analytics for a major retail chain",
        results: [
          "25% increase in sales",
          "30% reduction in inventory costs",
          "95% prediction accuracy",
          "Real-time customer insights"
        ]
      }
    ]
  },
  {
    title: "Web Development",
    description: "Dynamic, responsive websites and web applications built for the modern web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2064",
    features: [
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Enterprise Portals",
      "Cloud Integration",
      "SEO Optimization",
      "Performance Optimization",
      "Security Implementation",
      "API Development"
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS"],
    benefits: [
      "Improved User Engagement",
      "Higher Conversion Rates",
      "Better SEO Rankings",
      "Faster Load Times",
      "Enhanced Security",
      "Mobile Optimization"
    ],
    caseStudies: [
      {
        title: "E-commerce Platform",
        description: "Built a scalable e-commerce platform for a growing retail brand",
        results: [
          "200% increase in online sales",
          "50% improvement in page load time",
          "75% reduction in cart abandonment",
          "99.9% uptime achievement"
        ]
      }
    ]
  },
  {
    title: "Desktop Solutions",
    description: "Custom software solutions designed for business efficiency",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=2050",
    features: [
      "Cross-platform Applications",
      "Enterprise Software",
      "System Integration",
      "Legacy Modernization",
      "Database Management",
      "Custom Workflows",
      "Automated Testing",
      "Performance Monitoring"
    ],
    technologies: ["Electron", ".NET", "Java", "Python"],
    benefits: [
      "Increased Productivity",
      "Streamlined Workflows",
      "Better Resource Management",
      "Enhanced Security",
      "Simplified Maintenance",
      "Custom Integration"
    ],
    caseStudies: [
      {
        title: "Enterprise Resource Planning",
        description: "Developed a custom ERP solution for a manufacturing company",
        results: [
          "35% increase in productivity",
          "50% reduction in manual processes",
          "90% accuracy in inventory management",
          "Real-time reporting capabilities"
        ]
      }
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-2 block">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovative Solutions, Tailored for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leverage our expertise in cutting-edge technologies to transform your business
            and stay ahead in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <AIFeatures />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-center text-white mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">Ready to Transform Your Business?</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Talk to Our Experts
            </Button>
            </Link>
            {/*<Button*/}
            {/*  size="lg"*/}
            {/*  variant="outline"*/}
            {/*  className="border-2 border-white text-white hover:bg-white/10"*/}
            {/*>*/}
            {/*  <MessageSquare className="w-5 h-5 mr-2" />*/}
            {/*  Talk to Our Experts*/}
            {/*</Button>*/}
          </div>
        </motion.div>
      </div>
    </section>
  );
}