export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface MethodologyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Result {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
}

export interface SuccessCase {
  id: number;
  company: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
}