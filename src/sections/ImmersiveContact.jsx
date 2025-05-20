import React, { useRef, useEffect, useState } from 'react';

const ImmersiveContact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Create an intersection observer to trigger animations when elements come into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset form submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      {/* Background particles effect */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <h2 
          ref={headingRef}
          className={`text-white text-5xl md:text-7xl font-bold mb-16 relative inline-block ${isInView ? 'animate-contact-heading' : 'opacity-0 translate-y-12'}`}
        >
          Contact
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column: Contact information */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-white/80 mb-8 max-w-md">
              I'm currently available for freelance work and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just say hello.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/20 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/60 mb-1">Email</h4>
                  <a 
                    href="mailto:kamranahmadkhan110@gmail.com" 
                    className="text-lg hover:text-white/80 transition-colors"
                  >
                    kamranahmadkhan110@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/20 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/60 mb-1">Location</h4>
                  <p className="text-lg">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/Kamranahmad80" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/kamranahmad-khan-8a74a8220" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right column: Contact form */}
          <div 
            ref={formRef} 
            className={`${isInView ? 'animate-contact-form' : 'opacity-0 translate-y-12'}`}
            style={{ animationDelay: '0.3s' }}
          >
            {isSubmitted ? (
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-8 h-full flex flex-col items-center justify-center text-white text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/80">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-black/30 backdrop-blur-sm border border-white/10 p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest text-white/60 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full bg-black/50 border border-white/20 text-white p-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${isInView ? 'animate-form-element' : 'opacity-0 translate-y-4'}`}
                    placeholder="Your name"
                    style={{ animationDelay: '0.5s' }}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full bg-black/50 border border-white/20 text-white p-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${isInView ? 'animate-form-element' : 'opacity-0 translate-y-4'}`}
                    placeholder="Your email"
                    style={{ animationDelay: '0.6s' }}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest text-white/60 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full bg-black/50 border border-white/20 text-white p-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none ${isInView ? 'animate-form-element' : 'opacity-0 translate-y-4'}`}
                    placeholder="Your message"
                    style={{ animationDelay: '0.7s' }}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest flex justify-center items-center ${isInView ? 'animate-form-element' : 'opacity-0 translate-y-4'}`}
                  style={{ animationDelay: '0.8s' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveContact;
