export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail?: string;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  units: Unit[];
  order: number;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  type: UnitType;
  duration: number; // in minutes
  content: UnitContent;
  order: number;
}

export type UnitType = 'video' | 'article' | 'quiz' | 'file';

export interface UnitContent {
  video?: VideoContent;
  article?: ArticleContent;
  quiz?: QuizContent;
  file?: FileContent;
}

export interface VideoContent {
  url: string;
  provider: 'youtube' | 'mp4';
  thumbnail?: string;
}

export interface ArticleContent {
  markdown: string;
}

export interface QuizContent {
  questions: Question[];
  passingScore?: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in-blank';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
}

export interface FileContent {
  filename: string;
  url: string;
  size?: string;
}

export interface CourseProgress {
  courseId: string;
  completedUnits: string[];
  quizResults: Record<string, number>;
  lastAccessedUnit?: string;
}