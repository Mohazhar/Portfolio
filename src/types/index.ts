export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'soft';
  proficiency: number; // 0-100
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  logo?: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type ThemeMode = 'light' | 'dark';