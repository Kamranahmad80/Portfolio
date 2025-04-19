import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      <div data-animate="zoom-in" data-delay="200" className="mb-6">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-star text-glow mb-2">
            Kamran's Galaxy
          </h1>
        </div>
      </div>
      
      <p 
        data-animate="fade-up" 
        data-delay="600" 
        className="mt-4 text-xl text-gray-300 max-w-xl mb-8"
      >
        Full Stack Developer on a mission to build smart, aesthetic, and future-ready web apps.
      </p>
      
      <div data-animate="fade-up" data-delay="900" className="flex gap-4 flex-wrap justify-center">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-neon text-galaxy font-bold rounded-full hover:scale-105 transition-transform box-glow"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="px-6 py-3 border-2 border-neon text-neon font-bold rounded-full hover:bg-neon/10 transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
