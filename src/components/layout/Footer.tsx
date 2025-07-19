import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 py-10 mt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Creating amazing digital experiences
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a
                href="https://github.com/mohazhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-azharudeen-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              {/* <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a> */}
              <a
                href="mailto:mohammedazharudeen.03@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} M. Mohammed Azharudeen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
