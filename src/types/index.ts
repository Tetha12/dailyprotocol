// Types for FRIDAY OS

export interface Video {
  id: string;
  title: string;
  url: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  desc: string;
}

export interface Phase {
  id: string;
  title: string;
  dur: string;
  pl: string;
  c: [string, string];
  week: string;
  desc: string;
  videos: Video[];
  casestudies: CaseStudy[];
}

export interface Exercise {
  name: string;
  detail: string;
  target: string;
}

export interface WorkoutDay {
  type: string;
  focus: string;
  col: string;
  exercises: Exercise[];
}

export interface Book {
  id: number;
  title: string;
  author: string;
  totalPages: number;
  currentPage: number;
  coverUrl: string;
}

export interface CalorieEntry {
  date: string;
  amount: number;
}

export interface WeightData {
  start: number;
  current: number;
  target: number;
}

export interface RoadmapProgress {
  [key: string]: boolean;
}

export interface ExerciseProgress {
  [key: string]: boolean;
}

export type TabType = 'daily' | 'fitness' | 'roadmap' | 'library' | 'dashboard';
