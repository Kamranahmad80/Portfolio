import React, { useRef, useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Cosmic Voyager',
    category: 'Web Experience',
    description: 'An immersive 3D web experience exploring outer space with interactive elements.',
    image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&auto=format&fit=crop',
    tags: ['Three.js', 'WebGL', 'React']
  },
  {
    id: 2,
    title: 'Digital Harmony',
    category: 'UI/UX Design',
    description: 'Minimalist design system with focus on accessibility and user experience.',
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&auto=format&fit=crop',
    tags: ['Figma', 'Design System', 'Animation']
  },
  {
    id: 3,
    title: 'Echo Chamber',
    category: 'Interactive Art',
    description: 'Audio-reactive visual experience that responds to music and ambient sounds.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop',
    tags: ['Audio API', 'Canvas', 'GLSL']
  },
  {
    id: 4,
    title: 'Neural Navigator',
    category: 'AI Interface',
    description: 'Interface design for machine learning model visualization and interaction.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    tags: ['TensorFlow.js', 'Data Visualization', 'React']
  }
];

const ProjectCard = ({ project, index, isVisible }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  
  // Set up intersection observer to detect when card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  // Handle parallax scroll effect with native JavaScript
  useEffect(() => {
    if (!inView) return;
    
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const scrollPos = window.innerHeight - rect.top;
      const scrollFactor = scrollPos / (window.innerHeight + rect.height);
      
      // Apply transformation based on scroll position
      const transformValue = -30 + (scrollFactor * 60); // goes from -30 to +30
      imageRef.current.style.transform = `translateY(${transformValue}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);
  
  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg h-96 md:h-[500px] project-card ${
        index % 2 === 0 ? 'md:col-span-2' : 'md:col-span-1'
      } ${inView ? 'animate-project-card' : 'opacity-0 translate-y-12'}`}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center w-full h-[120%] transition-transform duration-300"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: 'scale(1.1)',
            willChange: 'transform'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <span className="text-xs uppercase tracking-widest text-gray-300 mb-2">{project.category}</span>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-200 mb-4 max-w-md">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* View project button */}
        <a 
          href="#" 
          className="mt-6 inline-block border border-white py-2 px-6 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 group"
        >
          View Project
          <span className="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

const ImmersiveProjects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  
  useEffect(() => {
    // Set up intersection observer for the section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="min-h-screen relative py-32 px-6 overflow-hidden"
    >
      {/* Section title with effect */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 
          ref={headingRef}
          className={`text-white text-5xl md:text-7xl font-bold relative overflow-hidden inline-block ${sectionVisible ? 'animate-heading' : 'opacity-0 translate-y-12'}`}
        >
          Projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
        </h2>
      </div>
      
      {/* Projects grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            isVisible={sectionVisible} 
          />
        ))}
      </div>
    </section>
  );
};

export default ImmersiveProjects;
