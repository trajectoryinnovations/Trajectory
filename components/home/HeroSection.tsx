"use client"
import NetworkAnimation from './hero/NetworkAnimation';
import HeroContent from './hero/HeroContent';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D35] to-[#2A1B3D]" />
      <NetworkAnimation />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />

          {/* Visualization Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full animate-pulse [animation-delay:0.2s]" />
              <div className="absolute inset-8 bg-gradient-to-br from-blue-700/20 to-purple-700/20 rounded-full animate-pulse [animation-delay:0.4s]" />
              
              {/* Floating Elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: Math.sin(i * 1.5) * 20,
                    y: Math.cos(i * 1.5) * 20,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2 + i,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + i * 15}%`,
                  }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-75" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}