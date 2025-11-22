// ============================================
// TYPE DEFINITIONS
// ============================================

export type SectionType = 'about' | 'skills' | 'projects' | 'experience';

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  status?: 'completed' | 'in-progress';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
