import React, { useEffect, useRef, useState } from "react";

// Map skills to actual planets in our solar system
const skills = [
  { name: "React", abbr: "React", color: "#61DAFB", bgColor: "bg-blue-500", planet: "earth", size: 60 },
  { name: "JavaScript", abbr: "JS", color: "#F7DF1E", bgColor: "bg-yellow-500", planet: "sun", size: 90 },
  { name: "Node.js", abbr: "Node", color: "#339933", bgColor: "bg-green-600", planet: "venus", size: 58 },
  { name: "HTML5", abbr: "HTML", color: "#E34F26", bgColor: "bg-orange-600", planet: "mars", size: 55 },
  { name: "CSS3", abbr: "CSS", color: "#1572B6", bgColor: "bg-blue-400", planet: "mercury", size: 45 },
  { name: "TypeScript", abbr: "TS", color: "#3178C6", bgColor: "bg-blue-700", planet: "neptune", size: 65 },
  { name: "MongoDB", abbr: "Mongo", color: "#47A248", bgColor: "bg-green-700", planet: "moon", size: 40 },
  { name: "Tailwind", abbr: "TW", color: "#06B6D4", bgColor: "bg-cyan-600", planet: "jupiter", size: 75 },
  { name: "Git", abbr: "Git", color: "#F05032", bgColor: "bg-red-600", planet: "pluto", size: 35 },
  { name: "Next.js", abbr: "Next", color: "#000000", bgColor: "bg-gray-900", planet: "io", size: 38 },
  { name: "Redux", abbr: "Redux", color: "#764ABC", bgColor: "bg-purple-600", planet: "uranus", size: 65 },
  { name: "GraphQL", abbr: "GQL", color: "#E10098", bgColor: "bg-pink-600", planet: "europa", size: 42 },
  { name: "Sass", abbr: "Sass", color: "#CC6699", bgColor: "bg-pink-700", planet: "titan", size: 48 },
  { name: "Vue.js", abbr: "Vue", color: "#4FC08D", bgColor: "bg-green-500", planet: "ganymede", size: 50 },
  { name: "Firebase", abbr: "FB", color: "#FFCA28", bgColor: "bg-amber-500", planet: "callisto", size: 45 },
  { name: "AWS", abbr: "AWS", color: "#FF9900", bgColor: "bg-orange-500", planet: "saturn", size: 72 }
];

const Skills = () => {
  const planetRefs = useRef([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // Initialize refs array
  useEffect(() => {
    planetRefs.current = planetRefs.current.slice(0, skills.length);
  }, []);
  
  // Handle planet selection
  const handlePlanetClick = (skill) => {
    setSelectedPlanet(selectedPlanet === skill ? null : skill);
  };
  
  // We'll use all planets in a single scrolling list
  
  return (
    <section id="skills" className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0 bg-black">
        {/* Animated stars in background */}
        {[...Array(100)].map((_, idx) => (
          <div 
            key={idx}
            className={`absolute w-1 h-1 bg-white rounded-full animate-twinkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          data-animate="fade-down"
          className="text-4xl font-bold text-star text-glow mb-6 text-center"
        >
          Skills Solar System
        </h2>
        
        <p className="text-center text-gray-300 mb-16 max-w-lg mx-auto">
          Click on a planet to learn more about each skill
        </p>

        {/* Horizontally Scrolling Planets */}
        <div className="planets-container mb-20">
          <div className="planets-scroll-container">
            <div className="planets-scroll">
              {/* First set of planets */}
              {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="planet-container"
                  ref={el => planetRefs.current[idx] = el}
                >
                  <div 
                    className={`planet planet-${skill.planet} ${skill.bgColor} ${selectedPlanet === skill ? 'selected' : ''}`}
                    style={{ width: `${skill.size}px`, height: `${skill.size}px` }}
                    onClick={() => handlePlanetClick(skill)}
                  >
                    <span className="planet-abbr">{skill.abbr}</span>
                    
                    {/* Planet name tooltip */}
                    <div className="planet-name">{skill.name}</div>
                    
                    {/* Planet glow/rings for special planets */}
                    {skill.planet === 'saturn' && (
                      <div className="planet-rings"></div>
                    )}
                    {skill.planet === 'sun' && (
                      <div className="sun-glow"></div>
                    )}
                  </div>
                  <div className="planet-name-label">{skill.name}</div>
                </div>
              ))}
              
              {/* Clone the first few planets to ensure continuous scrolling */}
              {skills.slice(0, 6).map((skill, idx) => (
                <div 
                  key={`clone-${idx}`} 
                  className="planet-container"
                >
                  <div 
                    className={`planet planet-${skill.planet} ${skill.bgColor} ${selectedPlanet === skill ? 'selected' : ''}`}
                    style={{ width: `${skill.size}px`, height: `${skill.size}px` }}
                    onClick={() => handlePlanetClick(skill)}
                  >
                    <span className="planet-abbr">{skill.abbr}</span>
                    <div className="planet-name">{skill.name}</div>
                    
                    {/* Planet glow/rings for special planets */}
                    {skill.planet === 'saturn' && (
                      <div className="planet-rings"></div>
                    )}
                    {skill.planet === 'sun' && (
                      <div className="sun-glow"></div>
                    )}
                  </div>
                  <div className="planet-name-label">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Selected Skill Detail Panel */}
        {selectedPlanet && (
          <div className="skill-detail-panel p-6 rounded-xl backdrop-blur-sm bg-black/60 border border-white/10 max-w-2xl mx-auto mb-16 transform transition-all">
            <div className="flex items-center mb-4">
              <div 
                className={`mini-planet ${selectedPlanet.bgColor} mr-4`}
                style={{ width: '50px', height: '50px' }}
              >
                <span className="text-sm font-bold">{selectedPlanet.abbr}</span>
              </div>
              <h3 className="text-2xl font-bold">{selectedPlanet.name}</h3>
            </div>
            <div className="divider h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4"></div>
            <p className="text-gray-300">
              {selectedPlanet.name} is one of my core skills. I have extensive experience using it to create 
              interactive, responsive, and efficient web applications. This skill is as essential to my 
              development process as {selectedPlanet.planet} is to our solar system.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
