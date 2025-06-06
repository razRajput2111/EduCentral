import type { LucideIcon } from 'lucide-react';
import { Atom, Calculator, Palette, Languages, Video, BookOpen, Users, Brain } from 'lucide-react';

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

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Quantum Physics',
    subject: 'Science',
    teacherName: 'Dr. Aris Thorne',
    teacherId: 't001',
    description: 'Explore the fascinating world of quantum mechanics and its core principles. Suitable for beginners with a passion for science.',
    schedule: 'Mon, Wed, Fri - 10:00 AM GMT',
    imageUrl: 'https://placehold.co/600x400.png',
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
    imageUrl: 'https://placehold.co/600x400.png',
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
    imageUrl: 'https://placehold.co/600x400.png',
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
    imageUrl: 'https://placehold.co/600x400.png',
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
    imageUrl: 'https://placehold.co/600x400.png',
    recordedVideoLink: 'https://youtube.com',
    studyMaterialsLink: '#',
    Icon: Brain, // Using Brain for technology/coding
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
    imageUrl: 'https://placehold.co/600x400.png',
    liveClassLink: 'https://zoom.us/join',
    Icon: BookOpen,
    imageHint: 'ancient ruins',
  },
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
      return Users; // Generic icon
  }
};
