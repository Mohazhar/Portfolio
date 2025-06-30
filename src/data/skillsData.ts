import { Skill } from '../types';
import { 
  Code2, Database, Globe, Palette, Server, 
  Figma, Briefcase, Coffee, Lightbulb, MessageSquare 
} from 'lucide-react';

export const skills: Skill[] = [
  // Languages
  {
    name: 'JavaScript',
    icon: 'Code2',
    category: 'language',
    proficiency: 90
  },
  {
    name: 'TypeScript',
    icon: 'Code2',
    category: 'language',
    proficiency: 85
  },
  {
    name: 'HTML5',
    icon: 'Globe',
    category: 'language',
    proficiency: 95
  },
  {
    name: 'CSS3',
    icon: 'Palette',
    category: 'language',
    proficiency: 90
  },
  {
    name: 'Python(flask)',
    icon: 'Code2',
    category: 'language',
    proficiency: 80
  },
  
  // Frameworks
  {
    name: 'React',
    icon: 'Code2',
    category: 'framework',
    proficiency: 90
  },
  // {
  //   name: 'Next.js',
  //   icon: 'Code2',
  //   category: 'framework',
  //   proficiency: 85
  // },
  {
    name: 'Tailwind CSS',
    icon: 'Palette',
    category: 'framework',
    proficiency: 90
  },
  // {
  //   name: 'Node.js',
  //   icon: 'Server',
  //   category: 'framework',
  //   proficiency: 85
  // },
  // {
  //   name: 'Express',
  //   icon: 'Server',
  //   category: 'framework',
  //   proficiency: 80
  // },
  
  // Tools
  {
    name: 'Git',
    icon: 'Code2',
    category: 'tool',
    proficiency: 85
  },
  {
    name: 'MYSQL',
    icon: 'Database',
    category: 'tool',
    proficiency: 80
  },
  {
    name: 'Postman',
    icon: 'API Configuration',
    category: 'tool',
    proficiency: 75
  },
  // {
  //   name: 'Figma',
  //   icon: 'Figma',
  //   category: 'tool',
  //   proficiency: 85
  // },
  // {
  //   name: 'Docker',
  //   icon: 'Code2',
  //   category: 'tool',
  //   proficiency: 70
  // },
  
  // Soft Skills
  {
    name: 'Communication',
    icon: 'MessageSquare',
    category: 'soft',
    proficiency: 90
  },
  {
    name: 'Problem Solving',
    icon: 'Lightbulb',
    category: 'soft',
    proficiency: 95
  },
  {
    name: 'Team Collaboration',
    icon: 'Briefcase',
    category: 'soft',
    proficiency: 90
  },
  {
    name: 'Time Management',
    icon: 'Coffee',
    category: 'soft',
    proficiency: 85
  }
];