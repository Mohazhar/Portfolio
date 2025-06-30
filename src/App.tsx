import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Your Name | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <Helmet>
        <title>M Mohammed Azharudeen</title>
        <meta
          name="description"
          content="Professional portfolio showcasing projects and skills in web development, design, and more."
        />
        <meta name="author" content="M Mohammed Azharudeen" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;