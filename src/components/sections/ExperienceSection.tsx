import React, { useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experienceData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExperienceSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and career path"
        />

        <div className="relative timeline-container py-10">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`timeline-item mb-16 lg:mb-0 flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="lg:w-1/2 flex justify-center items-center p-4">
                <div className={`lg:w-3/4 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} p-6 bg-white dark:bg-dark-700 rounded-xl shadow-md`}>
                  <div className="flex items-center mb-4">
                    {experience.logo && (
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`} 
                        className="w-12 h-12 object-cover rounded-full mr-4"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {experience.role}
                      </h3>
                      <div className="text-primary-500 dark:text-primary-400 font-medium">
                        {experience.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {experience.duration}
                    </div>
                    <ul className="space-y-2">
                      {experience.description.map((point, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex">
                          <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-2.5 py-0.5 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;