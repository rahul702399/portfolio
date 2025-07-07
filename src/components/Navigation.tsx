import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800' 
          : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced styling */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code className="h-8 w-8 text-cyan-400" />
              {darkMode && (
                <Code className="absolute inset-0 h-8 w-8 text-cyan-400 blur-sm opacity-50" />
              )}
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rahul Saini
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-200 hover:text-cyan-400 group ${
                  darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`relative p-2 rounded-full transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-gray-200 hover:bg-gray-300 border border-gray-300'
              }`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
              {darkMode && (
                <div className="absolute inset-0 rounded-full bg-gray-800 blur-sm opacity-50" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`relative p-2 rounded-full transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-gray-200 hover:bg-gray-300 border border-gray-300'
              }`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden transition-all duration-300 border-t ${
          darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md border-gray-800' 
            : 'bg-white/95 backdrop-blur-md border-gray-200'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;