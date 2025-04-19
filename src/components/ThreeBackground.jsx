import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 30;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ffff, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    // Fill positions and colors
    for(let i = 0; i < particlesCount * 3; i++) {
      // Positions - random spread in 3D space
      posArray[i] = (Math.random() - 0.5) * 50;
      
      // Colors - cyan/blue palette
      if(i % 3 === 0) {
        colorArray[i] = 0; // R
        colorArray[i+1] = Math.random() * 0.2 + 0.8; // G
        colorArray[i+2] = Math.random() * 0.2 + 0.8; // B
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Material with vertex colors
    const particlesMaterial = new THREE.PointsMaterial({ 
      size: 0.1,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Track mouse movement
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Track scroll position
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth follow for mouse movement
      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;
      
      particlesMesh.rotation.y += 0.003;
      particlesMesh.rotation.x += 0.001;
      
      // Responsive to mouse movement with smooth easing
      particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.05;
      particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.05;
      
      // Responsive to scroll
      const scrollFactor = scrollY * 0.0005;
      particlesMesh.position.y = -scrollFactor * 5;
      
      // Pulse effect
      const time = Date.now() * 0.001;
      particlesMaterial.size = 0.1 + Math.sin(time) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground; 