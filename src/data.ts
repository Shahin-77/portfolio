/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, SkillCategory, Education, Certification, Achievement } from './types';

export const personalInfo = {
  name: 'Mohammed Shahin',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer building scalable web applications that solve real problems.',
  subtext: 'I build scalable full-stack web applications with React.js, Node.js, and modern databases, translating real-world problems into clean, working software. Currently focused on strengthening backend architecture and API design.',
  email: 'shahinmohammed698@gmail.com',
  phone: '+91-7010850373',
  location: 'Erode, Tamil Nadu',
  photo: '/shahin_final.jpg',
  github: 'https://github.com/Shahin-77',
  linkedin: 'https://linkedin.com/in/shahin786',
  leetcode: 'https://leetcode.com/u/shahin_786/',
  resumeUrl: '/resume.pdf',
};

export const aboutMe = "I'm a Computer Science Engineering student who learns best by building. Over the past year, I've worked across the MERN stack — designing REST APIs, implementing JWT authentication, and optimizing database operations for applications used by real people. My internship experience at Prodigy InfoTech and a MERN Stack training and internship program at Revamp Academy gave me hands-on exposure to production workflows, from Git collaboration to performance optimization. I care about writing code that's not just functional but maintainable — clean architecture, sensible data structures, and APIs that scale. Right now, I'm building AgriSmart, an AI-driven agriculture platform, while sharpening my problem-solving skills through DSA practice. I'm looking for opportunities where I can keep learning fast and contribute to meaningful engineering work.";

export const projects: Project[] = [
  {
    id: 'agrismart',
    title: 'AgriSmart',
    tagline: 'AI-Driven Agriculture Platform',
    description: 'A full-stack agricultural intelligence platform combining real-time sensor data with AI-powered crop insights.',
    highlights: [
      'Built an AI-driven platform integrating crop disease detection, real-time sensor analytics, and a Gemini-powered chatbot.',
      'Developed a Vite + React + TypeScript frontend with an Express/TypeScript backend and MongoDB (Mongoose).',
      'Integrated Google Gemini AI, OpenWeatherMap, and Nodemailer for weather insights and automated alerts.',
    ],
    image: '/project-agrismart.png',
    tags: ['React', 'TypeScript', 'Express', 'MongoDB', 'Gemini AI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'studyorblock',
    title: 'StudyorBlock',
    tagline: 'AI-Powered Academic Productivity Platform',
    description: 'A full-stack platform that cuts manual assignment tracking by more than half.',
    highlights: [
      'Reduced manual assignment tracking by 60% through a full-stack academic platform for task submission.',
      'Implemented JWT authentication and role-based dashboards for 100+ users.',
      'Designed scalable REST APIs with optimized database operations for secure task management.',
    ],
    image: '/project-studyorblock.png',
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    liveUrl: 'https://studyorblock.vercel.app/',
    githubUrl: 'https://github.com/Shahin-77/StudyorBlock.git',
  },
  {
    id: 'continuous-auth',
    title: 'Continuous Authentication System',
    tagline: 'Behavioral Trust Bubble',
    description: 'A security system that verifies users continuously instead of relying on a single login.',
    highlights: [
      'Improved authentication reliability by implementing continuous, behavior-based user verification.',
      'Reduced dependency on traditional login mechanisms through real-time, trust-based validation.',
      'Built secure APIs and behavioral monitoring modules that enhanced authentication accuracy.',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1VuptH4IZKrCvk926SVJ66r11tADo1yUF0ntjb4VqW3Y1z2XG5yxksmXQy4cIp7u8iynJKLX61XKY3UphzkGPbyaeKuLpGMayVQEvHtsAS0-ORxpokAr6IAIpN0s8svfU1K28L0gZ3NVZWsgLDs1SHLvJSnzvaFoSHCDNryecOUGgMx6w_KFrHZ04kKi-P6tlCKvWBqOsGgfIOcpAfHbmyLBn7qcknNvpmQF-tqu7T5Zbh1-8CsaZ',
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Security'],
    liveUrl: 'https://continueauth-frontend.vercel.app',
    githubUrl: 'https://github.com/Shahin-77/ContinueAuth.git',
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Full Stack Web Development Intern',
    company: 'Prodigy InfoTech',
    period: 'March 2026',
    description: [
      'Developed 3+ MERN applications, implementing REST APIs that improved application performance by 25%.',
      'Optimized database operations and debugging workflows, reducing development issues and improving code quality.',
    ],
    current: true,
  },
  {
    id: 'exp2',
    role: 'MERN Stack Developer Intern (Virtual)',
    company: 'Revamp Academy',
    period: 'April 2026 – July 2026',
    description: [
      'Built responsive React.js components and integrated 3+ backend APIs, improving application usability.',
      'Developed Node.js and Express.js modules while using Git workflows to improve code maintainability.',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'edu1',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Nandha College of Technology, India',
    period: '2023 – 2027',
    score: 'CGPA: 7.6 / 10',
  },
  {
    id: 'edu2',
    degree: 'Higher Secondary Education (12th Grade)',
    institution: 'S.V.N Matric. Hr. Sec. School',
    period: '2023',
    score: 'Percentage: 68%',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Strong foundation in both procedural and object-oriented programming.',
    icon: 'Code2',
    skills: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'SQL' },
      { name: 'HTML5 / CSS3' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Modern frontend and backend frameworks for building robust applications.',
    icon: 'Library',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Databases',
    description: 'Experience with both SQL and NoSQL database management systems.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Cloud & DevOps(Basics)',
    description: 'Tools and platforms for deployment, containerization, and version control.',
    icon: 'Cloud',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Git / GitHub' },
      
    ],
  },
  {
    title: 'Core Concepts',
    description: 'Foundational computer science principles for software engineering.',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'REST API Design' },
      { name: 'JWT Authentication' },
      { name: 'SDLC' },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    title: 'Google Cloud Certification',
    issuer: 'Google Developer Group',
    date: '2026',
    image: '/cert-google-cloud.jpg',
    link: '/cert-google-cloud.jpg',
  },
  {
    id: 'cert2',
    title: 'SQL — DataCamp',
    issuer: 'DataCamp',
    date: '2025',
    image: '/cert-sql-datacamp.jpg',
    link: '/cert-sql-datacamp.jpg',
  },
  {
    id: 'cert3',
    title: 'MERN Stack Development',
    issuer: 'Revamp Academy',
    date: '2026',
    image: '/cert-mern-revamp.jpg',
    link: '/cert-mern-revamp.jpg',
  },
  {
    id: 'cert4',
    title: 'Java Skill Certification',
    issuer: 'HackerRank',
    date: '2025',
    image: '/cert-hackerrank-java.png',
    link: '/cert-hackerrank-java.png',
  },
  {
    id: 'cert5',
    title: 'Programming in Java (ELITE + SILVER)',
    issuer: 'NPTEL',
    date: '2026',
    image: '/cert-nptel-java.jpg',
    link: '/cert-nptel-java.jpg',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'Knight badge on LeetCode',
    icon: 'Trophy',
  },
  {
    id: 'ach2',
    title: 'Tier 1 recognition, Google Study Jam program',
    icon: 'Award',
  },
  {
    id: 'ach3',
    title: 'Top 5 Finalist, Hackathon',
    icon: 'Medal',
  },
];
