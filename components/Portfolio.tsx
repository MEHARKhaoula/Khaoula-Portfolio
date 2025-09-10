"use client"
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Brain, Database, Server, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'AI & ML': ['Python', 'PyTorch', 'TensorFlow', 'HuggingFace', 'LangChain', 'RAG', 'NLP', 'Scikit-learn'],
    'Full-Stack': ['Next.js', 'Vue.js', 'TypeScript', 'Laravel', 'FastAPI', 'Tailwind CSS', 'Supabase', 'Firebase'],
    'Mobile': ['Flutter', 'Dart', 'Kotlin', 'Android'],
    'Database': ['Oracle', 'MySQL', 'FAISS'],
    'DevOps': ['Docker', 'Linux', 'Git', 'VMs', 'RedHat', 'Debian']
  };

  const projects = [
    {
      title: 'AI Trip Planner',
      description: 'AI-powered trip planner with Next.js 15 and Google Gemini AI. Generates personalized itineraries with real images via Foursquare API.',
      tech: ['Next.js 15', 'Google Gemini AI', 'Foursquare API', 'Supabase'],
      link: 'https://ai-trip-planner-dmct.vercel.app/',
      category: 'AI'
    },
    {
      title: 'First Aid Chatbot',
      description: 'Intelligent assistant trained on certified first-aid manuals with RAG pipeline using FAISS and Mistral model.',
      tech: ['Python', 'RAG', 'FAISS', 'Mistral', 'LangChain', 'Streamlit'],
      github: 'https://github.com/MEHARKhaoula/First-Aid-Chatbot',
      category: 'AI'
    },
 
  ];

  const experience = [
    {
      title: 'Research and Development Engineer',
      company: 'Sonatrach',
      period: 'Feb 2024 - Present',
      location: 'Algiers, Algeria',
      description: 'Developed enterprise web applications used by thousands of employees, performed QA testing, and managed VM deployments.'
    },
    {
      title: 'Full-stack Developer',
      company: 'Epsilon Engineering Services',
      period: 'Oct 2023 - May 2024',
      location: 'Vélizy-Villacoublay, France (Remote)',
      description: 'Contributed to custom ERP system development with payment and invoicing modules in an agile remote team.'
    },
    {
      title: 'Machine Learning Intern',
      company: 'National School of Computer Science',
      period: 'Sept 2022 - Jun 2023',
      location: 'Algiers, Algeria',
      description: 'Researched transformer-based models for discourse coherence measurement, fine-tuned BERT, RoBERTa, and GPT models.'
    }
  ];

  const scrollToSection = (sectionId:any)  => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              KM
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 capitalize hover:text-purple-400 transition-colors w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KM
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Khaoula Mehar
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Computer Science Engineer
          </h2>
          
          <p className="text-xl mb-12 text-gray-400 leading-relaxed">
            Specializing in <span className="text-purple-400 font-semibold">AI & Machine Learning</span> and 
            <span className="text-pink-400 font-semibold"> Full-Stack Development</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/MEHARKhaoula" className="hover:text-purple-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="mailto:khaoulamehar@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail size={28} />
            </a>
            <a href="tel:+213559878848" className="hover:text-purple-400 transition-colors">
              <Phone size={28} />
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineer with expertise in both AI/Machine Learning and Full-Stack Development. 
                With experience in fine-tuning transformer models and building scalable web applications, I bridge the gap between 
                cutting-edge AI research and practical software solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Currently working as a Research and Development Engineer at Sonatrach, I've developed enterprise applications 
                used by thousands of employees while continuously exploring new frontiers in artificial intelligence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <Brain size={20} />
                  <span>AI & ML Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                  <Code size={20} />
                  <span>Full-Stack Developer</span>
                </div>
               
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Education & Certifications</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">State Engineer in Computer Science</h4>
                  <p className="text-gray-400">National School of Computer Science (2018-2023)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white">Master in Computer Research</h4>
                  <p className="text-gray-400">National School of Computer Science (2022-2023)</p>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Recent Certifications</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Deep Learning with TensorFlow 2.0</li>
                    <li>• Machine Learning in Python</li>
                    <li>• Data Analysis with Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'AI' 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-pink-500/20 text-pink-400'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-400 font-semibold">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-purple-400 mb-8">Education</h3>
              
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">State Engineer in Computer Science</h4>
                    <p className="text-purple-400 font-semibold">National School of Computer Science</p>
                    <p className="text-gray-400">Algiers, Algeria</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
                    2018 - 2023
                  </span>
                </div>
                <p className="text-gray-300">
                  Comprehensive computer science program covering software engineering, algorithms, 
                  data structures, and advanced computing concepts.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 hover:border-pink-500/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Master in Computer Research</h4>
                    <p className="text-pink-400 font-semibold">National School of Computer Science</p>
                    <p className="text-gray-400">Algiers, Algeria</p>
                  </div>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold">
                    2022 - 2023
                  </span>
                </div>
                <p className="text-gray-300">
                  Advanced research program focusing on AI, machine learning, and natural language processing, 
                  with emphasis on transformer models and discourse analysis.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-8">Professional Certifications</h3>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      Deep Learning with TensorFlow 2.0
                    </h4>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                      Sept 2024
                    </span>
                  </div>
                  <p className="text-blue-400 font-semibold mb-2">365 Data Science</p>
                  <p className="text-gray-300 text-sm">
                    Comprehensive deep learning course covering neural networks, CNNs, RNNs, and advanced TensorFlow implementations.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-green-500/50 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      Machine Learning in Python
                    </h4>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      Aug 2024
                    </span>
                  </div>
                  <p className="text-green-400 font-semibold mb-2">365 Data Science</p>
                  <p className="text-gray-300 text-sm">
                    Practical machine learning using Python, Scikit-learn, feature engineering, and model optimization techniques.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/50 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      Data Analysis with Python
                    </h4>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                      Aug 2023
                    </span>
                  </div>
                  <p className="text-yellow-400 font-semibold mb-2">Coursera</p>
                  <p className="text-gray-300 text-sm">
                    Data manipulation and analysis using Pandas, NumPy, and visualization libraries for data-driven insights.
                  </p>
                </div>
              </div>

              {/* Skills Validation */}
              {/* <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-bold text-purple-400 mb-3">Core Competencies Validated</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Deep Learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">TensorFlow</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Scikit-learn</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-sm">Python</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm">Neural Networks</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Years of Education</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-gray-300 text-sm">Professional Certifications</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <div className="text-gray-300 text-sm">Academic Degrees</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Core Skills Validated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need AI solutions, full-stack development, or want to discuss innovative ideas, 
            let's connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:khaoulamehar@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
            >
              <Mail size={32} className="text-purple-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">khaoulamehar@gmail.com</p>
            </a>
            
            <a
              href="tel:+213559878848"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-pink-500/50 transition-all hover:transform hover:scale-105"
            >
              <Phone size={32} className="text-pink-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+213 559 878 848</p>
            </a>
            
            <a
              href="https://github.com/MEHARKhaoula"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
            >
              <Github size={32} className="text-blue-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400">MEHARKhaoula</p>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin size={20} />
            <span>Algiers, Algeria</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Khaoula Mehar. Built with Next.js and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;