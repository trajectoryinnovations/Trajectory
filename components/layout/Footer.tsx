import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <img
                  src="/CompnayLogo.png"
                  alt="Company Logo"
                  style={{width: '140px', height: '140px'}}
                  className='ml-8'
              />
              Trajectory Innovations
            </h3>
            <p className="text-gray-400">
              Transforming businesses through advanced AI solutions and innovative technology.
            </p>
            <div className="flex space-x-4">
            <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Github} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              {/*<FooterLink href="/services">Services</FooterLink>*/}
              {/*<FooterLink href="/team">Our Team</FooterLink>*/}
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          {/*<div>*/}
          {/*  <h4 className="text-lg font-semibold mb-4">Services</h4>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <FooterLink href="/services#ai">AI Solutions</FooterLink>*/}
          {/*    <FooterLink href="/services#mobile">Mobile Development</FooterLink>*/}
          {/*    <FooterLink href="/services#web">Web Development</FooterLink>*/}
          {/*    <FooterLink href="/services#desktop">Desktop Solutions</FooterLink>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5" />
              <span>info@trajectoryinnovations.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="w-5 h-5" />
              <span>+91 123456</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>123 Innovation Street, Tech City, TC 12345</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Trajectory Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}