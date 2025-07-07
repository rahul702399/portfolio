import React from 'react';
import { Trophy, Award, Star, Users } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "School Debate Competition",
      description: "Secured 3rd place in the inter-school debate competition, demonstrating strong communication and analytical skills.",
      year: "2021",
      category: "Academic Excellence",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Best DevOps Project",
      description: "Recognized for implementing an innovative CI/CD pipeline that improved deployment efficiency by 75%.",
      year: "2024",
      category: "Technical Innovation",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects with focus on DevOps tools and automation scripts.",
      year: "2023-2024",
      category: "Community Impact",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Technical Team Lead",
      description: "Led a team of 5 developers in building a comprehensive monitoring solution for cloud infrastructure.",
      year: "2024",
      category: "Leadership",
      gradient: "from-green-400 to-blue-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: "📁" },
    { number: "50+", label: "GitHub Commits", icon: "💻" },
    { number: "3+", label: "Years Learning", icon: "🎓" },
    { number: "100%", label: "Passion Level", icon: "🔥" }
  ];

  return (
    <section id="achievements" className={`py-20 lg:py-32 ${
      darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Milestones and recognitions that mark my journey in technology and personal growth
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50' 
                  : 'bg-white border-gray-200 hover:border-cyan-400/50'
              }`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.number}
              </div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {achievement.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {achievement.title}
                    </h3>
                    <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} text-white`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 opacity-20">
                  <div className={`w-8 h-8 bg-gradient-to-r ${achievement.gradient} rounded-full`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full border ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-700 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-600'
          }`}>
            <Trophy className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-medium">Always striving for excellence and continuous learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;