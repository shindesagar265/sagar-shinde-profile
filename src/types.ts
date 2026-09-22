export interface Achievement {
  title: string;
  description: string;
  icon: 'cloud' | 'database' | 'layers' | 'route' | 'shield' | 'users';
}

export interface SkillCategory {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

export interface Experience {
  company: string;
  role: string;
  period?: string;
  location?: string;
  summary: string;
  highlights: string[];
  color: string;
}

export interface Certification {
  code: string;
  title: string;
  area: string;
  description: string;
}

export interface Project {
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  approach: string;
  architecture: string[];
  technologies: string[];
  repositoryUrl: string;
}

export interface Article {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}
