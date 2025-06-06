
import type { LucideIcon } from 'lucide-react';
import { Atom, Calculator, Palette, Languages, Video, BookOpen, Users, Brain, UserSquare2 } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  subject: string;
  teacherName: string;
  teacherId: string;
  description: string;
  schedule: string;
  imageUrl: string;
  liveClassLink?: string;
  recordedVideoLink?: string;
  studyMaterialsLink?: string;
  Icon?: LucideIcon;
  imageHint?: string;
}

export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  bio: string;
  imageUrl: string;
  imageHint?: string;
  profileLink?: string;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Quantum Physics',
    subject: 'Science',
    teacherName: 'Dr. Aris Thorne',
    teacherId: 't001',
    description: 'Explore the fascinating world of quantum mechanics and its core principles. Suitable for beginners with a passion for science.',
    schedule: 'Mon, Wed, Fri - 10:00 AM GMT',
    imageUrl: 'https://images.unsplash.com/photo-1633493702341-4d04841df53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxxdWFudGFtJTIwcGh5c2ljc3xlbnwwfHx8fDE3NDkxODc4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    liveClassLink: 'https://meet.google.com/new',
    recordedVideoLink: 'https://youtube.com',
    studyMaterialsLink: '#',
    Icon: Atom,
    imageHint: 'science classroom',
  },
  {
    id: '2',
    title: 'Advanced Calculus Techniques',
    subject: 'Mathematics',
    teacherName: 'Prof. Evelyn Reed',
    teacherId: 't002',
    description: 'Deep dive into advanced calculus, including multivariable calculus and differential equations.',
    schedule: 'Tue, Thu - 2:00 PM GMT',
    imageUrl: 'https://images.unsplash.com/photo-1708011271935-3e109df56fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8Y2FsY3VsdXMlMjB8ZW58MHx8fHwxNzQ5MTg3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    liveClassLink: 'https://zoom.us/join',
    studyMaterialsLink: '#',
    Icon: Calculator,
    imageHint: 'math blackboard',
  },
  {
    id: '3',
    title: 'Digital Painting Fundamentals',
    subject: 'Art & Design',
    teacherName: 'Mr. Leo Maxwell',
    teacherId: 't003',
    description: 'Learn the basics of digital painting, from software tools to artistic techniques. No prior experience needed.',
    schedule: 'Sat - 11:00 AM GMT',
    imageUrl: 'https://images.unsplash.com/photo-1566666801188-f97e7fd24529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwYWludGluZyUyMGluJTIwY29tcHV0ZXJ8ZW58MHx8fHwxNzQ5MTg4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    recordedVideoLink: 'https://youtube.com',
    studyMaterialsLink: '#',
    Icon: Palette,
    imageHint: 'digital art',
  },
  {
    id: '4',
    title: 'Conversational Spanish for Beginners',
    subject: 'Languages',
    teacherName: 'Ms. Sofia Cruz',
    teacherId: 't004',
    description: 'Start your journey to learn Spanish with a focus on practical conversation skills and basic grammar.',
    schedule: 'Mon, Wed - 6:00 PM GMT',
    imageUrl: 'https://images.unsplash.com/photo-1697606563285-88fdef7e4b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8c3BhbmlzaCUyMGJvb2tzfGVufDB8fHx8MTc0OTE4ODI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    liveClassLink: 'https://meet.google.com/new',
    Icon: Languages,
    imageHint: 'language learning',
  },
  {
    id: '5',
    title: 'Modern Web Development Bootcamp',
    subject: 'Technology',
    teacherName: 'Mr. Kenji Tanaka',
    teacherId: 't005',
    description: 'A comprehensive bootcamp covering React, Node.js, and modern web development practices.',
    schedule: 'Flexible (Self-paced with weekly Q&A)',
    imageUrl: 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzQ5MTg4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    recordedVideoLink: 'https://youtube.com',
    studyMaterialsLink: '#',
    Icon: Brain,
    imageHint: 'coding computer',
  },
  {
    id: '6',
    title: 'History of Ancient Civilizations',
    subject: 'Humanities',
    teacherName: 'Dr. Eleanor Vance',
    teacherId: 't006',
    description: 'Journey through time to explore the rise and fall of ancient empires and their impact on modern society.',
    schedule: 'Tue, Thu - 9:00 AM GMT',
    imageUrl: 'https://images.unsplash.com/photo-1472173148041-00294f0814a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxoaXN0b3J5fGVufDB8fHx8MTc0OTE4ODQyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    liveClassLink: 'https://zoom.us/join',
    Icon: BookOpen,
    imageHint: 'ancient ruins',
  },
];

export const mockTeachers: Teacher[] = [
  {
    id: 't001',
    name: 'Dr. Aris Thorne',
    subjects: ['Quantum Physics', 'Astrophysics'],
    bio: 'Passionate about unraveling the mysteries of the universe and inspiring the next generation of scientists.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZW58ZW58MHx8fHwxNzQ5MDc0OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'scientist portrait',
  },
  {
    id: 't002',
    name: 'Prof. Evelyn Reed',
    subjects: ['Calculus', 'Linear Algebra'],
    bio: 'Dedicated to making complex mathematical concepts accessible and engaging for all students.',
    imageUrl: 'https://images.unsplash.com/photo-1601655781320-205e34c94eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzb3J8ZW58MHx8fHwxNzQ5MTg4OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'mathematician teaching',
  },
  {
    id: 't003',
    name: 'Mr. Leo Maxwell',
    subjects: ['Digital Painting', 'Illustration'],
    bio: 'An experienced digital artist helping students unleash their creativity through modern tools and techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bWVufGVufDB8fHx8MTc0OTA3NDk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'artist studio',
  },
  {
    id: 't004',
    name: 'Ms. Sofia Cruz',
    subjects: ['Spanish', 'French'],
    bio: 'A language enthusiast committed to fostering cross-cultural understanding through language learning.',
    imageUrl: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3b21lbnxlbnwwfHx8fDE3NDkxODkwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'linguist books',
  },
  {
    id: 't005',
    name: 'Mr. Kenji Tanaka',
    subjects: ['Web Development', 'Software Engineering'],
    bio: 'Guiding aspiring developers through the ever-evolving landscape of technology with practical, hands-on experience.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8bWVufGVufDB8fHx8MTc0OTA3NDk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'developer coding',
  },
  {
    id: 't006',
    name: 'Dr. Eleanor Vance',
    subjects: ['Ancient History', 'Archaeology'],
    bio: 'Bringing the past to life by exploring ancient civilizations and their enduring legacies.',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxicml0aXNoJTIwbWFufGVufDB8fHx8MTc0OTE4OTIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'historian artifacts',
  }
];


export const getSubjectIcon = (subject: string): LucideIcon => {
  switch (subject.toLowerCase()) {
    case 'science':
      return Atom;
    case 'mathematics':
      return Calculator;
    case 'art & design':
      return Palette;
    case 'languages':
      return Languages;
    case 'technology':
      return Brain;
    case 'humanities':
      return BookOpen;
    default:
      return UserSquare2;
  }
};

