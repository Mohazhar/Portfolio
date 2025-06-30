import React, { useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePhoto from '../../assets/images/profile.jpg';

const AboutSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
           <div className="lg:w-2/5" data-aos="fade-right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-700 p-4 rounded-full shadow-lg">
                <span className="text-5xl">👋</span>
              </div>
            </div>
          </div>
          
          <div 
            className="lg:w-3/5"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              A passionate <span className="gradient-text">Frontend Developer</span> 
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              6 month of experience in creating beautiful, responsive websites and web applications, I've worked with a diverse range of clients from startups to enterprise companies. My approach combines clean code, modern design principles, and a focus on user experience.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm constantly learning and exploring new technologies to stay at the forefront of web development. My expertise includes React, TypeScript, Next.js, and various modern frontend frameworks and tools.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <span className="text-primary-500 dark:text-primary-400 mr-2">►</span>
                <span className="text-gray-700 dark:text-gray-300">6 month Experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary-500 dark:text-primary-400 mr-2">►</span>
                <span className="text-gray-700 dark:text-gray-300">2 Projects</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary-500 dark:text-primary-400 mr-2">►</span>
                <span className="text-gray-700 dark:text-gray-300">2 Happy Clients</span>
              </div>
              {/* <div className="flex items-center">
                <span className="text-primary-500 dark:text-primary-400 mr-2">►</span>
                <span className="text-gray-700 dark:text-gray-300">5 Certifications</span>
              </div> */}
            </div>
            
            <a href="#contact" className="btn-primary inline-flex items-center">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;