import React, { useEffect, useRef, useState } from 'react';

const ImmersiveAbout = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0, tech: 0 });

  // Add text elements to the refs array
  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // Set up the intersection observer to detect when section comes into view
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        // Mark section as visible when it comes into view
        setIsVisible(true);
        
        // Unobserve after animation is triggered
        observer.unobserve(section);
      }
    }, { threshold: 0.3 }); // Start animation when 30% of the section is visible
    
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Animated counter effect when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    // Counter animations
    const yearTarget = 3;
    const projectTarget = 15;
    const techTarget = 8;
    const duration = 2000; // 2 seconds in milliseconds

    let startTime = null;
    
    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate current counter values
      const yearValue = Math.floor(progress * yearTarget);
      const projectValue = Math.floor(progress * projectTarget);
      const techValue = Math.floor(progress * techTarget);
      
      setCounters({
        years: yearValue,
        projects: projectValue,
        tech: techValue
      });
      
      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        // Ensure we end exactly at the target values
        setCounters({
          years: yearTarget,
          projects: projectTarget,
          tech: techTarget
        });
      }
    };
    
    requestAnimationFrame(animateCounters);
    
    return () => {
      startTime = null;
    };
  }, [isVisible]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column: Text content */}
          <div>
            <h2 
              ref={headingRef}
              className={`text-white text-5xl md:text-7xl font-bold mb-12 relative inline-block ${isVisible ? 'animate-about-title' : 'opacity-0 translate-y-10'}`}
            >
              About Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
            </h2>
            
            <div className="space-y-6 text-white/80">
              <p 
                ref={addToRefs} 
                className={`text-lg leading-relaxed ${isVisible ? 'animate-about-text' : 'opacity-0 translate-y-5'}`}
                style={{ animationDelay: '0.2s' }}
              >
                I'm Kamran, a passionate Full Stack Developer with a focus on creating immersive digital experiences through 
                innovative coding techniques and creative design.
              </p>
              <p 
                ref={addToRefs} 
                className={`text-lg leading-relaxed ${isVisible ? 'animate-about-text' : 'opacity-0 translate-y-5'}`}
                style={{ animationDelay: '0.4s' }}
              >
                With expertise in both frontend and backend technologies, I blend technical precision with artistic vision 
                to build web applications that not only function flawlessly but also engage users on a deeper level.
              </p>
              <p 
                ref={addToRefs} 
                className={`text-lg leading-relaxed ${isVisible ? 'animate-about-text' : 'opacity-0 translate-y-5'}`}
                style={{ animationDelay: '0.6s' }}
              >
                My approach combines cutting-edge technologies like React, Three.js, and WebGL with thoughtful UX principles 
                to create memorable digital journeys that push the boundaries of web experiences.
              </p>
            </div>
            
            {/* Stats section */}
            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className={`stat-item ${isVisible ? 'animate-stat-item' : 'opacity-0 scale-90'}`}
                  style={{ animationDelay: '0.7s' }}>
                <h3 className="text-4xl font-bold text-white mb-2">{counters.years}</h3>
                <p className="text-sm uppercase tracking-widest text-white/60">Years<br />Experience</p>
              </div>
              <div className={`stat-item ${isVisible ? 'animate-stat-item' : 'opacity-0 scale-90'}`}
                  style={{ animationDelay: '0.8s' }}>
                <h3 className="text-4xl font-bold text-white mb-2">{counters.projects}</h3>
                <p className="text-sm uppercase tracking-widest text-white/60">Projects<br />Completed</p>
              </div>
              
            </div>
          </div>
          
          {/* Right column: Image with effect */}
          <div className="relative">
            <div className="w-full h-full absolute -left-4 -top-4 border border-white/20"></div>
            <div 
              ref={imageRef}
              className={`w-full h-[500px] overflow-hidden relative ${isVisible ? 'animate-image-reveal' : 'image-hidden'}`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=80&w=1000&auto=format&fit=crop')`,
                  filter: 'grayscale(20%)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Image caption */}
            <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm p-4 max-w-[250px]">
              <p className="text-white/80 text-sm italic">
                "Creativity is intelligence having fun."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveAbout;
