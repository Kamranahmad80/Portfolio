import React from "react";

// Projects data
const projects = [
  {
    id: 1,
    title: "Valcom 78",
    code: "78",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwdWl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Notifier",
    code: "G",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwJTIwZGVzaWdufGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Cosmos",
    code: "\u2662", // Diamond symbol
    category: "UI Experience",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  }
];

// TND Projects data (bottom row)
const tndProjects = [
  {
    id: 1,
    title: "TND",
    code: "01",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3QlMjByZWR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "CE",
    code: "02",
    image: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFic3RyYWN0JTIwYmx1ZXxlbnwwfHwwfHx8MA%3D"
  },
  {
    id: 3,
    title: "D3",
    code: "03",
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3QlMjBwdXJwbGV8ZW58MHx8MHx8fDA%3D"
  }
];

// Top row project grid items (4x1 grid)
const TopGridItem = ({ project }) => (
  <div className="bg-[#040414] aspect-square p-4 flex flex-col justify-center items-center">
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold mb-3">{project.code}</div>
      <div className="text-sm uppercase tracking-widest">{project.title}</div>
    </div>
  </div>
);

// Center row project (featured image)
const CenterProject = () => (
  <div className="bg-[#040414] aspect-4-3 overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3QlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D" 
      alt="Featured Design"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-4 right-4 text-xs uppercase tracking-widest">Ionia 1.0</div>
  </div>
);

// Bottom grid project card
const BottomGridItem = ({ project, showDetailButton = true }) => (
  <div className="bg-[#040414] overflow-hidden relative group">
    <img 
      src={project.image}
      alt={project.title}
      className="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
      <div className="text-center">
        <div className="text-xl font-bold mb-1">{project.title}</div>
      </div>
    </div>
    {showDetailButton && (
      <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between">
        <span className="text-white">{project.code}</span>
        <a href="#" className="text-xs uppercase tracking-widest text-white inline-flex items-center gap-1">
          Details
        </a>
      </div>
    )}
  </div>
);

// Projects section - exactly matching Simon Sparks layout
const Projects = () => {
  return (
    <section id="projects" className="pt-36 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Four columns with just letters/numbers */}
        <div className="grid grid-cols-4 gap-5 mb-5">
          <TopGridItem project={projects[0]} />
          <TopGridItem project={projects[1]} />
          <div className="aspect-square bg-[#040414] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" 
              alt="Abstract Design"
              className="w-full h-full object-cover"
            />
          </div>
          <TopGridItem project={projects[2]} />
        </div>
        
        {/* Row 2: Featured project section */}
        <div className="mb-20">
          <CenterProject />
        </div>
        
        {/* Boundless Art Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Boundless Art: 3D Discovery</h2>
          <p className="text-gray-400 max-w-xl mb-6">
            Explore the intersection of design and technology through immersive 3D experiences and interactive visualizations. 
            These projects push the boundaries of digital art and user interaction.
          </p>
          <a href="#" className="inline-block border border-white py-2 px-5 text-xs uppercase tracking-widest hover:bg-white hover:text-[#05051a] transition-colors">
            Learn More
          </a>
        </div>
        
        {/* Row 3: TND Projects */}
        <div className="grid grid-cols-3 gap-5 mb-5">
          {tndProjects.map(project => (
            <BottomGridItem key={project.id} project={project} />
          ))}
        </div>
        
        {/* Row 4: Detail buttons */}
        <div className="grid grid-cols-3 gap-5">
          {tndProjects.map(project => (
            <div key={project.id} className="py-2 text-center">
              <a href="#" className="inline-block text-xs uppercase tracking-widest border border-white py-1 px-3 hover:bg-white hover:text-[#05051a] transition-colors">
                {project.title} Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
