import React, { useState, useEffect } from 'react';

const ThreeScene = () => {
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);
  
  // Generate particles and stars on component mount
  useEffect(() => {
    // Generate foreground particles (larger, with glow)
    const newParticles = [];
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: `particle-${i}`,
        x: Math.random() * 100, // Position as percentage of screen width
        y: Math.random() * 100, // Position as percentage of screen height
        size: Math.random() * 4 + 1, // Size between 1-5px
        color: getRandomColor(true),
        opacity: Math.random() * 0.5 + 0.2, // Opacity between 0.2 and 0.7
        animationDuration: `${5 + Math.random() * 15}s`,
        animationDelay: `${Math.random() * -15}s`
      });
    }
    
    // Generate background stars (smaller, more numerous)
    const newStars = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        color: getRandomColor(false),
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: `${3 + Math.random() * 5}s`
      });
    }
    
    setParticles(newParticles);
    setStars(newStars);
  }, []);
  
  // Generate random colors with different palettes
  const getRandomColor = (isParticle) => {
    if (isParticle) {
      // Particles get more vibrant colors (purple/blue/cyan)
      const colorChoice = Math.random();
      
      if (colorChoice < 0.33) {
        // Purple
        return `rgba(${128 + Math.random() * 50}, ${20 + Math.random() * 30}, ${200 + Math.random() * 55}, 1)`;
      } else if (colorChoice < 0.66) {
        // Cyan
        return `rgba(${50 + Math.random() * 30}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55}, 1)`;
      } else {
        // Blue
        return `rgba(${20 + Math.random() * 30}, ${100 + Math.random() * 55}, ${200 + Math.random() * 55}, 1)`;
      }
    } else {
      // Stars get more white/blue tinted colors
      const bright = 180 + Math.random() * 75;
      return `rgba(${bright * 0.9}, ${bright * 0.95}, ${bright}, 1)`;
    }
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none bg-black overflow-hidden z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black opacity-90"></div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-glow-pulse-delayed"></div>
      <div className="absolute top-3/4 right-1/3 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl animate-glow-pulse"></div>
      
      {/* Background stars */}
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDuration: star.twinkleSpeed
          }}
        />
      ))}
      
      {/* Foreground particles with glow */}
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            filter: `blur(${particle.size > 3 ? 1 : 0}px)`,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay
          }}
        />
      ))}
    </div>
  );
};

export default ThreeScene;
