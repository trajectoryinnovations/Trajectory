"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link href="/" className="flex items-center">
                <div className="w-15 h-15">
                    <img
                        src="/CompnayLogo.png"
                        alt="Company Logo"
                        style={{width: '130px', height: '130px'}}
                    />
                </div>
                <span
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-1">
  Trajectory Innovations
</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {/* <NavLink href="/" active={isActive('/')}>Home</NavLink> */}
            <NavLink href="/about" active={isActive('/about')}>About Us</NavLink>
            {/* <NavLink href="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink href="/team" active={isActive('/team')}>Our Team</NavLink> */}
            <NavLink href="/contact" active={isActive('/contact')}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-t"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {/*<MobileNavLink href="/" active={isActive('/')} onClick={() => setIsOpen(false)}>Home</MobileNavLink>*/}
          <MobileNavLink href="/about" active={isActive('/about')} onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink href="/contact" active={isActive('/contact')} onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link 
      href={href}
      className={`text-gray-600 hover:text-blue-600 transition-colors relative group py-2 ${
        active ? 'text-blue-600' : ''
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform ${
        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`} />
    </Link>
  );
}

function MobileNavLink({ href, children, active, onClick }: { href: string; children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block transition-colors ${
        active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  );
}