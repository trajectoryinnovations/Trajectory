"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingMetrics from './FloatingMetrics';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-sm mb-6"
      >
        <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-blue-400" />
        Pioneering AI Innovation
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Trajectory
        </span>{" "}
        <span className="text-white">Innovations</span>
      </h1>
      
      <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
        Transforming businesses through advanced AI solutions, machine learning, 
        and data analytics to drive innovation and sustainable growth.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-12">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        >
          Explore AI Solutions
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        {/*<Button*/}
        {/*  size="lg"*/}
        {/*  variant="outline"*/}
        {/*  className="bg-white/5 border-white/10 text-white hover:bg-white/10"*/}
        {/*>*/}
        {/*  Schedule Demo*/}
        {/*</Button>*/}
      </div>

      <FloatingMetrics />
    </motion.div>
  );
}