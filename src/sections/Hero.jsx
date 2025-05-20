import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4"
    >
      {/* Gradient accent element */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-neon via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Main hero content */}
      <div className="z-10 flex flex-col items-center">
        {/* Visual accent shape */}
        <div 
          data-animate="zoom-in" 
          data-delay="200" 
          className="w-24 h-24 mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon via-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
          <div className="relative animate-float bg-gradient-to-r from-neon to-purple-500 w-full h-full rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-galaxy">K</span>
          </div>
        </div>
        
        {/* Name/Title with modern styling */}
        <div data-animate="fade-up" data-delay="400" className="text-center mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-2 tracking-tight">
            <span className="text-white">Kamran's</span>
            <br />
            <span className="bg-gradient-to-r from-neon via-purple-500 to-pink-500 text-transparent bg-clip-text">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-400 uppercase tracking-widest font-light mt-4">
            Web Design & Development
          </p>
        </div>
      </div>
      
      {/* Description */}
      <p 
        data-animate="fade-up" 
        data-delay="600" 
        className="mt-8 text-xl text-gray-300 max-w-xl mb-10 text-center z-10"
      >
        Full Stack Developer on a mission to build smart, aesthetic, and future-ready web applications.
      </p>
      
      {/* CTA buttons with modern design */}
      <div data-animate="fade-up" data-delay="900" className="flex gap-6 flex-wrap justify-center z-10">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-white text-galaxy font-bold hover:scale-105 transition-transform relative group overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-neon via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 border border-white text-white font-bold hover:bg-white/10 transition-all group"
        >
          <span className="group-hover:text-neon transition-colors duration-300">Contact Me</span>
        </a>
      </div>
      
      
    </section>
  );
};

export default Hero;
