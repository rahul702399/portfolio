import React from 'react';
import { GraduationCap, MapPin, Calendar, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Engineering Student at Arya College, Jaipur"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      description: "Jaipur, Rajasthan, India"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Experience",
      description: "DevOps & Cloud Development"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Focus",
      description: "Automation & CI/CD Pipelines"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm an engineering student at Arya College, Jaipur, with a deep passion for DevOps, 
                cloud technologies, and automation. My journey in technology began with a curiosity 
                about how systems work together, and it has evolved into a dedicated pursuit of 
                creating efficient, scalable solutions.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I specialize in building robust CI/CD pipelines, containerizing applications with Docker, 
                and orchestrating deployments with Kubernetes. My experience spans across various 
                programming languages and cloud platforms, always with a focus on reliability and performance.
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                When I'm not coding or configuring infrastructure, you can find me exploring new 
                technologies, contributing to open-source projects, or sharing my knowledge with 
                the developer community.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50' 
                      : 'bg-white border-gray-200 hover:border-cyan-400/50 hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-white">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {highlight.title}
                      </h3>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-2xl transform rotate-3" />
              <div className={`relative p-8 rounded-2xl border-2 ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">RS</span>
                    </div>
                    <h3 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Rahul Saini
                    </h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      DevOps Engineer & Student
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Problem Solving
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Cloud Technologies
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-blue-500 rounded-full" />
                          ))}
                          <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Team Leadership
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-purple-500 rounded-full" />
                          ))}
                          <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;