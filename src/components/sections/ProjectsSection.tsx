import React, { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projectsData';
import { Github, ExternalLink, Play } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      ));
    }
  }, [filter]);

  // Extract unique tags for filtering
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore some of my recent work and personal projects"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag === 'All' ? 'all' : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                (filter === 'all' && tag === 'All') || filter === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="Watch Video Walkthrough"
                    >
                      <Play size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;