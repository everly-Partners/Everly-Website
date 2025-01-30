'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'About', href: '#about' },
    { name: 'Templates', href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
    {
      name: 'Pinterest',
      href: '#',
      icon: FaPinterest,
    },
  ],
};

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.replace('#', ''))}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-gray-400 transition-colors duration-200 ${
                item.name === 'Facebook' 
                  ? 'hover:text-[#1877F2]' 
                  : item.name === 'Instagram'
                  ? 'hover:text-[#E4405F]'
                  : 'hover:text-[#E60023]'
              }`}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Everly. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 