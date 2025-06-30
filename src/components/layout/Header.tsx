import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold gradient-text cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection('hero');
          }}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('about');
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('projects');
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('skills');
            }}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('experience');
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('contact');
            }}
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-dark-600 hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-gray-800" />
            ) : (
              <Sun size={20} className="text-yellow-300" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-dark-600 hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-gray-800" />
            ) : (
              <Sun size={20} className="text-yellow-300" />
            )}
          </button>
          <button
            onClick={handleMenuToggle}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`fixed inset-0 z-40 bg-white dark:bg-dark-800 p-6 transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-end">
            <button
              onClick={handleMenuToggle}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 mt-10 items-center">
            <a
              href="#about"
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('about');
              }}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('projects');
              }}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('skills');
              }}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('experience');
              }}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;