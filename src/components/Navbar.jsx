import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '#hero', label: 'Intro' },
    { href: '#about', label: 'Profile' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Chat' }
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
    <nav className={`w-full px-4 py-3 md:py-4 fixed top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-[#05051a]/95 via-[#080830]/95 to-[#05051a]/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-indigo-900/10 before:to-transparent before:opacity-0 ${
      isScrolled ? 'before:animate-gradient-pulse' : ''
    }`}>
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center relative z-10">
        {/* Logo - Refined lettermark */}
        <a 
          href="#hero" 
          className="font-bold text-xl md:text-2xl group transition-all duration-300"
        >
          <span className="border border-white hover:border-indigo-400 px-1.5 py-0.5 transition-all duration-300 group-hover:text-indigo-400">K</span>
        </a>
        
        {/* Desktop Menu - Clean and refined - Centered */}
        <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`nav-link text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative py-2 ${
                activeSection === link.href.slice(1) 
                  ? 'active text-white font-medium'
                  : 'text-gray-400 hover:text-white'
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-indigo-400 ${
                activeSection === link.href.slice(1)
                  ? 'after:w-full'
                  : 'after:w-0 hover:after:w-full after:transition-all after:duration-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Right spacer to balance the centered menu */}
        <div className="hidden md:block w-[42px]"></div>
        
        {/* Mobile Menu Button - Simplified */}
        <button
          className="md:hidden text-white"
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
      
      {/* Mobile Menu - Enhanced */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-gradient-to-b from-[#080830]/95 to-[#05051a]/95 backdrop-blur-lg absolute left-0 right-0 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4 max-w-full">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white font-medium border-l-2 border-indigo-400 pl-2'
                    : 'text-gray-400 hover:text-gray-200 hover:pl-1'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
