import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, ArrowRight } from 'lucide-react';
import AnimatedBlob from '../ui/AnimatedBlob';

const HeroSection: React.FC = () => {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/M_Mohammed_Azharudeen.pdf'; // Ensure this path is correct
  link.download = 'M_Mohammed_Azharudeen.pdf';
  link.click();
};


  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <AnimatedBlob className="bg-primary-300 dark:bg-primary-700 top-1/4 -left-12 w-72 h-72" />
      <AnimatedBlob className="bg-secondary-300 dark:bg-secondary-700 bottom-1/3 right-0 w-80 h-80 animation-delay-2000" />
      <AnimatedBlob className="bg-accent-300 dark:bg-accent-700 bottom-0 left-1/3 w-64 h-64 animation-delay-4000" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6 font-bold text-gray-800 dark:text-white">
            Hello, I'm <span className="gradient-text">M MOHAMMED AZHARUDEEN</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 min-h-[3rem] text-gray-700 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1000,
                // 'UI/UX Designer',
                // 1000,
                'React Developer',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I create beautiful, responsive websites with clean code and exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleViewProjects} 
              className="btn-primary flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleDownloadResume} 
              className="btn-outline flex items-center justify-center gap-2"
            >
              Download Resume <Download size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <ArrowDown size={32} className="text-primary-500 dark:text-primary-400" />
      </div>
    </section>
  );
};

export default HeroSection;