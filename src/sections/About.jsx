import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 flex flex-col items-center">
      <h2 
        data-animate="fade-down" 
        className="text-4xl font-bold text-star text-glow mb-8"
      >
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        <div 
          data-animate="fade-right"
          data-delay="300"
          className="flex flex-col justify-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm Kamran, a passionate Full Stack Developer from Pakistan. I build beautiful, functional websites with modern tools like React, Tailwind, and Node.js.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Right now, I'm focusing on blending creativity and logic to craft cool projects that not only look great but provide exceptional user experiences.
          </p>
        </div>
        
        <div 
          data-animate="fade-left"
          data-delay="500"
          className="bg-black/30 p-8 rounded-2xl backdrop-blur-sm border border-neon/20 box-glow"
        >
          <h3 className="text-2xl font-bold text-neon mb-4">My Journey</h3>
          
          <div className="space-y-6">
            <div className="relative pl-8 border-l border-neon/30">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-neon"></div>
              <h4 className="text-lg font-semibold text-white">2023 - Present</h4>
              <p className="text-gray-300">Full Stack Developer</p>
            </div>
            
            <div className="relative pl-8 border-l border-neon/30">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-neon"></div>
              <h4 className="text-lg font-semibold text-white">2021 - 2023</h4>
              <p className="text-gray-300">Frontend Development</p>
            </div>
            
            <div className="relative pl-8 border-l border-neon/30">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-neon"></div>
              <h4 className="text-lg font-semibold text-white">2019 - 2021</h4>
              <p className="text-gray-300">Learning to Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
