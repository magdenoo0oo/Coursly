import React, { createContext, useContext } from 'react';
import { useCourse as useCourseHook } from '../hooks/useCourse';
import { Course } from '../types/course';

interface CourseContextType {
  course: Course | null;
  isLoading: boolean;
  courseType: 'nextjs' | 'javascript';
  saveCourse: (courseData: Course) => void;
  updateCourse: (updates: Partial<Course>) => void;
  loadCourse: () => void;
  clearCourse: () => void;
  createNewCourse: () => Course;
  switchCourse: (type: 'nextjs' | 'javascript') => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const course = useCourseHook();
  
  return (
    <CourseContext.Provider value={course}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};