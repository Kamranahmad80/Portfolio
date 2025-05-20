import React, { useEffect, useRef, useState } from 'react';

const ImmersiveHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    // Set up animations when component mounts
    // Add a small delay before starting animations
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    // Title animation with letter splitting
    const titleElement = titleRef.current;
    if (titleElement) {
      const titleText = titleElement.innerText;
      titleElement.innerHTML = ''; // Clear text temporarily
      
      // Split title text into spans for individual letter animation
      [...titleText].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'hero-letter';
        span.style.animationDelay = `${0.5 + (index * 0.05)}s`;
        titleElement.appendChild(span);
      });
    }
  }, []);
  
  // Dynamically add classes when animation should start
  useEffect(() => {
    if (!animationStarted) return;
    
    // Apply animations for subtitle and scroll indicator using classes
    if (subtitleRef.current) {
      subtitleRef.current.classList.add('animate-subtitle');
    }
    
    if (scrollIndicatorRef.current) {
      scrollIndicatorRef.current.classList.add('animate-scroll-indicator');
    }
  }, [animationStarted]);
  
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center">
      {/* Content container - sits on top of the ThreeScene */}
      <div className="relative z-10 text-center px-4">
        {/* Main heading */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none"
        >
          KAMRAN AHMAD
        </h1>
        
        {/* Subtitle with animated gradient text */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          <span className="font-light">Creative Developer focused on building </span>
          <span className="inline-block relative">
            <span className="animate-gradient-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold">
              immersive digital experiences
            </span>
          </span>
        </p>
        
        {/* Call to action */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <a 
            href="#work" 
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white/60"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default ImmersiveHero;
