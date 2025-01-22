"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: "Divya Singh",
    role: "Co-Founder / CEO",
    image: "",
    description: "",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Amrutha Sanil",
    role: "Co-Founder / CTO",
    image: "/images/team/amrutha.jpeg",
    description: "",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Samlet",
    role: "Co-Founder / CFO",
    image: "",
    description: "",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },

];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            A diverse group of experts passionate about innovation and technology
          </motion.p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SocialLink href={member.linkedin} icon={Linkedin} />
                  <SocialLink href={member.twitter} icon={Twitter} />
                  <SocialLink href={member.github} icon={Github} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're driven by our commitment to innovation, excellence, and making a positive impact
              through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="Constantly pushing boundaries and exploring new technologies to solve complex challenges."
            />
            <ValueCard
              title="Excellence"
              description="Maintaining the highest standards in everything we do, from code quality to client service."
            />
            <ValueCard
              title="Collaboration"
              description="Working together as a team and with our clients to achieve extraordinary results."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}