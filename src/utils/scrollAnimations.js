/**
 * Simple scroll animation utility
 * Animates elements as they enter the viewport
 */

// Intersection Observer options
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

/**
 * Initialize scroll animations for elements with data-animate attribute
 */
export const initScrollAnimations = () => {
  // Animation classes we can apply
  const animationClasses = {
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'zoom-in': 'animate-zoom-in',
    'zoom-out': 'animate-zoom-out',
    'flip': 'animate-flip'
  };
  
  // Create observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is in view
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animate;
        const delay = element.dataset.delay || 0;
        
        // Add animation class after specified delay
        setTimeout(() => {
          if (animationClasses[animationType]) {
            element.classList.add(animationClasses[animationType]);
            element.classList.add('animate-visible');
          }
        }, delay);
        
        // Stop observing after animation has been applied
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  // Select all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  // Start observing each element
  animatedElements.forEach(element => {
    element.classList.add('animate-hidden');
    observer.observe(element);
  });
  
  return observer;
};

/**
 * Apply parallax effect to elements with data-parallax attribute
 */
export const initParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  const handleParallax = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.1;
      const offset = scrollY * speed;
      
      element.style.transform = `translateY(${offset}px)`;
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', handleParallax);
  
  // Initial calculation
  handleParallax();
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleParallax);
};

// Export a single function to initialize all effects
export const initAllAnimations = () => {
  const scrollObserver = initScrollAnimations();
  const parallaxCleanup = initParallaxEffects();
  
  // Return cleanup function
  return () => {
    scrollObserver.disconnect();
    parallaxCleanup();
  };
}; 