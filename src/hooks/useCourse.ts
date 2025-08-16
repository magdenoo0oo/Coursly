import { useState, useEffect } from 'react';
import { Course } from '../types/course';
import { generateNextjsCourse, generateJavaScriptCourse } from '../data/sampleCourse';

const COURSE_STORAGE_KEY = 'coursly_current_course';
const COURSE_TYPE_KEY = 'coursly_course_type';

export const useCourse = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [courseType, setCourseType] = useState<'nextjs' | 'javascript'>('nextjs');

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = () => {
    setIsLoading(true);
    try {
      const saved = localStorage.getItem(COURSE_STORAGE_KEY);
      const savedType = localStorage.getItem(COURSE_TYPE_KEY) as 'nextjs' | 'javascript' || 'nextjs';
      setCourseType(savedType);
      
      if (saved) {
        setCourse(JSON.parse(saved));
      } else {
        // Generate sample course on first visit
        const sampleCourse = savedType === 'javascript' ? generateJavaScriptCourse() : generateNextjsCourse();
        setCourse(sampleCourse);
        saveCourse(sampleCourse);
      }
    } catch (error) {
      console.error('Failed to load course:', error);
      const sampleCourse = courseType === 'javascript' ? generateJavaScriptCourse() : generateNextjsCourse();
      setCourse(sampleCourse);
    } finally {
      setIsLoading(false);
    }
  };

  const saveCourse = (courseData: Course) => {
    try {
      localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(courseData));
      setCourse(courseData);
    } catch (error) {
      console.error('Failed to save course:', error);
    }
  };

  const updateCourse = (updates: Partial<Course>) => {
    if (!course) return;
    
    const updatedCourse = {
      ...course,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    saveCourse(updatedCourse);
  };

  const clearCourse = () => {
    localStorage.removeItem(COURSE_STORAGE_KEY);
    localStorage.removeItem(COURSE_TYPE_KEY);
    setCourse(null);
  };

  const createNewCourse = () => {
    const newCourse: Course = {
      id: `course_${Date.now()}`,
      title: 'New Course',
      description: 'Course description goes here...',
      instructor: 'Your Name',
      sections: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    saveCourse(newCourse);
    return newCourse;
  };

  const switchCourse = (type: 'nextjs' | 'javascript') => {
    setCourseType(type);
    localStorage.setItem(COURSE_TYPE_KEY, type);
    
    const newCourse = type === 'javascript' ? generateJavaScriptCourse() : generateNextjsCourse();
    saveCourse(newCourse);
  };
  return {
    course,
    isLoading,
    courseType,
    saveCourse,
    updateCourse,
    loadCourse,
    clearCourse,
    createNewCourse,
    switchCourse
  };
};