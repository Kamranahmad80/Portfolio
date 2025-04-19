import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import ThreeBackground from "./components/ThreeBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { initAllAnimations } from './utils/scrollAnimations';
import "./App.css";

const App = () => {
  // Initialize scroll animations on component mount
  useEffect(() => {
    const cleanup = initAllAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-galaxy py-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Kamran's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
