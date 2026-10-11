export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  technologies: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  photo: string;
}