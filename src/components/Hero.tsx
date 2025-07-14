import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced space-themed background elements */}
      {darkMode && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Large glowing orbs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating particles with different sizes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`hero-particle-${i}`}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              <div className={`w-${Math.random() > 0.5 ? '2' : '1'} h-${Math.random() > 0.5 ? '2' : '1'} bg-cyan-400/60 rounded-full`} />
            </div>
          ))}
        </div>
      )}
      
      {/* Light mode background */}
      {!darkMode && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-400/5" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Main content - centered */}
          <div className="text-center space-y-8 max-w-4xl">
            {/* Main Headline with enhanced styling */}
            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent relative">
                  Rahul Saini
                  {/* Glowing effect for dark mode */}
                  {darkMode && (
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent blur-sm opacity-50">
                      Rahul Saini
                    </span>
                  )}
                </span>
              </h1>
              <p className={`text-xl sm:text-2xl lg:text-3xl font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                DevOps Engineer & Engineering Student
              </p>
            </div>

            {/* Description with better spacing */}
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate about cloud automation, CI/CD pipelines, and modern development practices. 
              Currently studying at Arya College, Jaipur, while building the future of DevOps.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:rahul702399@gmail.com"
                className="group relative p-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              >
                <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                {darkMode && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                )}
              </a>
              <a
                href="https://github.com/rahul702399"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transform hover:scale-110 transition-all duration-300 hover:shadow-2xl ${
                  darkMode ? 'hover:bg-cyan-400 hover:shadow-cyan-400/25' : 'hover:bg-cyan-400'
                }`}
              >
                <Github className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                {darkMode && (
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                )}
              </a>
              <a
                href="https://linkedin.com/in/rahul-saini"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300 hover:shadow-2xl ${
                  darkMode ? 'hover:bg-blue-500 hover:shadow-blue-500/25' : 'hover:bg-blue-500'
                }`}
              >
                <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                {darkMode && (
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                )}
              </a>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-8">
              <button
                onClick={scrollToAbout}
                className={`group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-medium text-lg hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'hover:shadow-cyan-400/25' : ''
                }`}
              >
                <span>Explore My Work</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                {darkMode && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-cyan-400/50' : 'border-gray-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
            darkMode ? 'bg-cyan-400' : 'bg-gray-400'
          }`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;