import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "TypeScript", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git", level: 85 }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2
          data-animate="fade-down"
          className="text-4xl font-bold text-star text-glow mb-8 text-center"
        >
          Skills
        </h2>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                data-animate="fade-up"
                data-delay={100 * idx}
                className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-neon/20"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold text-neon">{skill.name}</h3>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-neon rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.7)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-animate="fade-up" data-delay="300">
          <h3 className="text-2xl font-bold text-star mb-6 text-center">Experience Level</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-neon/20 text-center box-glow"
            >
              <h4 className="text-3xl font-bold text-neon">3+</h4>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div 
              className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-neon/20 text-center box-glow"
            >
              <h4 className="text-3xl font-bold text-neon">3+</h4>
              <p className="text-gray-300">Projects</p>
            </div>
            
            <div 
              className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-neon/20 text-center box-glow"
            >
              <h4 className="text-3xl font-bold text-neon">7+</h4>
              <p className="text-gray-300">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
