import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileJson, 
  Package, 
  BookOpen,
  Users,
  Clock,
  Brain,
  Play,
  FileText,
  CheckCircle
} from 'lucide-react';
import { useCourse } from '../contexts/CourseContext';
import LoadingSpinner from '../components/LoadingSpinner';

const ExportPage = () => {
  const { course, isLoading } = useCourse();
  const [exportFormat, setExportFormat] = useState<'json' | 'scorm' | 'zip'>('json');
  const [isExporting, setIsExporting] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No Course to Export
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Create a course in the builder to export it.
          </p>
          <a
            href="/builder"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Course Builder
          </a>
        </div>
      </div>
    );
  }

  // Calculate course statistics
  const totalSections = course.sections.length;
  const totalUnits = course.sections.reduce((total, section) => total + section.units.length, 0);
  const totalDuration = course.sections.reduce((total, section) => 
    total + section.units.reduce((sTotal, unit) => sTotal + unit.duration, 0), 0
  );
  
  const unitsByType = course.sections.reduce((acc, section) => {
    section.units.forEach(unit => {
      acc[unit.type] = (acc[unit.type] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const quizCount = unitsByType.quiz || 0;
  const videoCount = unitsByType.video || 0;
  const articleCount = unitsByType.article || 0;
  const fileCount = unitsByType.file || 0;

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      switch (exportFormat) {
        case 'json':
          const dataStr = JSON.stringify(course, null, 2);
          const dataBlob = new Blob([dataStr], { type: 'application/json' });
          const url = URL.createObjectURL(dataBlob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${course.title.replace(/\s+/g, '-').toLowerCase()}-course.json`;
          link.click();
          URL.revokeObjectURL(url);
          break;
        
        case 'scorm':
          // Placeholder for SCORM export
          alert('SCORM export is coming soon! This would package your course into a SCORM-compliant format for LMS integration.');
          break;
        
        case 'zip':
          // Placeholder for ZIP export
          alert('ZIP export is coming soon! This would create a complete downloadable course package.');
          break;
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Download className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Export Your Course
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to share your course with the world? Choose from multiple export formats 
            to integrate with your preferred platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Course Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Course Summary
            </h2>
            
            {/* Course Info */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-6">
                {course.thumbnail ? (
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    by {course.instructor}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Total Sections</p>
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalSections}</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium">Total Units</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-300">{totalUnits}</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Duration</p>
                    <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{formatTime(totalDuration)}</p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">Quizzes</p>
                    <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{quizCount}</p>
                  </div>
                  <Brain className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </div>

            {/* Content Breakdown */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Content Breakdown
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Play className="w-4 h-4 text-red-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Videos</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{videoCount}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Articles</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{articleCount}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 text-purple-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Quizzes</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{quizCount}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Files</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{fileCount}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Export Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Export Format
            </h2>

            <div className="space-y-4 mb-8">
              {/* JSON Export */}
              <div
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  exportFormat === 'json'
                    ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 shadow-md'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:shadow-sm'
                }`}
                onClick={() => setExportFormat('json')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileJson className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">JSON Export</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Raw course data for developers and integrations
                      </p>
                    </div>
                  </div>
                  {exportFormat === 'json' && (
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
              </div>

              {/* SCORM Export */}
              <div
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  exportFormat === 'scorm'
                    ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 shadow-md'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:shadow-sm'
                }`}
                onClick={() => setExportFormat('scorm')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">SCORM Package</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        LMS-ready package for Moodle, Blackboard, etc.
                      </p>
                    </div>
                  </div>
                  {exportFormat === 'scorm' && (
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div className="mt-2 text-xs text-orange-600 dark:text-orange-400">
                  Coming Soon
                </div>
              </div>

              {/* ZIP Export */}
              <div
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  exportFormat === 'zip'
                    ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 shadow-md'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:shadow-sm'
                }`}
                onClick={() => setExportFormat('zip')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Download className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ZIP Archive</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete course files for offline distribution
                      </p>
                    </div>
                  </div>
                  {exportFormat === 'zip' && (
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div className="mt-2 text-xs text-orange-600 dark:text-orange-400">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Export Button */}
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
            >
              {isExporting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Download className="w-5 h-5 mr-2" />
              )}
              {isExporting ? 'Exporting...' : `Export as ${exportFormat.toUpperCase()}`}
            </button>

            {/* Help Text */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Export Guidelines
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• JSON exports preserve all course data and structure</li>
                <li>• SCORM packages work with most Learning Management Systems</li>
                <li>• ZIP archives include all content for offline viewing</li>
                <li>• All exports maintain your content's original formatting</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Additional Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Need to Make Changes?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You can always go back to the course builder to modify your content before exporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/builder"
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Back to Builder
              </a>
              <a
                href="/preview"
                className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Preview Course
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExportPage;