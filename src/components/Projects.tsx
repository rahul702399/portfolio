import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud, GitBranch, Mail } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "Email Automation with Python",
      description: "This project showcases how to send emails programmatically using Python. By integrating with Gmail's SMTP server, the script securely authenticates and sends fully customizable messages — making it a handy solution for automating alerts, reminders, or any communication tasks.",
      technologies: ["Python 3", "smtplib", "email.message", "Gmail SMTP", "TLS"],
      icon: <Mail className="h-8 w-8" />,
      gradient: "from-green-400 to-emerald-500",
      features: [
        "Secure Gmail login using App Passwords",
        "Compose and send custom emails via script",
        "CLI-based for quick automation",
        "Easily extendable for bulk or scheduled mailing"
      ],
      githubUrl: "https://github.com/rahul702399/email.py",
      linkedinUrl: "https://linkedin.com/in/rahul-saini-python-automation"
    },
    {
      title: "Automated CI/CD Pipeline",
      description: "Built a comprehensive CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated testing, building, and deployment of web applications.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
      icon: <GitBranch className="h-8 w-8" />,
      gradient: "from-cyan-400 to-blue-500",
      features: [
        "Automated testing with 99% code coverage",
        "Zero-downtime deployments",
        "Multi-environment support",
        "Rollback capabilities"
      ]
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Designed and implemented Infrastructure as Code using Terraform and Ansible to manage cloud resources across multiple environments.",
      technologies: ["Terraform", "Ansible", "AWS", "Python", "CloudFormation"],
      icon: <Cloud className="h-8 w-8" />,
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Multi-cloud deployment",
        "Resource optimization",
        "Cost monitoring",
        "Disaster recovery"
      ]
    },
    {
      title: "Microservices Architecture",
      description: "Developed a scalable microservices architecture with containerized applications, service mesh, and comprehensive monitoring.",
      technologies: ["Docker", "Kubernetes", "Istio", "Prometheus", "Grafana"],
      icon: <Server className="h-8 w-8" />,
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Service discovery",
        "Load balancing",
        "Circuit breakers",
        "Distributed tracing"
      ]
    },
    {
      title: "Database Migration Tool",
      description: "Created an automated database migration and backup solution with zero-downtime migrations and data integrity checks.",
      technologies: ["Python", "PostgreSQL", "MongoDB", "Redis", "Shell Script"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-pink-600 to-red-500",
      features: [
        "Schema versioning",
        "Data validation",
        "Automatic rollbacks",
        "Performance optimization"
      ]
    },
    {
      title: "Monitoring & Alerting System",
      description: "Implemented comprehensive monitoring solution with real-time alerting, dashboards, and automated incident response.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "PagerDuty", "Slack"],
      icon: <Server className="h-8 w-8" />,
      gradient: "from-red-500 to-orange-500",
      features: [
        "Real-time metrics",
        "Custom dashboards",
        "Smart alerting",
        "Incident automation"
      ]
    },
    {
      title: "Security Automation Pipeline",
      description: "Developed security-first DevOps pipeline with automated vulnerability scanning, compliance checks, and security testing.",
      technologies: ["Trivy", "SonarQube", "OWASP ZAP", "Vault", "Kubernetes"],
      icon: <GitBranch className="h-8 w-8" />,
      gradient: "from-orange-500 to-cyan-400",
      features: [
        "Vulnerability scanning",
        "Security testing",
        "Compliance reporting",
        "Secret management"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Real-world DevOps projects showcasing automation, scalability, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      <span className={`text-xs ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/rahul702399"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-medium hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;