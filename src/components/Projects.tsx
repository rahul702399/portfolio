import React, { useState } from 'react';
import { ExternalLink, Github, Server, Mail, Phone, MessageSquare, Cloud, Container, Code, Database, Settings, Smartphone } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "Sending Email Using Python",
      description: "Automated sending of custom emails using Python with Gmail authentication and secure delivery.",
      technologies: ["Python", "smtplib", "Gmail SMTP"],
      icon: <Mail className="h-8 w-8" />,
      gradient: "from-green-400 to-emerald-500",
      category: "automation",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_python-automation-100daysofcode-activity-7349796346788278272-6CBa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Automated WhatsApp Messaging with Python",
      description: "Python script to send automated WhatsApp messages via Twilio API with secure credentials.",
      technologies: ["Python", "Twilio API", "WhatsApp Sandbox"],
      icon: <MessageSquare className="h-8 w-8" />,
      gradient: "from-green-500 to-teal-500",
      category: "automation",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_python-twilio-whatsappapi-activity-7349888916071620610-dAHh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "SMS Sending with Python + Twilio",
      description: "Real-time SMS sending using Python and Twilio API for notifications, OTPs, and alerts.",
      technologies: ["Python", "Twilio API"],
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      category: "automation",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_python-twilio-apiautomation-activity-7350405967852785666-qd-A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Automated Phone Call with Python + Twilio",
      description: "Real-time phone calls triggered from Python scripts using Twilio Voice API.",
      technologies: ["Python", "Twilio Voice API"],
      icon: <Phone className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      category: "automation",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_python-twilio-voiceapi-activity-7350409059130359809-mCl2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "CI/CD Pipeline with Jenkins, Docker & Flask",
      description: "Fully automated DevOps pipeline integrating Flask app, Jenkins builds, and Docker deployment.",
      technologies: ["Flask", "Jenkins", "Docker", "Git", "Linux", "Python"],
      icon: <Settings className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-500",
      category: "devops",
      linkedinUrl: "https://lnkd.in/gJFqr_sQ"
    },
    {
      title: "Apache Web Server in Docker",
      description: "Containerized Apache server with custom HTML page served via Docker.",
      technologies: ["Docker", "Apache HTTP Server (httpd:2.4)"],
      icon: <Server className="h-8 w-8" />,
      gradient: "from-red-500 to-pink-500",
      category: "devops",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_docker-apache-devops-activity-7351142383746473986-Yvbj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "First Kubernetes Pod Deployment",
      description: "Deployed custom NGINX pod on Kubernetes using pod.yaml with kubectl exec for container access.",
      technologies: ["Kubernetes", "NGINX", "K3d", "kubectl"],
      icon: <Container className="h-8 w-8" />,
      gradient: "from-blue-600 to-purple-600",
      category: "devops",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_kubernetes-devops-docker-activity-7351220721764765697-Mqj3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Webcam Photo Capture App (JavaScript)",
      description: "HTML5 & JavaScript-based web app to stream video and capture images from the device camera.",
      technologies: ["JavaScript", "HTML5", "CSS"],
      icon: <Code className="h-8 w-8" />,
      gradient: "from-yellow-500 to-orange-500",
      category: "web",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_javascript-webdevelopment-html5-activity-7351256864585678849-k1CW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Docker Inside Docker (DinD)",
      description: "Set up Docker-in-Docker for isolated CI/CD and containerized testing environments.",
      technologies: ["Docker", "Linux"],
      icon: <Container className="h-8 w-8" />,
      gradient: "from-indigo-500 to-blue-600",
      category: "devops",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_docker-devops-ci-activity-7351550269681250304-sVLA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Case Study: PayPal & Docker for CI/CD",
      description: "Analysis of PayPal's adoption of Docker to improve CI/CD performance and reduce build times.",
      technologies: ["Docker", "Jenkins", "CI/CD Concepts"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-teal-500 to-green-600",
      category: "devops",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_docker-devops-ciabrcd-activity-7351573898062123011-54vq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Flask + PostgreSQL + Redis Microservices",
      description: "Multi-container microservices architecture with Flask API, PostgreSQL database, and Redis caching.",
      technologies: ["Flask", "PostgreSQL", "Redis", "Docker Compose"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-purple-600 to-indigo-600",
      category: "devops",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_microservices-docker-flask-activity-7353319906538377217-TQfO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Ansible Cloud Automation on AWS",
      description: "Automated AWS EC2 configuration and management using Ansible playbooks and inventory.",
      technologies: ["Ansible", "AWS EC2", "Linux"],
      icon: <Cloud className="h-8 w-8" />,
      gradient: "from-orange-400 to-red-500",
      category: "cloud",
      linkedinUrl: "https://lnkd.in/ghsU-PX5"
    },
    {
      title: "Kubernetes Benefits & Real-World Examples",
      description: "Detailed breakdown of why companies adopt Kubernetes with case studies from Spotify, Airbnb, Pinterest, and more.",
      technologies: ["Kubernetes", "Docker", "CI/CD Tools", "Jenkins", "ArgoCD", "Helm"],
      icon: <Container className="h-8 w-8" />,
      gradient: "from-cyan-500 to-blue-600",
      category: "devops",
      githubUrl: "https://github.com/rahul702399"
    },
    {
      title: "Remote Docker Command Runner",
      description: "Web app to manage remote Docker containers via SSH with Streamlit interface.",
      technologies: ["Python", "Streamlit", "Paramiko", "Docker", "SSH"],
      icon: <Server className="h-8 w-8" />,
      gradient: "from-green-600 to-teal-600",
      category: "automation",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_devops-docker-remotemanagement-activity-7354757429181501442-Ip-r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    },
    {
      title: "Gesture-Controlled EC2 Launcher",
      description: "Launch AWS EC2 instances using hand gestures tracked via webcam.",
      technologies: ["Python", "OpenCV", "CVZone", "AWS EC2", "boto3"],
      icon: <Cloud className="h-8 w-8" />,
      gradient: "from-pink-500 to-rose-500",
      category: "cloud",
      linkedinUrl: "https://lnkd.in/gXW7UKve"
    },
    {
      title: "AWS EC2 Control Panel + S3 Uploader",
      description: "Streamlit dashboard to launch/terminate EC2 instances and upload files to S3.",
      technologies: ["Python", "Streamlit", "AWS EC2", "AWS S3", "boto3", "IAM"],
      icon: <Cloud className="h-8 w-8" />,
      gradient: "from-blue-500 to-indigo-600",
      category: "cloud",
      linkedinUrl: "https://lnkd.in/gzAsmK3s"
    },
    {
      title: "Twitter Automation with Python + Tweepy",
      description: "Script to post tweets directly from Python using Tweepy and Twitter API authentication.",
      technologies: ["Python", "Tweepy", "Twitter API"],
      icon: <MessageSquare className="h-8 w-8" />,
      gradient: "from-sky-400 to-blue-500",
      category: "automation",
      linkedinUrl: "https://lnkd.in/gXN9DDxt"
    },
    {
      title: "Flask App in Docker",
      description: "Containerized Flask web app deployed in Docker with external browser access.",
      technologies: ["Python", "Flask", "Docker"],
      icon: <Container className="h-8 w-8" />,
      gradient: "from-emerald-500 to-green-600",
      category: "devops",
      linkedinUrl: "https://www.linkedin.com/posts/rahul-saini-91ba0a339_juljunction-startupindia-creatorprogram-activity-7356785848899547139-stBM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFULkKcB4Mg5xe1FJMZ_jC8bUREzwPwNgGg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'devops', name: 'DevOps & CI/CD', count: projects.filter(p => p.category === 'devops').length },
    { id: 'cloud', name: 'Cloud & AWS', count: projects.filter(p => p.category === 'cloud').length },
    { id: 'automation', name: 'Automation', count: projects.filter(p => p.category === 'automation').length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            A comprehensive showcase of DevOps, automation, and cloud projects demonstrating real-world solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                
                <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-400' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
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
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;