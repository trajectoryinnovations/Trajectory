"use client";

import { motion } from 'framer-motion';
import { Users, Award, Building2, Target, ChevronRight, Globe, Rocket, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Breadcrumb from '@/components/layout/Breadcrumb';

const companyStats = [
  { label: "Years of Excellence", value: "10+" },
  { label: "Successful Projects", value: "500+" },
  { label: "Team Members", value: "100+" },
  { label: "Global Clients", value: "200+" },
  { label: "Countries Served", value: "25+" },
  { label: "Patents Filed", value: "30+" }
];

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Building lasting relationships through reliability"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating solutions that transform industries worldwide"
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "Delivering exceptional quality in everything we do"
  }
];

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  },
  {
    year: "2016",
    title: "AI Division Launch",
    description: "Established dedicated AI research and development team",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Opened offices in multiple countries to serve clients worldwide",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
  },
  {
    year: "2020",
    title: "Innovation Hub",
    description: "Launched state-of-the-art innovation center for R&D",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
  },
  {
    year: "2023",
    title: "Industry Leadership",
    description: "Recognized as industry leader in AI solutions",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800"
  }
];

const awards = [
  {
    year: "2023",
    title: "Best AI Innovation Company",
    organization: "Tech Excellence Awards"
  },
  {
    year: "2022",
    title: "Top Enterprise Solution Provider",
    organization: "Business Technology Forum"
  },
  {
    year: "2021",
    title: "Innovation Leader of the Year",
    organization: "Global Tech Summit"
  }
];

const team = [
  {
    name: "Divya Singh",
    role: "Co-Founder / CEO",
    image: "",
    description: "Leadership is not about being in charge; it’s about taking care of those in your charge.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Amrutha Sanil",
    role: "Co-Founder / CTO",
    image: "/team/amrutha.jpeg",
    description: "Innovation is the ability to see change as an opportunity—not a threat.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Samlet",
    role: "Co-Founder / CFO",
    image: "",
    description: "Success isn’t just about what you make; it’s about how you manage and invest what you have.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },

];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl transform rotate-12">
                T
              </div>
              <h1 className="text-5xl font-bold text-white">
                Trajectory Innovations
              </h1>
            </div>
            <p className="text-xl text-blue-100">
              Innovating the Future, One Step at a Time. We're a team of passionate technologists
              dedicated to transforming businesses through cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Breadcrumb />

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive 
                  growth, efficiency, and competitive advantage in the digital age. We're 
                  committed to delivering transformative solutions that make a real difference.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in technological innovation, setting new 
                  standards in AI, software development, and digital transformation. 
                  We envision a future where technology enhances every aspect of business 
                  and society.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <div key={value.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 rounded-3xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600">Measurable success through innovative solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        {/*<section className="mb-20 ml-20">*/}
        {/*  <div className="text-center mb-12">*/}
        {/*    <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>*/}
        {/*    <p className="text-gray-600 max-w-2xl mx-auto">*/}
        {/*      A diverse group of experts passionate about innovation and technology*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
        {/*    {team.map((member, index) => (*/}
        {/*      <motion.div*/}
        {/*        key={member.name}*/}
        {/*        initial={{ opacity: 0, y: 20 }}*/}
        {/*        whileInView={{ opacity: 1, y: 0 }}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        transition={{ delay: index * 0.1 }}*/}
        {/*        className="group"*/}
        {/*      >*/}
        {/*        <div className="relative overflow-hidden rounded-lg aspect-square mb-4">*/}
        {/*          <Image*/}
        {/*            src={member.image}*/}
        {/*            alt={member.name}*/}
        {/*            fill*/}
        {/*            className="object-cover group-hover:scale-110 transition-transform duration-500"*/}
        {/*          />*/}
        {/*          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />*/}
        {/*          */}
        {/*          /!* Social Links *!/*/}
        {/*          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">*/}
        {/*            <SocialLink href={member.linkedin} icon={Users} />*/}
        {/*            <SocialLink href={member.twitter} icon={Globe} />*/}
        {/*            <SocialLink href={member.github} icon={Target} />*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>*/}
        {/*        <p className="text-blue-600 font-medium mb-2">{member.role}</p>*/}
        {/*        <p className="text-gray-600 text-sm">{member.description}</p>*/}
        {/*      </motion.div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Milestones */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="text-5xl font-bold text-blue-600 mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gray-50 rounded-3xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <Award className="w-12 h-12 text-blue-600 mb-4" />
                  <div className="text-lg font-semibold text-blue-600 mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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