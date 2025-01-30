'use client';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Si on est presque en haut de la page, activer home
      if (scrollPosition < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Vérifier si le clic est sur le bouton du menu ou dans le menu lui-même
      const mobileMenu = document.querySelector('.mobile-menu');
      const isClickInMenu = mobileMenu?.contains(event.target as Node);
      const isClickInMenuRef = menuRef.current?.contains(event.target as Node);

      if (!isClickInMenu && !isClickInMenuRef) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Section:', entry.target.id, 'Ratio:', entry.intersectionRatio, 'isIntersecting:', entry.isIntersecting);
          
          // Vérification plus permissive pour toutes les sections
          if (entry.isIntersecting && window.scrollY >= 100) {
            const currentSection = entry.target.id;
            console.log('Setting active section to:', currentSection);
            
            // Forcer la mise à jour pour toutes les sections
            requestAnimationFrame(() => {
              setActiveSection(currentSection);
              console.log('Active section set to:', currentSection);
            });
          }
        });
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],  // Plus de points de détection
        rootMargin: '-10% 0px -10% 0px'  // Marge légèrement plus grande
      }
    );

    // Vérifier si les sections existent
    const sections = ['about', 'templates', 'pricing', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      console.log(`Section ${section}:`, element ? 'Found' : 'Not found');
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
        setIsMenuOpen(false);
  };

  const getLinkClasses = (sectionId: string, isMobile: boolean = false) => {
    const baseClasses = isMobile
      ? "block px-3 py-2 transition-colors text-gray-600 hover:text-pink-600"
      : "transition-colors";
    
    const activeClasses = isMobile
      ? ""  // Plus de style spécial sur mobile pour la section active
      : "text-pink-600";
    
    const inactiveClasses = isMobile
      ? ""  // Plus de style spécial sur mobile pour les sections inactives
      : isScrolled 
        ? "text-gray-600 hover:text-pink-600"
        : "text-white hover:text-pink-300";

    return `${baseClasses} ${activeSection === sectionId ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16" ref={menuRef}>
          <div className="flex items-center">
            <a href="#" onClick={(e) => scrollToSection(e, 'hero')} 
              className={`text-2xl font-bold transition-colors ${
                isScrolled
                  ? `${activeSection === 'hero' ? 'text-pink-600' : 'text-pink-500 hover:text-pink-600'}`
                  : 'text-white hover:text-pink-300'
              }`}>
              Everly
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} 
              className={getLinkClasses('about')}>
              About
            </a>
            <a href="#templates" onClick={(e) => scrollToSection(e, 'templates')} 
              className={getLinkClasses('templates')}>
              Templates
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} 
              className={getLinkClasses('pricing')}>
              Pricing
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} 
              className={`rounded-full px-4 py-2 transition-all duration-300 ${
                isScrolled
                  ? `${activeSection === 'contact'
                      ? 'bg-pink-600 text-white'
                      : 'bg-pink-500 text-white hover:bg-pink-600'}`
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              }`}>
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white hover:text-pink-300'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}
              className={getLinkClasses('home', true)}>
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}
              className={getLinkClasses('about', true)}>
              About
            </a>
            <a href="#templates" onClick={(e) => scrollToSection(e, 'templates')}
              className={getLinkClasses('templates', true)}>
              Templates
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}
              className={getLinkClasses('pricing', true)}>
              Pricing
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}
              className={`${getLinkClasses('contact', true)} block w-full text-left`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 