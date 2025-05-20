import React, { useState, useEffect } from 'react';

const ImmersiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];
  
  // Handle scroll events and section detection
  useEffect(() => {
    const handleScroll = () => {
      // Detect if page is scrolled
      setIsScrolled(window.scrollY > 20);
      
      // Find the active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // A section is considered "active" when it's near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);
  
  // Mobile menu states and animations
  const [menuClosing, setMenuClosing] = useState(false);
  
  // Handle menu toggle with CSS animations
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Open the menu
      setMenuClosing(false);
      setIsMenuOpen(true);
    } else {
      // Start closing animation
      setMenuClosing(true);
      
      // Wait for the closing animation to finish before actually closing the menu
      setTimeout(() => {
        setIsMenuOpen(false);
        setMenuClosing(false);
      }, 300); // This should match the closing animation duration
    }
  };
  
  return (
    <>
      {/* Fixed navigation bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 mix-blend-difference transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Brand/Logo */}
          <a 
            href="#home" 
            className="text-white text-2xl font-bold tracking-wider transition-all duration-300 hover:text-opacity-80"
          >
            K.A
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-white text-sm uppercase tracking-widest font-light transition-all duration-300 
                  ${activeSection === link.href.slice(1) ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`relative w-6 h-5 transform transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-0'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-white top-2 transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-4'
              }`}></span>
            </div>
          </button>
        </div>
      </nav>
      
      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
        isMenuOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="h-full flex flex-col items-center justify-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={toggleMenu}
              className={`menu-item text-white text-3xl md:text-5xl font-light my-4 hover:text-opacity-80 
                transition-all duration-300 transform ${
                  activeSection === link.href.slice(1) ? 
                  'opacity-100 scale-110' : 
                  'opacity-70 hover:scale-105'
                } ${
                  menuClosing ? 'animate-menu-item-out' : 'animate-menu-item-in'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImmersiveNavbar;
