import React, { useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/skillsData';
import { 
  Code2, Database, Globe, Palette, Server, 
  Figma, Briefcase, Coffee, Lightbulb, MessageSquare 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsSection: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('all');
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const getIcon = (iconName: string) => {
    const props = { size: 22, className: "text-primary-500 dark:text-primary-400" };
    
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Figma': return <Figma {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and skills I've worked with"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setFilter('language')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'language'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Languages
          </button>
          <button
            onClick={() => setFilter('framework')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'framework'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Frameworks
          </button>
          <button
            onClick={() => setFilter('tool')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'tool'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Tools
          </button>
          <button
            onClick={() => setFilter('soft')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'soft'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full progress-bar"
                  style={{ '--progress-width': `${skill.proficiency}%` } as React.CSSProperties}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                {skill.proficiency}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;