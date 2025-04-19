import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];
  
  // Handle scroll event to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find the active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`w-full p-4 fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          className="text-2xl font-bold text-glow text-neon font-orbit"
        >
          Kamran<span className="text-white">Dev</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1) 
                  ? 'text-neon'
                  : 'text-gray-300 hover:text-neon'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon"></span>
              )}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="bg-neon text-galaxy px-4 py-1 rounded-full text-sm font-medium hover:bg-neon/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-black/90 backdrop-blur-md rounded-xl border border-neon/20">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-center transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-neon'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-neon text-galaxy py-2 rounded-lg text-center font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
