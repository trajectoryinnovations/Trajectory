"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
      <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;
        const title = path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <div key={path} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            {isLast ? (
              <span className="text-blue-600 font-medium">{title}</span>
            ) : (
              <Link
                href={href}
                className="hover:text-blue-600 transition-colors"
              >
                {title}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}