import { useEffect } from 'react';
import ThreeScene from "./components/ThreeScene";
import CustomCursor from "./components/CustomCursor";
import ImmersiveNavbar from "./components/ImmersiveNavbar";
import ImmersiveHero from "./sections/ImmersiveHero";
import ImmersiveAbout from "./sections/ImmersiveAbout";
import Skills from "./sections/Skills";
import ImmersiveProjects from "./sections/ImmersiveProjects";
import ImmersiveContact from "./sections/ImmersiveContact";
import { initAllAnimations } from './utils/scrollAnimations';
import "./App.css";

// Portfolio grid sections based on Simon Sparks design
const FeatureShowcase = () => (
  <section className="py-20 px-6 md:px-12 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-4-3 bg-[#040414] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl text-accent mb-4">S</div>
            <div className="text-xl uppercase tracking-widest">Stage Space</div>
          </div>
        </div>
        <div className="aspect-4-3 bg-[#040414] flex flex-col justify-end p-8">
          <h2 className="text-3xl font-bold mb-4">Boundless Art: 3D Discovery</h2>
          <p className="text-gray-400 mb-6">Innovative 3D visualizations and interactive designs showcasing the latest in web technology and creative expression.</p>
          <a href="#projects" className="inline-block border border-white py-2 px-5 text-sm uppercase tracking-widest hover:bg-white hover:text-[#05051a] transition-colors">
            View More
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ArtShowcase = () => (
  <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#070720]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square bg-[#1a8761] p-4">
          <img 
            src="https://images.unsplash.com/photo-1547104442-044448b76363?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0JTIwYXJ0fGVufDB8fDB8fHww" 
            alt="Abstract Art" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square bg-[#040414] flex flex-col justify-end p-8">
          <h2 className="text-3xl font-bold mb-2">ART UNBOUND ODYSSEY</h2>
          <p className="text-gray-400 mb-2 uppercase tracking-widest">CULTURAL PROJECT</p>
        </div>
      </div>
    </div>
  </section>
);

const ConferenceSection = () => (
  <section className="py-20 px-6 md:px-12 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-sm uppercase tracking-widest text-gray-400">§ Conference</div>
        <h2 className="text-2xl font-bold">Organizing a conference?</h2>
        <a href="#contact" className="inline-block border border-white py-2 px-5 text-sm uppercase tracking-widest hover:bg-white hover:text-[#05051a] transition-colors">
          Get Quote
        </a>
      </div>
    </div>
  </section>
);

const App = () => {
  // Initialize scroll animations on component mount
  useEffect(() => {
    const cleanup = initAllAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* 3D Background */}
      <ThreeScene />
      
      {/* Custom cursor for immersive feel */}
      <CustomCursor />
      
      {/* Immersive Navbar */}
      <ImmersiveNavbar />
      
      {/* Main Content - z-indexed to appear above the 3D background */}
      <main className="relative z-10">
        <ImmersiveHero />
        <ImmersiveAbout />
        <Skills />
        <ImmersiveProjects />
        <ImmersiveContact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 md:px-12 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-2xl mb-6 md:mb-0">
            <span className="border border-white px-2 py-0.5 transition-all duration-300 hover:border-purple-400 hover:text-purple-400">K</span>
          </div>
          <div className="flex gap-8 text-sm uppercase tracking-widest">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300">Work</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
