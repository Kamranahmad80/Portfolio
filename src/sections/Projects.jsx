import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Gourmet Delight",
    description: "A restaurant website with animated sections and responsive design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "AI Job Finder",
    description: "An AI-powered job recommendation system built with React and ML models.",
    tags: ["React", "Node.js", "MongoDB", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://onjob-omega.vercel.app"
  }
];

const ProjectCard = ({ project, index }) => (
  <div
    data-animate="fade-up"
    data-delay={index * 100}
    className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-neon/20 hover:box-glow transition-all duration-300 hover:scale-[1.02] group"
  >
    <div className="h-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww";
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-neon mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-neon/10 text-neon px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neon hover:text-white transition-colors"
        >
          View Project
        </a>
        <button className="text-neon hover:text-white transition-colors">Code</button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [category, setCategory] = useState("All");
  
  const categories = ["All", ...new Set(projects.flatMap(p => p.tags))];
  
  const filteredProjects = category === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(category));

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2
          data-animate="fade-down"
          className="text-4xl font-bold text-star text-glow mb-8 text-center"
        >
          Projects
        </h2>
        
        <div className="flex justify-center mb-12 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap
                  ${cat === category 
                    ? 'bg-neon text-galaxy' 
                    : 'bg-black/30 text-neon border border-neon/20 hover:bg-neon/10'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
