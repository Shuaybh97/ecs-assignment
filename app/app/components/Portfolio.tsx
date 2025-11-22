'use client';
import { Github, Linkedin, Code, Cloud, ExternalLink, Download, Clock } from 'lucide-react';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { SectionType, SkillGroup, Project, Experience } from '@/data/types';
import { socialLinks } from '@/data/social';

export default function Portfolio(): JSX.Element {
  const sections: SectionType[] = ['about', 'skills', 'projects', 'experience'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
            >
              Portfolio
            </button>
            <div className="flex gap-6">
              {sections.map((section: SectionType) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors text-slate-300 hover:text-cyan-400`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-5xl font-bold text-white mb-2">Shuaib Hussein</h2>
                <p className="text-xl text-cyan-400">Senior Platform Engineer</p>
              </div>
              
              <p className="text-lg text-slate-300 max-w-3xl mb-8">
                Building scalable infrastructure and automating everything. Passionate about cloud-native technologies, 
                container orchestration, and making developers' lives easier through robust platform engineering.
              </p>

              <div className="flex gap-4">
                <a href={socialLinks.cv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-end">
              <div className="w-80 h-80 rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg">
                <img 
                  src="/profile.jpg" 
                  alt="Shuaib Hussein" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* About Section */}
          <section id="about" className="py-20">
            <h3 className="text-3xl font-bold text-white mb-8">About Me</h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <div className="flex items-start gap-6 mb-6">
                <Cloud className="w-12 h-12 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-lg mb-4">
                    I'm a Platform DevOps Engineer with a passion for building robust, scalable infrastructure 
                    that empowers development teams to ship faster and more reliably.
                  </p>
                  <p className="text-slate-300 text-lg mb-4">
                    My expertise spans cloud platforms, container orchestration, CI/CD automation, and infrastructure 
                    as code. I believe in treating infrastructure as software and applying software engineering best 
                    practices to operations.
                  </p>
                  <p className="text-slate-300 text-lg">
                    When I'm not automating infrastructure or debugging Kubernetes clusters, I enjoy contributing to 
                    open-source projects and exploring new cloud-native technologies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup: SkillGroup) => (
                <div key={skillGroup.category} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-xl font-semibold text-white">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <h3 className="text-3xl font-bold text-white mb-8">Featured Projects</h3>
            <div className="grid gap-6">
              {projects.map((project: Project) => (
                <div key={project.title} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors relative">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                      {project.status === 'in-progress' && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-semibold">
                          <Clock className="w-3 h-3" />
                          In Progress
                        </span>
                      )}
                    </div>
                    {project.link && project.status !== 'in-progress' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-slate-700 text-cyan-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <h3 className="text-3xl font-bold text-white mb-8">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job: Experience) => (
                <div key={job.role} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                    <span className="text-cyan-400 text-sm">{job.period}</span>
                  </div>
                  <p className="text-slate-400 mb-3">{job.company}</p>
                  <p className="text-slate-300">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          <p>© 2024 Shuaib Hussein.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
