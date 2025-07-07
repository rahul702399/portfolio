import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for space theme
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Space Background with Particles */}
      {darkMode && (
        <div className="fixed inset-0 z-0">
          {/* Dark space background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" />
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            
            {/* Larger glowing dots */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`large-${i}`}
                className="absolute w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                  filter: 'blur(0.5px)'
                }}
              />
            ))}
            
            {/* Medium dots */}
            {[...Array(30)].map((_, i) => (
              <div
                key={`medium-${i}`}
                className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2.5 + Math.random() * 1.5}s`
                }}
              />
            ))}
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(51, 244, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(51, 244, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>
      )}

      <div className={`relative z-10 transform transition-all duration-700 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;