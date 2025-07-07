import React from 'react';
import { Code, Server, Cloud, Database, GitBranch, Container } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data & Analytics",
      skills: ["NumPy", "Pandas", "Data Analysis", "SQL", "MongoDB"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Platforms & OS",
      skills: ["Linux", "Ubuntu", "Windows", "macOS", "CentOS"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "DevOps & Containers",
      skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform"],
      color: "from-pink-600 to-red-500"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Version Control & CI/CD",
      skills: ["Git", "GitHub", "GitLab", "CI/CD Pipelines", "GitHub Actions"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Azure", "GCP", "CloudFormation", "Monitoring"],
      color: "from-orange-500 to-cyan-400"
    }
  ];

  return (
    <section id="skills" className={`py-20 lg:py-32 ${
      darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive toolkit for modern DevOps and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-2xl'
              }`}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700/50 hover:bg-gray-700' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {skill}
                    </span>
                    
                    {/* Skill level indicator */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < (skillIndex % 3 + 3) 
                              ? `bg-gradient-to-r ${category.color}` 
                              : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full border ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-700 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-600'
          }`}>
            <span className="text-sm font-medium">Always learning:</span>
            <span className="text-sm">Microservices, Service Mesh, Observability, Security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;