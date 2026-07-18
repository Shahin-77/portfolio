/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  years?: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
}
